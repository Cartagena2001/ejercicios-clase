<template>
  <div>
      <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
      <h4 class="mt-5 text-center">Ejercicio 10</h4>

      <div class="container mt-4">
        <div class="row">

          <div class="col-6">
            <p>Notas del estudiante 1</p>
            <input type="number" class="form-control mb-2" placeholder="Nota 1" v-model.number="notas.E1nota1">
            <input type="number" class="form-control mb-2" placeholder="Nota 2" v-model.number="notas.E1nota2">
            <input type="number" class="form-control mb-2" placeholder="Nota 3" v-model.number="notas.E1nota3">
          </div>
          <div class="col-6">
            <p>Notas del estudiante 2</p>
            <input type="number" class="form-control mb-2" placeholder="Nota 1" v-model.number="notas.E2nota1">
            <input type="number" class="form-control mb-2" placeholder="Nota 2" v-model.number="notas.E2nota2">
            <input type="number" class="form-control mb-2" placeholder="Nota 3" v-model.number="notas.E2nota3">
          </div>

          <div class="col-6 mt-3">
            <p>Notas del estudiante 3</p>
            <input type="number" class="form-control mb-2" placeholder="Nota 1" v-model.number="notas.E3nota1">
            <input type="number" class="form-control mb-2" placeholder="Nota 2" v-model.number="notas.E3nota2">
            <input type="number" class="form-control mb-2" placeholder="Nota 3" v-model.number="notas.E3nota3">
          </div>
          <div class="col-6 mt-3">
            <p>Notas del estudiante 4</p>
            <input type="number" class="form-control mb-2" placeholder="Nota 1" v-model.number="notas.E4nota1">
            <input type="number" class="form-control mb-2" placeholder="Nota 2" v-model.number="notas.E4nota2">
            <input type="number" class="form-control mb-2" placeholder="Nota 3" v-model.number="notas.E4nota3">
          </div>

          <div class="col-12 mt-3">
            <p class="text-center">Notas del estudiante 5</p>
            <input type="number" class="form-control mb-2" placeholder="Nota 1" v-model.number="notas.E5nota1">
            <input type="number" class="form-control mb-2" placeholder="Nota 2" v-model.number="notas.E5nota2">
            <input type="number" class="form-control mb-2" placeholder="Nota 3" v-model.number="notas.E5nota3">
          </div>
        </div>
        <button type="button" class="btn btn-success mt-3" @click="findNullNumber()">Ingresar notas</button>
      </div>
      <div class="alert alert-danger col-9 mt-4 ml-3" role="alert">
          {{alertText}}
      </div>
      <div class="col-9 mb-4">
            <div>
              <b>Mayor nota de examen 1:</b>
              <span style="margin-left: 10px">{{ex1Mayor}}</span>
            </div>
            <div>
              <b>Mayor nota de examen 2:</b>
              <span style="margin-left: 10px">{{ex2Mayor}}</span>
            </div>
            <div>
              <b>Mayor nota de examen 3:</b>
              <span style="margin-left: 10px">{{ex3Mayor}}</span>
            </div>
            <div style="margin-top: 20px">
              <b>Nota menor de los tres examenes:</b>
              <span style="margin-left: 10px">{{notaMenor}}</span>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Ejercicio10',
  data() {
    return {
      integerNumbers: [],
      number: "",
      alert: false,
      alertText: "",
      ex1Mayor: 0,
      ex2Mayor: 0,
      ex3Mayor: 0,
      notaMenor: 0,
      notas: {
        E1nota1: null,
        E1nota2: null,
        E1nota3: null,
        E2nota1: null,
        E2nota2: null,
        E2nota3: null,
        E3nota1: null,
        E3nota2: null,
        E3nota3: null,
        E4nota1: null,
        E4nota2: null,
        E4nota3: null,
        E5nota1: null,
        E5nota2: null,
        E5nota3: null,
      },
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
            this.alertText = "No es una nota valido";
          } else {
            this.integerNumbers.push(parseFloat(this.number));
            this.number = "";
          }
        }
      }
    },
    findNullNumber: function () {
      let paso = false;
      Object.keys(this.notas).forEach((propName) => {
        if (this.notas[propName] > 10 || this.notas[propName] < 0) {
          paso = false;
          this.alert = true;
          this.alertText = "La nota no es valida";
        } else {
          if (!!this.notas[propName]) {
            paso = true;
          } else {
            paso = false;
            this.alert = true;
            this.alertText = "Debes llenar todos los campos";
          }
        }
      });
      console.log(paso);
      if (!paso) {
      } else {
        let ex1 = [];
        let ex2 = [];
        let ex3 = [];
        let minNote = [];
        for (const property in this.notas) {
          minNote.push(this.notas[property]);
          if (
            property === "E1nota1" ||
            property === "E2nota1" ||
            property === "E3nota1" ||
            property === "E4nota1" ||
            property === "E5nota1"
          ) {
            ex1.push(this.notas[property]);
          } else {
            if (
              property === "E1nota2" ||
              property === "E2nota2" ||
              property === "E3nota2" ||
              property === "E4nota2" ||
              property === "E5nota2"
            ) {
              ex2.push(this.notas[property]);
            } else {
              if (
                property === "E1nota3" ||
                property === "E2nota3" ||
                property === "E3nota3" ||
                property === "E4nota3" ||
                property === "E5nota3"
              ) {
                ex3.push(this.notas[property]);
              }
            }
          }
        }
        this.ex1Mayor = Math.max(...ex1);
        this.ex2Mayor = Math.max(...ex2);
        this.ex3Mayor = Math.max(...ex3);
        this.notaMenor = Math.min(...minNote);
      }
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