<template>
  <div id="app">
    <ul>
      <li v-for="item in items" ><a @click="$goroute(item.route)">{{item.val}}</a> </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      items:[
        {val:'胡萝卜','route':'/home'},
        {val:'大白菜','route':'/page01'},
        {val:'水蜜桃','route':'/page02'},
      ]
    }
  }
}
</script>

<style>
  .text-center {
    text-align: center;
  }
  .spacing {
    margin-top: 30px;
  }
  .red {
    color: darkred;
  }
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }
</style>
