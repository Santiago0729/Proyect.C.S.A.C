document.addEventListener("DOMContentLoaded", () => {
    const bCalc = document.getElementById("calc");

    bCalc.addEventListener("click", () => {
        let cantidadMes = parseFloat(document.getElementById("KwhConsumidos").value);
        let rC = document.getElementById("RConsumo");
        function calcular(cantidad){

            let TwhConsumidosAño = (cantidad*12)/1000;
            let PTotal = TwhConsumidosAño/0.31;
            return PTotal;
        }
        valor = calcular(cantidadMes);
        rC.textContent = `Tu porcentaje de consumo de energia solar anual es de:  ${valor}`;
    });
});