<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="closeModal">
          <ion-icon :icon="close" />
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="start">
        <ion-button>
          <ion-icon :icon="checkmark" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-toolbar>
      <ion-searchbar
        color="primary"
        cancel-button-text="Custom Cancel"
        placeholder="Filtre as peças"
        v-model="filter"
      />
    </ion-toolbar>
    <ion-list>
      <ion-list-header> Peças disponiveis </ion-list-header>
      <ion-item v-for="part in resultFilter" :key="part.id">
        <ion-label class="label" text-wrap>{{ part.name }}</ion-label>
        <ion-buttons slot="end" class="ion-no-margin">
          <ion-button @click="removeItem(part.id)">
            <ion-icon class="label" :icon="remove"></ion-icon>
          </ion-button>
          <span>{{ part.value }}</span>
          <ion-button @click="addItem(part.id)">
            <ion-icon class="label" :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { remove, add, close, checkmark } from "ionicons/icons";
import { parts } from "@/data/partslist";
import { JaroWrinker } from "@/composables/useFilterSearch";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonSearchbar,
  modalController,
} from "@ionic/vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonSearchbar,
  },
  data() {
    return {
      remove,
      add,
      close,
      checkmark,
      parts,
      filter: null,
      modalController,
    };
  },
  methods: {
    addItem(id) {
      const found = this.parts.find((part) => part.id === id);
      found.value++;
    },
    removeItem(id) {
      const found = this.parts.find((part) => part.id === id);
      if (found.value > 0) {
        found.value--;
      }
    },
    closeModal() {
      this.modalController.dismiss();
    },
  },
  computed: {
    resultFilter() {
      if (this.filter) {
        var scores = [];
        const percent = (s2) => {
          return JaroWrinker(this.filter, s2);
        };
        this.parts.map(function (part) {
          var result = percent(part.name);
          var data = { score: result, id: part.id, name: part.name, value: part.value };
          if (result > 0) {
            scores.push(data);
          }
        });
        scores.sort((a, b) => b.score - a.score);
        return scores;
      }
      return this.parts;
    },
  },
};
</script>

<style>
span {
  font-size: 82% !important;
}
.label {
  font-size: 85% !important;
}
</style>