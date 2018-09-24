
const postsContainer = document.querySelector('.container-post')

const postTemplate = (post) => `<div class="article">
    <div class="text-article">
    <p>${post.title}</p>
    <p class="read">${post.body}</p>
    <div class="read-information">
        <p>Mac DeGeurin</p>
        <i class="im im-star"></i>
        <p class="read">4 minutes read</p>
        <i class="im im-bookmark"></i>
    </div>
    </div>
    <img class="img-article" src="img/camara.jpeg" alt="camara">
</div>`

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response => response.json())
.then(json => {
    const posts = json.map((post) => postTemplate(post))
    console.log(postsContainer)
    postsContainer.innerHTML = posts.join('')
})

// function sum (a,b) {
//    return a + b 
// } 

// const sum = (a,b) => a + b