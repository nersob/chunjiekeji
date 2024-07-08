document.addEventListener('DOMContentLoaded', function() {
  'use strict'; // 将'use strict'放在函数体顶部

  // 选择所有具有(service-module)类的元素
  var serviceModules = document.querySelectorAll('.service-module');

  // 遍历这些元素并绑定点击事件
  Array.prototype.forEach.call(serviceModules, function(module) {
    module.addEventListener('click', function(event) {
      // 阻止默认行为，防止多次触发点击事件
      event.preventDefault();

      // 获取模块中的链接地址
      var link = module.querySelector('.section-button a').getAttribute('href');

      // 跳转到链接地址
      window.location.href = link;
    });
  });
});
