import React from "react";
import { useEffect, useRef } from "react";
import {
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

export default function Hero() {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    var engineCurrent = engine.current;
    var world = engine.current.world;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        wireframes: false,
        background: "#fafafa",
      },
    });
    var width = scene.current.offsetWidth;
    var height = scene.current.offsetWidth;
    render.canvas.width = width;
    render.canvas.height = height;

    // add bodies
    var boxA = Bodies.rectangle(350, 50, 10, 10);
    var boxB = Bodies.rectangle(350, 50, 80, 80);
    var ground = Bodies.rectangle(300, 700, 500, 10, { isStatic: true });

    Composite.add(world, [boxA, boxB, ground]);

    // ball spawn
    var stack = Composites.stack(20, 20, 20, 5, 0, 0, function (x, y) {
      return Bodies.circle(x, y, Common.random(10, 20), {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
      });
    });
    Composite.add(world, stack);

    // wrapping using matter-wrap plugin
    for (var i = 0; i < stack.bodies.length; i += 1) {
      stack.bodies[i].plugin.wrap = {
        min: { x: render.bounds.min.x, y: render.bounds.min.y },
        max: { x: render.bounds.max.x, y: render.bounds.max.y },
      };
    }

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
