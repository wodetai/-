<template>
  <div>
    <el-select
      v-model="posterStyle.font"
      placeholder="请选择"
      size="small"
      @change="fontStyle"
    >
      <el-option
        v-for="item in optionsFont"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="posterStyle.color"
      placeholder="请选择"
      size="small"
      @change="fontStyle"
    >
      <el-option
        v-for="item in optionsColor"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    posterType: {
      type: String
    }
  },
  data() {
    return {
      posterStyle: {
        font: null,
        color: null
      },
      optionsFont: [
        {
          value: "jiangxi",
          label: "江西拙楷2.0"
        },
        {
          value: "yegenyou",
          label: "叶根友刀锋黑草_5"
        },
        {
          value: "zihun35",
          label: "字魂35号-经典雅黑"
        },
        {
          value: "zihun64",
          label: "字魂64号-萌趣软糖体"
        },
        {
          value: "zihun176",
          label: "字魂176号-创粗圆"
        }
      ],
      optionsColor: [
        {
          value: "#eeb8c3",
          label: "姜红"
        },
        // {
        //   value: "#cc163a",
        //   label: "尖晶玉红"
        // },
        {
          value: "#d8e3e7",
          label: "云峰白"
        },
        {
          value: "#1781b5",
          label: "釉蓝"
        },
        {
          value: "#363433",
          label: "长石灰"
        },
        {
          value: "#f9e9cd",
          label: "米色"
        }
      ]
    };
  },
  computed: {
    // generalStyle() {
    //   return this.$store.state.posterStyle.posterType;
    // }
  },
  watch: {
    // generalStyle(newValue) {
    //   console.log(typeof newValue);
    //   if (newValue == "general") {
    //     // this.posterStyle = this.$store.state.posterStyle;
    //   }
    // }
  },
  methods: {
    fontStyle() {
      console.log(this.posterType);
      this.posterStyle.posterType = this.posterType;
      this.$store.commit("getPosterStyle", this.posterStyle);
      console.log(this.$store.state.posterStyle);
      // console.log(this.$store.state.posterStyle);
    }
  }
};
</script>
