import { useState, useRef, useEffect } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import * as utils from "./utils";
import "./PhotoDeck.css";

function PhotoDeck({ cards }) {

    if (!cards) {
      return null;  // O renderizar algún componente de carga o de error
    }

  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...utils.to(i),
    from: utils.from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx, vy],
    }) => {
      const trigger = Math.abs(vx) > 0.2 || Math.abs(vy) > 0.2;
      if (!active && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const y = isGone ? (200 + window.innerHeight) * yDir : active ? my : 0;
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;
        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => utils.to(i));
        }, 600);
    }
  );

  const ref = useRef();

  useEffect(() => {
    const handleMouseLeave = (event) => {
      // Trigger the end of the drag gesture
    };

    const element = ref.current;
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseout', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div id="photo-deck">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ x, y }}>
          <animated.div
            ref={ref}
            {...bind(i)}
            style={{
              touchAction: 'none',
              transform: interpolate([rot, scale], utils.trans),
              backgroundImage: `url(      ${cards[i].url})`,
              width: cards[i].orientation === "portrait" ? "222px" : "333px",
              height: cards[i].orientation === "portrait" ? "333px" : "222px",
            }}  /*                    img/                    240px    360px  */
          />
        </animated.div>
      ))}
    </div>
  );
}

export default PhotoDeck;



/* return (
    <div id="photo-deck">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ x, y }}>
          <animated.div
            ref={ref}
            {...bind(i)}
            style={{
              touchAction: 'none',
              transform: interpolate([rot, scale], utils.trans),
              backgroundImage: `url(      ${cards[i].url})`,
              width: cards[i].orientation === "portrait" ? "200px" : "300px",
              height: cards[i].orientation === "portrait" ? "300px" : "200px",
            }}
            />
            </animated.div>
          ))}
        </div>
      );
*/
