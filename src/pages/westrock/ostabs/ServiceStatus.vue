<template>
  <layout-base>
    <div id="main">
      <ion-card button class="ion-text-center" id="start">
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="golfSharp" />
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Abertura</ion-card-subtitle>
          <ion-input value="" readonly />
        </ion-card-content>
      </ion-card>

      <ion-card button class="ion-text-center" id="going">
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="walk" />
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Ida</ion-card-subtitle>
          <ion-input value="" readonly />
        </ion-card-content>
      </ion-card>
    </div>

    <div id="main">
      <ion-card button class="ion-text-center" id="working">
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="constructSharp" />
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Atividade</ion-card-subtitle>
          <ion-input value="" readonly />
        </ion-card-content>
      </ion-card>

      <ion-card button class="ion-text-center" id="concluded">
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="thumbsUpSharp" />
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Concluído</ion-card-subtitle>
          <ion-input value="" />
        </ion-card-content>
      </ion-card>
    </div>

    <div id="main">
      <ion-card button class="ion-text-center" id="returning">
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="walk" />
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Volta</ion-card-subtitle>
          <ion-input value="" />
        </ion-card-content>
      </ion-card>

      <ion-card button class="ion-text-center" id="finished">
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="trophySharp" />
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Fechamento</ion-card-subtitle>
          <ion-input value="" />
        </ion-card-content>
      </ion-card>
    </div>
    <ion-progress-bar buffer="0"></ion-progress-bar>
  </layout-base>
</template>


<script>
import $ from "jquery";
import moment from "moment";

import {
  walk,
  buildSharp,
  golfSharp,
  constructSharp,
  thumbsUpSharp,
  trophySharp,
} from "ionicons/icons";

export default {
  components: {
  },
  data() {
    return {
      walk,
      buildSharp,
      golfSharp,
      constructSharp,
      thumbsUpSharp,
      trophySharp,
    };
  },
  mounted() {
    $("ion-card").on("click", function () {
      var id = $(this).attr("id");
      var today = new Date();
      var formatDate = moment(today).format("DD/MM/YY, HH:mm:ss");
      var progressBar = $("ion-progress-bar");

      switch (id) {
        case "start":
          cardClicked($(this), formatDate, $("#going"));
          progressBar.attr("buffer", 0.17);
          break;
        case "going":
          if ($("#start").find("ion-input").val() != "") {
            cardClicked($(this), formatDate, $("#working"));
            progressBar.attr("buffer", 0.34);
          }
          break;
        case "working":
          if ($("#going").find("ion-input").val() != "") {
            cardClicked($(this), formatDate, $("#concluded"));
            progressBar.attr("buffer", 0.51);
          }
          break;
        case "concluded":
          if ($("#working").find("ion-input").val() != "") {
            cardClicked($(this), formatDate, $("#returning"));
            progressBar.attr("buffer", 0.68);
          }
          break;
        case "returning":
          if ($("#concluded").find("ion-input").val() != "") {
            cardClicked($(this), formatDate, $("#finished"));
            progressBar.attr("buffer", 0.85);
          }
          break;
        case "finished":
          if ($("#returning").find("ion-input").val() != "") {
            cardClicked($(this), formatDate);
            progressBar.attr("buffer", 1);
          }
          break;
      }

      function cardClicked(element, formatDate, nextElement = null) {
        if (nextElement !== null) {
          nextElement.find("ion-icon").css("color", "yellow");
        }
        element.css("border", "1px solid green");
        element.unbind("click");
        element.find("ion-input").val(formatDate);
        element.find("ion-icon").css("color", "green");
      }
    });
  },
};
</script>

<style scoped>
#main {
  display: flex;
  align-items: stretch;
}

ion-card {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

ion-card-header {
  display: flex;
  justify-content: center;
  padding: 10%;
}

ion-card-content {
  padding: 0;
  margin: 0 auto;
}

ion-input {
  font-size: 70%;
}

ion-progress-bar {
  margin-top: 5%;
  --buffer-background: green;
}

ion-icon {
  color: #3a7be0;
  padding-top: 100%;
}
</style>