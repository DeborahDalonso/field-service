<template>
  <ion-content fullscreen>
    <ion-list>
      <ion-list-header class="ion-text-center"
        ><ion-label>{{ name }}</ion-label></ion-list-header
      >
      <ion-item>
        <ion-buttons slot="start">
          <ion-button @click="removeItem()">
            <ion-icon class="label" :icon="remove"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-label class="ion-text-center">
          {{ value_ }}
        </ion-label>
        <ion-buttons slot="end">
          <ion-button @click="addItem()">
            <ion-icon class="label" :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-item>
      <ion-item>
        <ion-buttons slot="start">
          <ion-button @click="saveItem(id)">
            <ion-label>Salvar</ion-label>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="cancelItem()">
            <ion-label>Cancelar</ion-label>
          </ion-button>
        </ion-buttons>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { remove, add, close, checkmark } from "ionicons/icons";
import { parts } from "@/data/partslist";
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  modalController,
} from "@ionic/vue";

export default {
  props: ["id", "name", "value"],
  components: {
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
  },
  data() {
    return {
      remove,
      add,
      close,
      checkmark,
      parts,
      value_: this.value,
      modalController,
    };
  },
  methods: {
    addItem() {
      this.value_++;
    },
    removeItem() {
      if (this.value_ > 0) {
        this.value_--;
      }
    },
    saveItem(id) {
      const found = this.parts.find((part) => part.id === id);
      found.value = this.value_;
      this.modalController.dismiss();
    },
    cancelItem(){
      this.modalController.dismiss();
    }
  },
};
</script>
