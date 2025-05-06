<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Task App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Usuarios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Proyectos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tasks">Tareas</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  