# test
Three的学习过程、笔记
1.https://docs.microsoft.com/zh-cn/previous-versions/windows/internet-explorer/ie-developer/samples/dn385807(v=vs.85)中文网
第一点、千万不要忘记挂载渲染器到页面上。我日。

第二点、画布无法被加载（跨域解决应该吧，没试过）、这个一般是安全问题，解决方法就是我们翻到three.js的源码到42843行把对应的loader.setCrossOrigin( this.crossOrigin ); 代码换成loader.setCrossOrigin( ‘Anonymous’ );这个就好了



第三点、相机位置，没话说。

粒子系统，就是一粒粒勾起来的东西。

构成球模型、立方体之类的。


2. shader 程序里基本有哪些东西？
shader程序 是一种类C语言， void main(){} 是程序的入口，在这之前需声明需使用到的传递来的变量，例如 uniform vec3 color; ，分别代表 变量传递类型 变量类型 变量名；

（“ 变量传递类型 ”这名字是我自己取的，便于理解）

变量传递类型 有三种：
attribute ：用来接受CPU传递过来的顶点数据，一般用来接收从js代码中传递来的 顶点坐标 ， 法线 ， 纹理坐标 ， 顶点颜色 等信息， attribute 只能在顶点着色器中被声明与使用 。
uniform ：可以在顶点着色器和片元着色器中共享使用，且声明方式相同，一般用来声明 变换矩阵 ， 材质 ， 光照参数 和 颜色 等信息。
varying ：它是vertex和fragment shader之间做数据传递用的。一般vertex shader修改varying变量的值，然后fragment shader使用该varying变量的值。因此varying变量在vertex和fragment shader二者之间的声明必须是 一致的 。
变量类型 有以下几种：
void ：和C语言的void一样，无类型。
bool ：布尔类型。
int ：有符号整数。
float 浮点数。
vec2 , vec3 , vec4 ： 2，3，4维向量，也可以理解为2，3，4长度的数组。
bvec2 , bvec3 , bvec4 ：2，3，4维的布尔值的向量。
ivec2 , ivec3 , ivec4 ： 2，3，4维的int值的向量。
mat2 , mat3 , mat4 ： 2×2, 3×3, 4×4的浮点数矩阵。
sampler2D ：纹理。
samplerCube ：Cube纹理。
由于是类C语言，不像js那样会对变量类型进行自动隐式转换，所以变量在使用前需严格声明，而且在数字运算时，相同类型的数字才能进行加减乘除，例如 1 + 1.0 会报错。
