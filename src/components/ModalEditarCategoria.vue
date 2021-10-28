<template>
  <div
    class="modal fade"
    id="mymodalEditarC"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">EDITAR CATEGORIA</h5>
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
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Categoria:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label"
                >Descripción:</label
              >
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <br />
            <div>
              <input id="file" type="file" @change="showImage($event)" />
              <hr />
              <div id="preview"></div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn_EditarC" class="btn btn-primary"><i class="far fa-save"></i>
            Editar Categoria
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
