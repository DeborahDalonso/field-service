<template>
  <auth-base>
    <auth-list-base :items="items" :buttons="buttons" />
  </auth-base>
</template>

<script>
import AuthBase from "@/components/base/auth/AuthBase.vue";
import AuthListBase from "@/components/base/auth/AuthListBase.vue";

export default {
  name: "ResetPasswordPage",
  components: {
    AuthBase,
    AuthListBase,
  },
  data() {
    return {
      items: [
        {
          label: "Código de Confirmação",
          type: "text",
        },
        {
          label: "Nova Senha",
          type: "password",
        },
        {
          label: "Confirmar Senha",
          type: "password",
        },
      ],
      buttons: [
        {
          title: "Prosseguir",
          url: "/",
        },
      ],
    };
  },
};
</script>