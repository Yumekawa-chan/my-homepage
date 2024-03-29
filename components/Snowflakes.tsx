import React, { useEffect, useRef, useState } from "react";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  color: string;
}

function Snowflakes(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const snowflakes: Snowflake[] = [];

    function createSnowflake() {
      const x = Math.random() * canvas!.width;
      const y = Math.random() * canvas!.height;
      const radius = Math.random() * 4;
      const speedX = Math.random() * 3 - 1.5;
      const speedY = Math.random() + 1;
      const color = `hsla(${Math.random() * 360}, 70%, 80%, 0.6)`;

      snowflakes.push({ x, y, radius, speedX, speedY, color });
    }

    function updateSnowflakes() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas!.width, canvas!.height);

        for (const snowflake of snowflakes) {
          snowflake.x += snowflake.speedX;
          snowflake.y += snowflake.speedY;

          if (snowflake.y > canvas!.height) {
            snowflake.y = 0;
            snowflake.x = Math.random() * canvas!.width;
          }

          ctx.beginPath();
          ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
          ctx.fillStyle = snowflake.color;
          ctx.fill();
        }
      }

      requestAnimationFrame(updateSnowflakes);
    }

    for (let i = 0; i < 100; i++) {
      createSnowflake();
    }

    updateSnowflakes();

    return () => {
      snowflakes.length = 0;
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    />
  );
}

export default Snowflakes;
