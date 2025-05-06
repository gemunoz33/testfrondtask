# test_tasks

Trabajo realizado en Vue3.js

## 
## IDE recomendado

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Clonar proyecto

Correr comando git clone https://github.com/gemunoz33/testfrondtask.git


## Configurar proyecto

Se debe ingresar a

cd testdfrondtask

Correr los siguientes comandos

```sh
npm install
```

Se debe configurar el archivo services/api.js

```js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://urldominio.com/api', // Cambiar esto por el backend final
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
```

### Compilar en desarrollo

```sh
npm run dev
```
Luego de correr npm run dev se ingresa al navegador como http://localhost:5173

### Compilar y minificar para producción

```sh
npm run build
```
