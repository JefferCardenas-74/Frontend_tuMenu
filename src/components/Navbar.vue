<template>
    <br>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" id="menuNav">
                <li class="nav-item">
                    <a class="nav-link" :class="{ disabled : seleccion1 }" @click='cambioSeccion()'>CATEGORIAS</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" :class="{ disabled : seleccion2 }" @click='cambioSeccion()'>OPCIONALES</a>
                </li>
            </ul>
        </div>
    </nav>
    <br>
    <br>
</template>

<script>
    export default {
        name : 'Navbar',
        props:['seleccion1', 'seleccion2'],
        data() {
            return {
                disabled : 'disabled'
            };
        },

        methods:{
            cambioSeccion(){
                this.$emit('cambioSeccion');
            }
        }
    };
    /** Jeffer cardenas */
</script>

<style scoped>

    #menuNav{
        margin-left: auto;
        margin-right: auto;
    }

    #navbarNav ul li{
        margin-left: 15px;
    }

    .nav-item a{
        cursor: pointer;
    }


</style>