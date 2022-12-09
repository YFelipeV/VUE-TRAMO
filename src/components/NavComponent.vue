<template>
<nav class="navbar navbar-expand-lg navbar-primary fixed-top   bg-light" data-navbar-on-scroll="data-navbar-on-scroll">
    <div class="container"><a class="navbar-brand d-flex align-items-center fw-bold fs-2  " href="/">
            <div class="text-warning">TRAMO</div>
            <div class="text-1000">S.A.S</div>
        </a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse  border-lg-0 mt-1 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto pt-2 pt-lg-0 ">
                <li class="nav-item"><a class="nav-link fw-medium  active text-primary" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item"><a class="nav-link fw-medium active text-primary" aria-current="page" href="#/about">Acerca
                        de
                        nosotros</a></li>
                <li class="nav-item"><a class="nav-link fw-medium text-primary" href="#pricing">Testimonios</a>
                </li>
                <li class="nav-item"><a class="nav-link fw-medium text-primary" href="#/contactos">Contactos</a>
                </li>

            </ul>
            
                <a href="#/login" class="btn btn-lg btn-primary rounded-pill order-0 fs-6 text-center me-1">Inicio Sesion</a>
                
            
        </div>
    </div>
</nav>
</template>
<script>
export default {
    name: 'NavComponent',
    
}
</script>
<style scoped>
.btn-primary {
  color: #fff;
  background-color: #2500F9;
  border-color: #2500F9;
}
.navbar{
    background-color: transparent;
    height: 80px;
}
</style>