new Vue({
    el: '#animated-number-demo',
    data: {
      number: 0,
      animatedNumber: 0
    },
    watch: {
      number: function(newValue, oldValue) {//number属性监听
        var vm = this//this赋值
        function animate (time) {//动画函数
          requestAnimationFrame(animate)//下一帧调用自身
          TWEEN.update(time)//动画更新
        }
        new TWEEN.Tween({ tweeningNumber: oldValue })//动画旧数字参数
          .easing(TWEEN.Easing.Quadratic.Out)//以这种模式变成下面的
          .to({ tweeningNumber: newValue }, 500)//新数字
          .onUpdate(function () {//定义Update（可选：）如果在变化过程中想自定义事件，则可以通过 `onUpdate` 实现
            vm.animatedNumber = this.tweeningNumber.toFixed(0)//赋值，重新定义。
          })
          .start()
        animate()
      }
    }
  });
  Vue.component('anchored-heading', {
    template: '#anchored-heading-template',
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })