<template>
    <div class="row">
        <div class="col">
            <div class="container-header">

                <div class="titulo">
                    <h1>{{ nombre }}</h1>
                </div>

                <div class="opciones-categorias">

                    <button class="btn btn-primary" type="button">
                        <i class="fas fa-eye-slash"></i> OCULTAR
                    </button>

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

    <br>

    <div class="container-descripcion">
        <div class="row descripcion">
            <div class="col">
                <div id="img">
                    <img src="../assets/logo.png" alt="logo vue">
                </div>
            </div>
            <div class="col-9">
                <div id="descripcionCategoria">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis provident sunt quae optio
                        ipsa odit. At nobis debitis minus pariatur velit laboriosam, harum doloremque voluptatem
                        dignissimos vel ipsam ratione culpa.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                PRODUCTO 1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-body">
                            <Producto></Producto>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button"
                                data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                PRODUCTO 2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <Producto></Producto>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Producto from './Producto.vue';

    export default {

        components: {
            Producto
        },

        props: ['nombre'],

        data() {
            return {};
        },
    };
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
        width: 200px;
        height: 200px;
    }

    #img img {
        width: 100%;
        height: 100%;
    }

    .descripcion {
        display: flex;
        align-items: center;
    }
</style>