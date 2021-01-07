## Toast

> 提示组件

### 使用方法

####js 使用

```js
    setup(props, context){
        // 三个参数，分别为提示信息（必填，字符串），持续时长（可选，单位毫秒，默认2000），回调函数（可选）
        context.root.$tbToast('我是轻提示', 2000, function (){})
    }
```
