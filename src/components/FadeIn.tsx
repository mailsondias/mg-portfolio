"use client";

import { useEffect, useRef, useState } from "react";

/** Narrow union avoids `keyof JSX.IntrinsicElements` resolving to SVG tags (e.g. `symbol`) and breaking ref types. */
type FadeInTag =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "span"
  | "p"
  | "h5"
  | "li";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  suppressHydrationWarning?: boolean;
  /** Trigger on scroll instead of a fixed timer */
  intersect?: boolean;
  /** HTML tag to render (default: "div") */
  as?: FadeInTag;
};

export default function FadeIn({
  children,
  delay = 0,
  className,
  suppressHydrationWarning,
  intersect = false,
  as: Tag = "div",
}: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!intersect) {
      timerRef.current = setTimeout(() => setVisible(true), delay);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timerRef.current = setTimeout(() => setVisible(true), delay);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [intersect, delay]);

  return (
    <Tag
      // Polymorphic `as` + IntersectionObserver ref: single ref type for all tags
      ref={ref as never}
      className={className}
      suppressHydrationWarning={suppressHydrationWarning}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {children}
    </Tag>
  );
}
