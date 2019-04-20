JavaScript React Create Ref Demo
================================

`React.createRef`可以帮我们创建一个用于保存ref的对象，方便操作。

它与`useRef`的区别在于，`createRef`每次都会创建一个新的对象，所以我们要把它保存在某个field中；
而`useRef`内部会经过处理，使用同一个对象，常用于function component中。

```
npm install
npm run demo
```
