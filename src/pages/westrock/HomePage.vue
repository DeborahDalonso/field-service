<template>
  <layout-base>
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Programação Visitas</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <base-table-home> </base-table-home>
      </ion-card-content>
    </ion-card>
  </layout-base>
</template>

<script>
import BaseTableHome from "../../components/base/main/TableHomeBase.vue";
export default {
  components: {
    BaseTableHome,
  },
};
</script>