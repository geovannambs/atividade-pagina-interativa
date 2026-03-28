let numero = 0;
let listaAtual = null;

function aumentar() {
    numero++;
    document.getElementById('contador-texto').innerText = numero;
}

function diminuir() {
    if (numero > 0) {
        numero--;
        document.getElementById('contador-texto').innerText = numero;
    } else {
        alert("O contador já está em zero");
    }
}

function atualizarLetras() {
    let valor = document.getElementById('campo-input').value;
    let semEspaco = valor.replace(/\s/g, '').length;
    document.getElementById('contagem-letras').innerText = "Caracteres (sem espaço): " + semEspaco;
}

document.getElementById('campo-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== "") {
        let p = document.createElement('p');
        p.innerText = this.value;
        document.getElementById('lista-paragrafos').appendChild(p);
        this.value = "";
        atualizarLetras();
    }
});

function adicionarNaLista() {
    let input = document.getElementById('item-lista');
    let area = document.getElementById('area-listas');
    let tipo = document.getElementById('tipo-lista').value;

    if (input.value.trim() === "") return;

    if (!listaAtual || listaAtual.tagName.toLowerCase() !== tipo) {
        area.innerHTML = "";
        listaAtual = document.createElement(tipo);
        listaAtual.id = "minha-lista-dinamica";
        area.appendChild(listaAtual);
    }

    let li = document.createElement('li');
    li.innerText = input.value;
    listaAtual.appendChild(li);

    input.value = "";
}

function ordenarLista() {
    if (!listaAtual) return;

    let itens = Array.from(listaAtual.getElementsByTagName('li'));

    itens.sort((a, b) => {
        let textoA = a.innerText.trim();
        let textoB = b.innerText.trim();

        if (!isNaN(textoA) && !isNaN(textoB) && textoA !== "" && textoB !== "") {
            return Number(textoA) - Number(textoB);
        }

        return textoA.localeCompare(textoB, 'pt-BR', { sensitivity: 'base' });
    });

    listaAtual.innerHTML = "";
    itens.forEach(item => listaAtual.appendChild(item));
}

function resetarTudo() {
    numero = 0;
    document.getElementById('contador-texto').innerText = 0;
    document.getElementById('campo-input').value = "";
    document.getElementById('item-lista').value = "";
    document.getElementById('contagem-letras').innerText = "Caracteres (sem espaço): 0";
    document.getElementById('lista-paragrafos').innerHTML = "";
    document.getElementById('area-listas').innerHTML = "";
    listaAtual = null;
}