document.addEventListener("DOMContentLoaded", function() {
    createMilho();
    createSoja();
    createAlgodao();
    createCana();
    createAlface();
    createBatataDoce();
    createMelancia();
    createTrigo();
    createPepino();

});

let cardOpen = document.querySelector(".main-card-open");
var deckDeCarts = document.querySelector(".deck-cards");
var main = document.querySelector("main");


function createMilho() {
    var milho = document.createElement("a");
    milho.href = "Plants/milho.html"
    var article = document.createElement("article");
    article.classList.add("card-plant");
    var H3Milho = document.createElement("h3");
    var textH3Milho = document.createTextNode("Milho");
    article.appendChild(H3Milho)
    H3Milho.appendChild(textH3Milho)
    var img = document.createElement("img")
    img.src = "images/milho.png"
    article.appendChild(img)
    img.classList.add("mb-5", "milho")
    var botao = document.createElement("button");
    botao.appendChild(document.createTextNode('Ler Mais'));
    botao.style = "font-family: 'Poppins', sans-serif ; "
    botao.classList.add("btn", "btn-cards", "text-light")
    article.appendChild(botao)
    milho.appendChild(article)
    deckDeCarts.appendChild(milho);
}

function createSoja() {
    var soja = document.createElement("a")
    soja.href = "Plants/soja.html"
    var articleSoja = document.createElement("article");
    articleSoja.classList.add("card-plant")
    var H3soja = document.createElement("h3")
    var textH3Soja = document.createTextNode("Soja")
    H3soja.appendChild(textH3Soja)
    articleSoja.appendChild(H3soja)
    var imgSoja = document.createElement("img")
    imgSoja.src = "images/soja.png"
    imgSoja.classList.add("mb-5", "img-commodities");
    articleSoja.appendChild(imgSoja);
    var botaoSoja = document.createElement("button")
    botaoSoja.classList.add("btn", "btn-cards", "text-light");
    botaoSoja.appendChild(document.createTextNode("Ler Mais"));
    botaoSoja.style = "font-family: 'Poppins', sans-serif ; "
    articleSoja.appendChild(botaoSoja)
    soja.appendChild(articleSoja)
    deckDeCarts.appendChild(soja);
}

function createAlgodao() {
    var algodao = document.createElement("a")
    algodao.href = "Plants/algodao.html"
    var articleAlgodao = document.createElement("article");
    articleAlgodao.classList.add("card-plant")
    var H3Algodao = document.createElement("h3")
    var textH3Algodao = document.createTextNode("Algodão")
    H3Algodao.appendChild(textH3Algodao)
    articleAlgodao.appendChild(H3Algodao)
    var imgAlgodao = document.createElement("img")
    imgAlgodao.src = "images/algodao.png"
    imgAlgodao.classList.add("mb-5", "img-commodities");
    articleAlgodao.appendChild(imgAlgodao);
    var botaoAlgodao = document.createElement("button")
    botaoAlgodao.classList.add("btn", "btn-cards", "text-light");
    botaoAlgodao.style = "font-family: 'Poppins', sans-serif ; "
    botaoAlgodao.appendChild(document.createTextNode("Ler Mais"));
    articleAlgodao.appendChild(botaoAlgodao)
    algodao.appendChild(articleAlgodao)
    deckDeCarts.appendChild(algodao);
}

function createCana() {
    var cana = document.createElement("a")
    cana.href = "Plants/cana-de-acucar.html"
    var articleCana = document.createElement("article");
    articleCana.classList.add("card-plant")
    var H5Cana = document.createElement("h5")
    var textH5Cana = document.createTextNode("Cana-de-açucar")
    H5Cana.appendChild(textH5Cana)
    articleCana.appendChild(H5Cana)
    var imgCana = document.createElement("img")
    imgCana.src = "images/cana.png"
    imgCana.classList.add("mb-5", "img-commodities");
    articleCana.appendChild(imgCana);
    var botaoCana = document.createElement("button")
    botaoCana.classList.add("btn", "btn-cards", "text-light");
    botaoCana.style = "font-family: 'Poppins', sans-serif ; "
    botaoCana.appendChild(document.createTextNode("Ler Mais"));
    articleCana.appendChild(botaoCana)
    cana.appendChild(articleCana)
    deckDeCarts.appendChild(cana);
}

function createAlface() {
    var alface = document.createElement("a")
    alface.href = "Plants/alface.html"
    var articleAlface = document.createElement("article");
    articleAlface.classList.add("card-plant")
    var H3Alface = document.createElement("h3")
    var textH3Alface = document.createTextNode("Alface")
    H3Alface.appendChild(textH3Alface)
    articleAlface.appendChild(H3Alface)
    var imgAlface = document.createElement("img")
    imgAlface.src = "images/alface.png"
    imgAlface.style = "height: 80px; margin-bottom: 37px;"
    imgAlface.classList.add("img-commodities");
    articleAlface.appendChild(imgAlface);
    var botaoAlface = document.createElement("button")
    botaoAlface.classList.add("btn", "btn-cards", "text-light");
    botaoAlface.appendChild(document.createTextNode("Ler Mais"));
    botaoAlface.style = "font-family: 'Poppins', sans-serif ; "
    articleAlface.appendChild(botaoAlface)
    alface.appendChild(articleAlface)
    deckDeCarts.appendChild(alface);
}

function createBatataDoce() {
    var batataDoce = document.createElement("a")
    batataDoce.href = "Plants/batatdoce.html"
    var articlebatataDoce = document.createElement("article");
    articlebatataDoce.classList.add("card-plant")
    var H4batataDoce = document.createElement("h4")
    var textH4batataDoce = document.createTextNode("Batata Doce")
    H4batataDoce.appendChild(textH4batataDoce)
    articlebatataDoce.appendChild(H4batataDoce)
    var imgbatataDoce = document.createElement("img")
    imgbatataDoce.src = "images/batataDoce.png"
    imgbatataDoce.classList.add("mb-5", "img-commodities");
    imgbatataDoce.style = "margin-bottom: 54px;"
    articlebatataDoce.appendChild(imgbatataDoce);
    var botaobatataDoce = document.createElement("button")
    botaobatataDoce.classList.add("btn", "btn-cards", "text-light");
    botaobatataDoce.appendChild(document.createTextNode("Ler Mais"));
    botaobatataDoce.style = "font-family: 'Poppins', sans-serif ; "
    articlebatataDoce.appendChild(botaobatataDoce)
    batataDoce.appendChild(articlebatataDoce)
    deckDeCarts.appendChild(batataDoce);
}

function createMelancia() {
    var Melancia = document.createElement("a")
    Melancia.href = "Plants/melancia.html"
    var articleMelancia = document.createElement("article");
    articleMelancia.classList.add("card-plant")
    var H3Melancia = document.createElement("h3")
    var textH3Melancia = document.createTextNode("Melancia")
    H3Melancia.appendChild(textH3Melancia)
    articleMelancia.appendChild(H3Melancia)
    var imgMelancia = document.createElement("img")
    imgMelancia.src = "images/melancia.png"
    imgMelancia.style = "height: 75px; margin-bottom: 42px;"
    imgMelancia.classList.add("img-commodities");
    articleMelancia.appendChild(imgMelancia);
    var botaoMelancia = document.createElement("button")
    botaoMelancia.classList.add("btn", "btn-cards", "text-light");
    botaoMelancia.appendChild(document.createTextNode("Ler Mais"));
    botaoMelancia.style = "font-family: 'Poppins', sans-serif ; "
    articleMelancia.appendChild(botaoMelancia)
    Melancia.appendChild(articleMelancia)
    deckDeCarts.appendChild(Melancia);
}

function createTrigo() {
    var Trigo = document.createElement("a")
    Trigo.href = "Plants/trigo.html"
    var articleTrigo = document.createElement("article");
    articleTrigo.classList.add("card-plant")
    var H3Trigo = document.createElement("h3")
    var textH3Trigo = document.createTextNode("Trigo")
    H3Trigo.appendChild(textH3Trigo)
    articleTrigo.appendChild(H3Trigo)
    var imgTrigo = document.createElement("img")
    imgTrigo.src = "images/trigo.png"
    imgTrigo.classList.add("mb-5", "img-commodities");
    articleTrigo.appendChild(imgTrigo);
    var botaoTrigo = document.createElement("button")
    botaoTrigo.classList.add("btn", "btn-cards", "text-light");
    botaoTrigo.appendChild(document.createTextNode("Ler Mais"));
    botaoTrigo.style = "font-family: 'Poppins', sans-serif ; "
    articleTrigo.appendChild(botaoTrigo)
    Trigo.appendChild(articleTrigo)
    deckDeCarts.appendChild(Trigo);
}

function createPepino() {
    var Pepino = document.createElement("a")
    Pepino.href = "./Plants/pepino.html"
    var articlePepino = document.createElement("article");
    articlePepino.classList.add("card-plant")
    var H3Pepino = document.createElement("h3")
    var textH3Pepino = document.createTextNode("Pepino")
    H3Pepino.appendChild(textH3Pepino)
    articlePepino.appendChild(H3Pepino)
    var imgPepino = document.createElement("img")
    imgPepino.src = "images/pepino.png"
    imgPepino.classList.add("mb-3", "img-commodities");
    articlePepino.appendChild(imgPepino);
    var botaoPepino = document.createElement("button")
    botaoPepino.classList.add("btn", "btn-cards", "text-light");
    botaoPepino.appendChild(document.createTextNode("Ler Mais"));
    botaoPepino.style = "font-family: 'Poppins', sans-serif ; "
    articlePepino.appendChild(botaoPepino)
    Pepino.appendChild(articlePepino)
    deckDeCarts.appendChild(Pepino);
}


function closedButton() {
    cardOpen.style.display = "none"
}