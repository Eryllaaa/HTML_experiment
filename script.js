const url = 'https://id.twitch.tv/oauth2/token';
const data = { username: 'johndoe', password: 'secretpassword' };

token = {}

fetch(url, { method: 'POST', headers: {'Content-Type': 'x-www-form-urlencoded'}, body: 'client_id=cvs7ivnkujeg4vn4atbnayc4mjhn6e&client_secret=3l6jsxbzylavaz5xdg6dn85hl3rm9m&grant_type=client_credentials'})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        token = data;
        DisplayToken("success");
    })
    .catch((error) => {
        console.error('Error:', error);
        DisplayToken("failed");
    });

function changeText() {
    const newText = "New text content";
    document.getElementById("text").textContent = token[access_token];
}

function DisplayToken(token) {
    document.getElementById("text").textContent = token;
}