function getRandomQuote() {
    var txtDosyaYolu = 'sozler.txt';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var sozler = xhr.responseText.split('\n');
            var randomIndex = Math.floor(Math.random() * sozler.length);
            var randomSoz = sozler[randomIndex];

            document.getElementById('soz').innerText = randomSoz;
        }
    };
    xhr.open('GET', txtDosyaYolu, true);
    xhr.send();
}
document.addEventListener('DOMContentLoaded', getRandomQuote);
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        document.title = "Gitme :(";
    } else {
        document.title = "Selam ben Okan";
    }
});