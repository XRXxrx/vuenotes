// 引入vue,使用es6新语法
// import Vue from 'vue';
// // 添加全局函数
//缺点：全局挂载，会出现全局污染，内存无法释放，会溢出
// Vue.directive('mycolor', {
//     inserted(el, binding) {
//         el.style.color = binding.value;
//     }
// })

//解决方法，封装指令
//封装配置主体
export const myfocus = {
    inserted(el) {
        el.focus();
    }
};
export const mycolor = {
    inserted(el, binding) {
        el.style.color = binding.value;
    }
}