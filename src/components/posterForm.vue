<template>
  <el-form
    :model="food"
    ref="foodForm"
    class="demo-form-inline"
    label-position="right"
    label-width="120px"
  >
    <el-form-item
      label="分类名称"
      prop="type"
      :rules="[
        { required: true, message: '分类名称不能为空', trigger: 'blur' }
      ]"
    >
      <el-input
        type="text"
        v-model="food.type"
        placeholder="请输入分类名称，按回车键确定"
        size="small"
        @keyup.enter.native="setPoster('foodForm')"
      ></el-input>
    </el-form-item>
    <el-row
      :gutter="20"
      v-for="(item, index) in food.foodList"
      :key="food.type + item + index"
      type="flex"
      justify="center"
      align="center"
    >
      <el-col :span="10" :offset="0">
        <el-form-item
          label="菜品名称"
          :key="item.key"
          :prop="'foodList.' + index + '.foodName'"
          :rules="{
            required: true,
            message: '菜品名称不能为空',
            trigger: 'blur'
          }"
        >
          <el-input
            type="text"
            v-model="item.foodName"
            placeholder=""
            size="small"
            @keyup.enter.native="setPoster('foodForm')"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10" :offset="0">
        <el-form-item
          label="菜品单价"
          :key="item.key"
          :prop="'foodList.' + index + '.unitPrice'"
          :rules="[
            { required: true, message: '单价不能为空' },
            { type: 'number', message: '单价必须为数字值' }
          ]"
        >
          <el-input
            type="text"
            @keyup.enter.native="setPoster('foodForm')"
            v-model.number="item.unitPrice"
            placeholder=""
            size="small"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4" :offset="0" class="btn">
        <el-button
          v-show="food.foodList.length <= 1"
          type="primary"
          icon="el-icon-plus"
          circle
          size="mini"
          @click="addFood(index, item.type)"
        ></el-button>
        <el-button
          v-show="index != 0 || food.foodList.length >= 3"
          type="danger"
          icon="el-icon-delete"
          circle
          size="mini"
          @click="removeFood(index, item.type)"
        ></el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: {
    foodData: {
      type: Object
    }
  },
  data() {
    return {
      food: JSON.parse(JSON.stringify(this.foodData)),
      value: "",
      formInline: {}
    };
  },
  methods: {
    // 添加菜品
    addFood(index, type) {
      if (!this.food.foodList) {
        this.food.foodList = [];
      }
      this.food.foodList.push({
        foodName: null,
        unitPrice: null
      });
    },
    // 删除菜品
    removeFood(index, type) {
      this.food.foodList.splice(index, 1);
    },
    // 更改菜单数据
    setPoster(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {};
          data.index = index;
          data.food = this.food;
          console.log(this.food);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.btn {
  padding-top: 7px;
  /* display: flex; */
  /* justify-content: center; */
}
</style>
