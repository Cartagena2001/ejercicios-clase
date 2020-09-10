<template>
  <div id="app">
    <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
    <h4 class="mt-5 text-center">Ejercicio 3</h4>

    <div class="container mt-4 col-9">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Llatenria a tu costo</h5>
              <h6 class="card-subtitle mb-2 text-muted">aprovecha nustras grandes promociones</h6>
              <p class="card-text">
                Si se compran 4 llantas o menos, el precio por cada una es de
                $150.00 • Si se compran entre 5 y 10 llantas, el precio por cada una es de $125.00 • Si
                se compran más de 10 llantas, el precio por cada una es de $100.00
              </p>
            </div>
          </div>

          <h4 class="mt-3">llantas a comprar</h4>
          <input type="number" class="form-control mt-3" v-model.number="cantidad">
          <h4 class="mt-4">Precio total a pagar por compra ess: $ {{ llanteria  }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ejercicio3",
  data(){
    return{
      cantidad:0,
      precio:0,
      total:0,
    };
  },
  computed:{
    llanteria: function(){
      if(this.cantidad <= 4){

        this.precio = 150;
        this.total = this.cantidad*this.precio;
        return this.total;

      }else if(this.cantidad >5 && this.cantidad <=10){
        this.precio = 125;
        this.total = this.cantidad*this.precio;
        return this.total;

      }else if(this.cantidad >=11){
        this.precio = 100;
        this.total = this.cantidad*this.precio;
        return this.total;  
      }
    }
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
