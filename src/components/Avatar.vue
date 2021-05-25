<template>
  <img 
    class="avatar-img"
    :src="url" 
    :style="{
      width: size + 'px',
      height: size + 'px'
  }">
</template>

<script>
export default {
    props:{
        url: {
            type: String,
            required: true
        },
        size:Number,
    }
}
</script>

<style scoped>
.avatar-img{
    border-radius: 50%;
    object-fit: cover; /*避免图片拉伸 */
    display: block;
}
</style>