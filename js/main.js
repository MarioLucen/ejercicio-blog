'use strict';

var postsContainer = document.querySelector('.container-post');

var postTemplate = function postTemplate(post) {
    return '<div class="article">\n    <div class="text-article">\n    <p>' + post.title + '</p>\n    <p class="read">' + post.body + '</p>\n    <div class="read-information">\n        <p>Mac DeGeurin</p>\n        <i class="im im-star"></i>\n        <p class="read">4 minutes read</p>\n        <i class="im im-bookmark"></i>\n    </div>\n    </div>\n    <img class="img-article" src="img/camara.jpeg" alt="camara">\n</div>';
};

fetch('https://jsonplaceholder.typicode.com/posts/').then(function (response) {
    return response.json();
}).then(function (json) {
    var posts = json.map(function (post) {
        return postTemplate(post);
    });
    console.log(postsContainer);
    postsContainer.innerHTML = posts.join('');
});

// function sum (a,b) {
//    return a + b 
// } 

// const sum = (a,b) => a + b
