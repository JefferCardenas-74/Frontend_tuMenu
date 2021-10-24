<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">CATEGORIA <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">OPCIONALES</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name : 'Navbar',
        data() {
            return {};
        },
    };
</script>

<style>

    #navbarNav{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    #navbarNav ul li{
        margin-left: 15px;
    }
</style>