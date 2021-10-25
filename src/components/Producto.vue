<template>
    <div class="jumbotron">
        <div class="row">
            <div class="col">
                <div class="img">
                    <img src="../assets/logo.png" alt="Logo de vue">
                </div>
            </div>

            <div class="col-7">
                <div class="titulo">
                    <h3>Nombre de producto</h3>
                </div>
                <br>
                <div class="descripcion">
                    <textarea name="txt_descripcion" id="txt_descripcion" cols="50" rows="5" placeholder="Descripcion"
                        class="form-control"></textarea>
                </div>
                <br>
                <div class="cantidad">

                    <!-- <div v-if="user">
                        <label for="txt_cantidad">Cantidad</label>
                        <input type="number" id="txt_cantidad" class="form-control" placeholder="0">
                    </div> -->

                    <div>
                        <label for="txt_precio">Precio</label>
                        <input type="number" id="txt_precio" name="txt_precio" class="form-control" placeholder="$">
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

            <button class="btn btn-warning" type="button">
                <i class="far fa-edit"></i> EDITAR
            </button>

        </div>
    </div>

    <br>
    <br>

</template>

<script>
    export default {
        data() {
            return {
                user: true
            };
        },
    };
</script>

<style scoped>
    .jumbotron {
        padding: 20px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-flow: column;
        width: 800px;
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