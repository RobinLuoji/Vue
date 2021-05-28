<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Avatar 
      url="https://avatars.githubusercontent.com/u/499550?s=88&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4" 
      :size="50" 
    />
    <Avatar 
      url="https://avatars.githubusercontent.com/u/664177?s=88&u=b213da9f4df34b2fc2063a2038dfd476e54ce4a5&v=4" 
      :size="100" 
    />
    <Icon type="home"/>
    <Pager :total="total" :pageIndex="pageIndex" @changePage="handleChangePage"/>    
  </div>
  
</template>

<script>
import Avatar  from "./components/Avatar";
import Icon from "./components/Icon";
import Pager from "./components/Pager";

export default {
  name: 'App',
  components: { Avatar,Icon,Pager },
  data(){
    return {
      total: 151,
      pageIndex:1
    }
  },
  methods: {
    handleChangePage(newPage, pageSize)
    {
      console.log(newPage, pageSize);
        this.pageIndex = newPage;
    }
  }
}
</script>

<style scoped>
  .iconfont {
    color: red;
    font-size: 16px;
  }
</style>
