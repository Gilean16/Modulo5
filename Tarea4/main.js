// Sistema de Reservas para Restaurante
// Utilizando Promesas y async/await con manejo de errores

// Simulando una base de datos de mesas
const mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Verificando disponibilidad para ${mesasSolicitadas} mesa(s)...`);
            
            // Verificar si el número solicitado es válido
            if (mesasSolicitadas <= 0) {
                reject("El número de mesas solicitadas debe ser mayor a 0");
                return;
            }
            
            // Verificar disponibilidad
            if (mesasSolicitadas <= mesasDisponibles) {
                console.log(`✅ Hay ${mesasSolicitadas} mesa(s) disponible(s)`);
                resolve(`Mesas confirmadas: ${mesasSolicitadas} de ${mesasDisponibles} disponibles`);
            } else {
                reject(`❌ No hay suficientes mesas disponibles. Solicitadas: ${mesasSolicitadas}, Disponibles: ${mesasDisponibles}`);
            }
        }, 2000); // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Enviando confirmación por correo a ${nombreCliente}...`);
            
            // Simular éxito/falla del envío de correo usando Math.random()
            const exitoEnvio = Math.random() > 0.3; // 70% de probabilidad de éxito
            
            if (exitoEnvio) {
                console.log(`📧 Correo enviado exitosamente a ${nombreCliente}`);
                resolve(`Confirmación enviada exitosamente a ${nombreCliente}`);
            } else {
                reject(`❌ Error al enviar el correo de confirmación a ${nombreCliente}. Intente nuevamente.`);
            }
        }, 1500); // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    console.log(`\n🍽️ Iniciando proceso de reserva para ${nombreCliente}`);
    console.log(`Mesas solicitadas: ${mesasSolicitadas}`);
    console.log("─".repeat(50));
    
    try {
        // Paso 1: Verificar disponibilidad de mesas
        console.log("📋 Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log("✅", disponibilidad);
        
        // Paso 2: Si hay mesas disponibles, enviar confirmación
        console.log("\n📤 Procediendo a enviar confirmación...");
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        console.log("✅", confirmacion);
        
        // Paso 3: Reserva completada exitosamente
        console.log("\n🎉 ¡RESERVA COMPLETADA EXITOSAMENTE!");
        console.log(`Cliente: ${nombreCliente}`);
        console.log(`Mesas reservadas: ${mesasSolicitadas}`);
        console.log(`Estado: Confirmada y notificada por correo`);
        
        return {
            exito: true,
            cliente: nombreCliente,
            mesas: mesasSolicitadas,
            mensaje: "Reserva completada exitosamente"
        };
        
    } catch (error) {
        // Manejo de errores para cualquier falla en el proceso
        console.log("\n💥 ERROR EN LA RESERVA:");
        console.log("❌", error);
        console.log("La reserva no pudo ser completada.");
        
        return {
            exito: false,
            cliente: nombreCliente,
            mesas: mesasSolicitadas,
            error: error
        };
    }
}

// Función auxiliar para ejecutar múltiples pruebas
async function ejecutarPruebas() {
    console.log("🧪 INICIANDO PRUEBAS DEL SISTEMA DE RESERVAS");
    console.log("=".repeat(60));
    
    // Prueba 1: Reserva exitosa (mesas disponibles)
    console.log("\n🧪 PRUEBA 1: Reserva con mesas disponibles");
    await hacerReserva("Juan Pérez", 3);
    
    // Esperar un momento entre pruebas
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Prueba 2: Reserva fallida (más mesas de las disponibles)
    console.log("\n🧪 PRUEBA 2: Reserva excediendo mesas disponibles");
    await hacerReserva("María García", 8);
    
    // Esperar un momento entre pruebas
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Prueba 3: Reserva con número inválido
    console.log("\n🧪 PRUEBA 3: Reserva con número inválido de mesas");
    await hacerReserva("Carlos López", 0);
    
    // Esperar un momento entre pruebas
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Prueba 4: Otra reserva válida (puede fallar por el correo)
    console.log("\n🧪 PRUEBA 4: Otra reserva válida (prueba de envío de correo)");
    await hacerReserva("Ana Martínez", 2);
    
    console.log("\n🏁 PRUEBAS COMPLETADAS");
    console.log("=".repeat(60));
}

// Ejecución del sistema
console.log("🏪 SISTEMA DE RESERVAS DEL RESTAURANTE");
console.log(`Mesas disponibles en el restaurante: ${mesasDisponibles}`);
console.log("=".repeat(60));

// Ejecutar las pruebas automáticamente
ejecutarPruebas();

// También puedes hacer llamadas individuales:
// hacerReserva("Cliente Individual", 4);

// Uso individual
hacerReserva("Tu Nombre", 4);

// O ejecuta todas las pruebas automáticamente
ejecutarPruebas();