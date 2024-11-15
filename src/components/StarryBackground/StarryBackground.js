import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
    const canvasRef = useRef(null);
    const stars = useRef([]);
    const paused = useRef(false);

    // Settings
    const width = window.innerWidth;
    const height = window.innerHeight;
    const config = {
        layers: [
            { speed: 0.03, scale: 0.3, count: 250 },
            { speed: 0.06, scale: 0.6, count: 50 },
            { speed: 0.1, scale: 0.9, count: 30 },
        ],
        starsAngle: 145,
        starBaseRadius: 2.2,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        initializeStars();
        animate(context);

        window.onfocus = () => (paused.current = false);
        window.onblur = () => (paused.current = true);
    }, []);

    const randomRange = (min, max) => min + Math.random() * (max - min);
    const degreesToRads = (degrees) => (degrees / 180) * Math.PI;

    const initializeStars = () => {
        config.layers.forEach((layer) => {
            for (let i = 0; i < layer.count; i++) {
                stars.current.push(
                    createParticle({
                        x: randomRange(0, width),
                        y: randomRange(0, height),
                        speed: layer.speed,
                        heading: degreesToRads(config.starsAngle),
                        radius: config.starBaseRadius * layer.scale,
                    })
                );
            }
        });
    };

    const createParticle = ({ x, y, speed, heading, radius }) => {
        const particle = { x, y, radius, vx: Math.cos(heading) * speed, vy: Math.sin(heading) * speed };
        particle.update = () => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            if (particle.x > width) particle.x = 0;
            if (particle.x < 0) particle.x = width;
            if (particle.y > height) particle.y = 0;
            if (particle.y < 0) particle.y = height;
        };
        return particle;
    };

    const animate = (context) => {
        context.clearRect(0, 0, width, height);
        drawBackground(context);

        stars.current.forEach((star) => {
            star.update();
            drawStar(context, star);
        });

        requestAnimationFrame(() => animate(context));
    };

    const drawBackground = (context) => {
        context.fillStyle = "rgb(33, 33, 33)";
        context.fillRect(0, 0, width, height);
    };

    const drawStar = (context, star) => {
        context.fillStyle = "rgb(143, 197, 193)";
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
    };

    return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }} />;
};

export default StarryBackground;