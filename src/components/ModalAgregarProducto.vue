<template>
  <div
    class="modal fade bd-example-modal-lg"
    id="mymodalAgregarP"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">AGREGAR PRODUCTO</h5>
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
            <div class="row">
            <div class="col">
              <div>
                <input id="file" type="file" @change="showImage($event)" />
                <hr />
                <div id="preview"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
            </div>
        </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn_AgregarP" class="btn btn-primary"><i class="fas fa-plus"></i>
            Agregar Categoria
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
    showImage(e) {
        let reader = new FileReader();

        reader.onload = function() {
          let preview = document.getElementById("preview"),
            image = document.createElement("img");

          image.src = reader.result;

          preview.innerHTML = "";
          preview.append(image);
        };

        reader.readAsDataURL(e.target.files[0]);
    },
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
</style>
