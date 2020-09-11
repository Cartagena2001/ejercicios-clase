<template>
  <div>
    <div id="header">
      <h2 class="text-center mt-5">Ejercicios para aplicación móvil</h2>
    </div>

    <div class="container">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/ejercicio1"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 1
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio2"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 2
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio3"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 3
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio4"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 4
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio5"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 5
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio6"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 6
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio7"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 7
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio8"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 8
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio9"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 9
            </h3></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/ejercicio10"
            ><h3 type="button" class="btn btn-lg btn-block" id="buttuum">
              Ejercicio 10
            </h3></router-link
          >
        </li>
      </ul>
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
#buttuum {
  background-color: #1f2430;
  color: white;
  text-decoration-style: solid;
}
</style>
