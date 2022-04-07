<template>
  <layout-base>
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
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/vue";
import { add, folderOpen, camera, share } from "ionicons/icons";

export default {
  components: {
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
  },
  data() {
    return {
      add,
      folderOpen,
      camera,
      share,
    };
  },
};
</script>