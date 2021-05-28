<template>
  <div id="app">
    
    <Pager :total="total" :pageIndex="pageIndex" @changePage="handleChangePage"/>    
  </div>
  
</template>

<script>
import Pager from "./index";

export default {
  name: 'App',
  components: { Pager },
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

