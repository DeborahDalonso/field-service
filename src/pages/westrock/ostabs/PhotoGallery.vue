<template>
  <layout-base>
    <ion-item :key="photo" v-for="photo in photos" @click="showActionSheet(photo)">
      <ion-thumbnail slot="start">
        <ion-img :src="photo.webviewPath"></ion-img>
      </ion-thumbnail>
    </ion-item>
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
  IonImg,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
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
