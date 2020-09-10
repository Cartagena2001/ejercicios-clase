<template>
<div id="aplicacion">
  <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
    <h4 class="mt-5 text-center">Ejercicio 1</h4>

    <div class="cotainter mt-4 mb-5">
      <div class="row d-flex justify-content-center">

        <div class="col-5 mr-3" id="back">
          <h4 class="mt-3">Suma</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorA">
          <p>Valor de B:</p>
          <input type="number" class="form-control" v-model.number="ValorB">
          <h4>{{ suma() }}</h4>
        </div>

        <div class="col-5 " id="back" >
          <h4 class="mt-3">Resta</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorRestA">
          <p>Valor de B:</p>
          <input type="number" class="form-control" v-model.number="ValorRestB">
          <h4>{{ resta() }}</h4>
        </div>

        <div class="col-5 mt-4 mr-3" id="back">
          <h4 class="mt-3">Multiplicación</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorMultiA">
          <p>Valor de B:</p>
          <input type="number" class="form-control" v-model.number="ValorMultiB">
          <h4>{{ multiplicacion() }}</h4>
        </div>

        <div class="col-5 mt-4" id="back">
          <h4 class="mt-3">División</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorDiviA">
          <p>Valor de B:</p>
          <input type="number" class="form-control" v-model.number="ValorDiviB">
          <h4>{{ divicion() }}</h4>
        </div>
        
         <div class="col-5 mt-4 mr-3" id="back">
          <h4 class="mt-3">Modulo o valor absoltuo</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorModuloA">
          <h4>{{ modulo() }}</h4>
        </div>

        <div class="col-5 mt-4" id="back">
          <h4 class="mt-3">Potencia</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorExpoA">
          <p>Valor de B (Exponente):</p>
          <input type="number" class="form-control" v-model.number="ValorExpoB">
          <h4>{{ potencia() }}</h4>
        </div>

        <div class="col-5 mt-4 mr-3" id="back">
          <h4 class="mt-3">Raíz cuadrada</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorCuadradaA">
          <h4>{{ cuadrada() }}</h4>
        </div>

        <div class="col-5 mt-4" id="back">
          <h4 class="mt-3">Raíz cubica</h4>
          <p>Valor de A:</p>
          <input type="number" class="form-control" v-model.number="ValorCubicaA">
          <h4>{{ cubica() }}</h4>
        </div>

      </div>
    </div>

</div>
</template>

<script>
export default {
  name: "Ejercicio1",
  data() {
    return{
    ValorA:0,
    ValorB:0,

    ValorRestA:0,
    ValorRestB:0,

    ValorMultiA:0,
    ValorMultiB:0,

    ValorDiviA:0,
    ValorDiviB:0,

    ValorModuloA:0,

    ValorExpoA:0,
    ValorExpoB:0,

    ValorCuadradaA:0,

    ValorCubicaA:0,
    }
    
  },
  methods:{
    suma:function(){
      return "La respuestas es: " + (this.ValorA+this.ValorB);
    },
    resta:function(){
      return "La respuestas es: " + (this.ValorRestA-this.ValorRestB);
    },
    multiplicacion:function(){
      return "La respuestas es: " + (this.ValorMultiA*this.ValorMultiB);
    },
    divicion:function(){
      return "La respuestas es: " + (this.ValorDiviA/this.ValorDiviB);
    },
    modulo:function(){
      return "La respuestas es: " + (Math.abs(this.ValorModuloA));
    },
    potencia:function(){
      return "La respuestas es: " + (Math.pow(this.ValorExpoA, this.ValorExpoB));
    },
    cuadrada:function(){
      return "La respuestas es: " + (Math.sqrt(this.ValorCuadradaA));
    },
    cubica:function(){
      return "La respuestas es: " + (Math.pow(this.ValorCubicaA, 1/3));
    },
  },
};
</script>

<style>
#back{
  background-color: #1F2430;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #999;
  color: white;
}
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
</style>