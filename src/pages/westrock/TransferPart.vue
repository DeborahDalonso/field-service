<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button/>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>Transferência ({{ id }})</ion-list-header>
        <ion-item>
          <ion-label>Quantidade a transferir</ion-label>
        </ion-item>
        <ion-item>
          <ion-buttons slot="start">
            <ion-button @click="removeItem()">
              <ion-icon class="label" :icon="remove"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-label class="ion-text-center">
            {{ value }}
          </ion-label>
          <ion-buttons slot="end">
            <ion-button @click="addItem()">
              <ion-icon class="label" :icon="add"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>
        <ion-item>
          <ion-label>Técnico</ion-label>
          <ion-select placeholder="Select One">
            <ion-select-option value="f">Female</ion-select-option>
            <ion-select-option value="m">Male</ion-select-option>
          </ion-select>
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
  </ion-page>
</template>

<script>
import { remove, add, close, checkmark } from "ionicons/icons";
import {
  IonBackButton,
  IonHeader,
  IonPage,
  IonContent,
  IonButton,
  IonButtons,
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from "@ionic/vue";

export default {
  props: ["id"],
  components: {
    IonBackButton,
    IonHeader,
    IonPage,
    IonContent,
    IonButton,
    IonButtons,
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonIcon,
  },
  setup() {
    return {
      remove,
      add,
      value: 2,
    };
  },
};
</script>

