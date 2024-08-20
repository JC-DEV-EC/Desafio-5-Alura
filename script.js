const listaCompras = {
    Frutas: [],
    Verduras: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

document.getElementById('btnAgregar').addEventListener('click', function() {
    Swal.fire({
        title: '¿Qué alimento deseas agregar?',
        input: 'text',
        inputPlaceholder: 'Ingresa el nombre del alimento',
        showCancelButton: true,
        confirmButtonText: 'Agregar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value) {
                return '¡Necesitas escribir algo!';
            }
        },
        background: '#2d2d2d', // Fondo de la alerta
        color: '#FFD700', // Color del texto
        confirmButtonColor: '#FFD700', // Color del botón
        cancelButtonColor: '#d33', // Color del botón cancelar
    }).then((result) => {
        if (result.isConfirmed) {
            const alimento = result.value;
            Swal.fire({
                title: 'Selecciona una categoría',
                input: 'select',
                inputOptions: {
                    Frutas: 'Frutas',
                    Verduras: 'Verduras',
                    Lácteos: 'Lácteos',
                    Congelados: 'Congelados',
                    Dulces: 'Dulces',
                    Otros: 'Otros'
                },
                inputPlaceholder: 'Selecciona una categoría',
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar',
                background: '#2d2d2d', // Fondo de la alerta
                color: '#FFD700', // Color del texto
                confirmButtonColor: '#FFD700', // Color del botón
                cancelButtonColor: '#d33', // Color del botón cancelar
            }).then((categoriaResult) => {
                if (categoriaResult.isConfirmed) {
                    const categoria = categoriaResult.value;
                    listaCompras[categoria].push(alimento);
                    mostrarLista();
                    Swal.fire({
                        icon: 'success',
                        title: '¡Guardado!',
                        text: `${alimento} ha sido añadido a ${categoria}.`,
                        background: '#2d2d2d', // Fondo de la alerta
                        color: '#FFD700', // Color del texto
                        confirmButtonColor: '#FFD700', // Color del botón
                    });
                }
            });
        }
    });
});

function mostrarLista() {
    const listaContainer = document.getElementById('lista-container');
    listaContainer.innerHTML = "<h2 class='text-xl font-bold mb-4 text-yellow-400'>Lista de Compras:</h2>";
    for (const categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            listaContainer.innerHTML += `<h3 class='font-bold text-yellow-500'>${categoria}:</h3><p>${listaCompras[categoria].join(', ')}</p>`;
        }
    }
}
