<script setup>
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
  </script>
<template>
    <div class="card mt-4">
      <div class="card-header">
        <h5 class="mb-0">{{ title }}</h5>
      </div>
      <div class="card-body table-responsive">
        <EasyDataTable
          :headers="headers"
          :items="items"
          :search-field="searchField"
          :show-index="showIndex"
          :rows-per-page="rowsPerPage"
          :show-expand="showExpand"
        >
        <template #expand="slotProps">
            {{ console.log(slotProps) }}
          <!-- Verificar que item esté presente antes de mostrar -->
          <div v-if="slotProps.item">
            <slot name="expand" v-bind="slotProps" />
          </div>
          <div v-else>
            <p>No hay información disponible.</p>
          </div>
        </template>
        </EasyDataTable> 
      </div>
    </div>
  </template>
  
  
  