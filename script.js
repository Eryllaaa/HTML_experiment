const url = 'https://id.twitch.tv/oauth2/token';

const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // Uncomment this if you are sending form data in a different format
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming server returns JSON response
    })
    .then(data => {
        console.log('Success:', data);
        document.getElementById('response').innerHTML = 'Submission successful!';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerHTML = 'Error submitting form.';
    });