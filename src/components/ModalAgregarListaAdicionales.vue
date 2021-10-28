<template>
  <div
    class="modal fade bd-example-modal-lg"
    id="mymodalAgregarListaA"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">AGREGAR LISTA DE ADICIONALES</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="col">
                <div class="row">
                    <div class="col">
                            <label for="recipient-name" class="col-form-label">Nombre del adicional:</label>
                            <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    
                    <div class="col">
                        <br>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Precio</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="$">
                        </div>
                        <br>
                    </div>

                    <div class="row">
                        
                        <div class="form-group">
                            <select class="form-control" name="cbElegirOpcional">

                                <option>Opcional 1</option>

                                <option>Opcional 2</option>

                                <option selected>Elegir Opcional</option>

                            </select>
                        </div>
                    </div>                   
                </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn_AgregarP" class="btn btn-primary"><i class="fas fa-plus"></i>
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: null,
    };
  },
  methods: {

  },
};
</script>

<style>

#btn_EditarC button {
  display: flex;
  justify-content: center;
}

#preview {
  border:1px solid #ddd;
  padding:5px;
  border-radius:2px;
  background:#fff;
  max-width:200px;
}

#preview img {width:100%;display:block;}

#precio {
  display: flex;
}
</style>
