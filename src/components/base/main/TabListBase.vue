<template>
    <ion-tab-button v-for="tab in tabs" :key="tab.tab" :tab="tab.tab" :router-link="tab.url">
      <ion-icon :icon="tab.icon" />
    </ion-tab-button>
</template>

<script>
import { ellipse, constructSharp, walk } from "ionicons/icons";
import { IonTabButton, IonIcon } from "@ionic/vue";

export default {
  components: {
    IonTabButton,
    IonIcon,
  },
  data() {
    return {
      ellipse,
      constructSharp,
      walk,
      tabs: [
        {
          url: "/localization",
          icon: walk,
          tab: "localization",
        },
        {
          url: "/localization",
          icon: constructSharp,
          tab: "localization",
        },
        {
          url: "/localization",
          icon: walk,
          tab: "localization",
        },
      ],
    };
  },
};
</script>
