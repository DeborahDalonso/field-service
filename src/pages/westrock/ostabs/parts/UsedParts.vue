<template>
  <layout-base>
    <ion-list v-show="countParts">
      <ion-item
        button
        v-for="part in selectedParts"
        :key="part.id"
        @click="showSheets(part.id, part.name, part.value)"
      >
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
  actionSheetController,
} from "@ionic/vue";
import Modal from "@/pages/westrock/ostabs/parts/ModalParts.vue";
import ModalEdit from "@/pages/westrock/ostabs/parts/ModalEditParts.vue";

import { parts } from "@/data/partslist";
import { add, trash, close, pencil } from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonFab,
    IonFabButton,
    IonIcon,
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

    async showSheets(id, name, value) {
      const actionSheet = await actionSheetController.create({
        buttons: [
          {
            text: "Excluir",
            icon: trash,
            handler: () => {
              const found = this.parts.find((part) => part.id === id);
              found.value = 0;
            },
          },
          {
            text: "Editar",
            icon: pencil,
            handler: async () => {
              const modalEdit = await modalController.create({
                component: ModalEdit,
                cssClass: "my-custom-class",
                breakpoints: [0, 0.25],
                initialBreakpoint: 0.25,
                componentProps: {
                  id: id,
                  name: name,
                  value: value
                },
              });
              return modalEdit.present();
            },
          },
          {
            text: "Cancelar",
            role: "cancel",
            icon: close,
          },
        ],
      });
      await actionSheet.present();
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
      console.log(list);
      return list;
    },
  },
};
</script>