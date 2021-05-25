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
    <Avatar 
      url="https://avatars.githubusercontent.com/u/664177?s=88&u=b213da9f4df34b2fc2063a2038dfd476e54ce4a5&v=4" 
      :size="100" 
    />
    
  </div>
  
</template>

<script>
import Avatar  from "./components/Avatar";

export default {
  name: 'App',
  components: { Avatar },
}
</script>
