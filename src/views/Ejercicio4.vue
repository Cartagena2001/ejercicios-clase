<template>
  <div id="app">
    <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
      <h4 class="mt-5 text-center">Ejercicio 4</h4>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Calculadora salarial del gobierno</h3>
            <p>Las horas extras se calculan en función de la tabla mostrada. Cada trabajador puede tener como máximo 30 horas extras, si tiene más, solo se le pagaran las primeras 30. Los trabajadores con categoría mayor a
                3 no reciben este beneficio.</p>
          </div>
          <div class="col-6">
            <p>Salario</p>
            <input type="number" class="form-control" v-model.number="salario">
          </div>
          <div class="col-6">
            <p>horas extra trabajadas</p>
            <input type="number" class="form-control" v-model.number="horas">
          </div>
          <div class="col-6">
            <p>Categoria</p>
            <input type="number" class="form-control" v-model.number="categoria">
          </div>
          <div class="col-9 mt-3 text-center" id="categorias">
            <p><b>Categoria 1:</b> 40$ de horas extra</p>
            <p><b>Categoria 2:</b> 50$ de horas extra</p>
            <p><b>Categoria 3:</b> 85$ de horas extra</p>
          </div>
          <div class="text-center col-12 mt-4">
            <h4>Su salario total es: ${{ salarial }}</h4>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'Ejercicio4',
    data(){
      return{
        salario:0,
        categoria:0,
        horas:0,
        valordehoras: 0,
        subtotal:0,
        total: 0,
      }
    },
    computed:{
      salarial:function(){

        if(this.categoria == 1){
          if(this.horas <=30){
            this.valordehoras = 40;
            this.subtotal = this.horas*this.valordehoras;
            this.total = this.salario + this.subtotal;
            return this.total;
          }else{
            this.valordehoras = 40;
            this.subtotal = 30*this.valordehoras;
            this.total = this.salario + this.subtotal;
            return this.total;
          }
         
        }else if(this.categoria == 2){
          if(this.horas<=30){
            this.valordehoras = 50
            this.subtotal = this.horas*this.valordehoras;
            this.total = this.salario + this.subtotal; 
            return this.total;
           }else{
              this.valordehoras = 50
              this.subtotal = 30*this.valordehoras;
              this.total = this.salario + this.subtotal; 
              return this.total;
            }

        }else if(this.categoria == 3 ){
          if(this.horas<=30){
            this.valordehoras = 85;
            this.subtotal = this.horas*this.valordehoras;
            this.total = this.salario + this.subtotal;
            return this.total;
          }else{
            this.valordehoras = 85;
            this.subtotal = 30*this.valordehoras;
            this.total = this.salario + this.subtotal;
            return this.total;  
          }
          
        }else if(this.categoria >3){
          return this.salario;
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
#categorias{
  background-color: #1F2430;
  border-radius: 10px;
  color: white;
  height: 110px;
  margin-left: 50px;
  margin-top: 20px;
}
</style>