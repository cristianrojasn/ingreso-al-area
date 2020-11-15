<template>
    <div class="">
        <div>{{zone}}</div>
        {{data.filter(i => i.zona === zone).length}}
    </div>
</template>

<script>
import db from '@/db'
import Utf8ToAscii from '@/utils'

export default {
  name: "NumeroPorZona",
  components:{
  },
  props: ['zone'],
  data(){
    return {
      data: []
    }
  },
 watch: {
    zone: {
      // call it upon creation too
      immediate: true,
      handler(zone) {
          console.log('test', zone)
        this.$bind('data', db.collection('registers').where('status', '==', 2).where('zona', '==', zone || ''))
      },
    },
  },
  methods: {
  },
  firestore: {
    data: db.collection('registers').where('status', '==', 2),
  }
}
</script>

<style scoped>
.admin{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
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
</style>