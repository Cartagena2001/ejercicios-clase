<template>
  <div>
    <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
    <h4 class="mt-5 text-center">Ejercicio 5</h4>

    <div class="container">
      <div class="row">
        <div class="col-11 mt-3">
          <h5>Ingresar cantidad de estudiantes</h5>
          <input type="number" class="form-control mb-4" placeholder="Cantidad de estudiantes" v-model.number="cantidadA">
          <input type="number" class="form-control" placeholder="Ingresar notas" v-model="nota">
          <button type="button" class="btn btn-success mt-3" @click="agregarArray(), evaluarNotas()">Ingresar notas</button>
        </div>
        <div class="alert alert-danger col-9 mt-4 ml-3" role="alert">
           {{alertText}}
        </div>
        <div class="col-12">
            <small id="emailHelp" class="form-text text-muted">Lista de notas es: {{Arrya}}</small>
        </div>
        <div class="col-7 mt-3">
          <p><b>1. . . 3.9: </b> {{ de1a3 }}</p>
          <p><b>4. . . 5.9: </b> {{ de4a5 }}</p>
          <p><b>6. . . 7.9: </b> {{ de6a7 }}</p>
          <p><b>8. . . 8.9: </b> {{ de8a8 }}</p>
          <p><b>9. . . 10.0: </b> {{ de9a10 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Ejercicio5',
    data(){
      return{
        cantidadA:0,
        nota: "",
        Arrya:[],
        
        de1a3:0,
        de4a5:0,
        de6a7:0,
        de8a8:0,
        de9a10:0,

        alert: false,
        alertText: "",
      }
    },
    methods:{
        agregarArray: function () {
        if (this.Arrya.length === this.cantidadA) {
          this.alert = true;
          this.alertText = "Ya ingresaste " + this.cantidadA + " numeros";
          } else {
            if (this.nota === "" || this.nota >10 || this.nota <1) {
              this.alert = true;
              this.alertText = "No es un numero valido, Verifique que sea menor o igual a 10 o que no sea negativo.";
            } else {
              this.Arrya.push(parseInt(this.nota));
              this.nota = "";
            }
          }
        },

        evaluarNotas: function(){
          this.de1a3 = 0;
          this.de4a5 = 0;
          this.de6a7 = 0;
          this.de8a8 = 0;
          this.de9a10 = 0;
          let sumando = 0;
          this.Arrya.forEach((numero, index) => {
            sumando += numero;
            if(numero >= 1 && numero <=3.99){
              this.de1a3 = this.de1a3 + 1;
            }else if(numero >=4 &&  numero <= 5.9){
              this.de4a5 = this.de4a5 + 1;
            }else if(numero >=6 && numero <= 7.9){
              this.de6a7 = this.de6a7 + 1; 
            }else if(numero >=8 && numero <=8.9){
              this.de8a8 = this.de8a8 + 1;   
            }else if(numero >=9 && numero <=10){
              this.de9a10 = this.de9a10 + 1;
            }
          });
        },
    },
    computed:{

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