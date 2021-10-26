<template>
  <div class="contenedor-opcionales">
    <div class="header">
      <h2>{{ opcional }}</h2>

      <div class="opciones-opcionales">

        <button class="btn btn-danger" type="button">
          <i class="fas fa-minus-circle"></i> ELIMINAR
        </button>

        <button class="btn btn-warning" type="button">
          <i class="far fa-edit"></i> EDITAR
        </button>
      </div>
    </div>

    <br>

    <div class="descripcion">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        reprehenderit quia eaque! Debitis magni dignissimos quaerat autem,
        quibusdam in nam laborum, modi maxime impedit ratione quis temporibus
        fuga eum ducimus?
      </p>
    </div>

    <div class="adicionales">
      <div class="adicional">
        <h5>Papas</h5>
        <br>
        <p>$ 3000</p>
      </div>
      <div class="adicional">
        <h5>Gaseosa</h5>
        <br>
        <p>$ 2000</p>
      </div>
      <div class="adicional">
        <h5>Salsa</h5>
        <br>
        <p>$ 1000</p>
      </div>
    </div>


    <div class="opciones-adicionales">

      <button class="btn btn-danger" type="button">
        <i class="fas fa-minus-circle"></i> ELIMINAR
      </button>

      <button class="btn btn-warning" type="button">
        <i class="far fa-edit"></i> EDITAR
      </button>
    </div>

  </div>
</template>

<script>
  export default {
    props: ["opcional"],

    data() {
      return {};
    },
  };
</script>

<style scoped>
  .contenedor-opcionales {
    border: 1px solid;
    padding: 25px;
    border-radius: 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
  }

  .opciones-opcionales button {
    margin-left: 15px;
  }

  .adicionales {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
  }

  .adicional {
    margin: 10px;
    padding: 15px;
    border: 1px solid;
    border-radius: 15px;
  }
  .opciones-adicionales{
    display: flex;
    justify-content: flex-start;
  }

  .opciones-adicionales button{
    margin-left: 15px;
  }

</style>