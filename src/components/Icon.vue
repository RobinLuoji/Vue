<template>
    <i class="iconfont" :class="iconClass"></i>
</template>

<script>
const classMap = {
    guanbi: "icon-guanbi",
    bofang: "icon-bofang",
    kefu: "icon-kefu",
    shenfenzheng: "icon-shenfenzheng",
    home: "icon-shouye1"
}

export default {
    props: {
        type: {
            type: String,
            required: true
        }
    }, 
    computed: {
        iconClass() {
            return classMap[this.type]
        }
    },
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2574233_oqst2odiz8i.css";
</style>