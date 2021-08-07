window.pageTools = window.pageTools || {}

;(function(){
  function Goods(el,data,callback){
    this.el = $(el || '');
    this.data = data || [];
    this.callback = callback;
    this.createView();
  }
  
  Goods.prototype.createView = function(){
    var goods_container = $('<ul class="goods"></ul>');
    this.el.append(goods_container);
    this.data.forEach(function(item){
      console.log(item);
      // 商品一级分类
      var goods_item = $('<li class="item">\
      <div class="addr" style="background-image:url(' + item.addr + ')"></div>\
      <h3 class="title">' + item.title + '</h3>\
      </li>');

      goods_container.append(goods_item);

      // 商品二级分类
      var goods = $('<ul class="goods-list"></ul>');
      goods_item.append(goods);

      item.des.forEach(function(info){
        var goods_item = $('<li class="goods-item"><a href="#">\
        <img class="image" src="' + info.image + '" alt="' + info.name + '"/>\
        <p class="name">' + info.name + '</p>\
        <p class="price">￥' + info.price + '</p>\
        <button class="btnBuy">抢购</button>\
        </a></li>');

        goods.append(goods_item)
      })
    });

  }
  window.pageTools.Goods = Goods;
})();