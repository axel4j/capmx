
document.getElementById("formulario-calculo").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const perimetro = parseFloat(document.getElementById("perimetro").value);

    
    if (isNaN(perimetro) || perimetro <= 0) {
        alert("Por favor, ingresa un valor válido para el perímetro.");
        return;
    }

    
    const longitudCanaleta = 1.50;

    
    const canaletasNecesarias = Math.ceil(perimetro / longitudCanaleta);

    
    const tornillosPorCanaleta = 4; 
    const tornillosNecesarios = canaletasNecesarias * tornillosPorCanaleta;

    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h3>Resultados del Cálculo</h3>
        <p>Para un perímetro de ${perimetro} metros, se necesitarán:</p>
        <ul>
            <li>Canaletas: ${canaletasNecesarias}</li>
            <li>Tornillos: ${tornillosNecesarios}</li>
        </ul>
    `;
});