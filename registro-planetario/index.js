const planetas = require('./planetas');

// Función para mostrar el encabezado de la misión
function mostrarEncabezado() {
  console.log('\n🚀 ========================================= 🚀');
  console.log('    REGISTRO PLANETARIO - EXPLORACIÓN ESPACIAL');
  console.log('🚀 ========================================= 🚀\n');
  console.log(`📊 Total de planetas registrados: ${planetas.length}\n`);
}

// Función para mostrar la información de cada planeta
function explorarPlanetas() {
  planetas.forEach((planeta, index) => {
    console.log(`🌍 ====== PLANETA ${index + 1} ======`);
    console.log(`🪐 Nombre: ${planeta.nombre}`);
    console.log(`📝 Descripción: ${planeta.descripcion}`);
    console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
    console.log(`🔬 Tipo: ${planeta.tipo}`);
    console.log(`📏 Distancia: ${planeta.distancia}`);
    console.log(`🌡️  Temperatura: ${planeta.temperatura}`);
    console.log('✨ ----------------------------- ✨\n');
  });
}

// Función para mostrar estadísticas
function mostrarEstadisticas() {
  const tiposPlanetas = {};
  planetas.forEach(planeta => {
    tiposPlanetas[planeta.tipo] = (tiposPlanetas[planeta.tipo] || 0) + 1;
  });

  console.log('📈 ====== ESTADÍSTICAS DE EXPLORACIÓN ======');
  for (const [tipo, cantidad] of Object.entries(tiposPlanetas)) {
    console.log(`${tipo === 'Luna' ? '🌙' : '🪐'} ${tipo}s: ${cantidad}`);
  }
  console.log('🎯 ======================================== 🎯\n');
}

// Función para mostrar el pie de página
function mostrarDespedida() {
  console.log('🎉 ====== ¡MISIÓN COMPLETADA! ======');
  console.log('   ¡Felicidades, Explorador Espacial!');
  console.log('  Has registrado exitosamente todos');
  console.log('     tus planetas favoritos.');
  console.log('🚀 Continúa explorando el universo... 🌌');
  console.log('🎉 ================================== 🎉\n');
}

// ¡Ejecutar la misión de exploración!
function iniciarMision() {
  mostrarEncabezado();
  explorarPlanetas();
  mostrarEstadisticas();
  mostrarDespedida();
}

// ¡Despegue!
iniciarMision();

// Mantener la consola abierta en Windows
if (process.platform === 'win32') {
  console.log('Presiona cualquier tecla para salir...');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
}