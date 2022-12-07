<template>
    <!-- carlos -->
    <div class="contenedor_principal m-3 ">
        <div class="contenedor_principal_disponibles">
            <div class="titulo1">CONDUCTORES DISPONIBLES</div>
            <div class="contenido_1">
                <div class="conductores_disponibles">
                    <table id="tbl_disponibles">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-green.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_disponibles">
                    <table id="tbl_disponibles">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-green.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_disponibles">
                    <table id="tbl_disponibles">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-green.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_disponibles">
                    <table id="tbl_disponibles">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-green.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_disponibles">
                    <table id="tbl_disponibles">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-green.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_disponibles">
                    <table id="tbl_disponibles">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-green.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- CONDUCTORES EN SERVICIO -->

        <div class="contenedor_principal_en_servicio">
            <div class="titulo2">CONDUCTORES EN SERVICIO</div>
            <div class="contenido_2">
                <div class="conductores_servicio">
                    <table id="tbl_en_servicio">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-blue.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_servicio">
                    <table id="tbl_en_servicio">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-blue.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_servicio">
                    <table id="tbl_en_servicio">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-blue.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_servicio">
                    <table id="tbl_en_servicio">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-blue.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_servicio">
                    <table id="tbl_en_servicio">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-blue.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
                <div class="conductores_servicio">
                    <table id="tbl_en_servicio">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" alt=""></td>
                            <td>Carlos Noguera</td>
                            <td rowspan="2"><img src="@/assets/icons/activo-blue.svg" alt=""></td>
                        </tr>
                        <tr>
                            <td>3207699910</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
   name:"conductoresView",
}
</script>

<style scoped>
/* carlos */

.contenedor_principal {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "titulo_one titulo_two"
        "contenido_one contenido_two";
}

@media (max-width: 680px) {
    .contenedor_principal {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
            "titulo_one "
            "contenido_one"
            "titulo_two"
            "contenido_two";
    }

    .titulo1 {
        color: black;
        font-weight: 600;
        grid-area: titulo_one;
        text-align: center;
    }

    .titulo2 {
        color: black;
        font-weight: 600;
        grid-area: titulo_two;
        text-align: center;
    }
}

/* Llamado de titulos */

.titulo1 {
    color: black;
    grid-area: titulo_one;
    text-align: center;
}

.titulo2 {
    color: black;
    grid-area: titulo_two;
    text-align: center;
}

/* llamado de contenedores hijos */

.contenido_1 {
    grid-area: contenido_one;

    /* Contenido interior */
    gap: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.contenido_2 {
    grid-area: contenido_two;

    /* Contenido interior */

    gap: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

/* estilos contenedores hijos */

.contenedor_principal_disponibles {
    margin: 5px;
    padding: 2px;
    border: solid 2px;
    border-color: rgba(86, 86, 86, 0.737);
    border-radius: 10px;
    background-color: white;
}

.conductores_disponibles {
    color: black;
    margin: 2px;
    border: solid 2px;
    border-color: rgba(82, 76, 76, 0.466);
    border-radius: 25px;
}

.contenedor_principal_en_servicio {
    margin: 5px;
    padding: 2px;
    border: solid 2px;
    border-color: rgba(86, 86, 86, 0.737);
    border-radius: 10px;
    background-color: white;
}

.conductores_servicio {
    color: black;
    margin: 2px;
    border: solid 2px;
    border-color: rgba(82, 76, 76, 0.466);
    border-radius: 25px;
}

#tbl_disponibles {
    display: flex;
    justify-content: center;
}

#tbl_en_servicio {
    display: flex;
    justify-content: center;
}
</style>