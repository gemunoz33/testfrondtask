<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import EasyDataTable from 'vue3-easy-data-table'
  import 'vue3-easy-data-table/dist/style.css'
  
  defineProps({
    title: {
      type: String,
      default: 'Tabla de datos'
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    searchField: {
      type: String,
      default: ''
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    rowsPerPage: {
      type: Number,
      default: 10
    },
    showExpand: {
      type: Boolean,
      default: false
    }
  })

const showIndex = true
const proyectos = ref([])

const headers = [  
  { text: 'Nombre', value: 'name' },  
  { text: 'Fecha de inicio', value: 'start_date' },
  { text: 'Fecha de fin', value: 'end_date' },
  { text: 'Responsable', value: 'users.name' },
  { text: 'Categoria', value: 'category.name' },
  { text: 'Moneda', value: 'prices.0.currency' },
  { text: 'Valor Proyecto', value: 'prices.0.price'},
  { text: 'Estado', value: 'status' }
]

const headersTask = [  
  { text: 'Proyecto', value: 'project_task.name' },
  { text: 'Tarea', value: 'name' },
  { text: 'Descripción', value: 'description' },
  { text: 'Fecha de inicio', value: 'start_date' },
  { text: 'Fecha de fin', value: 'end_date' },
  { text: 'Responsable', value: 'users_task.name' },
  { text: 'Progreso', value: 'progress' },
  { text: 'Estado', value: 'status' }
]

const LoadData = async () => {

  const response = await api.get('/projects')
  
  if (response.status !== 200) {
    Swal.fire({
        title: 'Error!',
        text: 'Error al cargar las Proyectos',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      showIndex = false    
  }

  proyectos.value = response.data.data
}
onMounted(async () => {
  LoadData()  
})

</script>

<template>
  <EasyDataTable
        :headers="headers"
        :items="proyectos"
        :search-field="searchField"
        :show-index="showIndex"
        :rows-per-page="rowsPerPage"
        :show-expand="true"
      >
        <template #expand="item">          
          <div style="padding: 1rem; background-color: #f9f9f9;">
            <h5>Tareas de: {{ item.name }}</h5>
            
            <!-- Verificación de tareas -->
            <div v-if="item.tasks && item.tasks.length">
              <table class="table table-sm table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                    <th>Estado</th>
                    <th>Progreso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tarea in item.tasks" :key="tarea.id">
                    <td>{{ tarea.name }}</td>
                    <td>{{ tarea.description }}</td>
                    <td>{{ tarea.start_date }}</td>
                    <td>{{ tarea.end_date }}</td>
                    <td>{{ tarea.status }}</td>
                    <td>{{ tarea.progress }}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Mensaje si no hay tareas -->
            <p v-else class="text-muted">Este proyecto no tiene tareas asignadas.</p>
          </div>
        </template>
      </EasyDataTable>
</template>

<style scoped>

</style>
