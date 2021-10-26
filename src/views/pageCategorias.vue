<template>
  <br />
  <div class="container">
    <div class="container-opciones">
      <button class="btn btn-success" type="button">
        <i class="fas fa-plus"></i> AGREGAR CATEGORIA
      </button>
      <button class="btn btn-success" type="button">
        <i class="fas fa-plus"></i> AGREGAR PRODUCTO
      </button>
      <button class="btn btn-success" type="button">
        <i class="fas fa-plus"></i> AGREGAR LISTA DE OPCIONALES
      </button>
    </div>

    <div class="container-titulo">
      <Navbar @cambioSeccion="cambioSeccion()" :seleccion1="seleccion1" :seleccion2="seleccion2"></Navbar>
    </div>

    <div v-if="contenedorCategorias">
      <div class="row">
        <div class="col">
          <div class="lista-categorias">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active" data-toggle="list"
                @click="toggleActive($event)" aria-current="true">
                CATEGORIA 1
              </a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActive($event)">CATEGORIA 2</a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActive($event)">CATEGORIA 3</a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActive($event)">CATEGORIA 4</a>
            </div>
          </div>
        </div>
        <div class="col-10 categorias">
          <Categoria :nombre="nombre"></Categoria>
        </div>
      </div>
    </div>

    <div v-if="contenedorOpcionales">
      <div class="row">
        <div class="col">
          <div class="lista-categorias">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active" data-toggle="list"
                @click="toggleActiveOpcional($event)" aria-current="true">
                OPCIONAL 1
              </a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActiveOpcional($event)">OPCIONAL 2</a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActiveOpcional($event)">OPCIONAL 3</a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActiveOpcional($event)">OPCIONAL 4</a>
            </div>
          </div>
        </div>
        <div class="col-10">
          <Opcionales :opcional="opcional"></Opcionales>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="contenedor-url">
      <div class="url">
        <p>https://www.tumenu.com/pidea/mirestaurante/menu</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
  import Categoria from "../components/Categoria.vue";
  import Opcionales from "../components/Opcionales.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      Categoria,
      Opcionales,
    },
    data() {
      return {
        activo: true,
        nombre: "",
        opcional: "",
        contenedorCategorias: true,
        contenedorOpcionales: false,
        seleccion1: true,
        seleccion2: false,
      };
    },
    methods: {
      toggleActive(e) {
        this.nombre = e.target.outerText;
      },

      toggleActiveOpcional(e) {
        this.opcional = e.target.outerText;
      },

      cambioSeccion() {
        if (this.contenedorCategorias && this.contenedorOpcionales == false) {

          this.contenedorCategorias = false;
          this.contenedorOpcionales = true;
          this.seleccion1 = false;
          this.seleccion2 = true;

        } else if (

          this.contenedorCategorias == false &&
          this.contenedorOpcionales

        ) {

          this.contenedorCategorias = true;
          this.contenedorOpcionales = false;
          this.seleccion1 = true;
          this.seleccion2 = false;

        }
      },
    },
  };
</script>

<style>
  .container-opciones {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .container-opciones button {
    margin: 15px;
  }

  .container-categorias {
    display: flex;
  }

  .categorias {
    border: 1px solid;
    padding: 10px;
    border-radius: 25px;
  }

  .contenedor-url{
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .url{
    border: 1px solid;
    padding: 15px;
  }

  .url p{
    font-weight: bold;
  }
</style>