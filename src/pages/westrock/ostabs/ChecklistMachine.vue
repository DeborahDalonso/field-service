<template>
  <layout-base>
    <ion-item>
      <ion-label>Maquina:</ion-label>
      <ion-select
        interface="popover"
        :value="machine"
        @ionChange="machine = $event.target.value"
      >
        <ion-select-option value="0">Boix</ion-select-option>
        <ion-select-option value="1">Mesp</ion-select-option>
        <ion-select-option value="2">Kopempack</ion-select-option>
        <ion-select-option value="3">Mecalonia</ion-select-option>
        <ion-select-option value="4">Plasmetal</ion-select-option>
        <ion-select-option value="5">Cyklop</ion-select-option>
        <ion-select-option value="6">Dalca</ion-select-option>
        <ion-select-option value="7">OCME</ion-select-option>
        <ion-select-option value="8">Robopac</ion-select-option>
        <ion-select-option value="9">IMSB</ion-select-option>
      </ion-select>
    </ion-item>
    <span>{{ selected }}</span>
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Boix</ion-card-title>
      </ion-card-header>
      <ion-card-content class="ion-text-center">
        <ion-textarea readonly>{{ message.check }}</ion-textarea>
        <ion-checkbox color="secondary" />
      </ion-card-content>
    </ion-card>
    <div>
      <div class="right">
        <ion-button @click="next()"
          ><ion-icon :icon="chevronForwardCircle"
        /></ion-button>
      </div>
    </div>
    <ion-progress-bar :value="progress"></ion-progress-bar>
  </layout-base>
</template>

<script>
import { getMessage, getLength } from "@/data/machineslist";
import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";

export default {
  components: {},
  data() {
    let message = getMessage(0);
    return {
      chevronForwardCircle,
      chevronBackCircle,
      message,
      count: 0,
      progress: 0,
      machine: "",
    };
  },
  methods: {
    next() {
      // showMachines();
      this.count++;
      this.message = getMessage(this.count);
      var length = getLength();
      var progressTotal = 100 / length / 100;
      console.log(progressTotal);
      this.progress = this.progress + progressTotal;
    },
    teste() {
      console.log("hello");
    },
  },
};
</script>

<style scoped>
ion-button {
  display: inline-block;
}
.right {
  text-align: right;
}
.left {
  text-align: left;
}
ion-progress-bar {
  margin-top: 50%;
}
</style>