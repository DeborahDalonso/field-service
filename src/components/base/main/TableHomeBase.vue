<template>
  <ion-grid class="ion-text-center">
    <ion-row class="header-row">
      <ion-col>
        <ion-text>EM ATRASO</ion-text>
      </ion-col>
      <ion-col>
        <ion-text>EM DIA</ion-text>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-text>01/01/2022</ion-text>

        <ion-button fill="outline">View</ion-button>
      </ion-col>
      <ion-col>
        <ion-text>01/04/2022</ion-text>
        <ion-button fill="outline">View</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  data() {
    return {
      days: [
        {
          date: "01/01/2022",
        },
        {
          date: "01/04/2022",
        },
      ],
    };
  },
};
</script>