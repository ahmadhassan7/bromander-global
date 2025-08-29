'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail effect
  const trailX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const trailY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over text
      const isTextElement = 
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'H4' ||
        target.tagName === 'H5' ||
        target.tagName === 'H6' ||
        target.tagName === 'SPAN' ||
        target.tagName === 'LI';
      
      setIsText(isTextElement);
      
      // Check if hovering over clickable element
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;

      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add global styles to hide cursor on all elements
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile/touch devices
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (hasTouch) {
        setIsHidden(true);
      }
    };
    checkTouch();
    window.addEventListener('touchstart', () => setIsHidden(true));
    return () => window.removeEventListener('touchstart', () => setIsHidden(true));
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isHidden && (
          <>
            {/* Trail effect */}
            <motion.div
              className="fixed pointer-events-none z-[9997]"
              style={{
                x: trailX,
                y: trailY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={`
                w-10 h-10 rounded-full
                bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                blur-xl
                transition-all duration-500
                ${isPointer ? 'scale-150' : 'scale-100'}
              `} />
            </motion.div>

            {/* Main cursor dot */}
            <motion.div
              className="fixed pointer-events-none z-[10000]"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: isClicking ? 0.8 : 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className={`
                rounded-full
                transition-all duration-200 ease-out
                ${isPointer 
                  ? 'w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400' 
                  : isText
                  ? 'w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-blue-500'
                  : 'w-3 h-3 bg-gradient-to-br from-blue-500/80 to-cyan-500/80 backdrop-blur-sm'
                }
              `}>
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
              </div>
            </motion.div>

            {/* Outer ring */}
            <motion.div
              className="fixed pointer-events-none z-[9999]"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isPointer || isText ? 1 : 0.7,
                scale: isClicking ? 0.9 : 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`
                rounded-full border
                transition-all duration-300 ease-out
                ${isPointer 
                  ? 'w-10 h-10 border-cyan-400/50 bg-cyan-400/5' 
                  : isText
                  ? 'w-8 h-8 border-blue-400/30 bg-transparent'
                  : 'w-6 h-6 border-blue-500/30 bg-transparent'
                }
              `}>
                {/* Rotating decoration for pointer state */}
                {isPointer && (
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Click ripple effect */}
            <AnimatePresence>
              {isClicking && (
                <motion.div
                  className="fixed pointer-events-none z-[9998]"
                  style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400/50" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Text cursor line (when hovering text) */}
            <AnimatePresence>
              {isText && !isPointer && (
                <motion.div
                  className="fixed pointer-events-none z-[9998]"
                  style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-0.5 h-6 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}