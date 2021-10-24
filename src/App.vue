<template>
  <br>
  <div class="container">
    <div class="container-opciones"> 
      <button class="btn btn-primary" type="button"> <i class="fas fa-plus"></i> AGREGAR CATEGORIA</button>
      <button class="btn btn-primary" type="button"> <i class="fas fa-plus"></i> AGREGAR PRODUCTO</button>
      <button class="btn btn-primary" type="button"> <i class="fas fa-plus"></i> AGREGAR LISTA DE OPCIONALES</button>
    </div>
    
    <div class="container-titulo">
      <Navbar></Navbar>
    </div>

    <div class="row">
      <div class="col">
        <div class="lista-categorias">
          <ul>
            <li>
              <a href="#">Categoria 1</a>
            </li>
            <li>
              <a href="#">Categoria 2</a>
            </li>
            <li>
              <a href="#">Categoria 3</a>
            </li>
            <li>
              <a href="#">Categoria 4</a>
            </li>
          </ul>
      </div>
      </div>
      <div class="col-10">
        <Categoria></Categoria>
      </div>

    </div>
  </div>
  
</template>

<script>

import Navbar from './components/Navbar.vue';
import Categoria from './components/Categoria.vue';

  export default {
    name: "App",
    components: {
      Navbar,
      Categoria
    },
    data() {
      return {

      };
    },
    methods: {

    },
  };
</script>

<style>

  .container-opciones{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .container-opciones button{
    margin: 15px;
  }

  .container-categorias{
    display: flex;
  }


</style>