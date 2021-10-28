<template>
  <div class="contenedor-opcionales">
    <div class="header">
      <h2>{{ opcional }}</h2>

      <div class="opciones-opcionales">

        <button class="btn btn-danger" type="button">
          <i class="fas fa-minus-circle"></i> ELIMINAR
        </button>

        <button class="btn btn-warning" type="button" @click="showModalEditarListaO()">
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

      <button class="btn btn-warning" type="button" @click="showModalEditarListaA()">
        <i class="far fa-edit"></i> EDITAR
      </button>
    </div>

  </div>
<MdEditarListaOpcionales></MdEditarListaOpcionales>
<MdEditarListaAdicionales></MdEditarListaAdicionales>
</template>

<script>
import MdEditarListaOpcionales from "../components/ModalEditarListaOpcionales.vue";
import MdEditarListaAdicionales from "../components/ModalEditarListaAdicionales.vue";
  export default {
    props: ["opcional"],

    components: {
    MdEditarListaOpcionales,
    MdEditarListaAdicionales
    },

    data() {
      return {};
      modal = null
    },
    methods: {
    showModalEditarListaO() {
      this.modal = new bootstrap.Modal(
        document.getElementById("mymodalEditarListaO")
      );
      this.modal.show();
    },
    showModalEditarListaA() {
      this.modal = new bootstrap.Modal(
        document.getElementById("mymodalEditarListaA")
      );
      this.modal.show();
    },

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