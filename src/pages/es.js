export default {
  data(){
    return{
    arr1: [1,2,5],
    arr2: [],
    dom: this.$refs,
    name: '韦少强',
    }
  },
  methods: {
    wei(){
      // 扩展运算付
      this.arr2 = [...this.arr1];
      console.log(this.arr2);
      // this.arr2.push(7);
      // console.log(this.arr1);
    },
    rest(first,...arg){
      console.log(arg);
    },
    forRest(a,...arg){
      // for...of...运算符循环可以避免我们开拓内存空间
      for(let val of arg){
        console.log(val);
      }
    },
    test(...arg){
      console.log(arg[0]);
      console.log(arg[1]);
      console.log(arg[2]);
      console.log(arg[3]);
    },
    /**
     * [tmplStr 模板字符串]
     * @return {[type]} [description]
     */
    tmplStr(){
      console.log(this.dom.str.innerHTML.includes('es6'));
      this.dom.str.innerHTML = `我的名字叫做,${this.name},我在学习es6`;
    }
  },
  compoted: {
    /**
      *计算属性
     */
  },
  /**
   * Vue实例刚刚创建完成
   * @return {[type]} [description]
   */
  created(){
    // this.test(123,456,897);
    // this.wei();
    // this.rest(1,2,3,4,5,6,7);
    // this.forRest(0,12,34,56,42,37,64);
    // this.tmplStr();
  },
  /**
   * Vue实例挂载到根元素上
   * @return {[type]} [description]
   */
  mounted(){
    this.tmplStr();
  }
}
