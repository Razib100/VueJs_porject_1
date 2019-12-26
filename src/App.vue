<template>
 <div id="app" class="container">
   <div class="col-lg-12 mt-4 ict_layer">
     <h1>ICT Layer</h1>
     <h5>Mirpur-10,Dhaka,Bangladesh</h5>
   </div>
     <nav class="navbar navbar-expand-sm bg-light">
     <ul class="navbar-nav">
       <li class="nav-item">
         <router-link :to="{ name: 'Create' }" class="nav-link">Add Item</router-link>
       </li>
       <li class="nav-item">
         <router-link :to="{ name: 'Index' }" class="nav-link">All Items</router-link>
       </li>
     </ul>
   </nav>
   <transition name="fade">
     <div class="gap">
       <router-view></router-view>        
     </div>
   </transition>
 </div>
</template>

<script>

export default {
}
</script>

<style>
.ict_layer{
 text-align: center;
}
   .fade-enter-active, .fade-leave-active {
     transition: opacity .5s
   }
   .fade-enter, .fade-leave-active {
     opacity: 0
   }
   .gap {
     margin-top: 50px;
   }
</style>