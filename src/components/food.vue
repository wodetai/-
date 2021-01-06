<template>
  <div class="">
    <slot name="header">
      <div
        class="dish_box"
        v-for="(item, index) in foodList"
        :key="item.type + index"
      >
        <div
          class="poster"
          :style="{
            color: $store.state.posterStyle['classify']
              ? $store.state.posterStyle['classify'].color
              : '',
            fontFamily: $store.state.posterStyle['classify']
              ? $store.state.posterStyle['classify'].font
              : ''
          }"
        >
          ·{{ item.type }}·
        </div>

        <div
          v-for="(value, index) in item.foodList"
          :key="item.type + value.foodName + index"
          :style="{
            color: $store.state.posterStyle['food']
              ? $store.state.posterStyle['food'].color
              : '',
            fontFamily: $store.state.posterStyle['food']
              ? $store.state.posterStyle['food'].font
              : ''
          }"
        >
          <div class="foodName">{{ value.foodName }}</div>
          <div class="foodNum">{{ value.unitPrice }} /例</div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    foodList: {
      type: Array
    },
    classify: {
      type: Object
    },
    food: {
      type: Object
    }
  }
};
</script>

<style scoped>
.poster {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  /* color: #cc163a; */
  /* margin-top: 10px; */
  margin-bottom: 10px;
}

.foodName,
.foodNum {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* color: #eef7f2; */
}

.foodName {
  width: 200px;
}
.foodNum {
  width: 100px;
}

.price div {
  margin-top: 20px;
  display: inline-block;
  /* color: #eef7f2; */
}

.price .total {
  font-size: 24px;
  font-weight: 400;
}

.price .preferential {
  font-size: 18px;
  font-weight: 400;
  margin-left: 20px;
}

@font-face {
  font-family: jiangxi;
  src: url(../assets/fonts/江西拙楷2.0.ttf);
}
@font-face {
  font-family: yegenyou;
  src: url(../assets/fonts/叶根友刀锋黑草_5.ttf);
}
@font-face {
  font-family: zihun35;
  src: url(../assets/fonts/字魂35号-经典雅黑.ttf);
}
@font-face {
  font-family: zihun64;
  src: url(../assets/fonts/字魂64号-萌趣软糖体.ttf);
}
@font-face {
  font-family: zihun176;
  src: url(../assets/fonts/字魂176号-创粗圆.ttf);
}
</style>
