<!-- HTML -->
<template>
  <section class="modal">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button @click="handleButtonClikedClose()" type="button">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input v-model="form.name" type="text" autocomplete="false" spellcheck="false" placeholder="Digite aqui...">
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input v-model="form.phone" type="tel" autocomplete="false" spellcheck="false" placeholder="(99) 99999-9999">
      </div>
      <button @click="salvar" type="button" class="principal">Salvar Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
import { useStore } from 'vuex';

const store = useStore()



const emit = defineEmits(['buttonClickedClose']);


const form = {
  name: '',
  phone: ''
}


const salvar = () => {
  if (form.name == '' || form.phone == '') {
    alert("Preencha todos os campos!");
  } else {
    store.commit('ADICIONAR_USUARIO', form)

    form.name = ''
    form.phone = ''

    emit('buttonClickedClose')
  }
}

const handleButtonClikedClose = () => {
  emit('buttonClickedClose')

};


</script>

<!-- CSS -->
<style scoped>
section.modal {
  display: flex;
}

/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}

/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}

/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}

button.principal {
  margin: 20px 0 0 0;
}

/* Responsivo */
@media screen and (max-width: 1000px) {}
</style>
