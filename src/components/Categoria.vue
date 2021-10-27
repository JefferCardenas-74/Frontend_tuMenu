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

                    <button class="btn btn-warning" type="button">
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
                <div class="card" v-for="producto in productos" :key="producto.key">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <a href='#producto' class="btn btn-link nav-link btn-block text-left" type="button"
                                data-toggle="collapse" :data-target="'#' + collapseOne + producto.id"
                                aria-expanded="true" aria-controls="collapseOne"
                                @click="(idProducto = producto.id), getProducto()">
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
</template>

<script>
    import Producto from "./Producto.vue";
    import axios from "axios";

    export default {
        components: {
            Producto,
        },

        props: {
            categoria: Object,
            producto: Object,
        },

        data() {
            return {
                productosProxy: {},
                productos: [],
                idProducto: null,
                collapseOne: "collapseOne",
                producto: {},
                mostrar: false,
                //   prod: {
                //     "id": null,
                //     "nombre": "",
                //     "descripcion": "",
                //     "precio": "",
                //     "url_imagen_prod": "",
                //     "categoria_producto": null,
                //   },
            };
        },

        // mounted() {
        //     this.getProductos(this.$route.params.id);
        // },

        methods: {
            getProductos(id) {
                axios
                    .get(`http://localhost:3000/productos?categoria_producto=${id}`)
                    .then((data) => {
                        this.productosProxy = data.data;

                        //   this.productosProxy.map((item, i) => {

                        //     this.prod.id = item.id;
                        //     this.prod.nombre = item.nombre;
                        //     this.prod.descripcion = item.descripcion;
                        //     this.prod.precio = item.precio;
                        //     this.prod.url_imagen_prod = item.url_imagen_prod;
                        //     this.prod.categoria_producto = item.categoria_producto;

                        //     this.productos.push(this.prod);
                        //   });

                        this.productos = this.productosProxy.map((item) => item);
                    });
            },

            getProducto(id) {
                axios.get(`http://localhost:3000/productos?id=${id}`).then((data) => {
                    this.producto = data.data;
                    this.mostrar = true;
                });
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