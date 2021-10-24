<template>

    <div class="row">

    </div>
    <div class="container-header">
        <div class="titulo">
            <h1>CATEGORIA 1</h1>
        </div>

        <div class="opciones-categorias">
            <button class="btn btn-primary" type="button"> <i class="fas fa-eye-slash"></i> OCULTAR</button>
            <button class="btn btn-primary" type="button"> <i class="fas fa-minus-circle"></i> ELIMINAR</button>
            <button class="btn btn-primary" type="button"> <i class="far fa-edit"></i> EDITAR</button>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style>

    .container-header{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .opciones-categorias button{
        margin-left: 15px;
    }

</style>