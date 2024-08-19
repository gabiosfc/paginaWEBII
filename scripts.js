// URL do endpoint da API
const url = 'https://jsonplaceholder.typicode.com/users/1';

// Função para alternar a visibilidade do menu lateral
function toggleMenu() {
    const menu = document.querySelector('.menu-lateral');
    menu.classList.toggle('menu-show');
}

// Função para fechar o menu quando clicar fora dele
function closeMenu(event) {
    const menu = document.querySelector('.menu-lateral');
    const menuButton = document.querySelector('.menu-btn');
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('menu-show');
    }
}

// Adiciona o listener para a requisição da API
fetch(url)
    .then(response => response.json())
    .then(data => {
        const userInfoDiv = document.getElementById('user-info');
        userInfoDiv.innerHTML = `
            <h3>${data.name}</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Website:</strong> ${data.website}</p>
            <p><strong>Company:</strong> ${data.company.name}</p>
        `;
    })
    .catch(error => console.error('Erro:', error));

// Adiciona o listener de clique para fechar o menu
document.addEventListener('click', closeMenu);
