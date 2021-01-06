<template>
  <div class="style_box">
    <div class="style_setting">风格设置</div>
    <el-row style="padding: 20px;">
      <el-form
        :model="formInline"
        class="demo-form-inline"
        label-position="right"
        label-width="200px"
      >
        <el-form-item
          v-for="item in posterStyle"
          :key="item.key"
          :label="item.label"
        >
          <selectStyle :posterType="item.key"></selectStyle>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row style="padding: 20px;">
      <el-form
        :model="poster"
        class="demo-form-inline"
        label-position="right"
        label-width="100px"
      >
        <el-form-item
          label="菜单名称"
          prop="name"
          :rules="[
            { required: true, message: '请输入菜单名称', trigger: 'blur' }
          ]"
        >
          <el-input
            v-model="poster.name"
            placeholder="请输入菜单名称，按回车键确认"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="菜单分类"> </el-form-item>
      </el-form>
      <posterForm
        v-for="(item, index) in poster.foodData"
        :key="index"
        :foodData="item"
      ></posterForm>
    </el-row>
  </div>
</template>

<script>
import selectStyle from "./selectStyle";
import posterForm from "./posterForm";

export default {
  components: {
    selectStyle,
    posterForm
  },
  data() {
    return {
      poster: {
        name: this.$store.state.poster.name,
        foodData: this.$store.state.poster.foodData
      },
      posterStyle: [
        {
          key: "general",
          label: "总体设置<字体><颜色>"
        },
        {
          key: "menu",
          label: "菜单名称<字体><颜色>"
        },
        {
          key: "classify",
          label: "分类名称<字体><颜色>"
        },
        {
          key: "food",
          label: "菜品和价格<字体><颜色>"
        },

        {
          key: "total",
          label: "总价和优惠价<字体><颜色>"
        }
      ],
      value: "",
      formInline: null
    };
  },
  methods: {}
};
</script>

<style scoped>
.style_box::-webkit-scrollbar {
  display: none;
}
.style_box {
  margin-top: 50px;
  height: calc(100% - 100px);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgb(25, 153, 220);
  border-radius: 20px;
  overflow-y: auto;
}
.style_box .style_setting {
  /* display: inline-block; */
  font-weight: 600;
  font-size: 20px;
  color: #34495e;
  /* background: linear-gradient(90deg, #7f8c8d, #bdc3c7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
</style>
