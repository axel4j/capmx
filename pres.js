function cotizar() {
    // Obtener el perímetro en metros
    let perimetro = document.getElementById('perimetro').value;
    let tinacoSeleccionado = document.getElementById('tinaco').value;

    // Verificar que el perímetro no esté vacío
    if (perimetro === "" || isNaN(perimetro) || perimetro <= 0) {
        alert("Por favor, ingresa un perímetro válido.");
        return;
    }

    // Multiplicar el perímetro por 750 para calcular el costo de las canaletas y otros materiales
    let costoCanaletas = perimetro * 750; // Costo por metro de canaleta

    // Obtener el precio del tinaco seleccionado
    let tinacoPrecio = (tinacoSeleccionado === "3000") ? 3500 : 1700;

    // Otros costos fijos
    let costoValvula = 50;
    let costoFiltro = 100;
    let costoConexiones = 100;
    let costoPegamento = 50;
    let costoSoportes = 380;

    // Cálculo del costo total sin mano de obra
    let costoTotalSinManoDeObra = costoCanaletas + costoValvula + costoFiltro + costoConexiones + costoPegamento + costoSoportes + tinacoPrecio;

    // Cálculo del 10% de mano de obra
    let manoDeObra = costoTotalSinManoDeObra * 0.10;

    // Cálculo total final
    let costoTotalFinal = costoTotalSinManoDeObra + manoDeObra;

    // Mostrar detalles de la cotización
    let detalle = `
        <strong>Detalle de la Cotización:</strong><br>
        Canaletas (PVC, ${perimetro} m): $${costoCanaletas} MXN<br>
        Tinaco seleccionado (L ${tinacoSeleccionado}): $${tinacoPrecio} MXN<br>
        Válvula de desbordamiento: $${costoValvula} MXN<br>
        Filtro de entrada: $${costoFiltro} MXN<br>
        Conexiones y accesorios: $${costoConexiones} MXN<br>
        Pegamento y cinta selladora: $${costoPegamento} MXN<br>
        Soportes para canaletas: $${costoSoportes} MXN<br>
        <strong>Subtotal (sin mano de obra):</strong> $${costoTotalSinManoDeObra} MXN<br>
        <strong>Mano de obra (10%):</strong> $${manoDeObra} MXN<br>
    `;

    let total = `
        <strong>Costo Total:</strong> $${costoTotalFinal} MXN
    `;

    // Mostrar en el HTML
    document.getElementById('detalle').innerHTML = detalle;
    document.getElementById('total').innerHTML = total;
}
