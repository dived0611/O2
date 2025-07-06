// components/SmoothCursor.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  // Remove useLocation to avoid error when not inside Router
  // const location = useLocation();
  
  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      return;
    }

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;
    let isHovering = false;
    let isHoveringP = false;
    let animationId = null;
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    gsap.set([cursor, follower], {
      xPercent: -50,
      yPercent: -50,
    });
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      const lag = isHovering ? 6 : 9;
      
      posX += (mouseX - posX) / lag;
      posY += (mouseY - posY) / lag;
      
      gsap.set(cursor, { x: mouseX, y: mouseY });
      gsap.set(follower, { x: posX, y: posY });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // General hover handlers for links/buttons
    const handleMouseEnter = () => {
      isHovering = true;
      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    
    const handleMouseLeave = () => {
      isHovering = false;
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    
    // Special handlers for paragraph elements
    const handlePMouseEnter = () => {
      isHoveringP = true;
      gsap.to(cursor, {
        scale: 20, // Make the cursor bigger when hovering over p
        duration: 1,
        ease: 'power2.out',
      });
    };
    
    const handlePMouseLeave = () => {
      isHoveringP = false;
      gsap.to(cursor, {
        scale: 1, // Return to normal size
        duration: 1,
        ease: 'power2.out',
      });
    };
    
    const hoverSelectors = ['a', 'button'];
    const pSelector = 'p';
    
    let interactiveElements = [];
    let pElements = [];
    
    const setupInteractiveElements = () => {
      // Setup for regular interactive elements
      interactiveElements = Array.from(document.querySelectorAll(hoverSelectors.join(',')));
      interactiveElements.forEach(el => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      
      // Setup for paragraph elements
      pElements = Array.from(document.querySelectorAll(pSelector));
      pElements.forEach(el => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', handlePMouseEnter);
        el.addEventListener('mouseleave', handlePMouseLeave);
      });
    };
    
    setupInteractiveElements();
    
    const handleMouseOut = () => {
      gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
    };
    
    const handleMouseOver = () => {
      gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
    };
    
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);
    
    const cleanup = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      interactiveElements.forEach(el => {
        el.style.cursor = '';
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      pElements.forEach(el => {
        el.style.cursor = '';
        el.removeEventListener('mouseenter', handlePMouseEnter);
        el.removeEventListener('mouseleave', handlePMouseLeave);
      });
    };
    
    const resetCursorPosition = () => {
      gsap.set([cursor, follower], {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        opacity: 1,
        scale: 1
      });
      setupInteractiveElements();
    };
    
    resetCursorPosition();
    
    return cleanup;
  }, []); // Removed dependency on location.pathname
  
  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--cursor-color, #000)',
          borderRadius: '50%',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '35px',
          height: '35px',
          border: '1px solid var(--cursor-color, #000)',
          borderRadius: '50%',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.3s ease',
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default SmoothCursor;
