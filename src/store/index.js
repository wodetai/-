import Vue from "vue";
import Vuex from "vuex";

//挂载Vuex
Vue.use(Vuex);

//创建VueX对象
const store = new Vuex.Store({
  state: {
    poster: {
      name: "十人套餐",
      foodData: [
        {
          type: "冷菜",
          foodList: [
            {
              foodName: "香酥烤子鱼",
              unitPrice: 78
            }
          ]
        },
        {
          type: "热菜",
          foodList: [
            {
              foodName: "黑松露手剥河虾仁",
              unitPrice: 268
            }
          ]
        },
        {
          type: "汤",
          foodList: [
            {
              foodName: "奶汤天目鱼头(配鱼头)",
              unitPrice: 258
            }
          ]
        },
        {
          type: "点心",
          foodList: [
            {
              foodName: "鲜肉小笼包",
              unitPrice: 78
            }
          ]
        }
      ],
      price: {
        total: 0,
        preferential: 0
      }
    },
    posterStyle: {
      menu: {
        key: "menu",
        font: null,
        color: "#eef7f2"
      },
      classify: {
        key: "classify",
        font: null,
        color: "#cc163a"
      },
      food: {
        key: "food",
        font: null,
        color: "#eef7f2"
      },
      total: {
        key: "total",
        font: null,
        color: "#eef7f2"
      }
    }
  },
  mutations: {
    setPoster(state, data) {
      if (data.type == "name") {
        state.poster.name = data.name;
      } else {
        if (state.poster.foodData[index].type === data.food.type) {
          state.poster.foodData.splice(data.index, 1, data.food);
        } else {
          state.poster.foodData[index].type = data.food.type;
        }
      }
    },
    getPosterStyle(state, posterStyle) {
      if (posterStyle.posterType != "general") {
        if (posterStyle.font) {
          state.posterStyle[posterStyle.posterType].font = posterStyle.font;
        }
        if (posterStyle.color) {
          state.posterStyle[posterStyle.posterType].color = posterStyle.color;
        }
      } else {
        if (posterStyle.font) {
          state.posterStyle["menu"].font = posterStyle.font;
          state.posterStyle["classify"].font = posterStyle.font;
          state.posterStyle["food"].font = posterStyle.font;
          state.posterStyle["total"].font = posterStyle.font;
        }
        if (posterStyle.color) {
          state.posterStyle["menu"].color = posterStyle.color;
          state.posterStyle["classify"].color = posterStyle.color;
          state.posterStyle["food"].color = posterStyle.color;
          state.posterStyle["total"].color = posterStyle.color;
        }
      }
    }
  }
});

export default store;
