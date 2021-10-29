<template>
    <div class="row">
        <div class="col">
            <div class="container-header">
                <div class="titulo">
                    <h1>{{ categoria.nombre }}</h1>
                </div>

                <div class="opciones-categorias">
                    <!-- <button class="btn btn-primary" type="button" @click="getProductos(categoria.id)">
            <i class="fas fa-eye-slash"></i> MOSTRAR PRODUCTOS
          </button> -->

                    <button class="btn btn-danger" type="button">
                        <i class="fas fa-minus-circle"></i> ELIMINAR
                    </button>

                    <button class="btn btn-warning" type="button" @click="showModalEditarC()">
                        <i class="far fa-edit"></i> EDITAR
                    </button>
                </div>
            </div>
        </div>
    </div>

    <br />

    <div class="container-descripcion">
        <div class="row descripcion">
            <div class="col">
                <div id="img">
                    <img :src="categoria.urlImg" />
                    <!-- <img src="../assets/categorias/postres.jpg"> -->
                </div>
            </div>
            <div class="col-9">
                <div id="descripcionCategoria">
                    <p>{{ categoria.descripcion }}</p>
                </div>
            </div>
        </div>
    </div>

    <br />

    <div class="row">
        <div class="col">
            <div class="accordion" id="accordionExample">
                <div class="card" v-for="producto in productos" :key="producto">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <a href='#producto' class="btn btn-link nav-link btn-block text-left" type="button"
                                data-toggle="collapse" :data-target="'#' + collapseOne + producto.id"
                                aria-expanded="true" aria-controls="collapseOne"
                                @click="(idProducto = producto.id), getProducto(this.idProducto)">
                                {{ producto.nombre }}
                            </a>
                        </h2>
                    </div>

                    <div :id="collapseOne + producto.id" class="collapse" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-body">
                            <div v-if="mostrar">
                                <section id="producto">
                                    <Producto :producto="producto"></Producto>
                                </section>
                            </div>
                            <div v-else>
                                <p>Cargando producto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MdEditarCategoria></MdEditarCategoria>
</template>


<script>
    import Producto from './Producto.vue';
    import MdEditarCategoria from "./ModalEditarCategoria.vue";
    import axios from "axios";

    export default {
        components: {
            MdEditarCategoria,
            Producto
        },

        props: {
            categoria: Object,
            //producto: Object,
        },

        data() {
            return {
                productosProxy: {},
                productos: [],
                collapseOne: "collapseOne",
                producto: {},
                mostrar: false,
                modal: null,
                idProducto : null
            };
        },

        methods: {
            getProductos(id) {
                axios
                    .get(`http://localhost:3000/productos?categoria_producto=${id}`)
                    .then((data) => {
                        this.productos = data.data;
                    });
            },

            getProducto(id) {
                axios.get(`http://localhost:3000/productos?id=${id}`)
                .then((data) => {
                    this.product = data.data;
                    this.mostrar = true;
                });
            },

            showModalEditarC() {
                this.modal = new bootstrap.Modal(
                    document.getElementById("mymodalEditarC")
                );
                this.modal.show();
            },
        },
    };
/** Jeffer cardenas */
</script>

<style scoped>
    .container-header {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }

    .opciones-categorias button {
        margin-left: 15px;
    }

    #img {
        width: 250px;
        height: 250px;
    }

    #img img {
        width: 100%;
        height: 100%;
        border-radius: 45px;
    }

    .descripcion {
        display: flex;
        align-items: center;
    }
</style>