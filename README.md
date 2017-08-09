# 重现vux引入未使用组件导致js编译过大问题

## 1、引入多余组件时：

```javascript 
import{ViewBox} from 'vux'
export default {
    components: {
        ViewBox
    }
```

运行时生成js如截图所示：

![问题示例](https://github.com/cinos1/vuxdemo/blob/master/img/bug.jpg)

## 2、去掉多余组件引时：

运行时生成js如截图所示：

![问题示例](https://github.com/cinos1/vuxdemo/blob/master/img/ok.jpg)