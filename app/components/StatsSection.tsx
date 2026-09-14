"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 33, suffix: "+", label: "Years Completed" },
  { target: 200, suffix: "+", label: "Happy Families" },
  { target: 50, suffix: "+", label: "Associates" },
  { target: 10, suffix: "+", label: "Projects Completed" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl font-extrabold text-[#c9a84c] mb-1 tabular-nums">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f1f3d] via-[#1a2e4a] to-[#0f1f3d] text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 tracking-wide">OUR SUCCESS STORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <Counter target={s.target} suffix={s.suffix} />
              <div className="w-8 h-0.5 bg-[#c9a84c]/50 my-2 rounded" />
              <div className="text-xs text-gray-300 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
