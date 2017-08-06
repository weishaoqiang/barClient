<template>
<div class="tmpl">
  <!-- <button type="button" name="button" @click="getJson()">点击我</button> -->
  <ul>
    <li v-for="item in data" @click="getId(item)">
      <span :bind="item.name">{{item.name}}</span>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  methods: {
    getJson(){
      this.$http.get('http://114.55.66.232:8666/api/getShopsByCity',{
        params:{
          cityID: 1,
          pageSize: 10,
          curPage: 1,
          sortType: 1,
          orderColumn: 'openDate',
          key: ''
        }
      }).then(function(res){
        console.log(res.body.data.data);
        this.data = res.body.data.data;
      }, function(err){
        console.log(err);
      })
    },
    getId(item){
      console.log(item.id);
      return item.id;
    }
  },
  created(){
    this.getJson();
  }
}
</script>
<style lang="less">
  .tmpl {
    color: red;
  }
</style>
