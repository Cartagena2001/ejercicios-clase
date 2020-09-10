<template>
  <div id="app">
    <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
    <h4 class="mt-5 text-center">Ejercicio 2</h4>

    <div class="containter fluid">
      <div class="row">
        <div class="col ml-4 mt-3">
          <p class>● Ingrese su salario actual</p>

          <div class="input-group col-8">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              type="number"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
              v-model.number="salario"
            />
          </div>

          <div class="mt-3 col-11" id="salarios">
            <br>
            <p>Salario menor $300.00 ⇒ Incremento 12%.</p>
            <p>$300.00 ≤ Salario ≤ $500.00 ⇒ Incremento 8%.</p>
            <p>$500.00 menor Salario ≤ $800.00 ⇒ Incremento 7%.</p>
            <p>$800.00 menor Salario ⇒ Incremento 6%.</p>
            <br>
          </div>

          <div class="mt-3">
            <h4>El salario final es: ${{ MedirSalario }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ejercicio2",
  data() {
    return {
      salario: 0,
      salarioTotal: 0,
    };
  },
  computed: {
    MedirSalario: function(){
      if(this.salario < 300){
        let resta = this.salario * 0.12;
        this.salarioTotal = this.salario + resta;
        return this.salarioTotal;
      }else if(this.salario >= 300 || this.salario <= 500){
        let resta = this.salario * 0.08;
        this.salarioTotal = this.salario + resta;
        return this.salarioTotal;
      }else if(this.salario > 500 || this.salario <= 800){
        let resta = this.salario * 0.07;
        this.salarioTotal = this.salario + resta;
        return this.salarioTotal;
      }else if(this.salario > 800){
          let resta = this.salario * 0.06;
          this.salarioTotal = this.salario + resta;
          return this.salarioTotal;
      }
    }
  },
};
</script>

<style>
#salarios {
  background-color: #1F2430;
  border-radius: 9px;
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