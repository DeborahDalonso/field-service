<template>
  <div class="map" ref="mapDivRef"></div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
export default {
  setup() {
    const map = ref(null);
    const mapDivRef = ref(null);

    onBeforeMount(() => {
      const key = process.env.VUE_APP_GOOGLEMAPS_KEY;

      const googleMapScript = document.createElement("SCRIPT");

      googleMapScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    window.onInitMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: "hybrid",
      });
    };

    return {
      mapDivRef,
    };
  },
};
</script>