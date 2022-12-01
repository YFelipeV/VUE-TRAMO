<template>
  
   <NavComponent></NavComponent> 
   <div class="about">
    <div class="mt-6">
        <img class=" mt-2 img-fluid imagen" src="../assets/gallery/2shawnanggg-kuVTWkSklJ0-unsplash.jpg" alt="">
        <div class="mt-3 d-flex justify-content-center flex-column container w-md-75">
            <h1 class="text-center mt-5 fs-2">Acerca de Nosotros</h1>
            <div class="w-100">
                <p class="text-center text-justify mt-4 fs-5  text-secondary">TRAMO es una aplicación que busca conectar de forma más
                    fácil y
                    segura a las personas que requieren de un servicio de transporte de carga para sus productos, No
                    solamente con enfoque en las ciudades, sino que también en el campo, debido a que en el departamento
                    del Cauca cerca del 60% de la población pertenece a zonas rurales.</p>
            </div>
        </div>
    </div>

    <section class="py-2">

        <div class="container mt-5">
            <div class="row align-items-center">
                <div class="col-md-5 text-center text-md-start order-1"><img class="img-fluid mb-4"
                        src="../assets/illustrations/ilustracionabout1.svg" width="650" alt="" /></div>
                <div class="col-md-6 text-center text-md-start offset-md-1 order-2">
                    <h6 class="fw-bold  lh-sm text-sm-center text-md-start display-6">Mision
                        <br />
                    </h6>
                    <p class="my-4 pe-xl-5 fon text-justify fs-5 text-secondary ">
                        Nuestra empresa, está enfocada en mejorar la agilidad al solicitar un servicio de transporte de
                        carga en el departamento
                        del Cauca, vinculando el sector transporte para impulsar su economía del sector.</p>
                </div>
            </div>
            </div>
            </section>
            <!-- end of .container-->
            <section>
                <div class="container">
                    <div class="row  text-md-start offset-md-1">
                        <div class="col-sm-12 col-md-6 order-2 text-center text-md-start">
                            <h6 class="fw-bold  lh-sm mt-5  text-sm-center text-md-start display-6">Vision</h6>
                            
                            
                            <p class="my-2 pe-xl-4  text-justify fs-5 text-secondary ">
                                En cinco años queremos visualizarnos como una de los mejores aplicativos a nivel
                                nacional y también como una de las
                                mejores empresas emprendedoras del país.</p>
                        </div>
                        <div class="col-sm-12 col-md-6 order-3">
                            <img class=" img-fluid" src="../assets/illustrations/ilustracion2.svg" width="350"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div class="container my-5 py-5">
                    <div class="row text-md-start offset-md-1">
                        <div class="col-sm-12 col-md-6  order-3 mt-5 py-5">
                            <img class="img-fluid w-md-100" src="../assets/illustrations/ilustracion3.svg" width="450" alt="">
                        </div>


                        <div class="col-sm-12 col-md-6 order-sm-4 order-md-5  text-center text-md-start py-5 my-5" >
                            <h2 class="mb-5 display-6 mt-5">Objetivo Principal</h2>
                            <p class="fon text-justify fs-5 text-secondary ">

                                El enfoque de TRAMO es cambiar el método tradicional de solicitar un servicio de carga,
                                brindando
                                mayor confianza a nuestros usuarios, campesinos y comerciantes. Así, antes de aceptar un
                                servicio
                                sabrán a quién están contratando, si tiene buenas recomendaciones y sobre todo sabrá el
                                precio que
                                le costará ese flete. El usuario no tendrá que regatear con el conductor porque todos
                                los precios
                                estarán regulados de acuerdo al trayecto y la cantidad de carga.
                            </p>
                        </div>


                    </div>

                </div>
            </section>
            
  </div>
   <footer-component></footer-component>
  
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'


import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'AboutView',
  components: {
    
    NavComponent,
    FooterComponent
  }
}
</script>
