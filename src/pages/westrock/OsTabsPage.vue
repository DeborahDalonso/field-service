<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="tab in tabs" :key="tab.tab" :tab="tab.tab" :href="tab.href">
          <ion-icon :icon="tab.icon" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";

import { images, flag, checkbox, documentText, build, locationSharp } from "ionicons/icons";

export default {
  name: "TabsPage",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  data() {
    return {
      images,
      flag,
      tabs: [
        {
          icon: flag,
          tab: "servicestatus",
          href: "/os/servicestatus",
        },
        {
          icon: images,
          tab: "photos",
          href: "/os/photogallery",
        },
        {
          icon: documentText,
          tab: "report",
          href: "/os/report",
        },
        {
          icon: build,
          tab: "parts",
          href: "/os/parts",
        },
        {
          icon: locationSharp,
          tab: "map",
          href: "/os/map",
        },
        {
          icon: checkbox,
          tab: "checklist",
          href: "/os/checklist",
        },
        
      ],
    };
  },
};
</script>
