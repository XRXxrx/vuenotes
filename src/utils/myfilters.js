//全局过滤器
// import Vue from 'vue';

// Vue.filter('dataForm', function(param, sp = '-') {
//     param = new Date(param);
//     let y = param.getFullYear();
//     let m = param.getMonth() + 1;
//     let d = param.getDate();
//     return `${y}${sp}${(m = m >= 10 ? m : "0" + m)}${sp}${(d =
//         d >= 10 ? d : "0" + d)}`;
// })


//封装过滤器
export const dataForm = function(param, sp = '-') {
    param = new Date(param);
    let y = param.getFullYear();
    let m = param.getMonth() + 1;
    let d = param.getDate();
    return `${y}${sp}${(m = m >= 10 ? m : "0" + m)}${sp}${(d =
        d >= 10 ? d : "0" + d)}`;
}