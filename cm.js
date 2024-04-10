
AFRAME.registerComponent('click-move', {
  schema: {default: 'start.html'},

  init: function () {
    var data = this.data;
    var el = this.el;  // <a-box>
    
    // el.addEventListener('mouseenter', function () {
    //     console.log('yooo');

    // });
   
    el.addEventListener('click', function () {

        window.open(data, "_self");
    });

  }
});
