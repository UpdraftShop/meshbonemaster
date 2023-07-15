document.getElementById('install-btn').addEventListener('click', function() {
    loadArticle('md/install.md');
});

document.getElementById('usage-btn').addEventListener('click', function() {
    loadArticle('md/usage.md');
});

function loadArticle(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            var html = marked.parse(data);
            var mainElement = document.getElementById('main');
            mainElement.innerHTML = '';
            let divElement = document.createElement('div');
            divElement.className = 'md-content';
            divElement.innerHTML = html;
            mainElement.appendChild(divElement);
        });
}

window.onload = function() {
    loadArticle('md/install.md'); // 初回読み込み時には記事1を表示
}
