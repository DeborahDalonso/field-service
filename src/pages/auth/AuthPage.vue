<template>
  <auth-base>
    <auth-list-base :items="items" :buttons="buttons" />
    <center><a href="auth/forgotpassword">Esqueceu sua senha?</a></center>
  </auth-base>
</template>

<script>
import AuthBase from "@/components/base/auth/AuthBase.vue";
import AuthListBase from "@/components/base/auth/AuthListBase.vue";

export default {
  name: "AuthPage",
  components: {
    AuthBase,
    AuthListBase,
  },
  data() {
    return {
      items: [
        {
          label: "Login",
          type: "email",
        },
        {
          label: "Senha",
          type: "password",
        },
      ],
      buttons: [
        {
          title: "Entrar",
          url: "/home",
        },
      ],
    };
  },
};
</script>