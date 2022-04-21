<template>
  <ion-toolbar>
    <ion-searchbar
      color="primary"
      cancel-button-text="Custom Cancel"
      placeholder="Filtre as peças"
      v-model="filter"
    />
  </ion-toolbar>
  <ion-list>
    <ion-item
      button
      v-for="part in parts"
      :key="part.id"
      @click="() => $router.push({name:'/equipmentinventory/transferpart', params: {id: part.id}})"
      :part-name="part.name"
      :part-id="part.id"
    >
      <ion-label text-wrap>{{ part.name }}</ion-label>
      <ion-badge color="primary">{{ part.un }}</ion-badge>
    </ion-item>
  </ion-list>
</template>

<script>
import { modalController } from "@ionic/vue";
import { parts } from "@/data/partslist";
import Modal from "@/pages/westrock/TransferPart.vue";

export default {
  data() {
    return {
      parts,
    };
  },
   provide() {
    return {
      data: this.items
    }
  }
};
</script>
