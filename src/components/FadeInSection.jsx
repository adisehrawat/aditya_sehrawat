import React, { useState, useEffect, useRef } from "react";

const FadeInSection = ({ children, delay = "0s" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;