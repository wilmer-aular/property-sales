
import "./carrucel.css";
import React, { useRef, useEffect } from "react";

const SlideShow = ({ children }) => {
  const slideShow = useRef(null);
  const interval = useRef(null);

  const next = () => {
    const slide = slideShow.current ? slideShow.current.children : null;
    if (slide && slide.length > 0) {
      const oneElement = slideShow.current.children[0];

      slideShow.current.style.transition = `1500ms ease-out all`;

      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transition = () => {
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = `translateX(0)`;

        slideShow.current.appendChild(oneElement);
        slideShow.current.removeEventListener("transitionend", transition);
      };
      slideShow.current.addEventListener("transitionend", transition);
    }
  };

  const previeous = () => {
    const slide = slideShow.current ? slideShow.current.children : null;
    if (slide && slide.length > 0) {
      const index = slideShow.current.children.length - 1;
      const latestElement = slideShow.current.children[index];
      const one = slideShow.current.firstChild;

      slideShow.current.insertBefore(latestElement, one);
      slideShow.current.style.transition = `none`;

      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = `1500ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 25);
    }
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      next();
    }, 3000);

    slideShow.current.addEventListener("mouseenter", () => {
      clearInterval(interval.current);
    });
    slideShow.current.addEventListener("mouseleave", () => {
      interval.current = setInterval(() => {
        next();
      }, 3000);
    });
  }, []);

  return (
    <>
      <div className="contenedorPrincipal">
        <div className="contenedorSlideShow" ref={slideShow}>
          {children && children}
        </div>

        <div className="controllers">
          <button className="buttonRight" onClick={() => next()}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button className="buttonLef" onClick={() => previeous()}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
