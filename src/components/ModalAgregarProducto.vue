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
                <input id="file" type="file" @change="showImageAgregarProducto($event)" />
                <hr />
                <div id="preview"></div>
              </div>
              <br>
              <br>
              <br>
              <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Precio</span>
                </div>
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="$">
              </div>
            <div class="col">
              <div class="form-group">
                <input type="text" class="form-control" id="recipient-name" placeholder="Nombre del producto">
                <br>
                <textarea class="form-control" id="message-text" placeholder="Descripción"></textarea>
                <br>
              </div>
              <div>
              <select class="form-control" name="cbElegirCategoria">

                <option class="form-control" v-for="categoria in categorias" :key="categoria" :value="categoria.id">
                  {{ categoria.nombre }}
                </option>

              </select>
              </div>
              <br>
              <div>
              <select class="form-control">

                <option class="form-control" v-for="adicional in adicionales" :key="adicional" :value="adicional.id" >{{ adicional.nombre }}</option>

              </select>
              </div>
            </div>
        </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn_AgregarP" class="btn btn-primary" @click="guardar()"><i class="fas fa-plus"></i>
            Agregar Producto
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
  props:{
    categorias : Object,
    adicionales : Object
  },
  methods: {
    showImageAgregarProducto(e) {
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

    guardar(){
      alert("Se Guardo con exito");
    }
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
