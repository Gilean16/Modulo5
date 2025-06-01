// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        {
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "genero": "Realismo mágico",
            "disponible": true
        },
        {
            "titulo": "1984",
            "autor": "George Orwell",
            "genero": "Distopía",
            "disponible": true
        },
        {
            "titulo": "Don Quijote de la Mancha",
            "autor": "Miguel de Cervantes",
            "genero": "Novela",
            "disponible": false
        }
    ]
};

// Función para simular la lectura de datos (simular la lectura de un archivo JSON)
function leerDatos(callback) {
    console.log("📖 Leyendo datos de la biblioteca...");
    setTimeout(() => {
        // Simula leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para simular la escritura de datos (opcional)
function escribirDatos(datos, callback) {
    console.log("💾 Guardando cambios en la biblioteca...");
    setTimeout(() => {
        // Simula escribir al archivo JSON
        biblioteca = datos;
        console.log("✅ Datos guardados exitosamente");
        if (callback) callback();
    }, 800);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("\n📚 INVENTARIO DE LIBROS:");
        console.log("=" .repeat(50));
        
        if (datos.libros.length === 0) {
            console.log("No hay libros en la biblioteca.");
            return;
        }
        
        datos.libros.forEach((libro, index) => {
            const estado = libro.disponible ? '✅ Disponible' : '❌ Prestado';
            console.log(`${index + 1}. "${libro.titulo}"`);
            console.log(`   Autor: ${libro.autor}`);
            console.log(`   Género: ${libro.genero}`);
            console.log(`   Estado: ${estado}`);
            console.log("-".repeat(30));
        });
        
        console.log(`Total de libros: ${datos.libros.length}`);
        const disponibles = datos.libros.filter(libro => libro.disponible).length;
        console.log(`Libros disponibles: ${disponibles}`);
        console.log(`Libros prestados: ${datos.libros.length - disponibles}`);
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible = true) {
    console.log(`\n➕ Agregando nuevo libro: "${titulo}"`);
    
    leerDatos((datos) => {
        // Verificar si el libro ya existe
        const libroExistente = datos.libros.find(libro => 
            libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
        
        if (libroExistente) {
            console.log(`⚠️  El libro "${titulo}" ya existe en la biblioteca.`);
            return;
        }
        
        const nuevoLibro = {
            titulo,
            autor,
            genero,
            disponible
        };
        
        // Agregar el nuevo libro al array
        datos.libros.push(nuevoLibro);
        
        // Simular la escritura de datos
        escribirDatos(datos, () => {
            console.log(`✅ Libro "${titulo}" agregado exitosamente.`);
        });
    });
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    console.log(`\n🔄 Actualizando disponibilidad de "${titulo}"`);
    
    leerDatos((datos) => {
        // Buscar el libro por título (búsqueda insensible a mayúsculas/minúsculas)
        const libro = datos.libros.find(libro => 
            libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
        
        if (!libro) {
            console.log(`❌ No se encontró el libro "${titulo}" en la biblioteca.`);
            return;
        }
        
        // Verificar si el estado ya es el deseado
        if (libro.disponible === nuevoEstado) {
            const estadoTexto = nuevoEstado ? 'disponible' : 'prestado';
            console.log(`ℹ️  El libro "${titulo}" ya está ${estadoTexto}.`);
            return;
        }
        
        // Actualizar la disponibilidad
        libro.disponible = nuevoEstado;
        
        // Simular la escritura de datos
        escribirDatos(datos, () => {
            const estadoTexto = nuevoEstado ? 'disponible' : 'prestado';
            console.log(`✅ Estado del libro "${titulo}" actualizado a: ${estadoTexto}`);
        });
    });
}

// Función para buscar libros por criterio
function buscarLibros(criterio, valor) {
    console.log(`\n🔍 Buscando libros por ${criterio}: "${valor}"`);
    
    leerDatos((datos) => {
        const resultados = datos.libros.filter(libro => {
            switch(criterio.toLowerCase()) {
                case 'autor':
                    return libro.autor.toLowerCase().includes(valor.toLowerCase());
                case 'genero':
                    return libro.genero.toLowerCase().includes(valor.toLowerCase());
                case 'titulo':
                    return libro.titulo.toLowerCase().includes(valor.toLowerCase());
                default:
                    return false;
            }
        });
        
        if (resultados.length === 0) {
            console.log(`❌ No se encontraron libros que coincidan con "${valor}"`);
            return;
        }
        
        console.log(`📖 Libros encontrados (${resultados.length}):`);
        console.log("-".repeat(30));
        resultados.forEach((libro, index) => {
            const estado = libro.disponible ? '✅ Disponible' : '❌ Prestado';
            console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${estado})`);
        });
    });
}

// Función para obtener estadísticas de la biblioteca
function mostrarEstadisticas() {
    console.log("\n📊 ESTADÍSTICAS DE LA BIBLIOTECA:");
    
    leerDatos((datos) => {
        const total = datos.libros.length;
        const disponibles = datos.libros.filter(libro => libro.disponible).length;
        const prestados = total - disponibles;
        
        // Contar géneros
        const generos = {};
        datos.libros.forEach(libro => {
            generos[libro.genero] = (generos[libro.genero] || 0) + 1;
        });
        
        console.log("=" .repeat(40));
        console.log(`📚 Total de libros: ${total}`);
        console.log(`✅ Libros disponibles: ${disponibles}`);
        console.log(`❌ Libros prestados: ${prestados}`);
        console.log(`📈 Porcentaje de disponibilidad: ${((disponibles/total)*100).toFixed(1)}%`);
        
        console.log("\n📑 Libros por género:");
        Object.entries(generos).forEach(([genero, cantidad]) => {
            console.log(`   ${genero}: ${cantidad} libro(s)`);
        });
        console.log("=" .repeat(40));
    });
}

// Función principal para demostrar el uso del sistema
function ejecutarDemo() {
    console.log("🏛️  SISTEMA DE GESTIÓN DE BIBLIOTECA");
    console.log("=" .repeat(50));
    
    // Mostrar inventario inicial
    mostrarLibros();
    
    // Esperar un poco y agregar un libro
    setTimeout(() => {
        agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
        
        // Esperar y actualizar disponibilidad
        setTimeout(() => {
            actualizarDisponibilidad("1984", false);
            
            // Esperar y mostrar el inventario actualizado
            setTimeout(() => {
                mostrarLibros();
                
                // Mostrar estadísticas
                setTimeout(() => {
                    mostrarEstadisticas();
                    
                    // Buscar libros
                    setTimeout(() => {
                        buscarLibros("autor", "García Márquez");
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

// ========== FUNCIONES DE UTILIDAD ADICIONALES ==========

// Función para prestar un libro (cambiar a no disponible)
function prestarLibro(titulo) {
    actualizarDisponibilidad(titulo, false);
}

// Función para devolver un libro (cambiar a disponible)
function devolverLibro(titulo) {
    actualizarDisponibilidad(titulo, true);
}

// Función para eliminar un libro (opcional)
function eliminarLibro(titulo) {
    console.log(`\n🗑️  Eliminando libro: "${titulo}"`);
    
    leerDatos((datos) => {
        const indice = datos.libros.findIndex(libro => 
            libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
        
        if (indice === -1) {
            console.log(`❌ No se encontró el libro "${titulo}" para eliminar.`);
            return;
        }
        
        // Eliminar el libro del array
        datos.libros.splice(indice, 1);
        
        escribirDatos(datos, () => {
            console.log(`✅ Libro "${titulo}" eliminado exitosamente.`);
        });
    });
}

// ========== EJECUCIÓN DEL DEMO ==========
ejecutarDemo();

// ========== EJEMPLOS DE USO INDIVIDUAL ==========
/*
// Puedes usar estas funciones individualmente:

// Mostrar todos los libros
mostrarLibros();

// Agregar un nuevo libro
agregarLibro("Rayuela", "Julio Cortázar", "Novela experimental", true);

// Prestar un libro
prestarLibro("Cien años de soledad");

// Devolver un libro
devolverLibro("Don Quijote de la Mancha");

// Buscar libros
buscarLibros("genero", "Novela");

// Mostrar estadísticas
mostrarEstadisticas();

// Eliminar un libro
eliminarLibro("1984");
*/