import { useState, useEffect } from "react";
import { useSpring, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import * as utils from "./utils";
import "./SongCard.css";

function SongCard({ song }) {
  const [isGone, setIsGone] = useState(false);
  const [{ x, y, rot, scale }, api] = useSpring(() => ({
    ...utils.to(0),
    from: utils.from(0),
  }));

  const bind = useDrag(
    ({
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx, vy],
    }) => {
      const trigger = Math.abs(vx) > 0.2 || Math.abs(vy) > 0.2;
      if (!active && trigger) setIsGone(true);
      api.start({
        x: isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0,
        y: isGone ? (200 + window.innerHeight) * yDir : active ? my : 0,
        rot: mx / 100 + (isGone ? xDir * 10 * vx : 0),
        scale: active ? 1.1 : 1,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      });
      if (!active && isGone)
        setTimeout(() => {
          setIsGone(false);
          api.start(() => utils.to(0));
        }, 600);
    }
  );

  useEffect(() => {
    api.start(() => utils.to(0));
  }, [song, api]);

  return (
    <div id="song-card">
      <animated.div style={{ x, y }}>
        <animated.div
          {...bind()}
          style={{
            touchAction: 'none',
            transform: interpolate([rot, scale], utils.trans),
            backgroundImage: `url(${song.url})`,
            width: song.orientation === "portrait" ? "222px" : "333px",
            height: song.orientation === "portrait" ? "333px" : "222px",
          }}
        />
      </animated.div>
    </div>
  );
}

export default SongCard;
