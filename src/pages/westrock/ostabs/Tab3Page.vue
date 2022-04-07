<template>
  <layout-base>
    <ion-input type="file" @change="onSelectedFile" />
  </layout-base>
</template>

<script>
import { IonInput } from "@ionic/vue";

export default {
  name: "Tab3Page",
  components: { IonInput },
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onSelectedFile(event) {
      console.log(event);
    },
  },
};
</script>
