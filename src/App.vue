<template>
  <div id="app">
    <nav>
      <router-link to="/">My To-Do List</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.about-page {
  text-align: left;
  padding: 30px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffd43b;
}
</style>
