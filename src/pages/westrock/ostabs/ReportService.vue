<template>
  <layout-base>
    <ion-item>
      <ion-label position="floating">Situação encontrada</ion-label>
      <ion-select :interface-options="options">
        <ion-select-option value="brown">Falha elétrica/eletrônica</ion-select-option>
        <ion-select-option value="blonde">Equipamento parado</ion-select-option>
        <ion-select-option value="black">Falha operacional</ion-select-option>
        <ion-select-option value="black">Manutenção preventiva</ion-select-option>
        <ion-select-option value="black">Visita de rotina</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Relato da situação encontrada</ion-label>
      <ion-textarea></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Ações realizadas</ion-label>
      <ion-textarea></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Causa principal identificada</ion-label>
      <ion-textarea></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Comentários adicionais</ion-label>
      <ion-textarea></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Contador de caixa</ion-label>
      <ion-input type="number" value="0"></ion-input>
    </ion-item>
  </layout-base>
</template>

<script>
import { IonInput, IonLabel, IonTextarea } from "@ionic/vue";
export default {
  components: {
    IonLabel,
    IonInput,
    IonTextarea,
  },
  data() {
    return {};
  },
};
</script>