<script setup>
import { ref, onMounted } from 'vue'
import BaseDataTable from '@/components/layout/BaseDataTable.vue';
import api from '@/services/api'

const showIndex = true
const tareas = ref([])

const headers = [
  { text: 'Proyecto', value: 'project_task.name' },
  { text: 'Tarea', value: 'name' },
  { text: 'Descripción', value: 'description' },
  { text: 'Fecha de inicio', value: 'start_date' },
  { text: 'Fecha de fin', value: 'end_date' },
  { text: 'Responsable', value: 'users_task.name' },
  { text: 'Progreso', value: 'progress' },
  
  { text: 'Estado', value: 'status' }
]

onMounted(async () => {
  const response = await api.get('/task')
  if (response.status !== 200) {
    Swal.fire({
        title: 'Error!',
        text: 'Error al cargar las tareas',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      showIndex = false    
  }

  tareas.value = response.data.data
})

</script>

<template>
  <BaseDataTable
      title="Lista de Tareas"
      :headers="headers"
      :items="tareas"
      searchField="name"
      :showIndex="showIndex"
    /> 
</template>

<style scoped>

</style>
