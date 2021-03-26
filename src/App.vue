<template>
   <div class="container">
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
       <ul class="navbar-nav">
         <li class="nav-item">
         </li>
       </ul>
     </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
};
</script>

<style>
HomeComponent #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
