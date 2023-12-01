const ul = document.querySelector('ul')

async function getApiGitHub() {
    try {
        const response = await fetch('https://api.github.com/users/igormarines')

        if (!response.ok) {
            throw new Error(response.status)
        }

        let data = await response.json()
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `
        <div>
        <strong><img src="./assets/assets/followers.svg">${data.followers} Seguidores</strong><br>
        <strong><img src="./assets/assets/following.svg">${data.following} Seguindo</strong><br>
        <strong><img src="./assets/assets/repository.svg">${data.public_repos} Repositórios</strong><br>
        <strong><img src="./assets/assets/company.svg">${!data.company ? 'Sem empresa' : data.company}</strong><br>
        <strong><img src="./assets/assets/location.svg">${data.location}</strong><br>
        </div>`
    } catch (error) {
        console.error(error)
    }
}

getApiGitHub()

function generateColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}

console.log(generateColor()) // #8432EA

var mudarFundo = document.querySelector('body')

function changeBg() {
    mudarFundo.style.backgroundColor = generateColor()
}
