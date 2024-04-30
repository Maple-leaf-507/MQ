# promise
    特点：
        （1）、promise对象的状态不受外界所影响，代表异步操作，有三种状态（pending、fulfilled、rejected）；只有异步操作的结果可以决定是哪一种状态，任何其他操作都无法改变这个状态。
        （2）、一旦状态发生改变就不会再变，任何时候都可以得到这个结果。状态的改变只有两种结果（已完成和已拒绝）。如果状态易发生改变，你再对promise添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，事件的特点：如果你错过它了，再次去监听是得不到结果的。
    缺点：
        (1) 无法取消promise，一旦新建，它就会立即执行，无法中途取消。
        (2) 如果不设置回调函数，promise内部抛出错误，不会反应到外部。
        (3) 当处于pending状态时，无法得知进展到哪一个阶段（刚刚开始还是即将完成）

    个人理解：
        es6 新增的构造函数  
        Promise 对象是异步编程的一种解决方案（解决了回调地狱的问题）
            回调地狱：多个函数嵌套使用（由于多个异步操作需要按照特定的顺序执行）
        三个状态：Pending(进行中)、Resolved(已完成)、Rejected(已拒绝)
        两个过程：pending => fulfilled:Resolved（已完成）、pending => rejected:Rejected(已拒绝)
            ****************** 状态变改变后，就不会再变 ******************
    
    总结：
        （1）、Promise 对象是异步编程的一种解决方案。
        （2）、Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。
        （3）、一个 Promise 实例有三种状态，分别是pending（进行中）、resolved（已成功） 和 rejected（已失败）
        （4）、实例的状态只能由 pending 转变 resolved 或者rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。

    状态的改变是通过 resolve() 和 reject() 函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。

# CSS盒模型
    参考网址：https://blog.csdn.net/had1695016179/article/details/132161376

    盒模型（从里到外）：content => padding => border => margin

    box-sizing:border-box/content-box/inherit;(默认: content-box)
            ****************** inherit：继承父元素box-sizing的值 ******************
    
    设置内容的宽高时

    content-box 正常盒模型（width，height），会往外撑大(+ padding + border)
        width的大小（content + padding + border）

    border-box IE盒模型（怪异盒模型），只有内容的宽高（content）在变化，整体宽高会往里挤
        width的大小（content）

# BFC(块级格式化上下文)
    概念：BFC 是 Block Formatting Context的缩写，即块级格式化上下文。BFC是CSS布局的一个概念，是一个独立的渲染区域，规定了内部box如何布局， 并且这个区域的子元素不会影响到外面的元素。

    实现BFC的方法:
        （1）、浮动元素（float属性不为none）
        （2）、定位（position属性不为relative和static）
        （3）、overflow属性值不为visible
        （4）、display 属性为inline-block、table-cell、table-caption
        （5）、根元素，即<html>元素

# 输入url，浏览器做了什么
    （1）、输入URL并回车
    （2）、浏览器查找当前URL是否有缓存，并比较缓存是否过期
    （3）、DNS解析URL对应的IP
    （4）、根据IP简历TCP连接（三次握手）
            三次握手：
                通俗化之后就是：
                    客户端：老弟我要跟你链接（SYN标志的数据包）
                    服务端：好的，同意了（SYN/ACK标志的数据包）
                    客户端：好嘞（带ACK标志的数据包）
    （5）、发生http请求
    （6）、服务器处理请求，浏览器接收http响应
    （7）、浏览器解析并渲染页面
    （8）、关闭TCP连接（四次握手）
            四次握手：
            客户端：老弟，我这边没数据要传了，咱们关闭链接吧（FIN）
            服务端：好的，接收到了，我看看我这边还有没有要传的(ACK)
            服务端：我这边也没有了，关闭吧(FIN)
            客户端：好嘞(ACK)

# 事件代理（事件委托）
    事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。

    优点：减少内存消耗和dom操作     不断阿操作dom  => 会引起浏览器的重绘和回流的次数