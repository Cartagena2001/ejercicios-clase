<template>
  <div>
      <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
      <h4 class="mt-5 text-center">Ejercicio 8</h4>

      <div class="container">
        <div class="row">
          <div class="col-7 mt-4">
            <input type="number" class="form-control" placeholder="Ingrese notas" @click="alert = false" v-model="number">
            <button type="button" class="btn btn-success mt-3"  @click="addToArray(), findNullNumber()">Ingresar nota</button>
          </div>
          <div class="alert alert-danger col-9 mt-4 ml-3" role="alert">
              {{alertText}}
          </div>
          <div class="col-12">
            <small id="emailHelp" class="form-text text-muted">Lista de notas es: {{integerNumbers}}</small>
          </div>
          <!-- <div class="col-9 mt-4">
            <p><b>Promedio general del grupo: </b>{{prom}}</p>
            <p><b>Número de estudiantes cuya calificación fue mayor o igual a 6.0: </b>{{note}}</p>
            <p><b>Porcentaje de estudiantes aprobados: </b>{{aprob}}%</p>
          </div> -->
          <div class="card ml-3 mt-3" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Promedio general del grupo: </b>{{prom}}</li>
              <li class="list-group-item"><b>Número de estudiantes cuya calificación fue mayor o igual a 6.0: </b>{{note}}</li>
              <li class="list-group-item"><b>Porcentaje de estudiantes aprobados: </b>{{aprob}}%</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      integerNumbers: [],
      number: "",
      alert: false,
      alertText: "",
      prom: 0,
      note: 0,
      aprob: 0,
    };
  },
  computed: {},
  methods: {
    addToArray: function () {
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
            this.alertText = "No es un numero valido";
          } else {
            this.integerNumbers.push(parseInt(this.number));
            this.number = "";
          }
        }
      }
    },
    findNullNumber: function () {
      this.prom = 0;
      this.note = 0;
      this.aprob = 0;
      let sumando = 0;
      let porcent = 0;
      let numberOnly = 0;
      this.integerNumbers.forEach((numero, index) => {
        sumando += numero;
        if (numero >= 6) {
          this.note = this.note + 1;
        }
        numero >= 6 ? (numberOnly = numberOnly + 1) : "";
      });
      sumando = sumando / this.integerNumbers.length;
      this.prom = sumando;
      porcent = (numberOnly * 100) / this.integerNumbers.length
      this.aprob = porcent
      console.log(numberOnly);
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