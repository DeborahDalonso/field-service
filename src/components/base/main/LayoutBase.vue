<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="openMenu()">
            <ion-icon :icon="menu" slot="start"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { menu } from "ionicons/icons";

import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonButtons,
  IonButton,
  menuController,
} from "@ionic/vue";

export default {
  props: ["pageTitle", "pageDefault"],
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonButtons,
    IonButton,
  },
  data() {
    return { menu };
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
  },
};
</script>