<template>
  <div class="poster_box">
    <div class="bg_box">
      <food>
        <div
          slot="header"
          class="poster_name"
          :style="{
            color: $store.state.posterStyle['menu']
              ? $store.state.posterStyle['menu'].color
              : '',
            fontFamily: $store.state.posterStyle['menu']
              ? $store.state.posterStyle['menu'].font
              : ''
          }"
        >
          {{ poster.name }}
        </div>
      </food>
      <food
        :foodList="poster.foodData"
        :classify="posterStyle[1]"
        :food="posterStyle[2]"
      ></food>
      <food>
        <div
          slot="header"
          class="price"
          :style="{
            color: $store.state.posterStyle['total']
              ? $store.state.posterStyle['total'].color
              : '',
            fontFamily: $store.state.posterStyle['total']
              ? $store.state.posterStyle['total'].font
              : ''
          }"
        >
          <div class="total">原价: {{ poster.price.total }}</div>
          <div class="preferential">
            优惠价: {{ poster.price.preferential }}
          </div>
        </div>
      </food>
    </div>
    <el-row type="flex" justify="center">
      <el-button type="primary">生成图片</el-button>
    </el-row>
  </div>
</template>

<script>
import food from "./food";

export default {
  components: {
    food
  },
  data() {
    return {
      posterStyle: [
        {
          key: "menu",
          font: null,
          color: "#eef7f2"
        },
        {
          key: "classify",
          font: null,
          color: "#cc163a"
        },
        {
          key: "food",
          font: null,
          color: "#eef7f2"
        },
        {
          key: "total",
          font: null,
          color: "#eef7f2"
        }
      ],
      formInline: null,
      value: "",
      poster: this.$store.state.poster
    };
  },
  computed: {
    // total() {
    //   return
    // },
    // fontColor() {
    //   return this.$store.state.posterStyle.color;
    // },
    // font() {
    //   return this.$store.state.posterStyle.font;
    // }
  },
  watch: {
    // fontColor() {
    //   this.fontStyle(this.$store.state.posterStyle);
    // },
    // font() {
    //   this.fontStyle(this.$store.state.posterStyle);
    // }
  },
  mounted() {
    this.poster.foodData.forEach(item => {
      item.foodList.forEach(vaule => {
        this.poster.price.total += vaule.unitPrice;
      });
    });

    this.poster.price.preferential = this.poster.price.total * 0.8;
    // console.log(this.poster.price);
  },
  methods: {
    fontStyle(posterStyle) {
      switch (posterStyle.posterType) {
        case "general":
          this.posterStyle.forEach((item, index) => {
            if (posterStyle.font) {
              this.posterStyle[index].font = posterStyle.font;
            }
            if (posterStyle.color) {
              this.posterStyle[index].color = posterStyle.color;
            }
          });
          console.log(this.posterStyle);
          break;
        case "menu":
          if (posterStyle.font) {
            this.posterStyle[0].font = posterStyle.font;
          }
          if (posterStyle.color) {
            this.posterStyle[0].color = posterStyle.color;
          }
          console.log(this.posterStyle);
          break;
        case "classify":
          if (posterStyle.font) {
            this.posterStyle[1].font = posterStyle.font;
          }
          if (posterStyle.color) {
            this.posterStyle[1].color = posterStyle.color;
          }
          console.log(this.posterStyle);
          break;
        case "food":
          if (posterStyle.font) {
            this.posterStyle[2].font = posterStyle.font;
          }
          if (posterStyle.color) {
            this.posterStyle[2].color = posterStyle.color;
          }
          console.log(this.posterStyle);
          break;
        case "total":
          if (posterStyle.font) {
            this.posterStyle[3].font = posterStyle.font;
          }
          if (posterStyle.color) {
            this.posterStyle[3].color = posterStyle.color;
          }
          console.log(this.posterStyle);
          break;
      }
    }
  }
};
</script>

<style scoped>
.poster_box {
  width: 400px;
  margin-top: 70px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  position: relative;
}

.bg_box {
  width: 100%;
  height: 750px;
  padding: 50px 40px 20px 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: url(../assets/bg1.jpg) no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}

.poster_name {
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
  color: #eef7f2;
}

.price {
  text-align: center;
  margin-top: 20px;
}

.price div {
  display: inline-block;
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
