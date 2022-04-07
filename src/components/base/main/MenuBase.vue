<template>
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-button @click="closeMenu">
            <ion-icon :icon="menu" slot="start"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <list-menu></list-menu>
    </ion-content>
    <ion-footer>
      <ion-list>
        <ion-item>
          <ion-icon slot="start" :icon="moon"></ion-icon>
          <ion-label> Dark Mode </ion-label>
          <ion-toggle
            slot="end"
            @ionChange="checked.value = !checked.value"
            value="mushrooms"
            :checked="checked"
          >
          </ion-toggle>
        </ion-item>
      </ion-list>
    </ion-footer>
  </ion-menu>
</template>

<script>
import { menu, moon } from "ionicons/icons";
import ListMenu from "@/components/base/main/MenuListBase.vue";
import { ref } from "vue";

import {
  IonMenu,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonFooter,
  menuController,
} from "@ionic/vue";

export default {
  components: {
    IonMenu,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonFooter,
    ListMenu,
  },
  data() {
    const checked = ref(false);
    return {
      menu,
      moon,
      checked
    };
  },
  methods: {
    closeMenu() {
      menuController.close("app-menu");
    },
    darkMode(event) {
      console.log(event);
      console.log("pao");
    },
    // toggleDarkModeHandler = () => document.body.classList.toggle('dark')
  },
};
</script>