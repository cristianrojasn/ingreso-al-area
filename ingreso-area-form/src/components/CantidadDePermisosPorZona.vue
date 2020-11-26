<template>
    <div class="item">
        <div>
          <div>Permisos</div>
          <div>{{registers.length}}</div>
        </div>
        <div>
          <div>
            Trabajadores
          </div>
          <div>
            {{cantidadDeTrabajadores}}
          </div>
        </div>
    </div>
</template>

<script>
import Utf8ToAscii from '@/utils'
import db, {refTurn} from '@/db'

export default {
  name: "NumeroPorZona",
  components:{
  },
  props: ['zone'],
  data(){
    return {
      registers: []
    }
  },
  computed: {
    cantidadDeTrabajadores: function () {
      let suma = 0
      this.registers.forEach(item => {
        suma = suma + item.listadoTrabajadores.length
      })
      return suma
    }
  },
 watch: {
    zone: {
      // call it upon creation too
      immediate: true,
      handler(zone) {
        this.$bind('registers', refTurn.where('zona', '==', zone || '').where('status', '==', 2))
      },
    },
  },
  methods: {
  },
  firestore: {
    data: refTurn.where('status', '==', 2),
  }
}
</script>

<style scoped>
.admin{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
.item{
  padding:2px 20px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  flex-direction: row;
  flex-wrap: wrap;
}
.box{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
}
.mr-auto{
  margin-right:auto ;
}
@media screen and (min-width: 800px) {
    .box{
        width: 80%;
    }
}
@media screen and (max-width: 600px) {
    .admin{
        padding: 0px !important;
    }
    .item{
      width: 100%;
    }
}
</style>