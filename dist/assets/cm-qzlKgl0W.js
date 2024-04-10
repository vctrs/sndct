AFRAME.registerComponent("click-move",{schema:{default:"start.html"},init:function(){var t=this.data,e=this.el;e.addEventListener("click",function(){window.open(t,"_self")})}});
