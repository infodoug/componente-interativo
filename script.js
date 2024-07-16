
somaScores = 0;
var resultado = document.getElementById('result-num')
let contador = 0

fetch('data.json')
.then(response => response.json())
.then(itens => {
    const notas = document.querySelector("#notas");
    const cores = ['hsl(0, 100%, 67%)', 'hsl(39, 100%, 56%)', 'hsl(166, 100%, 37%)', 'hsl(234, 85%, 45%)']
    const cor_sec = ['hsl(0, 79%, 85%, 0.40)', 'hsl(39, 79%, 85%, 0.40)', 'hsl(166, 79%, 85%, 0.40)', 'hsl(234, 79%, 85%, 0.40)']
    
    itens.map((item, index) => {
        const intervalo = 700 * index
        
            const linha = document.createElement("li")
            linha.classList.add("linha")
            linha.style.backgroundColor = cor_sec[index % cor_sec.length]
            linha.style.height = '50px'
            linha.style.borderRadius = '8px'
            linha.style.display = 'flex'
            linha.style.alignItems = 'center'
            linha.style.justifyContent = 'space-around'
            linha.style.marginBottom = '10px'
            linha.style.opacity = '0'
            

            const icon = document.createElement("img")
            icon.src = item.icon


            const category = document.createElement("P")
            category.classList.add("category")
            category.textContent = item.category
            category.style.color = cores[index % cores.length]

            const score = document.createElement("P")
            score.classList.add("score")
            score.textContent = item.score
            somaScores += item.score
            console.log(somaScores)

            const totalscore = document.createElement("P")
            totalscore.classList.add("totalscore")
            totalscore.textContent = String.fromCharCode(160) + '/ 100'
            totalscore.style.color = 'grey'

            const SCR = document.createElement('div')
            SCR.classList.add("SCR")
            SCR.style.width = '33%'
            SCR.style.display = 'flex'
            SCR.appendChild(score)
            SCR.appendChild(totalscore)

            linha.appendChild(icon)
            linha.appendChild(category)
            linha.appendChild(SCR)
            notas.appendChild(linha)

        setTimeout(() => {
            linha.style.transition = 'opacity 5000ms'
            linha.style.opacity = '1'
        }, (index == 0) ? 300 : intervalo)
    })
    somaScores = Math.floor(somaScores / 4)
    console.log(somaScores)
    let aumentarValor = setInterval(() => {
        contador++
        resultado.textContent = contador
        if (contador >= 2 * (somaScores/3)) {
            clearInterval(aumentarValor);
            aumentarValor = setInterval(() => {
                contador++;
                resultado.textContent = contador;
                if (contador == somaScores) {
                    clearInterval(aumentarValor);
                }
            }, 60)
        }
    }, 30);

})

