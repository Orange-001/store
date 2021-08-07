// 封装一个用于登录/注册的构造函数（类）

// 定义入口变量（设置全局的）
window.pageTools = window.pageTools || {};
(function(){
  function Login(isLogin, selector, eventListener){
    this.isLogin = isLogin; // 用来判断是登录还是注册
    this.selector = $(selector); // 获取DOM节点
    this.init();
    this.eventListener = eventListener;
  }

  Login.prototype.init = function(){ // 核心代码
    var isShow = this.isLogin ? 'none' : 'block'; // 登录或注册对话框确认按钮要不要显示
    var buttonText = this.isLogin ? '登录' : '注册'; // 设置提交按钮上的文字内容
    // 添加对话框DOM
    /* &times;为x号 */
    this.dialog = $('<div class="dialog">\
                      <button class="close-btn">&times;</button>\
                      <div class="input-box">\
                        <input type="text" placeholder="用户名">\
                        <input type="password" placeholder="密码">\
                        <input type="password" placeholder="确认密码" class="again-pwd">\
                        <button class="btn"></button>\
                      </div>\
                    </div>');
    
    // 添加DOM到文档中
    this.selector.append(this.dialog);
    
    // 如果是登录则不显示确认密码框，如果是注册则显示
    $('.again-pwd').css('display', isShow);
    
    // 单击“登录”或“注册”按钮
    $('.btn').html(buttonText).click(function(){
      this.dialog.remove(); // 清除dialog这个div中所有内容，且包括自身
      this.dialog = null; // 垃圾回收处理（null表示指针没有指向，意味着不占用内存了）
      this.eventListener();
    }.bind(this)); // 改变this的指向(原本this指向的是当前dom，现在让他指向Login)

    // 当单击“关闭”按钮时，清除上面创建的对话框DOM
    $('.close-btn').click(function(){
      this.dialog.remove(); 
      this.dialog = null; 
      this.eventListener();
    }.bind(this)); 
  }

  pageTools.Login = Login;// 将定义的构造函数暴露出去
})();