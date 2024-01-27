// Función para mostrar las tarjetas según la categoría
function mostrarCategoria(categoria) {
    var tarjetas = document.querySelectorAll('.card');
  
    // Ocultar todas las tarjetas
    tarjetas.forEach(function(tarjeta) {
      tarjeta.style.display = 'none';
    });
  
    // Mostrar solo las tarjetas de la categoría seleccionada
    var tarjetasCategoria = document.querySelectorAll('.' + categoria);
    tarjetasCategoria.forEach(function(tarjeta) {
      tarjeta.style.display = 'block';
    });
  }
  