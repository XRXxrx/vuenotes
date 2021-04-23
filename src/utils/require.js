// 使用axios.create()实现封装
// import axios from 'axios';
// export default axios.create({
//     baseURL: 'http://157.122.54.189:9083'
// })

//使用defaults配置实现封装
import axios from 'axios';
//添加配置
axios.defaults.baseURL = 'http://157.122.54.189:9083';
//暴露
export default axios;