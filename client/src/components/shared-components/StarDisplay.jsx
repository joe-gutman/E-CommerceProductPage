import React, { useEffect } from 'react';

const StarDisplay = (props) => {
  useEffect(() => {
    let $starDisplay = document.getElementById(props.name);
    let ctx = $starDisplay.getContext('2d');
    let s = props.size;
    let partial = props.rating - Math.floor(props.rating);
    let roundTo = props.roundTo || 4;
    let fillMode = props.fillMode || 'linear';

    ctx.clearRect(0, 0, s * 5, s);

    //Filling code (fills up the stars the right amount)
    ctx.fillStyle = props.fillColor || 'gold';

    for (let f = 0; f < Math.ceil(props.rating); f++) {
      ctx.beginPath();
      ctx.moveTo((s / 2) + (f * s), (s / 2));
      if (partial > 0 && f === Math.ceil(props.rating) - 1) {
        if (fillMode === 'radial') {
          ctx.arc((s / 2) + (f * s), (s / 2), ((s / 2) - 5), (1.5 * Math.PI), (1.5 * Math.PI) - (2 * Math.PI * partial), true);
        } else if (fillMode === 'linear') {
          ctx.fillRect((f * s) + 5, 5, (s - 10) * partial, s - 10);
        }
      } else {
        ctx.fillRect((f * s) + 5, 5, s - 10, s - 10);
      }
      ctx.fill();
    }

    //Masking code (to make it a star shape)
    ctx.fillStyle = 'white';
    for (let f = 0; f < Math.ceil(props.rating); f++) {
      ctx.beginPath();
      ctx.moveTo(((f + 0.5) * s), 5);
      for (let r = 8.5; r < 18; r++) {
        let angle = (r / 10) * 2 * Math.PI;
        let radius = ((s / 2) - 5) * (Math.floor(r) % 2 ? 1 : 0.382);
        ctx.lineTo(((f + 0.5) * s) + (Math.cos(angle) * radius), (s / 2) + (Math.sin(angle) * radius));
      }
      ctx.lineTo(((f + 0.5) * s), 0);
      ctx.lineTo((f * s), 0);
      ctx.lineTo((f * s), s);
      ctx.lineTo(((f + 1) * s), s);
      ctx.lineTo(((f + 1) * s), 0);
      ctx.closePath();
      ctx.fill();
    }

    //Outlining code
    ctx.strokeStyle = props.outlineColor || 'black';
    ctx.lineWidth = 2;
    for (let f = 0; f < 5; f++) {
      ctx.beginPath();
      ctx.moveTo(((f + 0.5) * s), 5);
      for (let r = 8.5; r < 18; r++) {
        let angle = (r / 10) * 2 * Math.PI;
        let radius = ((s / 2) - 5) * (Math.floor(r) % 2 ? 1 : 0.382);
        ctx.lineTo(((f + 0.5) * s) + (Math.cos(angle) * radius), (s / 2) + (Math.sin(angle) * radius));
      }
      ctx.stroke();
    }
  });

  return (<canvas className="star-display" id={props.name} width={props.size * 5} height={props.size} />);
}

export default StarDisplay;