<template>
  <ion-content fullscreen>
    <ion-list>
      <ion-list-header class="ion-text-center"
        ><ion-label>Descrição da imagem</ion-label></ion-list-header
      >
      <ion-item>
        <ion-label position="stacked" class="ion-text-center">
          Adicione uma descrição para a imagem:
        </ion-label>
       <ion-input placeholder="Descrição" :value="item"/>
      </ion-item>
      <ion-item>
        <ion-buttons>
          <ion-button @click="save()">
            <ion-label>Salvar</ion-label>
          </ion-button>
        </ion-buttons>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonButtons,
  IonButton,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  modalController,
} from "@ionic/vue";

export default {
  components: {
    IonButtons,
    IonButton,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
  },
  data() {
    return {
      modalController,
      item: ''
    };
  },
  methods: {
    save() {
      this.modalController.dismiss({
          description: "pao"
      });
    }
  },
};
</script>
