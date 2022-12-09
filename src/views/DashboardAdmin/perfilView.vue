<template>
  <div>

    <div class="container">

                  <div class="col-md-7 col-lg-8 text-secondary mx-auto">
                    <h4 class="mb-3 text-secondary">Datos Generales</h4>
                    <form class="needs-validation" action="" novalidate autocomplete="off">
                      <div class="row g-3">
                        <div class="col-sm-6">
                          <label for="firstName" class="form-label">Nombre:</label>
                          <input type="text" class="form-control bg-white" id="firstName" placeholder="" value="" required>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
            
                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Apellido:</label>
                          <input type="text" class="form-control  bg-white" id="lastName" placeholder="" value="" required>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
            
                        <div class="col-12">
                          <label for="username" class="form-label">Direccion correo electronico</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input type="text" class="form-control  bg-white" id="username" required>
                            <div class="invalid-feedback">
                              Se requiere este campo lleno
                            </div>
                          </div>
                        </div>
            
                        <div class="col-12">
                          <label for="email" class="form-label">Numero Telefono<span
                              class="text-muted"></span></label>
                          <input type="number" class="form-control  bg-white" id="email" required>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
            
                        <div class="col-12">
                          <label for="address" class="form-label">Direccion:</label>
                          <input type="text" class="form-control  bg-white" id="address" required>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
            
                        <div class="col-md-5">
                          <label for="country" class="form-label">Pais</label>
                          <select class="form-select  bg-white" id="country" required>
                            <option value="">Selecionar...</option>
                            <option>Colombia</option>
                          </select>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
            
                        <div class="col-md-4">
                          <label for="state" class="form-label">Departamento</label>
                          <select class="form-select  bg-white" id="state" required>
                            <option value="">Selecionar...</option>
                            <option>Cauca</option>
                          </select>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
            
                        <div class="col-md-3">
                          <label for="zip" class="form-label">Ciudad</label>
                          <input type="text" class="form-control  bg-white  " id="zip" placeholder="" required>
                          <div class="invalid-feedback">
                            Se requiere este campo lleno
                          </div>
                        </div>
                      </div>
            
                      <hr class="my-4">
            
                      <button class="w-100 btn btn-secondary btn-lg" type="submit">Editar Informacion</button>
                    </form>
                  </div>
              </div>
 
        <!-- fin carlos -->
              </div>
</template>

<script>
export default {

}



</script>

<style>

</style>