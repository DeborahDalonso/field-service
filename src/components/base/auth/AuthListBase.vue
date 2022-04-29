<template>
  <ion-list>
    <ion-item v-for="item in items" :key="item.label">
      <ion-label position="floating">{{ item.label }}</ion-label>
      <ion-input :type="item.type" />
    </ion-item>
  </ion-list>
  <ion-button v-for="button in buttons" :key="button" expand="full">{{ button.title }}</ion-button>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";

export default {
  props: ["items", "buttons"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  },
};
</script>