<template>
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <div class="row">
                    <div class="col">
                        <div class="img">
                            <img :src="producto.url_imagen_prod" alt="Logo de vue">
                        </div>
                    </div>
        
                    <div class="col-7">
                        <div class="titulo">
                            <h3>{{ producto.nombre }}</h3>
                        </div>
                        <br>
                        <div class="descripcion">
                            <p>{{ producto.descripcion }}</p>
                        </div>
                        <br>
                        <div class="cantidad">
        
                            <div>
                                <label for="txt_precio">Precio</label>
                                <p>$ {{ producto.precio }}</p>
                            </div>
        
                        </div>
        
                        <hr size="5" align="center" />
        
                        <div class="adicionales">
                            <div id="grupo1">
                                <select name="cb_adicionales" id="cb_adicionales" class="form-control">
                                    <option value="0">Bebidas</option>
                                    <option value="1">Jugo -- $2000</option>
                                    <option value="1">Gaseosa -- $2000</option>
                                    <option value="1">Agua -- $1000</option>
                                </select>
                            </div>
        
                            <br>
        
                            <div id="grupo2">
                                <select name="cb_adicionales" id="cb_adicionales" class="form-control">
                                    <option value="0">Harina</option>
                                    <option value="1">Yuca -- $2000</option>
                                    <option value="1">Aros cebolla -- $2000</option>
                                    <option value="1">Papas -- $4000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        
                <br>
        
                <div class="opciones-productos">
        
                    <button class="btn btn-danger" type="button">
                        <i class="fas fa-minus-circle"></i> ELIMINAR
                    </button>
        
                    <button class="btn btn-warning" type="button" @click="showModalEditarP()">
                        <i class="far fa-edit"></i> EDITAR
                    </button>
        
                </div>
            </div>
        
        </div>
    </div>
    
    <br>
    <br>

    <MdEditarProducto></MdEditarProducto>
</template>

<script>
    import MdEditarProducto from "./ModalEditarProducto.vue";

    export default {
        components: {
            MdEditarProducto
           
        },
        data() {
            return {
                user: true,
                modal: null,
            };
        },

        props: {
            producto: Object,
        },

        methods: {
            showModalEditarP() {
                this.modal = new bootstrap.Modal(
                    document.getElementById("mymodalEditarP")
                );
                this.modal.show();
            },
        },
    };
    /** Jeffer cardenas*/
</script>

<style scoped>
    .jumbotron {
        padding: 20px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-flow: column;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    .img {
        width: 250px;
        height: 250px;
    }

    .img img {
        width: 100%;
        height: 100%;
        border-radius: 45px;
    }

    .form-group {
        display: flex;
        justify-content: space-between;
    }

    .cantidad {
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
    }

    .cantidad #txt_cantidad {
        width: 100px;
    }

    .cantidad #txt_precio {
        width: 130px;
    }

    .opciones-productos {
        display: flex;
        justify-content: flex-end;
    }

    .opciones-productos button {
        margin-left: 10px;
    }
</style>