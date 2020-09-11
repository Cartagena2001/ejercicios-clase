<template>
  <div>
      <router-link to="/"> <button type="button" class="back">Back</button> </router-link>
      <h4 class="mt-5 text-center">Ejercicio 9</h4>

      <div style="margin-top: 10px" class="container">
          <small>Ingrese el monto de {{prod}} en el mes de {{mes}}</small>
          <input type="number" class="form-control mb-2" :placeholder="'Ingrese el monto de ' + prod"  v-model.number="number" onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;">
          <button type="button" class="btn btn-success mt-3" @click="addToArray()">Ingresar monto</button>
          <small v-show="alert" class="text-danger">{{alertText}}</small>
          <div style="margin-top: 20px">Lista de ventas: {{ventas}}</div>
          <div style="margin-top: 20px" id="datosdeMeses" class="text-center">
            <div>
              <br>
              <b>Monto total de las ventas del trimestre:</b>
              <span style="margin-left: 10px">${{monTotal}}</span>
            </div>
            <div style="margin-top: 20px">
              <b>monto total de las ventas de enero:</b>
              <span style="margin-left: 10px">${{monEnero}}</span>
            </div>
            <div style="margin-top: 0px">
              <b>monto total de las ventas de febrero:</b>
              <span style="margin-left: 10px">${{monFebrero}}</span>
            </div>
            <div style="margin-top: 0px">
              <b>monto total de las ventas de marzo:</b>
              <span style="margin-left: 10px">${{monMarzo}}</span>
            </div>
            <div style="margin-top: 20px">
              <b>Producto mas vendido en enero:</b>
              <span style="margin-left: 10px">{{prodEnero}}</span>
            </div>
            <div style="margin-top: 0px">
              <b>Producto mas vendido en febrero:</b>
              <span style="margin-left: 10px">{{prodFebrero}}</span>
            </div>
            <div style="margin-top: 0px">
              <b>Producto mas vendido en marzo:</b>
              <span style="margin-left: 10px">{{prodMarzo}}</span>
            </div>
            <br>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ventas: [],
      number: "",
      alert: false,
      alertText: "",
      par: 0,
      impar: 0,
      nulo: 0,
      prod: "Leche",
      mes: "Enero",
      counterr: 1,
      monTotal: 0,
      monMarzo: 0,
      monEnero: 0,
      monFebrero: 0,
      prodMarzo: null,
      prodEnero: null,
      prodFebrero: null,
    };
  },
  computed: {},
  methods: {
    addToArray: function () {
      this.counterr++;
      if (this.counterr === 1) {
        this.mes = "Enero";
        this.prod = "Leche";
        this.ventas.push(this.number);
        this.number = "";
      } else {
        if (this.counterr === 2) {
          this.mes = "Enero";
          this.prod = "Crema";
          this.ventas.push(this.number);
          this.number = "";
        } else {
          if (this.counterr === 3) {
            this.mes = "Enero";
            this.prod = "Queso";
            this.ventas.push(this.number);
            this.number = "";
          } else {
            if (this.counterr === 4) {
              this.mes = "Febrero";
              this.prod = "Leche";
              this.ventas.push(this.number);
              this.number = "";
            } else {
              if (this.counterr === 5) {
                this.mes = "Febrero";
                this.prod = "Crema";
                this.ventas.push(this.number);
                this.number = "";
              } else {
                if (this.counterr === 6) {
                  this.mes = "Febrero";
                  this.prod = "Queso";
                  this.ventas.push(this.number);
                  this.number = "";
                } else {
                  if (this.counterr === 7) {
                    this.mes = "Marzo";
                    this.prod = "Leche";
                    this.ventas.push(this.number);
                    this.number = "";
                  } else {
                    if (this.counterr === 8) {
                      this.mes = "Marzo";
                      this.prod = "Crema";
                      this.ventas.push(this.number);
                      this.number = "";
                    } else {
                      if (this.counterr === 9) {
                        this.mes = "Marzo";
                        this.prod = "Queso";
                        this.ventas.push(this.number);
                        this.number = "";
                      } else {
                        if (this.counterr === 10) {
                          this.ventas.push(this.number);
                          this.number = "";
                          this.calculo();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    calculo: function () {
      this.monTotal = this.ventas.reduce((a, b) => a + b, 0);
      /*Promedio de ventas al mes*/
      this.monEnero = this.ventas.slice(0, 3).reduce((a, b) => a + b, 0);
      this.monFebrero = this.ventas.slice(3, 6).reduce((a, b) => a + b, 0);
      this.monMarzo = this.ventas.slice(6, 9).reduce((a, b) => a + b, 0);
      /*Producto mas vendido al mes*/
      let en = Math.max(...this.ventas.slice(0, 3));
      let a = this.ventas.slice(0, 3);
      let enP = a.indexOf(en);
      if (enP == 0) {
        this.prodEnero = "Leche";
      } else {
        if (enP == 1) {
          this.prodEnero = "Crema";
        } else {
          if (enP == 2) {
            this.prodEnero = "Queso";
          }
        }
      }
      let fe = Math.max(...this.ventas.slice(3, 6));
      let b = this.ventas.slice(3, 6);
      let feP = b.indexOf(fe);
      if (feP == 0) {
        this.prodFebrero = "Leche";
      } else {
        if (feP == 1) {
          this.prodFebrero = "Crema";
        } else {
          if (feP == 2) {
            this.prodFebrero = "Queso";
          }
        }
      }
      let ma = Math.max(...this.ventas.slice(6, 9));
      let c = this.ventas.slice(6, 9);
      let maP = c.indexOf(ma);
      if (maP == 0) {
        this.prodMarzo = "Leche";
      } else {
        if (maP == 1) {
          this.prodMarzo = "Crema";
        } else {
          if (maP == 2) {
            this.prodMarzo = "Queso";
          }
        }
      }
      console.log(enP);
      console.log(feP);
      console.log(maP);
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
#datosdeMeses{
  background-color: #1F2430;
  color: white;
  box-shadow: 2px 2px 5px #999;
  border-radius: 5px;
}
</style>