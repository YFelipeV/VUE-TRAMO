<template>
    <div style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
            style="height: 100%; width: 100%;">
            <path d="M-1.58,23.19 C327.99,297.53 371.44,-79.44 501.80,87.32 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #161627;"></path>
        </svg></div>
        <footer class="footer">
      <div class="footer__container container-fluid ">
        <div class="row d-flex pb-md-5">
          <div class="col-12 col-md-6 col-xl-4 text-center text-md-start newsletter ps-md-5">
            <img  src="@/assets/favicon/negativo.png" class="footer__img " > 
            <ul class="footer__list my-4 text-center">
              <li class="footer__list-item me-2">
                <a href="#" class="footer__list-link">
                  <img src="../assets/icons/facebook.svg" width="24px" class="ms-2" alt="">
                </a>
              </li>
              <li class="footer__list-item me-2">
                <a href="#" class="footer__list-link">
                  <img src="../assets/icons/instagram.svg" width="24px" class="ms-2" alt="">
                </a>
              </li>
              <li class="footer__list-item me-2">
                <a href="#" class="footer__list-link">
                  <img src="../assets/icons/twitter.svg" width="24px" class="ms-2" alt="">
                </a>
              </li>
              <li class="footer__list-item me-2">
                <a href="#" class="footer__list-link">
                  <img src="../assets/icons/whatsapp.svg" width="24px" class="ms-2" alt="">
                </a>
              </li>
              <li class="footer__list-item me-2">
                <a href="#" class="footer__list-link">
                  <img src="../assets/icons/youtube.svg" width="24px" class="ms-2" alt="">
                </a>
              </li>
            </ul>
            <div class="eslogan-footeer mt-3">
              <p>"Llegamos a todos los rincones <br> del pais, para sacarte de <br> apuros en cualquier situación"</p>
            </div>
          </div>


          <div class="col-12 col-md-6 col-xl-4 text-center text-md-start ">
            <h6 class="footer__title">Navegación</h6>
            <ul class="footer__list">
              <li class="footer__list-item">
                <img src="../assets/icons/back.svg" alt="">
                <a href="" class="footer__list-link ms-3">Inicio</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/back.svg" alt="">
                <a href="" class="footer__list-link ms-3">Acerca de nosotros</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/back.svg" alt="">
                <a href="" class="footer__list-link ms-3">Testimonios</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/back.svg" alt="">
                <a href="" class="footer__list-link ms-3">Ayuda</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/back.svg" alt="">
                <a href="" class="footer__list-link ms-3">Desarrolladores</a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6 col-xl-4 text-center text-md-start ">
            <h6 class="footer__title">Contactanos</h6>
            <ul class="footer__list">
              <li class="footer__list-item">
                <img src="../assets/icons/geo.svg" alt="">
                <a href="" class="footer__list-link ms-1">Crra 5 #6-67 CTPI SENA Norte</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/email.svg" alt="">
                <a href="" class="footer__list-link ms-1">TramoAdmin@gmail.com</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/telephone.svg" alt="">
                <a href="" class="footer__list-link ms-1">+57 3235234567</a>
              </li>
              <li class="footer__list-item">
                <img src="../assets/icons/telephone.svg" alt="">
                <a href="" class="footer__list-link ms-1">+57 3235234567</a>
              </li>
            </ul>
          </div>



        </div>
        <hr class="footer__divider">

        <div class="footer__bottom w-100 text-center">
          <p class="copyright text-center">&copy; 2022 <span class="h6 text-white-50">TRAMO</span>. Todos los derechos
            reservados</p>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent'
    
}
</script>
<style scoped>
i {
    font-size: 2rem;
}

.footer {
    padding: 3rem 0rem 1rem;
    background-color: #161627;
    color: #ffffff;
    font-size: 1rem;
}

.footer__container {
    max-width: 116rem;
    margin: auto;
    padding: 0 1.5rem;
}

.footer__title {
    font-size: 1.5rem;
    color: #e79d27;
    font-weight: 500;
    margin-bottom: 2rem;
}

.footer__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
}

.footer__list-item {
    list-style: none;
    display: flex;
    align-items: center;
}

.footer__list-link {
    text-decoration: none;
    color: inherit;
    transition: color .25s;
}
.footer__img{
  width: 60%;
}

.footer__list-link:hover {
    color: #e7d127;
    text-decoration: none;
}

.newsletter__form {
    display: flex;
    margin-bottom: 1rem;
}

.newsletter__form-input {
    max-width: 300px;
    height: 40px;
    border: none;
    padding-left: .7rem;
    outline: none;
    border-radius: 20px;
}

.newsletter__form-btn {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    color: 151823;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -40px;
    transition: background-color .25s, color .25s;
    background-color: #ffd000;
}

.newsletter .footer__list {
    flex-direction: row;
}

.footer__divider {
    margin: 1.5rem 0rem 1rem;
    border: none;
    border-top: 1px solid rgba(252, 255, 255, .1);
}

.footer__bottom {
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
}

.footer__bottom .footer__list {
    flex-direction: row;
}

.footer__list img:hover {
    filter: invert(10%) sepia(62%) saturate(2406%) hue-rotate(335deg) brightness(92%) contrast(88%);

}

.eslogan-footeer {
    background-color: #292c3f;
    border-radius: 30px;
    padding: 20px;
    max-width: 300px;
}

.img_descarga {
    border-radius: 30px;
    box-shadow: 11px 22px 21px -6px rgba(242, 200, 14, 0.47);
}
</style>