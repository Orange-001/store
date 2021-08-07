// 定义全局变量，便于将结果暴露出去
window.pageTools = window.pageTools || {};
;(function(){
  function Nav(selector,datas,callback){
    // @selector:将处理的结果渲染到指定的DOM上
    // @datas:动态获取导航栏菜单项内容
    // @callback:菜单要执行的一些附带操作
    this.width = 1200;
    this.datas = datas || []; // 避免传参时没传参数的处理
    this.callback = callback;
    this.superView = $(selector || '');
    this.createView();
  }

  // 创建导航栏界面
  Nav.prototype.createView = function(){
    var nav = $('<ul class="nav-list"></ul>'); // 创建导航栏DOM
    this.datas.forEach(function(info){
      var item = $('<li class="nav-item" style="width:' + this.width / this.datas.length + 'px;"><a href="'+info.url+'"><img class="icon" src="'+info.imageUrl+'"><span>'+info.title+'</span></a></li>')
      nav.append(item); // 将所有菜单项添加到前面的ul标签中
    }.bind(this));
   
    this.superView.append(nav); // 将结果渲染到前端
  }
  window.pageTools.Nav = Nav
})();