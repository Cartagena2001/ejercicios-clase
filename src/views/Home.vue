<template>
  <div>
    <div id="header">
      <h2 class="text-center mt-5">Ejercicios para aplicación móvil</h2>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <router-link to="/ejercicio1"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 1
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio2"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 2
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio3"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 3
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio4"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 4
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio5"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 5
              </h3></router-link
            >
          </div>

          <div>
            <router-link to="/ejercicio6"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 6
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio7"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 7
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio8"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 8
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio9"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 9
              </h3></router-link
            >
          </div>
          <div>
            <router-link to="/ejercicio10"
              ><h3
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                id="hola"
              >
                Ejercicio 10
              </h3></router-link
            >
          </div>
        </div>
      </div>

      <footer class="page-footer font-small blue mt-5">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://www.facebook.com/chanba.cartajenamejia" target="blank"> Guillermo Cartagena</a>
        </div>
      </footer>

    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#header {
  margin-bottom: 50px;
}
#hola:hover {
  background-color: #0060c7;
  font-size: 150%;
}

</style>
