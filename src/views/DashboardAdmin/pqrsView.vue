<template>

    <div>

        <!-- Carlos Start -->
        <div class="contenedor_principal_PQR">
            <div class="titulo5">Peteciones, quejas, reclamos y sugerencias</div>
            <div class="contenedor_PQR">
                <div class="PQR">
                    <table id="tablas-PQR">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" width="90px"></td>
                            <td>Felipe Arias</td>
                            <td>Calificación</td>
                        </tr>
                        <tr>
                            <td>3223 567 9878</td>
                            <td>
                                <img src="@/assets/icons/estrellas.svg"><img src="@/assets/icons/estrellas.svg"><img
                                    src="@/assets/icons/estrellas.svg"><img src="@/assets/icons/estrellas.svg"><img
                                    src="@/assets/icons/estrellas.svg">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">La aplicación funciona bien pero sería bueno agregarle@.</td>
                        </tr>
                    </table>
                </div>
                <div class="PQR">
                    <table id="tablas-PQR">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" width="90px"></td>
                            <td>Felipe Arias</td>
                            <td>Calificación</td>
                        </tr>
                        <tr>
                            <td>3223 567 9878</td>
                            <td>
                                <img src="@/assets/icons/estrellas.svg"><img src="@/assets/icons/estrellas.svg"><img
                                    src="@/assets/icons/estrellas.svg"><img src="@/assets/icons/estrellas.svg"><img
                                    src="@/assets/icons/estrellas.svg">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">La aplicación funciona bien pero sería bueno agregarle@.</td>
                        </tr>
                    </table>
                </div>
                <div class="PQR">
                    <table id="tablas-PQR">
                        <tr>
                            <td rowspan="2"><img src="@/assets/icons/usuario.svg" width="90px"></td>
                            <td>Felipe Arias</td>
                            <td>Calificación</td>
                        </tr>
                        <tr>
                            <td>3223 567 9878</td>
                            <td>
                                <img src="@/assets/icons/estrellas.svg"><img src="@/assets/icons/estrellas.svg"><img
                                    src="@/assets/icons/estrellas.svg"><img src="@/assets/icons/estrellas.svg"><img
                                    src="@/assets/icons/estrellas.svg">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">La aplicación funciona bien pero sería bueno agregarle@.</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        <!-- Carlos End -->

    </div>

</template>
  
<script>
export default {

}
</script>
  
<style scoped>
/* ________________________________________ QUEJAS Y SUGERENCIAS ________________________________________ */

.contenedor_principal_quejas_y_sugerencias {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "titulo_unico"
        "contenido_unico";
}

.titulo5 {
    grid-area: titulo_unico;
    text-align: center;
    font-weight: 600;
    color: black;
}

.contenedor_PQR {
    grid-area: contenido_unico;

    /* Contenido interior */
    gap: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
}

/* CONTENIDO DATOS CLIENTE */

.contenedor_principal_PQR {
    margin: 5px;
    padding: 2px;
    border: solid 2px;
    border-radius: 10px;
    border-color: rgba(86, 86, 86, 0.737);
}

.PQR {
    margin: 2px;
    border: solid 1px;
    border-color: rgba(82, 76, 76, 0.466);
    border-radius: 25px;
    background-color: white;
}

#tablas-PQR {
    justify-content: center;
    text-align: center;
    display: flex;
    color: black;
}
</style>