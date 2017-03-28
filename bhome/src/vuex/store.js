import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters.js";
Vue.use(Vuex);
const state={
	ind:0,
  count:0
};
//变更的函数 改变state方法的集合
const mutations={
	change(state,index){
		state.ind=index;
	},
  changeCount(state,index){
    state.count=index;
  }
};
//mutations改变 触发更新事件
const actions={
	change({commit,state},index){
		commit("change",index)
	},
  changeCount({commit,state},index){
    commit("changeCount",index);
  }
};
// 抛出实例
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
