function conversor() {
    const urlApi = "https://economia.awesomeapi.com.br/all/"

    fetch(urlApi)
    .then((response) => response.json())

    .then((Date) => {
        let currencyUSD = parseFloat((Date.USD.high));

        function converter() {
            let alerta = document.getElementById("alerta");
            let outValor = document.getElementById("outValor");
            let inValor = document.getElementById("inValor");
            let valor = parseFloat(inValor.value);
            let USDtoBRL = valor * currencyUSD;

            if (valor == 0 || isNaN(valor)){
                alerta.textContent = "Por favor, informe um valor correto!";
                inValor.focus();
                outValor.textContent = "";
                return
            } else {
                alerta.textContent = "";
            }

            outValor.textContent = `
             ${valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} Dólar
             em Real é: 
             ${USDtoBRL.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        }
        converter()
    })
}

var btnConverter = document.getElementById("btnConverter");
btnConverter.addEventListener("click", conversor);