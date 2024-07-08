const POST_URL = 'https://id.twitch.tv/oauth2/token';
const GET_URL = 'https://id.twitch.tv/oauth2/token';
const data = { username: 'johndoe', password: 'secretpassword' };

token = {};

fetch(POST_URL, { method: 'POST', headers: { 'Content-Type': 'x-www-form-urlencoded' }, body: 'client_id=cvs7ivnkujeg4vn4atbnayc4mjhn6e&client_secret=yqolzjtykklwwi8a74a2yhdoecvh04&grant_type=client_credentials'})
    .then(response => response.json())
    .then(data => {
        //console.log('Success:', data);
        token = data;
        changeText("statusDisplay", "status: success");
        ChangeText("token", "access token: " + toString(data));
    })
    .catch((error) => {
        //console.error('Error:', error);
        changeText("statusDisplay", "status: failure");
    });

//fetch(GET_URL, {})

function changeText(id, text) {
    document.getElementById(id).textContent = text;
}