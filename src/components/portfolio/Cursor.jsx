// // // import { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";

// // // export function Cursor() {
// // //   const [pos, setPos] = useState({ x: -100, y: -100 });
// // //   const [hover, setHover] = useState(false);
// // //   const [visible, setVisible] = useState(false);

// // //   useEffect(() => {
// // //     if (window.matchMedia("(pointer: coarse)").matches) return;
// // //     const move = (e) => {
// // //       setPos({ x: e.clientX, y: e.clientY });
// // //       setVisible(true);
// // //       const el = e.target;
// // //       setHover(
// // //         !!el.closest("a, button, [role='button'], input, textarea, [data-cursor='hover']")
// // //       );
// // //     };
// // //     const leave = () => setVisible(false);
// // //     window.addEventListener("mousemove", move);
// // //     window.addEventListener("mouseleave", leave);
// // //     return () => {
// // //       window.removeEventListener("mousemove", move);
// // //       window.removeEventListener("mouseleave", leave);
// // //     };
// // //   }, []);

// // //   if (!visible) return null;
// // //   return (
// // //     <>
// // //       <motion.div
// // //         className="pointer-events-none fixed z-[9999] hidden md:block rounded-full bg-primary/30 blur-xl"
// // //         animate={{ x: pos.x - 60, y: pos.y - 60, scale: hover ? 1.6 : 1 }}
// // //         transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
// // //         style={{ width: 120, height: 120 }}
// // //       />
// // //       <motion.div
// // //         className="pointer-events-none fixed z-[9999] hidden md:block rounded-full border border-primary mix-blend-difference"
// // //         animate={{ x: pos.x - (hover ? 22 : 12), y: pos.y - (hover ? 22 : 12), scale: hover ? 1 : 1 }}
// // //         transition={{ type: "spring", damping: 25, stiffness: 350 }}
// // //         style={{ width: hover ? 44 : 24, height: hover ? 44 : 24 }}
// // //       />
// // //       <motion.div
// // //         className="pointer-events-none fixed z-[9999] hidden md:block rounded-full bg-primary"
// // //         animate={{ x: pos.x - 3, y: pos.y - 3 }}
// // //         transition={{ type: "spring", damping: 50, stiffness: 800 }}
// // //         style={{ width: 6, height: 6 }}
// // //       />
// // //     </>
// // //   );
// // // }



import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const ringEl = ringRef.current;
    const dotEl = dotRef.current;
    if (!ringEl || !dotEl) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hover = false;
    let visible = false;
    let raf = null;

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      const scale = hover ? 1.6 : 1;

      ringEl.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      dotEl.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;

      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!visible) {
        visible = true;
        ringEl.style.opacity = "1";
        dotEl.style.opacity = "1";
      }

      const target = e.target;
      const isHover =
        target &&
        target.closest(
          "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
        );

      if (!!isHover !== hover) {
        hover = !!isHover;
        ringEl.dataset.hover = hover ? "true" : "false";
      }
    };

    const onLeave = () => {
      visible = false;
      ringEl.style.opacity = "0";
      dotEl.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onMove, { passive: true });

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border border-primary/70 opacity-0 md:block"
        style={{
          transition: "opacity 200ms ease",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-primary opacity-0 md:block"
        style={{
          transition: "opacity 200ms ease",
        }}
      />
    </>
  );
}

export default Cursor;