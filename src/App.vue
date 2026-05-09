<template>
  <!-- Decorative circle Elements -->
  <div class="circle circle-purple"></div>
  <div class="circle circle-yellow"></div>
  <div class="circle circle-pink"></div>
  
  <!-- Site view -->
  <div class="centered">
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.centered {
  margin: 0 256px;
}

.circle {
  position: fixed;
  width: 18rem;
  height: 18rem;
  border-radius: 9999px;
  mix-blend-mode: multiply;
  filter: blur(4rem);
  opacity: 0.2;
}

.circle-purple {
  top: 5rem;
  left: 2.5rem;
  background-color: #d8b4fe;
  animation: circle 7s infinite;
}

.circle-yellow {
  top: 10rem;
  right: 2.5rem;
  background-color: #fde047;
  animation: circle 7s infinite 2s;
}

.circle-pink {
  bottom: 5rem;
  left: 50%;
  background-color: #fbcfe8;
  animation: circle 7s infinite 4s;
}

@media (prefers-color-scheme: dark) {
  .circle {
    mix-blend-mode: soft-light;
  }

  .circle-purple {
    background-color: var(--purple-600);
  }
  
  .circle-yellow {
    background-color: #713f12;
  }
  
  .circle-pink {
    background-color: #831843;
  }
}
</style>
