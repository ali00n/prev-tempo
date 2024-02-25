const key = "be39b20595cd10976b862c9eb8e6841b";

async function buscarCidade(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
        if (!response.ok) {
            throw new Error('Cidade não encontrada.');
        }
        const dados = await response.json();
        colocarNaTela(dados);
    } catch (error) {
        console.error('Erro ao buscar cidade:', error.message);
    }
}

function colocarNaTela(dados) {
    console.log(dados);
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name; // Para mudar nome da cidade
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"; // Para mudar a temperatura ambiente da cidade
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description; // Para descrever como esta o céu
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`; //Para mudar o icone da nuvem\sol
    document.querySelector(".moisture").innerHTML = dados.main.humidity + "%"; // Para mudar a porcentagem da umidade da cidade
}

function cliqueiNoBotao() {
    const city = document.querySelector(".input-city").value;
    buscarCidade(city);
}
