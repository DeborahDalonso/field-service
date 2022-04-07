<template>
  <layout-base>
    <ion-grid>
      <ion-row>
        <ion-col size="6" :key="photo" v-for="photo in photos">
          <ion-img :src="photo.webviewPath"></ion-img>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="share"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="start">
        <ion-fab-button @click="openGallery()">
            <ion-icon :icon="folderOpen" />
          </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="end">
        <ion-fab-button @click="takePhoto()">
            <ion-icon :icon="camera"/>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </layout-base>
</template>

<script>
import { usePhotoGallery } from "@/composables/usePhotoGallery";
import { getPhotoDevice } from "@/composables/getPhotoDevice";

import { add, folderOpen, camera, share } from "ionicons/icons";

import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/vue";

export default {
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },

  data() {
    const { photos, takePhoto } = usePhotoGallery();
    const { openGallery } = getPhotoDevice();

    return { photos, takePhoto, openGallery, camera, folderOpen, share };
  },
};
</script>
