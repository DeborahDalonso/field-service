<template>
  <layout-base>
    <ion-list v-show="countParts">
      <ion-item v-for="part in selectedParts" :key="part.id">
        <ion-label text-wrap>{{ part.name }}</ion-label>
        <ion-badge color="primary">{{ part.value }}</ion-badge>
      </ion-item>
    </ion-list>
    <ion-fab
      @click="openModal"
      vertical="bottom"
      horizontal="center"
      slot="fixed"
    >
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </layout-base>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon,
  modalController,
} from "@ionic/vue";
import Modal from "@/pages/westrock/ostabs/parts/ModalParts.vue";
import { parts } from "@/data/partslist";
import { add } from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonFab,
    IonFabButton,
    IonIcon
  },
  data() {
    return {
      add,
      parts,
      countParts: false,
    };
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-custom-class",
        breakpoints: [0, 0.3, 0.5, 0.8, 1],
        initialBreakpoint: 0.8,
      });
      return modal.present();
    },
  },
  computed: {
    selectedParts() {
      var list = [];
      const show = (type) => {
        this.countParts = type;
      };
      this.parts.map(function (part) {
        if (part.value > 0) {
          list.push(part);
          show(true);
        }
      });
      if (list.length === 0) {
        show(false);
      }
      return list;
    },
  },
};
</script>