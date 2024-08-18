// URL do endpoint da API
const url = 'https://jsonplaceholder.typicode.com/users/1';

// Realizando a requisição GET
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
