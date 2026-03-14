import React, { useEffect, useRef } from 'react';

const ParticleWaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    // Offscreen canvas for diagonal line texture
    const textureCanvas = document.createElement('canvas');
    const textureCtx = textureCanvas.getContext('2d');

    const createTexture = () => {
      const size = 4;
      textureCanvas.width = size;
      textureCanvas.height = size;
      textureCtx.clearRect(0, 0, size, size);
      textureCtx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      textureCtx.lineWidth = 0.5;
      textureCtx.beginPath();
      textureCtx.moveTo(0, size);
      textureCtx.lineTo(size, 0);
      textureCtx.stroke();
    };

    createTexture();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      time += 0.003;

      // Base dark navy fill
      ctx.fillStyle = '#0a1628';
      ctx.fillRect(0, 0, w, h);

      // Diagonal line texture overlay
      const pattern = ctx.createPattern(textureCanvas, 'repeat');
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, w, h);
      }

      // Smooth animated light blobs
      const blobs = [
        {
          x: w * (0.65 + 0.15 * Math.sin(time * 0.7)),
          y: h * (0.25 + 0.10 * Math.cos(time * 0.5)),
          r: Math.max(w, h) * 0.45,
          alpha: 0.08 + 0.02 * Math.sin(time * 0.4),
        },
        {
          x: w * (0.30 + 0.10 * Math.cos(time * 0.6)),
          y: h * (0.70 + 0.08 * Math.sin(time * 0.8)),
          r: Math.max(w, h) * 0.40,
          alpha: 0.06 + 0.015 * Math.cos(time * 0.5),
        },
        {
          x: w * (0.80 + 0.08 * Math.sin(time * 0.9)),
          y: h * (0.60 + 0.12 * Math.cos(time * 0.4)),
          r: Math.max(w, h) * 0.35,
          alpha: 0.05 + 0.01 * Math.sin(time * 0.6),
        },
      ];

      for (const blob of blobs) {
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.r
        );
        gradient.addColorStop(0, `rgba(60, 120, 200, ${blob.alpha})`);
        gradient.addColorStop(0.5, `rgba(30, 70, 140, ${blob.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(10, 22, 40, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Subtle wave lines that ripple across
      ctx.save();
      for (let i = 0; i < 6; i++) {
        const yBase = h * (0.2 + i * 0.12);
        const alpha = 0.015 + 0.008 * Math.sin(time + i);

        ctx.strokeStyle = `rgba(100, 160, 240, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 4) {
          const wave1 = Math.sin(x * 0.002 + time * 1.2 + i * 0.8) * 30;
          const wave2 = Math.sin(x * 0.004 + time * 0.8 + i * 1.5) * 15;
          const wave3 = Math.sin(x * 0.001 + time * 0.5 + i * 2.0) * 50;
          const y = yBase + wave1 + wave2 + wave3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();

      // Top-right soft highlight vignette
      const vignetteGrad = ctx.createRadialGradient(
        w * 0.75, h * 0.15, 0,
        w * 0.75, h * 0.15, Math.max(w, h) * 0.6
      );
      vignetteGrad.addColorStop(0, `rgba(80, 140, 220, ${0.04 + 0.01 * Math.sin(time * 0.3)})`);
      vignetteGrad.addColorStop(1, 'rgba(10, 22, 40, 0)');
      ctx.fillStyle = vignetteGrad;
      ctx.fillRect(0, 0, w, h);

      // Dark vignette at edges
      const edgeGrad = ctx.createRadialGradient(
        w * 0.5, h * 0.5, Math.min(w, h) * 0.3,
        w * 0.5, h * 0.5, Math.max(w, h) * 0.75
      );
      edgeGrad.addColorStop(0, 'rgba(10, 22, 40, 0)');
      edgeGrad.addColorStop(1, 'rgba(5, 10, 20, 0.4)');
      ctx.fillStyle = edgeGrad;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleWaveBackground;
