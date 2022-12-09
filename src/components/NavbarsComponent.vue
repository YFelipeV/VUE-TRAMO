<template>
    <div>
        <!-- Sidebar Start -->
        
        <div class="sidebar pe-4 borders pb-3">
            <nav class="navbar bg-white navbar-dark">
                <router-link to="/" class="navbar-brand  fw-bold fs-3 pb-3 ps-3"
                    id="tramos_sas">
                    <div class="d-flex justify-content-start">
                        <img src="@/assets/favicon/Logofin.png" class="logo-nav" alt="">
                        <hr>
                    </div>
                    
                </router-link>
                <div class="navbar-nav w-100">
                    <router-link to="/Dashboard/conductores" class="nav-item nav-link text-start   text-dark fw-bold "><i
                            class="bi bi-person-vcard-fill  -alt me-2"></i>Conductores</router-link>
                    <router-link to="/Dashboard/solicitudConductores" class="nav-item nav-link text-start   text-dark fw-bold "><i
                            class="bi bi-person-add me-2  "></i>Solicitudes</router-link>
                    <router-link to="/Dashboard/datosConductor" class="nav-item nav-link text-start    text-dark fw-bold "><i
                            class="bi bi-clipboard-data me-2"></i>Datos Conductores</router-link>
                    <router-link to="/Dashboard/datosCliente" class="nav-item nav-link text-start   text-dark fw-bold "><i
                            class="bi bi-file-earmark-bar-graph me-2"></i>Datos Clientes</router-link>
                    <router-link to="/Dashboard/historial" class="nav-item nav-link  text-start  text-dark fw-bold "><i
                            class="bi bi-clock-history me-2"></i>Historial</router-link>
                    <router-link to="/Dashboard/pqrs" class="nav-item nav-link text-start    text-dark fw-bold "><i
                            class="bi bi-person-fill-exclamation me-2"></i>PQRS</router-link>
                    <router-link to="/login" class="nav-item nav-link text-start   text-dark fw-bold "><i
                            class="bi bi-box-arrow-left me-2"></i>Cerrar sesión</router-link>

                </div>
            </nav>
        </div>
        <!-- Sidebar End -->

        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-navcolor navbar-dark sticky-top px-4 py-0">
                <button @click="closeNav" class="sidebar-toggler flex-shrink-0">
                    <i class="bi bi-list text-black"></i>
                </button>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="bi bi-bell me-lg-2 text-black"></i>
                            <span class="d-none d-lg-inline-flex">Notificaciones</span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end bg-dark border-0 rounded-0 rounded-bottom m-0">
                            <a  class="dropdown-item">
                                <h6 class="fw-normal mb-0">Perfil actualizado</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a  class="dropdown-item">
                                <h6 class="fw-normal mb-0">Nuevo usuario agregado</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a  class="dropdown-item">
                                <h6 class="fw-normal mb-0">Contraseña cambiada</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a  class="dropdown-item text-center">Ver todas las notificaciones</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="@/assets/images/user.jpg" alt=""
                                style="width: 40px; height: 40px;">
                            <span class="d-none d-lg-inline-flex">Carlos Noguera</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-dark border-0 rounded-0 rounded-bottom m-0">
                            <router-link to="/Dashboard/EditarPerfil" class="dropdown-item">Mi perfil</router-link>
                            <router-link to="/login" class="dropdown-item">Cerrar sesion</router-link>

                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navbar End -->


            <!-- router - view -->
            <router-view></router-view>
            <!-- router - view -->
        </div>
    </div>

</template>

<script>
export default {
    name: 'MenuSuperior',
    
}

/* const button = document.querySelector("a.sidebar-toggler");
button.addEventListener("click", () => {
  alert("Hello!! Thanks for click me!");
 button.style.width = "250px";
}); */



/* function closeNav() {
  document.getElementsByClassName("sidebar-toggler").style.width = "0";
  document.getElementsByClassName("content").style.marginLeft= "0";
} */


</script>

<style scoped>





.bg-navcolor {
    background-color: #161627;
}



.logo-nav{
    width: 80%;
}



/*** Layout ***/
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    background: #fff;
    transition: 0.5s;
    z-index: 9999;
}

.borders {

    padding-right: 20px;
    box-shadow:
        inset 0 -3em 3em rgba(0, 0, 0, 0.1),
        0 0 0 2px rgb(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.content {
    margin-left: 300px;
    min-height: 100vh;
    background: rgb(244, 241, 241);
    transition: 0.5s;
}

@media (min-width: 992px) {
    .sidebar {
        margin-left: 0;
    }

    .sidebar.open {
        margin-left: -300px;
    }

    .content {
        width: calc(100% - 300px);
    }

    .content.open {
        width: 100%;
        margin-left: 0;
    }
}

@media (max-width: 991.98px) {
    .sidebar {
        margin-left: -300px;
    }

    .sidebar.open {
        margin-left: 0;
        margin-top: 66px;
    }

    .content {
        width: 100%;
        margin-left: 0;
    }
}


/*** Navbar ***/
.sidebar .navbar .navbar-nav .nav-link {
    padding: 7px 20px;
    color: white;
    font-weight: 500;
    border-left: 3px solid white;
    border-radius: 0 30px 30px 0;
    outline: none;
}

.sidebar .navbar .navbar-nav .nav-link:hover,
.sidebar .navbar .navbar-nav .nav-link.active {
    color: black;
    background: #bec6dff8;
    border-color: black;
}

.sidebar .navbar .navbar-nav .nav-link i {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: black;
    border-radius: 40px;
}

.sidebar .navbar .navbar-nav .nav-link:hover i,
.sidebar .navbar .navbar-nav .nav-link.active i {
    background: white;
}

.sidebar .navbar .dropdown-toggle::after {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transition: .5s;
}

.sidebar .navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
}

.sidebar .navbar .dropdown-item {
    padding-left: 25px;
    border-radius: 0 30px 30px 0;
    color: white;
}

.sidebar .navbar .dropdown-item:hover,
.sidebar .navbar .dropdown-item.active {
    background: black;
}

.content .navbar .navbar-nav .nav-link {
    margin-left: 25px;
    padding: 12px 0;
    color: #ffffff;
    outline: none;
}

.content .navbar .navbar-nav .nav-link:hover,
.content .navbar .navbar-nav .nav-link.active {
    color: #ffffff;
}

.content .navbar .sidebar-toggler,
.content .navbar .navbar-nav .nav-link i {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 40px;
}

.content .navbar .dropdown-item {
    color: white;
}

.content .navbar .dropdown-item:hover,
.content .navbar .dropdown-item.active {
    background: black;
}

.content .navbar .dropdown-toggle::after {
    margin-left: 6px;
    vertical-align: middle;
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transition: .5s;
}

.content .navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
}

@media (max-width: 575.98px) {
    .content .navbar .navbar-nav .nav-link {
        margin-left: 15px;
    }
}


</style>
