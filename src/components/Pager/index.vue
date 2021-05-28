<template>
  <div class="pageContainer" v-if="totalPage > 1">
    <div class="my-size">
      每页
      <input
        type="number"
        class="my-page-ipt"
        min="10"
        max="100"
        step="10"
        :value="pageSize"
        @change="changeNum"
      />
      条，共{{ total }}条
    </div>

    <div>
    <a 
        @click="handleClick(pageIndex - 1)" 
        :class="{ disable: pageIndex === 1 }"
    >&lt;</a>

    <a :class="{ active: 1 === pageIndex }" @click="handleClick(1)">1</a>
    <span v-show="showLeft">...</span>
    <!-- 中间5页 -->
    <a
      v-for="(num, i) in midPages"
      :key="i"
      :class="{ active: num === pageIndex }"
      @click="handleClick(num)"
      >{{ num }}</a
    >

    <span v-show="showRight">...</span>
    <a
      :class="{ active: totalPage === pageIndex }"
      @click="handleClick(totalPage)"
      >{{ totalPage }}</a
    >
    <a
      :class="{ disable: pageIndex === totalPage }"
      @click="handleClick(pageIndex + 1)"
      >&gt;</a
    >
    </div>
  </div>
</template>

<script>
export default {
    props: {
        pageIndex: {
            type: Number,
            default: 1
        },
        total: {
            type:Number,
            default: 0
        },
        pageSize: {
            type:Number,
            default: 10
        }
        
    },
    data(){
        return {
            displayNum: 7
        }
    },
    computed:{
        midNum(){
        return Math.floor(this.displayNum/2);
        },
        totalPage(){
            return Math.ceil( this.total / this.pageSize);
        },
        midPages(){
            let numbers= [];
            for (let index = this.pageIndex - this.midNum; index <= this.pageIndex + this.midNum; index++) {
                if(index>1 && index<this.totalPage)
                    numbers.push(index);
            }
            return numbers;
        }, 
        showLeft(){
            return this.pageIndex - this.midNum - 1 > 1;
        },
        showRight() {
            return this.pageIndex + this.midNum + 1 < this.totalPage;
        },
    },
    methods: {
        handleClick(num){
            //console.log(num);
            if(num<1) num =1;
            if(num > this.totalPage) num = this.totalPage;
            if(num == this.pageIndex) return;
            this.$emit("changePage", num, this.pageSize);
        },
        changeNum(e){
            //console.log(e.target.value);
            this.pageSize = Number(e.target.value);
            this.handleClick(1, this.pageSize);
        }
    }
};
</script>

<style lang="less" scoped>
    @import "~@/style/var.less";
    .pageContainer {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
        color: @primary;
        margin: 0 5px;
        cursor: pointer;
        &.active {
        color: @words;
        cursor: text;
        font-weight: bold;
        }
        &.disable {
        color: @lightWords;
        cursor: not-allowed;
        }
    }
}

.my-size {
    color: @lightWords;
    margin: 1px 10px 0px 10px;
    font-size: 15px;
    input {
        width: 40px;
        border: 1px solid @lightWords;
        border-radius: 5px;
        margin: 2px;
        color: inherit;
    }
}
</style>