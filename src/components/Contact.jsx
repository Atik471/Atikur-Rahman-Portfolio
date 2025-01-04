import { useEffect } from "react";
import { Element } from "react-scroll";
import "../App.css";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  function normalPool(o) {
    var r = 0;
    do {
      var a = Math.round(normal({ mean: o.mean, dev: o.dev }));
      if (a < o.pool.length && a >= 0) return o.pool[a];
      r++;
    } while (r < 100);
  }
  function randomNormal(o) {
    if (
      ((o = Object.assign({ mean: 0, dev: 1, pool: [] }, o)),
      Array.isArray(o.pool) && o.pool.length > 0)
    )
      return normalPool(o);
    var r,
      a,
      n,
      e,
      l = o.mean,
      t = o.dev;
    do {
      r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
    } while (r >= 1);
    return (e = a * Math.sqrt((-2 * Math.log(r)) / r)), t * e + l;
  }

  const NUM_PARTICLES = 600;
  const PARTICLE_SIZE = 0.5; // View heights
  const SPEED = 20000; // Milliseconds

  let particles = [];

  function rand(low, high) {
    return Math.random() * (high - low) + low;
  }

  function createParticle(canvas) {
    const colour = {
      r: 255,
      g: randomNormal({ mean: 125, dev: 20 }),
      b: 50,
      a: rand(0, 1),
    };
    return {
      x: -2,
      y: -2,
      diameter: Math.max(
        0,
        randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })
      ),
      duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
      amplitude: randomNormal({ mean: 16, dev: 2 }),
      offsetY: randomNormal({ mean: 0, dev: 10 }),
      arc: Math.PI * 2,
      startTime: performance.now() - rand(0, SPEED),
      colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
    };
  }

  function moveParticle(particle, canvas, time) {
    const progress =
      ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
      ...particle,
      x: progress,
      y:
        Math.sin(progress * particle.arc) * particle.amplitude +
        particle.offsetY,
    };
  }

  function drawParticle(particle, canvas, ctx) {
    canvas = document.getElementById("particle-canvas");
    const vh = canvas.height / 100;

    ctx.fillStyle = particle.colour;
    ctx.beginPath();
    ctx.ellipse(
      particle.x * canvas.width,
      particle.y * vh + canvas.height / 2,
      particle.diameter * vh,
      particle.diameter * vh,
      0,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  function draw(time, canvas, ctx) {
    // Move particles
    particles.forEach((particle, index) => {
      particles[index] = moveParticle(particle, canvas, time);
    });

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the particles
    particles.forEach((particle) => {
      drawParticle(particle, canvas, ctx);
    });

    // Schedule next frame
    requestAnimationFrame((time) => draw(time, canvas, ctx));
  }

  function initializeCanvas() {
    let canvas = document.getElementById("particle-canvas");
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    let ctx = canvas.getContext("2d");

    window.addEventListener("resize", () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx = canvas.getContext("2d");
    });

    return [canvas, ctx];
  }

  function startAnimation() {
    const [canvas, ctx] = initializeCanvas();

    // Create a bunch of particles
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(createParticle(canvas));
    }

    requestAnimationFrame((time) => draw(time, canvas, ctx));
  }

  // Start animation after component mount using useEffect
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Element name="contact" className="min-h-screen">
      <div className="relative">
        <div className="absolute w-[70%] h-[70%] top-[15%] left-[15%] bg-black/40 rounded-lg z-10 p-8 text-center">
          <TypeAnimation
            cursor={false}
            sequence={["Contact Me", 3000, "C"]}
            speed={50}
            wrapper="h1"
            repeat={Infinity}
            style={{
              fontSize: "2.5rem",
              lineHeight: "3rem",
              letterSpacing: "3px",
              display: "inline-block",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
            className="jersey"
          />
          <div className="grid grid-cols-2 mt-8">
            <form className="flex flex-col gap-2 text-left w-[90%]">
              <label htmlFor="message">Write Your Message :</label>
              <textarea
                type="text"
                name="message"
                className="bg-white/80 rounded-lg py-3 px-4 mt-2 text-black h-32"
              />
              <label htmlFor="email">Your Email :</label>
              <input
                type="text"
                name="email"
                className="bg-white/80 rounded-lg py-3 px-4 mt-2 text-black"
              />
            </form>
            <div className="container mx-auto flex items-center justify-center p-12 bg-white/80 rounded-lg text-black font-bold">
              <div className="flex justify-center items-center flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <a href="tel: +880 1920 220166">Phone: +880 1920 220166</a>
                </div>
                <a
                  href="mailto:atiksafinmd1@google.com"
                  
                >
                  Email: atiksafinmd1@google.com
                </a>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://wa.me/+8801608107163"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +8801608107163
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  Location: Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>
        <canvas id="particle-canvas"></canvas>
      </div>
    </Element>
  );
};

export default Contact;
