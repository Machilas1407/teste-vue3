<template>
  <div id="clientes">
    <SectionTitulo @buttonClicked="openModal" />
    <ModalAdicionarCliente @buttonClickedClose="closeModal" v-if="showModal" />
    <SectionClientes />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitulo from './partials/SectionTitulo.vue';
import ModalAdicionarCliente from './modals/ModalAdicionarCliente.vue'
import SectionClientes from './partials/SectionClientes.vue';


const showModal = ref(true)

const openModal = () => {
  showModal.value = true
  console.log(showModal.value)
}
const closeModal = () => {
  showModal.value = false
}




</script>

<style scoped>
#clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: var(--cor-fundo-tela);
}
</style>
