// Es el archivo que simula una base de datos en memoria. Como el examen dice que no hay base de datos real, los productos se guardan en un array en memoria (RAM).

// Cuando arrancas el servidor, este array se carga con 3 productos de ejemplo
// Cuando creas un producto nuevo, se añade al array
// Cuando borras uno, se elimina del array
// Si reinicias el servidor, los datos se pierden porque están en memoria, no en disco

// mockProducts.ts
export const mockProducts = [
    {
        id: "1", // ID único del producto (string)
        name: "Laptop", // Nombre del producto (string)
        price: 1200, // Precio del producto (number)
        stock: 10, // Cantidad en stock (number)
        is_active: true, // Estado del producto (boolean)
        created_at: new Date(), // Fecha de creación (datetime)
        updated_at: new Date(), // Fecha de actualización (datetime)
    },
    {
        id: "2",
        name: "Smartphone",
        price: 800,
        stock: 20,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    },
];
