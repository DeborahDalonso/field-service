<template>
  <layout-base>
    <ion-list v-show="countParts">
      <ion-item v-for="part in selectedParts" :key="part.id">
        <ion-label>{{ part.name }}</ion-label>
        <ion-badge color="primary">{{ part.value }}</ion-badge>
      </ion-item>
    </ion-list>
    <ion-button @click="openModal">Open Modal</ion-button>
  </layout-base>
</template>

<script>
import { IonButton, modalController } from "@ionic/vue";
import Modal from "@/pages/westrock/ostabs/parts/ModalParts.vue";
import { parts } from "@/data/partslist";

export default {
  components: { IonButton },
  data() {
    return {
      parts,
      countParts: false,
    };
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-custom-class",
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.8,
      });
      return modal.present();
    },
  },
  computed: {
    selectedParts() {
      var list = [];
      const show = () => {
        this.countParts = true;
      };
      this.parts.map(function (part) {
        if (part.value > 0) {
          list.push(part);
          show();
        }
      });
      return list;
    },
  },
};
</script>