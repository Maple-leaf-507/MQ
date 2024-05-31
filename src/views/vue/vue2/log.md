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

# 闭包
    闭包：内部函数inner使用了外部函数outer的变量，会形成闭包。
    如果这个内部函数作为外部函数的返回值，就会形成词法环境的引用闭环（循环引用），对应变量就会常驻内存中，形成大家所说的“闭包内存泄漏”。虽然闭包有内存上的问题，但却突破了函数作用域的限制，使函数内外搭起了沟通的桥梁。闭包也是实现私有方法或属性，暴露部分公共方法的渠道。还可以引申出柯里化，bind等概念
    
        function outer() {
            var  a = '变量1'
            var  inner = function () {
                    console.info(a)
            }
            return inner    // inner 就是一个闭包函数，因为他能够访问到outer函数的作用域
        }
        var  inner = outer()   // 获得inner闭包函数
        inner()   //"变量1"

    闭包内存泄漏:当程序执行完var inner = outer()，其实outer的执行环境并没有被销毁，因为他里面的变量a仍然被inner函数作用域链所引用。当程序执行完inner(), 这时候，inner和outer的执行环境才会被销毁调；

    优点：
        访问其他函数内部变量
        变量长期驻扎在内存中，不会被内存回收机制回收，即延长变量的生命周期
        避免定义全局变量所造成的污染

    缺点：
        大量使用闭包，造成内存占用空间增大，有内存泄露的风险
    
    如何避免闭包引起的内存泄漏
        1，在退出函数之前，将不使用的局部变量赋值为null;（示例如下）
            这段代码会导致内存泄露
            window.onload = function(){
                var el = document.getElementById("id");
                el.onclick = function(){
                    alert(el.id);
                }
            }
            解决方法为
            window.onload = function(){
                var el = document.getElementById("id");
                var id = el.id;                                      //解除循环引用
                el.onclick = function(){
                    alert(id); 
                }
                el = null;                                          // 将闭包引用的外部函数中活动对象清除
            }
        
        2、避免变量的循环赋值和引用。 （示例如上）
            循环引用引起的内存泄漏，是因为IE 的bug，循环引用无法自动判断，所以通过拷贝值，把内外引用脱钩，这样就可回收。IE9及其以后已修复。
        
        3、利用Jquery释放自身指定的所有事件处理程序。
            由于jQuery考虑到了内存泄漏的潜在危害，所以它会手动释放自己指定的所有事件处理程序。 只要坚持使用jQuery的事件绑定方法，就可以一定程度上避免这种特定的常见原因导致的内存泄漏。


# 原型（prototype）
    每个函数都有一个特殊的属性叫做prototype。这个属性指向一个对象，这个对象作为原型。
    （该函数所创建的所有对象都将继承这个原型对象的属性和方法）
    
# 原型链
    原型链:想要访问实例上的某个属性和方法


    过程：
        （本身  ==> 原型prototype => 原型的原型 =======> 结果：null / xxx is not a function/执行该方法）
        默认会从对象本身开始查找，如果对象本身查找不到 会从对象的构造函数上面查找
        默认一直循环这个过程，直到找到Object为止  如果有，就返回当前属性值，如果没有就返回undefined
        如果查找的是方法 如果有就调用 如果没有 就报错 xxx is not a function
        原型链的顶端是null

# 构造函数
    参考文档：https://blog.csdn.net/m0_38134431/article/details/84789828    

    构造函数：是一种特殊的函数，主要用于创建并初始化对象的成员变量。
            构造函数通常与new一起使用，并且首字母大写，以表示该函数被设计为构造函数使用
    
    创建普通对象（通过new来创建）
    每个构造函数都有一个prototype属性，称为原型对象
    实例会享有构造函数prototype上面的所有属性和方法
    js自带的够构造函数Object  Array Function Date Math...

    扩展：
        1、var a = {} 其实是var a = new Object()的语法糖；这里的实例对象a的构造函数就是Object。
        2、var b = [ ] 其实是var b = new Array() 的语法糖；
        3、function Foo(){…} 其实是 var Foo = new Function (…) 的语法糖；
        4、使用instanceof来判断一个变量的构造函数是否是指定的那个构造函数：
            假如判断一个变量是否是数组： 变量名 instanceof Array
        
        自定义构造函数
        function Person(name,age){
            this.name=name
            this.age=age
        }
        let p=new Person('jack',20)
        把new出来的对象称之为实例   实例是通过new构造函数产生的
        实例的__proto__指向构造函数的prototype

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
                通俗化之后就是：
                    客户端：老弟，我这边没数据要传了，咱们关闭链接吧（FIN）
                    服务端：好的，接收到了，我看看我这边还有没有要传的(ACK)
                    服务端：我这边也没有了，关闭吧(FIN)
                    客户端：好嘞(ACK)

# 事件代理（事件委托）
    事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。

    优点：减少内存消耗和dom操作     不断阿操作dom  => 会引起浏览器的重绘和回流的次数