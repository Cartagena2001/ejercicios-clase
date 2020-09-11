<template>
  <div>
      <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
      <h4 class="mt-5 text-center">Ejercicio 7</h4>

      <div class="container">
        <div class="row">
          <div class="col-9 mt-4">
            <input type="number" class="form-control" placeholder="Ingresar numeros"  v-model="number" onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;">
            <button type="button" class="btn btn-success mt-3" @click="agregarArray(), buscarNumeros()">Ingresar numero</button>
          </div>
          <div class="alert alert-danger col-9 mt-4 ml-3" role="alert">
           {{alertText}}
          </div>
          <div class="col-12">
            <small id="emailHelp" class="form-text text-muted">Lista de numeros es: {{integerNumbers}}</small>
          </div>
          <div class="col-10 mt-4 text-center" id="datosNumeros">
            <br>
            <p><b>Cantidad de pares: {{par}}</b></p>
            <p><b>Cantidad de impares: {{impar}}</b></p>
            <p><b>Cantidad de nulos: {{nulo}}</b></p>
            <br>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Ejercicio7',
    data(){
      return{
        integerNumbers: [],
        number: "",
        alert: false,
        alertText: "Solo puede ingresar 10 numeros",
        par: 0,
        impar: 0,
        nulo: 0,
      }
    },
    computed:{},
    methods:{
      agregarArray: function () {
        if (this.integerNumbers.length === 10) {
          this.alert = true;
          this.alertText = "Ya ingresaste 10 numeros";
        } else {
          if (this.number === "") {
            this.alert = true;
            this.alertText = "No es un numero valido";
          } else {
            this.integerNumbers.push(parseInt(this.number));
            this.number = "";
          }
        }
      },
      buscarNumeros: function () {
      this.par = 0;
      this.impar = 0;
      this.nulo = 0;
      this.integerNumbers.forEach((numero, index) => {
        if (numero % 2) {
          this.impar = this.impar + 1;
        } else {
          if (numero == 0) {
            this.nulo = this.nulo + 1;
          } else {
            this.par = this.par + 1;
          }
        }
      });
      },
    },
};
</script>

<style>
.back{
  background-color: black;
  color: white;
  border: none;
  width: 100%;
  height: 50px;
  font-family:Verdana,Helvetica;
  font-size:20px;
}
.back:hover{
  background-color: #1F2430;
  color: white;
  border: none;
  width: 100%;
  height: 50px;
  font-family:Verdana,Helvetica;
  font-size:20px;
}
#datosNumeros{
  background-color: #1F2430;
  color: white;
  box-shadow: 2px 2px 5px #999;
  border-radius: 5px;
  margin-left: 40px;
}
</style>