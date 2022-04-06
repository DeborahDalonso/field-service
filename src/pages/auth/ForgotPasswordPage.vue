<template>
  <auth-base>
    <auth-list-base :items="items" :buttons="buttons" />
  </auth-base>
</template>

<script>
import AuthBase from "@/components/base/auth/AuthBase.vue";
import AuthListBase from "@/components/base/auth/AuthListBase.vue";

export default {
  name: "ForgotPasswordPage",
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
      ],
      buttons: [
        {
          title: "Prosseguir",
          url: "/auth/resetpassword",
        },
        {
          title: "Voltar",
          url: "/",
        },
      ],
    };
  },
};
</script>