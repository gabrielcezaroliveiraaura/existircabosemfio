/* Configurações Gerais e Resets */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

:root {
    --bg-color: #f4f4f4;
    --text-color: #333;
    --primary-color: #ff6a00; /* Laranja Naruto */
    --secondary-color: #1a1a1a;
    --card-bg: #ffffff;
}

/* Variáveis para o Modo Sage (Mudança de Tema) */
.sage-mode {
    --bg-color: #121212;
    --text-color: #f4f4f4;
    --primary-color: #e63946; /* Vermelho Sage */
    --secondary-color: #ffd700; /* Dourado dos olhos */
    --card-bg: #1e1e1e;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background 0.3s, color 0.3s;
}

/* Cabeçalho */
header {
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .logo {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}

header .logo span {
    color: var(--primary-color);
}

nav ul {
    list-style: none;
    display: flex;
    align-items: center;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
}

nav ul li a:hover {
    color: var(--primary-color);
}

/* Botão Modo Sage */
#theme-toggle {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

#theme-toggle:hover {
    transform: scale(1.05);
}

/* Banner Hero */
.hero {
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.alphacoders.com/984/984400.jpg') center/cover no-repeat;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 10px;
}

.hero-content p {
    font-size: 18px;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover {
    background-color: #cc5500;
}

/* Seção de Personagens */
.characters {
    padding: 60px 10%;
    text-align: center;
}

.characters h2 {
    font-size: 36px;
    margin-bottom: 40px;
    position: relative;
}

.characters h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    margin: 10px auto 0;
}

.cards-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.card {
    background-color: var(--card-bg);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 300px;
    padding: 20px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.card-img {
    height: 200px;
    border-radius: 8px;
    margin-bottom: 15px;
    background-size: cover;
    background-position: center;
}

/* Cores de fallback temporárias para as imagens caso queira testar offline */
.naruto-img { background-color: #ffaa44; }
.sasuke-img { background-color: #4444ff; }
.sakura-img { background-color: #ffaaee; }

.card h3 {
    margin-bottom: 10px;
}

/* Rodapé */
footer {
    background-color: var(--secondary-color);
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}
