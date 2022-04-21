<template>
<layout-base page-title="Pao">
    <ion-segment @ionChange="segmentChanged($event)" v-model="segment">
      <ion-segment-button value="estoque">
        <ion-label class="label">Estoque</ion-label>
      </ion-segment-button>
      <ion-segment-button value="aprovacao">
        <ion-label class="label">Aprovação</ion-label>
      </ion-segment-button>
      <ion-segment-button value="historico">
        <ion-label class="label">Histórico</ion-label>
      </ion-segment-button>
    </ion-segment>
    <div v-if="segment == 'estoque'">
      <parts-inventory-list></parts-inventory-list>
    </div>
    <div v-if="segment == 'aprovacao'">
      <ion-label>Aprovação</ion-label>
    </div>
    <div v-if="segment == 'historico'">
     <ion-label>Histórico</ion-label>
    </div>
</layout-base>
</template>

<script>
import { IonSegment, IonSegmentButton } from "@ionic/vue";
import { fileTrayStackedSharp, thumbsUpSharp } from "ionicons/icons";
import PartsInventoryList from "@/components/base/main/PartsInventoryListBase.vue";

export default ({
  prop:["selected"],
  components: { IonSegment, IonSegmentButton, PartsInventoryList },
  data() {
    return {
      fileTrayStackedSharp,
      thumbsUpSharp,
      segment: 'estoque'
    };
  },
  methods:{
    segmentChanged(ev) {
      var value = ev.detail.value;
      this.segment = value;
    },
  }
});
</script>

<style scoped>
.label{
  font-size: 70% !important;
}
</style>