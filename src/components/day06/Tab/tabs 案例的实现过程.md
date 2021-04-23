# Tabs案例的制作

> 单文件组件的创建引入和注册
>
> 以后的页面都是多个组件的组合
>
> 动态组件的渲染
>
> axios请求(封装)
>
> 组件封装--table
>
> 插槽的使用
>
> 组件之间的数据传递



## 添加项目所需的七个组件

![image-20210414085230456](images\image-20210414085230456.png)

注意：引入bootstrap.css样式，因为我们的页面是基于框架来制作的





## 顶部栏的封装

> 主要使用具名插槽，让用户可以自由的决定内容
>
> 1.为slot设置name属性
>
> 2.通过v-slot:插槽名称  |  #插槽名称  来指定将内容填充到某个插槽中

### 封装组件

> props的定义
>
> 具名插槽的设置：slot的使用

```vue
<template>
  <div class="myheader"
       :style="{'background':bgcolor,color:fontcolor}">
    <div>
      <slot name='left'></slot>
    </div>
    <div>
      {{title}}
    </div>
    <div>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: '#ccc'
    },
    fontcolor: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      default: 'myHeader'
    }
  }

}
</script>

<style lang="less" scoped>
.myheader {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  font-size: 20px;
  > div:nth-of-type(2) {
    flex: 1;
    text-align: center;
  }
}
</style>
```

### 使用组件

> 引入  》》 注册 》》 使用

```html
<myheader bgcolor='orange'>
    <!-- <template v-slot:left> -->
    <template #left>
        返回
    </template>
</myheader>
```



## 动态组件的添加和渲染

> component组件的使用
>
> is属性的作用：设置为所需要展示的组件的名称

```html
<!-- 主体内容 -->
<component :is='comName'></component>
```



## 底部tab栏

> 制作静态结构---拷贝资料中的结构和样式
>
> 引入注册和使用
>
> 动态生成底部tab项
>
> 单击tab项
>
> 1.切换样式
>
> 2.动态渲染组件

### 动态生成底部tab项

> 模拟数据
>
> 父传子
>
> 动态渲染

#### 模拟数据

```js
tablist: [
    {
        icon: 'icon-shangpinliebiao',
        text: '商品列表'
    },
    {
        icon: 'icon-sousuo',
        text: '商品搜索'
    },
    {
        icon: 'icon-user',
        text: '我的信息'
    },
]
```

#### 父传子

> 在子组件中声明props成员

```js
props: {
    tabs: {
      type: Array,
      required: true,
      validator (value) {
        if (value.length < 2 || value.length > 5) {
          return false
        } else {
          return true
        }
      }
    }
  }
```

> 实现父传子

```html
<!-- 底部栏 -->
<myfooter :tabs="tablist"></myfooter>
```

#### 动态渲染

```html
<div class="tabitem"
     :class="{activeStyle:true}"
     v-for='(value,index) in tabs'
     :key='value.text'>
    <span :class="['iconfont', value.icon]"></span>
    <span>{{value.text}}</span>
</div>
```



### 单击tab项

#### 切换样式

> 动态的修改当前项的索引判断

```html
:class="{activeStyle:index == current}"

@click="change(index)"

change (index) {
	this.current = index
}
```

#### 动态渲染组件

```tex
问题：动态组件的渲染切换主要是参照什么值？想让动态组件切换主要是修改什么值？ 
答:主要是修改is所指定的名称

所以：我们的需求：单击底部tab项之后，动态的修改is属性所指定的值
1.底部栏是子组件，所以需要实现子传父
2.在实现子传父的时候，你传什么 ？传递的是当前组件对应的名称

结论：之前的数据不能符合业务需求，所以需要改造数据，在数据添加组件名称
```

##### 改造数据，添加name属性

```js
tablist: [
    {
        icon: 'icon-shangpinliebiao',
        text: '商品列表',
        name: 'mylist'
    },
    {
        icon: 'icon-sousuo',
        text: '商品搜索',
        name: 'mysearch'
    },
    {
        icon: 'icon-user',
        text: '我的信息',
        name: 'myinfo'
    }
]
```

##### 单击tab项时发出事件 ，将name值传递给父组件

```js
change (name, index) {
    console.log(name, index);
    this.current = index
    this.$emit('changeCom', name)
}
```

##### 父组件中实现动态组件的渲染

```js
<myfooter :tabs="tablist"
              @changeCom='changeCom'></myfooter>

changeCom (value) {
    this.comName = value
}
```



## 商品列表

> 封装axios,添加baseURL的配置
>
> 封装api方法
>
> 调用方法 获取数据
>
> 使用表格进行渲染

### 封装axios

```js
// ../utils/tabsAxios.js
import axios from 'axios'

// 配置defaults,也可以使用axios.create()
axios.defaults.baseURL = 'https://www.escook.cn'

export default axios
```

### 封装api方法

```js
import axios from '../utils/tabsAxios.js'

// 获取所有商品数据
export const getGoodsList = () => {
  return axios({
    url: '/api/goods'
  })
}
```

### 调用方法获取数据

```js
// 页面加载就需要获取数据
mounted () {
    getGoodsList()
        .then(res => {
        console.log(res);
    })
        .catch(err => {
        console.log(err);
    })
}
```



## 使用表格进行渲染

> 自己封装表格实现数据列表的渲染
>
> 添加一个单独的文件 进行 表格的封装
>
> 表格的静态结构的制作基于bootstrap框架

### 表格静态结构的制作

<img src="images\image-20210414111716439.png" alt="image-20210414111716439" style="zoom:67%;" />

#### 添加其它样式

```html
<div class="mytable table-bordered table-striped">
```



### 实现表格数据的动态渲染

> 父传子：传入你想展示的数据
>
> 1.props
>
> 2.父传子
>
> 具名插槽
>
> 作用域插槽的添加

```html
<td>
    <input type="text"
           style='width:60px'
           v-if='value.inputVisible'
           @blur='handlerBlur(value,$event)'
           @keyup.13='handlerBlur(value,$event)'
           v-myfocus>
    <button class="btn btn-primary btn-sm"
            type="submit"
            v-else
            @click="value.inputVisible = !value.inputVisible">+tag</button>
    <span class="badge badge-warning"
          style='margin-left:5px'
          v-for='v in value.tags'
          :key='v'>{{v}}</span>
</td>
```



#### 细节：

```tex
在实现按钮和输入框显示隐藏的时候，如果你使用自定义指令，那么需要使用v-if和v-else
原因：如果使用v-show,那么元素早就创建好了并加载好，但是并没有显示，那么在你单击按钮的时候，其实已经失焦了
解决：使用v-if:v-if不显示的时候，元素还没有创建，那么当创建好并显示的时候，才会执行指令的功能
```





## 列表中的功能

> 添加tag
>
> 删除

### 添加tag

> 绑定事件：监听失焦事件，传递当前数据对象和事件源对象

```html
@blur='handlerBlur(value,$event)'
@keyup.13='handlerBlur(value,$event)'
```

> 实现添加：获取数据，添加到Tags数组

```js
handlerBlur (value, e) {
    value.inputVisible = false
    console.log(e.target.value);
    let v = e.target.value
    if (value.tags.indexOf(v) !== -1) {
        return
    }
    // 获取用户数据
    // 添加到value.tags数组中
    value.tags.unshift(e.target.value)
}
```

