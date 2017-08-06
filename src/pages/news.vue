<template lang="html">
  <div class="">
    我是news
  </div>
</template>

<script>
export default {
  data(){
    return{
      a: 1,
      b: 2,
      c: 3,
    }
  },
  //生命周期的尝试
  beforeCreate(){
    console.log(this.a);
  },
  created(){
    console.log(this.c);
  },
  beforeMount(){
    console.log(this.b);
  },
  mounted(){

  },
}
</script>

<style lang="less">
</style>
