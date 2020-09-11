<template>
  <div>
      <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
      <h4 class="mt-5 text-center">Ejercicio 6</h4>

      <div class="container">
        <div class="row">
          <div class="col-7 mt-4">
            <input type="number" class="form-control" placeholder="Ingresar notas" @click="alert = false"
            v-model="number">
            <button type="button" class="btn btn-success mt-3" @click="addToArray(), findNullNumber()">Ingresar nota</button>
          </div>
          <div class="alert alert-danger col-9 mt-4 ml-3" role="alert">
           {{alertText}}
          </div>
          <div class="col-12">
            <small id="emailHelp" class="form-text text-muted">Lista de notas es: {{integerNumbers}}</small>
          </div>
          <div class="col-9 mt-4">
            <p><b>Frecuencia mas baja: {{minusFrec}}</b></p>
          </div>

           <div class="col-9">
            <div :id="index" :key="index" v-for="(item, index) in integerNumbersProc">
              Numero de alumnos con nota "{{index}}":
              <span style="margin-left: 10px">
                <b>{{item}}</b>
              </span>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
   name: 'Ejercicio6',
  data() {
    return {
      mess: "",
      integerNumbers: [],
      integerNumbersProc: [],
      number: "",
      alert: false,
      alertText: "",
      block: false,
      counter: 0,
    };
  },
  computed: {
    minusFrec: function () {
      let arr = this.integerNumbers
      var min = Math.min(...arr);
      return min
    },
  },
  methods: {
    addToArray: function () {
      if (this.block) {
        this.alert = true;
        this.alertText = "Ya no puedes ingresar mas notas";
      } else {
        if (this.number === "0") {
          this.mess = "Has indicado que ya no puedes agregar mas notas";
          this.block = true;
        } else {
          if (this.number > 10 || this.numer < 0) {
            this.alert = true;
            this.alertText = "Nota no valida";
          } else {
            if (this.integerNumbers.length === 10) {
              this.alert = true;
              this.alertText = "Ya ingresaste 10 numeros";
            } else {
              if (this.number === "") {
                this.alert = true;
                this.alertText = "No es una nota valido";
              } else {
                this.counter++;
                this.integerNumbers.push(parseInt(this.number));
                this.number = "";
              }
            }
          }
        }
      }
    },
    findNullNumber: function () {
      var array = this.integerNumbers;
      var repetidos = {};
      array.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
      });
      this.integerNumbersProc = repetidos;
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
</style>