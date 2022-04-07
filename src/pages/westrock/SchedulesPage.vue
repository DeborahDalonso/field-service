<template>
  <layout-base>
    <ion-card>
      <VueDatepicker v-model="date" locale="pt-br" inline autoApply range dark></VueDatepicker>
    </ion-card>
    <ion-item class="ion-text-center">
      <ion-title>{{ currentDate }}</ion-title>
    </ion-item>
    <ion-card>
      <ion-card-content>
        <ion-item lines="inset">
          <ion-label>Visita Boticário</ion-label>
          <ion-badge color="primary">17%</ion-badge>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </layout-base>
</template>

<script>
import VueDatepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";
import { ref, onMounted } from "vue";
import { IonCard } from "@ionic/vue";

export default {
  components: { VueDatepicker, IonCard },

  data() {
    const date = ref();
    var currentDate = new Date();
    currentDate = moment(currentDate).format("DD/MM/YY");

    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
      console.log(startDate);
    });
    return {
      date, currentDate
    };
  },
};
</script>