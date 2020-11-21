import move from 'move-js';

export const Animation = (function () {
  function animateFish () {
    const animationTime = 15000 + Math.round(Math.random() * 3000);
    const moveToRight = this.thing.node.classList.contains('ltr');
    const width = document.querySelector('#level').offsetWidth;
    const direction = moveToRight ? 'left' : 'right';
    const finalPosition = (width + 100) + 'px';

    move(this.thing.node)
      .duration(animationTime)
      .end();

    move(this.thing.node)
      .set(direction, finalPosition)
      .ease('in')
      .duration(animationTime)
      .end(this.end.bind(this.thing));
  }

  Animation.prototype = {
    animate: function () {
      switch (this.type) {
        case 'fishAnimation':
          animateFish.call(this);
          break;
      }
    }
  };

  function Animation (type, thing, end) {
    this.type = type;
    this.thing = thing;
    this.end = end;
  }

  return Animation;
}());