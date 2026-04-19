"use client";

import gsap from "gsap";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

interface ImageTrailProps {
  images: string[];
  className?: string;
  children: React.ReactNode;
}

export default function ImageTrail({
  images,
  className,
  children,
}: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageIndexRef = useRef(0);
  const imageRefsArray = useRef<HTMLImageElement[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cacheImages = useRef<HTMLImageElement[]>([]);
  const throttleRef = useRef(false);

  const THRESHOLD = 80;

  const showNextImage = useCallback(
    (x: number, y: number) => {
      const img = cacheImages.current[imageIndexRef.current];
      if (!img) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      gsap.killTweensOf(img);

      gsap.set(img, {
        x: x - rect.left - img.offsetWidth / 2,
        y: y - rect.top - img.offsetHeight / 2,
        scale: 0.4,
        opacity: 0,
        rotation: gsap.utils.random(-0, 0),
        zIndex: imageIndexRef.current,
      });

      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(img, {
            opacity: 0,
            scale: 0.2,
            duration: 0.6,
            delay: 0.5,
            ease: "power2.in",
          });
        },
      });

      imageIndexRef.current = (imageIndexRef.current + 1) % images.length;
    },
    [images.length],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (throttleRef.current) return;

      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > THRESHOLD) {
        showNextImage(e.clientX, e.clientY);
        lastMousePos.current = { x: e.clientX, y: e.clientY };

        throttleRef.current = true;
        setTimeout(() => {
          throttleRef.current = false;
        }, 100);
      }
    },
    [showNextImage],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 1 }}
      >
        {images.map((src, index) => (
          <Image
            key={`image-trail-${index}`}
            width={220}
            height={140}
            ref={(el) => {
              if (el) cacheImages.current[index] = el;
            }}
            src={src}
            alt=""
            className="absolute top-0 left-0 w-[220px] h-[140px] object-cover shadow-lg"
            style={{ opacity: 0, willChange: "transform, opacity" }}
            draggable={false}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
