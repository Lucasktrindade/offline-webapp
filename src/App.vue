<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'Showcase'}" class="link left">Offline Demo App</router-link>
      <router-link :to="{ name: 'Cart'}" class="link right">Carrinho</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #082659;
  color: #ffffff;
}

header .link {
  color: #ffffff;
  display: inline-block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.left {
  float: left;
}

.right {
  float: right;
}
</style>
