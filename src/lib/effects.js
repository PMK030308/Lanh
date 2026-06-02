import confetti from "canvas-confetti";

// Pháo hoa tim + hoa ở giữa
export function heartConfetti() {
  const heart = confetti.shapeFromText({ text: "💖", scalar: 2 });
  const flower = confetti.shapeFromText({ text: "🌸", scalar: 2 });
  confetti({
    particleCount: 45,
    spread: 90,
    origin: { y: 0.6 },
    shapes: [heart, flower],
    scalar: 2,
    ticks: 220,
  });
}

// Pháo hoa hai bên màn hình
export function sideConfetti() {
  confetti({ particleCount: 90, angle: 60, spread: 75, origin: { x: 0 } });
  confetti({ particleCount: 90, angle: 120, spread: 75, origin: { x: 1 } });
}

// Mưa tim rơi từ trên xuống trong vài giây (dùng cho màn "Có yêu không")
export function rainHearts(duration = 2500) {
  const heart = confetti.shapeFromText({ text: "💕", scalar: 2 });
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 4,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.6,
      origin: { x: Math.random(), y: -0.1 },
      shapes: [heart],
      scalar: 2,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
