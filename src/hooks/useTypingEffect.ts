import { useEffect, useRef, useState } from "react";

export function useTypingEffect(phrases: string[]) {
  const [display, setDisplay] = useState("");
  const state = useRef({ phraseIdx: 0, charIdx: 0, deleting: false });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    state.current = { phraseIdx: 0, charIdx: 0, deleting: false };
    setDisplay("");
    if (prefersReduced || phrases.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    function tick() {
      if (cancelled) return;
      const { phraseIdx, charIdx, deleting } = state.current;
      const phrase = phrases[phraseIdx]!;

      if (!deleting && charIdx === phrase.length) {
        timer = setTimeout(() => {
          if (cancelled) return;
          state.current.deleting = true;
          tick();
        }, 2000);
        return;
      }

      if (deleting && charIdx === 0) {
        state.current.deleting = false;
        state.current.phraseIdx = (phraseIdx + 1) % phrases.length;
        timer = setTimeout(tick, 500);
        return;
      }

      const next = deleting ? charIdx - 1 : charIdx + 1;
      state.current.charIdx = next;
      setDisplay(phrase.substring(0, next));
      timer = setTimeout(tick, deleting ? 50 : 100);
    }

    tick();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrases, prefersReduced]);

  if (prefersReduced) return phrases[0] ?? "";
  return display;
}
