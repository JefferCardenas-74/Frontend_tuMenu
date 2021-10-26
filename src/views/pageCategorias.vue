<template>
  <br>
  <div class="container">
    <div class="container-opciones"> 
      <button class="btn btn-success" type="button" @click="showModalAgregarC()"> <i class="fas fa-plus"></i> AGREGAR CATEGORIA</button>
      <button class="btn btn-success" type="button" @click="showModalAgregarP()"> <i class="fas fa-plus"></i> AGREGAR PRODUCTO</button>
      <button class="btn btn-success" type="button"> <i class="fas fa-plus"></i> AGREGAR LISTA DE OPCIONALES</button>
    </div>
    
    <div class="container-titulo">
      <Navbar></Navbar>
    </div>

    <div class="row">
      <div class="col">
        <div class="lista-categorias">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" data-toggle="list" @click="toggleActive($event)" aria-current="true">
              CATEGORIA 1
            </a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="list" @click="toggleActive($event)">CATEGORIA 2</a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="list" @click="toggleActive($event)">CATEGORIA 3</a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="list" @click="toggleActive($event)">CATEGORIA 4</a>
          </div>
      </div>
      </div>
      <div class="col-10 categorias">
        <Categoria :nombre="nombre"></Categoria>
      </div>

    </div>
  </div>
  <MdAgregarCategoria></MdAgregarCategoria>
  <MdAgregarProducto></MdAgregarProducto>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Categoria from '../components/Categoria.vue';
import MdAgregarCategoria from '../components/ModalAgregarCategoria.vue';
import MdAgregarProducto from '../components/ModalAgregarProducto.vue';

  export default {
    name: "App",
    components: {
      Navbar,
      MdAgregarCategoria,
      MdAgregarProducto,
      Categoria

    },
    data() {
      return {
        modal: null,
        activo : true,
        nombre : ''
      };
    },
    methods: {

      toggleActive(e){
        this.nombre = e.target.outerText;
      },
      showModalAgregarC() {
          this.modal = new bootstrap.Modal(
              document.getElementById("mymodalAgregarC")
          );
          this.modal.show();
      },
      showModalAgregarP() {
          this.modal = new bootstrap.Modal(
              document.getElementById("mymodalAgregarP")
          );
          this.modal.show();
      },


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

  .categorias{

    border: 1px solid;
    padding: 10px;
    border-radius: 25px;
  }


</style>