import { useEffect, useRef, useState } from "react";
import { SCRATCH_MESSAGES } from "../data.js";
import { heartConfetti } from "../lib/effects.js";

export default function ScratchCard() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const drawing = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);

  // Phủ lớp nhũ lên canvas
  const fill = () => {
    const c = canvasRef.current;
    const w = wrapRef.current;
    if (!c || !w) return;
    const rect = w.getBoundingClientRect();
    c.width = rect.width;
    c.height = rect.height;
    const ctx = c.getContext("2d");
    ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    g.addColorStop(0, "#d3ccdd");
    g.addColorStop(1, "#b7aec6");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.font = "600 16px Quicksand, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Cào để mở lời nhắn nhé ✨", rect.width / 2, rect.height / 2);
  };

  useEffect(() => {
    if (!revealed) fill();
  }, [revealed, msgIdx]);

  const point = (e) => {
    const r = canvasRef.current.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  };

  const scratch = (e) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const { x, y } = point(e);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const clearedRatio = () => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const data = ctx.getImageData(0, 0, c.width, c.height).data;
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 4 * 25) {
      total++;
      if (data[i] === 0) clear++;
    }
    return clear / total;
  };

  const onDown = (e) => {
    drawing.current = true;
    scratch(e);
  };
  const onMove = (e) => {
    if (drawing.current) scratch(e);
  };
  const onUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    if (!revealed && clearedRatio() > 0.5) {
      setRevealed(true);
      heartConfetti();
    }
  };

  const reset = () => {
    setRevealed(false);
    setMsgIdx((i) => (i + 1) % SCRATCH_MESSAGES.length);
  };

  return (
    <div className="scratch-wrap">
      <div className="scratch" ref={wrapRef} data-noswipe>
        <div className="scratch-msg">
          <span>{SCRATCH_MESSAGES[msgIdx]}</span>
        </div>
        {!revealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
          />
        )}
      </div>
      <button className="btn" onClick={reset}>
        {revealed ? "Cào lời khác 🎟️" : "Cào lại từ đầu"}
      </button>
    </div>
  );
}
