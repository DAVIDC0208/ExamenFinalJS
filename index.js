 /* =====================================================
       DATOS INICIALES
       Array principal que simula una base de datos.
       No usamos id porque el ejercicio trabaja con el índice del array.
    ====================================================== */

      let platosDisponibles = [
        {
          nombre: "Ensalada César",
          descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
          tipo: "primero",
          precio: 8.5,
          foto: "ensalada.jpg",
        },
        {
          nombre: "Macarrones boloñesa",
          descripcion: "Pasta con salsa de tomate y carne picada",
          tipo: "primero",
          precio: 9.0,
          foto: "macarrones.jpg",
        },
        {
          nombre: "Pollo al horno",
          descripcion: "Pollo asado con patatas",
          tipo: "segundo",
          precio: 11.5,
          foto: "pollo.jpg",
        },
        {
          nombre: "Merluza a la plancha",
          descripcion: "Merluza con verduras salteadas",
          tipo: "segundo",
          precio: 12.0,
          foto: "merluza.jpg",
        },
      ];

      /*
        Array donde se guardan los platos que el usuario añade.
        Al principio está vacío.
    */
      let platos = [];