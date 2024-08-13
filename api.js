fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(data => {
        data.data.forEach(user => {
            const markup = `<li>${user.first_name} ${user.last_name}</li>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.error('Error:', error));