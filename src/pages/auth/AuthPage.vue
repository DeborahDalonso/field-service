<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <form class="ion-padding" @submit.prevent="login">
            <ion-img src="../assets/img/logo.png"></ion-img>
            <ion-list>
              <ion-item>
                <ion-label position="floating">Login</ion-label>
                <ion-input v-model="data.username" type="email" />
              </ion-item>
              <ion-item>
                <ion-label position="floating">Senha</ion-label>
                <ion-input v-model="data.password" type="password" />
              </ion-item>
            </ion-list>
            <ion-button
              v-for="button in buttons"
              :key="button"
              :type="button.type"
              expand="full"
              >{{ button.title }}</ion-button
            >
          </form>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
 
<script>
import {
  IonPage,
  IonRow,
  IonGrid,
  IonContent,
  IonImg,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { reactive } from "vue";

export default {
  name: "AuthPage",
  components: {
    IonPage,
    IonRow,
    IonGrid,
    IonContent,
    IonImg,
    IonInput,
    IonButton,
  },
  data() {
    const data = reactive({
      username: "",
      password: "",
    });

    return {
      data,
      buttons: [
        {
          title: "Entrar",
          type: "submit",
          url: "/home",
        },
      ],
    };
  },
  methods: {
    login() {
      var formData = new FormData();

      formData.append("email", "app");
      formData.append("password", "admin");

      fetch("http://localhost:8000/api/token", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(function (result) {
          
          console.log(result);
        });
    },
  },
};
</script>
 
<style scoped>
ion-grid {
  height: 100%;
}
ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
ion-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  padding-bottom: 28%;
}
</style>

