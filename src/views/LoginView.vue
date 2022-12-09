<template>
  <section class="bg-fondo">
    <div class="container-fluid position-relative  d-flex p-0">
      <!-- Iniciar Sesión Start -->
      <div class="container-fluid ">
        <div class="row h-100 align-items-center justify-content-center  " style="min-height: 100vh;"
          id="fondo_inicio_sesion_administrador">
          <div class="col-12 col-sm-8 col-md-8 col-lg-4 col-xl-3    bg-light px-0">
            <div class="rounded  p-sm-5 px-5  border" id="contenedor_inicio ">
              <div class="d-flex align-items-center justify-content-center mb-4   ">
                <a class="navbar-brand d-flex align-items-center fw-bold fs-3 text-center" href="/" id="tramos_sas ">
                  <img src="@/assets/favicon/Logofin.png" class="logo-form" alt="">

                </a>
              </div>
              <form class="row g-3 needs-validation " novalidate autocomplete="off">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                  <label for="floatingInput">Correo Electronico</label>
                  <div class="valid-feedback">
                    Se ve bien!
                  </div>
                  <div class="invalid-feedback">
                    Porfavor ingresa el correo Electronico.
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" required>
                  <label for="floatingPassword">Contraseña</label>
                  <div class="valid-feedback">
                    Se ve bien!
                  </div>
                  <div class="invalid-feedback">
                    Porfavor ingresa la contraseña.
                  </div>
                </div>
                <div class="col-12">
                  <router-link to="/Dashboard" class="btn bg-warning text-white py-3 w-100 mb-3"> Iniciar sesion</router-link>
                  <p class="text-center mb-0">Administrador TRAMO</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Iniciar Sesión End -->
</template>

<script>
export default {
  name: "LoginComponent"

}
</script>

<style scoped>
.bg-fondo {
  background-image: url(../assets/gallery/fondo.jpg);
  background-size: cover;
  background-position: center center;

}
.logo-form{
  width: 95%;
}


</style>

