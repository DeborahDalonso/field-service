<template>
  <layout-base>
    <ion-grid>
      <ion-row>
        <ion-col size="6" :key="photo" v-for="photo in photos">
          <ion-img
            :src="photo.webviewPath"
            @click="showActionSheet(photo)"
          ></ion-img>
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
          <ion-icon :icon="camera" />
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </layout-base>
</template>

<script>
import { usePhotoGallery } from "@/composables/usePhotoGallery";

import { folderOpen, camera, share } from "ionicons/icons";

import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
  },

  data() {
    const { photos, takePhoto, showActionSheet, openGallery } =
      usePhotoGallery();

    return {
      photos,
      takePhoto,
      openGallery,
      showActionSheet,
      camera,
      folderOpen,
      share,
    };
  },
};
</script>
