function eliminarItem(itemId) {
    const token = localStorage.getItem('access_token');
    if (!confirm('¿Deseas eliminar este producto del carro?')) return;

    fetch(`/api/carro/${itemId}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(res => {
        if (res.ok) {
            location.reload();
        } else {
            alert('Error al eliminar el ítem.');
        }
    });
}

function procesarCheckout() {
    const token = localStorage.getItem('access_token');
    if (!token) {
        alert('Debes estar autenticado como Cliente para procesar la compra.');
        return;
    }

    fetch('/api/ordenes/checkout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert('Rechazado: ' + data.error);
        } else {
            alert('¡Compra exitosa! Se ha generado la Orden #' + data.id + ' en estado PAGADO.');
            window.location.href = '/';
        }
    })
    .catch(err => console.error(err));
}

function actualizarCarro() {
    alert('Cantidades actualizadas en la sesión.');
    location.reload();
}
