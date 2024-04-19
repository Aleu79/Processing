const pu = document.getElementById('pu');
const yx = pu.getContext('2d');

// Dibujar letra "A"
yx.beginPath();
yx.moveTo(50, 150); // Parte inferior izquierda
yx.lineTo(100, 50); // Pico
yx.lineTo(150, 150); // Parte inferior derecha
yx.moveTo(75, 100); // Barra horizontal
yx.lineTo(125, 100); // Barra horizontal
yx.strokeStyle = 'black'; // Color de la línea
yx.lineWidth = 3; // Ancho de la línea
yx.lineCap = 'round'; // Estilo de los extremos de la línea
yx.lineJoin = 'round'; // Estilo de las intersecciones de la línea
yx.stroke();

// Dibujar segunda letra "A"
yx.beginPath();
yx.moveTo(200, 150); // Parte inferior izquierda
yx.lineTo(250, 50); // Pico
yx.lineTo(300, 150); // Parte inferior derecha
yx.moveTo(225, 100); // Barra horizontal
yx.lineTo(275, 100); // Barra horizontal
yx.stroke();

