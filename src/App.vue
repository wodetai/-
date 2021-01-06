<template>
  <div id="app">
    <el-row style="height: 100%;">
      <el-col :span="7" :offset="2" style=" height: 100vh; position: relative;">
        <poster ref="poster"></poster>
      </el-col>
      <el-col :span="11" :offset="2" style=" height: 100vh; ">
        <styleSetting></styleSetting>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import poster from "./components/poster";
import styleSetting from "./components/styleSetting";

export default {
  name: "App",
  components: {
    poster,
    styleSetting
  },
  methods: {}
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #ede3e7;
}
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

<style scoped>
/* #app {
  width: 100%;
  height: 100% ces;
} */
</style>
