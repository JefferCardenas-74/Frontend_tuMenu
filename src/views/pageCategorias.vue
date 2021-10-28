<template>
  <br />
  <div class="container-fluid">
    <div class="container-opciones">
      <button class="btn btn-success" type="button" @click="showModalAgregarC()">
        <i class="fas fa-plus"></i> AGREGAR CATEGORIA
      </button>
      <button class="btn btn-success" type="button" @click="showModalAgregarP()">
        <i class="fas fa-plus"></i> AGREGAR PRODUCTO
      </button>
      <button class="btn btn-success" type="button" @click="showModalAgregarListaO()">
        <i class="fas fa-plus"></i> AGREGAR LISTA DE OPCIONALES
      </button>
      <button class="btn btn-success" type="button" @click="showModalAgregarListaA()">
        <i class="fas fa-plus"></i> AGREGAR LISTA DE ADICIONALES
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
              <a href="#" v-for="categoria in categorias" :key="categoria"
                class="list-group-item list-group-item-action" data-toggle="list"
                @click="(id = categoria.id), toggleActive($event)">
                {{ categoria.nombre }}
              </a>
              <!-- <div v-for="categoria in categorias" :key="categoria">
                <router-link
                  :to="{ name: 'categoriasId', params: { id: categoria.id } }"
                  >{{ categoria.nombre }}</router-link
                >
              </div> -->
            </div>
          </div>
        </div>

        <div class="col-10 categorias">
          <div v-if="mostrar">
            <Categoria :categoria="categoria" ref="Categoria"></Categoria>
          </div>
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
                Salsas
              </a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActiveOpcional($event)">Bebidas</a>
              <a href="#" class="list-group-item list-group-item-action" data-toggle="list"
                @click="toggleActiveOpcional($event)">Porciones</a>
            </div>
          </div>
        </div>
        <div class="col-10">
          <Opcionales :opcional="opcional"></Opcionales>
        </div>
      </div>
    </div>

    <br />
    <br />

    <div class="contenedor-url">
      <div class="url">
        <p>https://www.tumenu.com/pidea/mirestaurante/menu</p>
      </div>
    </div>
  </div>
  <MdAgregarCategoria></MdAgregarCategoria>
  <MdAgregarProducto></MdAgregarProducto>
  <MdAgregarListaOpcionales></MdAgregarListaOpcionales>
  <MdAgregarListaAdicionales></MdAgregarListaAdicionales>
</template>

<script>
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import Categoria from "../components/Categoria.vue";
  import Opcionales from "../components/Opcionales.vue";
  import MdAgregarCategoria from "../components/ModalAgregarCategoria.vue";
  import MdAgregarProducto from "../components/ModalAgregarProducto.vue";
  import MdAgregarListaAdicionales from "../components/ModalAgregarListaAdicionales.vue";
  import MdAgregarListaOpcionales from "../components/ModalAgregarListaOpcionales.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      Categoria,
      Opcionales,
      MdAgregarCategoria,
      MdAgregarProducto,
      MdAgregarListaOpcionales,
      MdAgregarListaAdicionales,
    },
    data() {
      return {
        activo: true,
        id: null,
        categoria: [
          {
            id: null,
            nombre: "",
            descripcion: "",
            urlImg: "",
          },
        ],
        mostrar: false,
        opcional: "",
        contenedorCategorias: true,
        contenedorOpcionales: false,
        seleccion1: true,
        seleccion2: false,
        modal: null,
        categorias: null,
      };
    },

    mounted() {
      this.getCategorias();
    },

    methods: {

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

      showModalAgregarListaO() {
        this.modal = new bootstrap.Modal(
          document.getElementById("mymodalAgregarListaO")
        );
        this.modal.show();
      },

      showModalAgregarListaA() {
        this.modal = new bootstrap.Modal(
          document.getElementById("mymodalAgregarListaA")
        );
        this.modal.show();
      },

      toggleActive(e) {
        //this.$router.push('/categorias/' + this.id)
        console.log(this.id);
        this.getCategoria(this.id);
        this.mostrar = true;
        
        setTimeout(() => {
            this.$refs.Categoria.getProductos(this.id);
        }, 100);
      
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

      getCategorias() {
        axios.get("http://localhost:3000/categorias").then((data) => {
          console.log(data.data);
          this.categorias = data.data;
        });
      },

      getCategoria(id) {
        axios.get(`http://localhost:3000/categorias?id=${id}`).then((data) => {
          console.log(data.data[0]);
          this.categoria.id = data.data[0].id;
          this.categoria.nombre = data.data[0].nombre;
          this.categoria.descripcion = data.data[0].descripcion;
          this.categoria.urlImg = data.data[0].url_imagen_cat;
        });
      },
    },
  };
/**Jeffer Cardenas */
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
    margin-left: auto;
    margin-right: auto;
  }

  .contenedor-url {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .url {
    border: 1px solid;
    padding: 15px;
  }

  .url p {
    font-weight: bold;
  }
</style>