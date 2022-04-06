<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <form class="ion-padding">
            <ion-img src="../assets/img/logo.png"></ion-img>
            <slot />
          </form>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonRow, IonGrid, IonContent, IonImg } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonRow,
    IonGrid,
    IonContent,
    IonImg
  },
};
</script>

<style scoped>
ion-grid {
  height: 100%;
}
ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
ion-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  padding-bottom: 28%;
}
</style>