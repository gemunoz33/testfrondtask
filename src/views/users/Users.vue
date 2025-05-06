<script setup>
import { ref, onMounted } from 'vue'
import BaseDataTable from '@/components/layout/BaseDataTable.vue';
import api from '@/services/api'

const showIndex = true
const usuarios = ref([])

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Nombre', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Profesión', value: 'profession' }
]

onMounted(async () => {
  const response = await api.get('/users')
  if (response.status !== 200) {
    Swal.fire({
        title: 'Error!',
        text: 'Error al cargar los usuarios',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      showIndex = false    
  }

  usuarios.value = response.data.data
})
</script>

<template>
  <BaseDataTable
      title="Lista de Usuarios"
      :headers="headers"
      :items="usuarios"
      searchField="name"
      :showIndex="showIndex"
    />
</template>

<style scoped>

</style>
