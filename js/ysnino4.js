    $(document).ready(function () {
      document.oncontextmenu = function () {
        return false;
      }
      //document.onselectstart = function () {
       // return false;
     // }
      document.oncopy = function () {
        return false;
      }
      document.onkeydown = function () {
        //f12
        if (window.event && window.event.keyCode == 123) {
          event.keyCode = 0;
          event.returnValue = false;

      //示范一个公告层
      layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,area: '350px;'
        ,shade: 0.8
        ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
        ,resize: false
        ,btn: ['火速围观', '残忍拒绝']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">我也有辛酸苦楚，不说罢了。<br>我也有执念不放，不说罢了。<br>我也有千回百转，不说罢了。<br>不是我未看见，不是我没想过，<br>不是我不懂得，只是不说罢了。</div>'
        ,success: function(layero){
          var btn = layero.find('.layui-layer-btn');
          btn.find('.layui-layer-btn0').attr({
            href: 'https://chenyu.me/'
            ,target: '_blank'
          });
        }
      });  

          return false;
        }
        //ctrl+u
        if (event.ctrlKey && window.event.keyCode == 85) {
          return false;
        }
        //ctrl+shift+i
        if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
          return false;
        }
        // Ctrl+S
        else if ((event.ctrlKey) && (event.keyCode == 83)) {
          return false;
        }
      };

    });