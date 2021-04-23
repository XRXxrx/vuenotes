// axios()实现具体请求的封装
import myaxios from '../utils/require'
//data用户传递的参数
export const userLogin = function(data) {
    // post,get,axios方法返回的都是一个promise对象
    return myaxios({
        method: 'post',
        url: '/login',
        data
    })
}