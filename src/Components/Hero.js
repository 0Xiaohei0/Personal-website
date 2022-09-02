import React from "react";
import { useEffect, useRef } from "react";
import {
  use,
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Mouse,
  MouseConstraint,
  Composites,
  Common,
} from "matter-js";

// install plugin
use(
  "matter-wrap" // PLUGIN_NAME
);

export default function Hero() {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    var engineCurrent = engine.current;
    var world = engine.current.world;

    engineCurrent.gravity.scale = 0.0001;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        wireframes: false,
        background: "#e5e5e5",
      },
    });
    var width = scene.current.offsetWidth;
    var height = scene.current.offsetHeight;
    render.canvas.width = width;
    render.canvas.height = height;

    /*// add bodies
    var ground = Bodies.rectangle(width / 2, 700, 500, 10, {
      isStatic: true,
      restitution: 0.5,
    });
    Composite.add(world, [ground]);*/

    const rowCount = 10;
    const colCount = 10;
    const rowGap = 30;
    const colGap = 30;
    const radius = 10;

    const rodsWidth = (radius * 2 + colGap) * colCount - colGap;
    const rodsHeight = (radius * 2 + rowGap) * rowCount - rowGap;

    for (let row = 0; row < rowCount; row++) {
      let rowx = width / 2 - rodsWidth / 2;
      if (row % 2 === 0) rowx += radius * 2 + colGap / 2;
      var rods = Composites.stack(
        rowx,
        height / 2 - rodsHeight / 2 + row * (rowGap + radius * 2),
        colCount,
        1,
        colGap,
        0,
        function (x, y) {
          return Bodies.circle(x, y, radius, {
            isStatic: true,
            friction: 0.00001,
            restitution: 0.5,
            density: 0.001,
          });
        }
      );
      Composite.add(world, [rods]);
    }
    /*var rods = Composites.stack(
      width / 2 - rodsWidth / 2,
      height / 2 - rodsHeight / 2,
      colCount,
      rowCount,
      colGap,
      rowGap,
      function (x, y) {
        return Bodies.circle(x, y, radius, {
          isStatic: true,
          friction: 0.00001,
          restitution: 0.5,
          density: 0.001,
        });
      }
    );

    Composite.add(world, [rods]);*/

    /*// ball spawn
    var stack = Composites.stack(width / 2, 20, 20, 5, 0, 0, function (x, y) {
      return Bodies.circle(x, y, Common.random(10, 20), {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
      });
    });
    Composite.add(world, stack);*/

    function makeCircle() {
      let randx = Common.random(
        width / 2 - rodsWidth / 2,
        width / 2 + rodsWidth / 2
      );
      let circle = Bodies.circle(randx, 0, 10, {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
      });
      Composite.add(world, [circle]);
    }
    setInterval(makeCircle, 300);
    /*// wrapping using matter-wrap plugin
    for (var i = 0; i < stack.bodies.length; i += 1) {
      stack.bodies[i].plugin.wrap = {
        min: { x: 0, y: 0 },
        max: { x: render.canvas.width, y: render.canvas.height },
      };
    }*/

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });
    Composite.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine.current);

    return () => {
      Render.stop(render);
      Composite.clear(engineCurrent.world);
      Engine.clear(engineCurrent);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div className="hero--container">
      <div className="hero--textContainer">
        <p className="hero--name">Sicheng Yi</p>
        <h1 className="hero--role">Web and game developer</h1>
        <p className="hero--description">
          I'm a mathematic student at the University of Waterloo. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac
          est rhoncus, a condimentum.
        </p>
        <p className="hero--viewProjects">View Projects</p>
      </div>
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
