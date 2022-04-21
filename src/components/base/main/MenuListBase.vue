<template>
  <ion-item>
    <ion-avatar slot="start">
      <ion-img src="../assets/img/d.jpg"></ion-img>
    </ion-avatar>
    <ion-label class="ion-text-center">Young Hoo</ion-label>
    <ion-buttons slot="end">
      <ion-button router-link="/auth">
        <ion-icon :icon="logOutOutline" slot="end"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-item>
  <ion-list v-for="page in pages" :key="page.title">
    <ion-item button @click="menuNavigation(page.url)">
      <ion-label>{{ page.title }}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
import { logOutOutline } from "ionicons/icons";

import {
  IonItem,
  IonList,
  IonLabel,
  menuController,
  IonImg,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
    IonList,
    IonLabel,
    IonItem,
    IonImg,
    IonIcon,
  },
  data() {
    return {
      logOutOutline,
      pages: [
        {
          title: "Inicio",
          url: "/home",
        },
        {
          title: "Agenda",
          url: "/schedules",
        },
        {
          title: "Peças",
          url: "/partsinventory",
        },
        {
          title: "Criar apontamento de visita",
          url: "/startservice",
        },
        {
          title: "Inventário de equipamento",
          url: "/equipmentinventory",
        },
        {
          title: "OS",
          url: "/os/servicestatus",
        },
        {
          title: "Testes",
          url: "/teste",
        }
      ],
    };
  },
  methods: {
    menuNavigation(url) {
      menuController.close("app-menu");
      this.$router.push(url);
    },
  },
};
</script>