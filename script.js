/* =========================================
   ESTRELLAS
========================================= */

const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* =========================================
   CORAZÓN DE PARTÍCULAS
========================================= */

const heart = document.getElementById("heart");

const particles = 1800;

for (let i = 0; i < particles; i++) {

    const particle = document.createElement("div");

    particle.style.position = "absolute";

    particle.style.width = "3px";
    particle.style.height = "3px";

    particle.style.borderRadius = "50%";

    particle.style.background = "#fff200";

    particle.style.boxShadow =
        "0 0 6px #fff200, 0 0 12px #ffd000";

    /*
       Fórmula matemática del corazón
    */

    const t = Math.random() * Math.PI * 2;

    const scale =
        Math.sqrt(Math.random());

    const x =
        16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    const centerX = 250;
    const centerY = 250;

    const posX =
        centerX + x * 13 * scale;

    const posY =
        centerY - y * 13 * scale;

    particle.style.left =
        posX + "px";

    particle.style.top =
        posY + "px";

    /*
       Animación individual
    */

    particle.animate(
        [
            {
                transform: "scale(0.3)",
                opacity: 0.2
            },

            {
                transform: "scale(1.5)",
                opacity: 1
            },

            {
                transform: "scale(0.7)",
                opacity: 0.4
            }
        ],
        {
            duration:
                1500 + Math.random() * 2500,

            delay:
                Math.random() * 2000,

            iterations: Infinity,

            direction: "alternate",

            easing: "ease-in-out"
        }
    );

    heart.appendChild(particle);
}


/* =========================================
   FLORES
========================================= */

const flowers =
    document.getElementById("flowers");

const flowerTypes = [
    "🌻",
    "🌼",
    "🌻",
    "🌼"
];

for (let i = 0; i < 35; i++) {

    const flower =
        document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowerTypes[
            Math.floor(
                Math.random() *
                flowerTypes.length
            )
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        15 + Math.random() * 35 + "px";

    flower.style.animationDuration =
        7 + Math.random() * 12 + "s";

    flower.style.animationDelay =
        Math.random() * 12 + "s";

    flowers.appendChild(flower);
}


/* =========================================
   MOVIMIENTO DEL RATÓN
========================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth - 0.5);

        const y =
            (event.clientY /
                window.innerHeight - 0.5);

        heart.style.transform =
            `
            translate(
                calc(-50% + ${x * 25}px),
                calc(-50% + ${y * 25}px)
            )
            `;
    }
);