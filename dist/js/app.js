
define('js/sup/index',['jquery', 'require'], function (jquery, require) {
  console.log(123, jquery, $);
  //  只会执行一次的jsonp 接口
  var re = require(['./../../../jsonp.js?callback=define'], function (data) {
    console.log('jsonp接口：', JSON.stringify(data, false, false));
    jquery('#container').html(JSON.stringify(data, null, true));
  });

  return 'index';
});
define('js/sub/sub',['require','../sup/index'],function(require) {
  var sup = require('../sup/index');
  return function add(a, b) {
    return a + b;
  }
})

;


define('js/app',['./sub/sub', './sup/index', 'jquery'], function (sub, sup, jquery) {
  console.log(sup)
});