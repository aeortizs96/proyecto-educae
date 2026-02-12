<template>
  <v-card variant="outlined" class="pa-4">
    <h3 class="mb-4">Editor de Código</h3>
    <codemirror
      v-model="code"
      placeholder="Escribe tu código aquí..."
      :style="{ height: '300px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const code = ref(`function saludo() {\n  console.log("¡Hola desde Educae!");\n}`)
const extensions = [javascript(), oneDark]
</script>