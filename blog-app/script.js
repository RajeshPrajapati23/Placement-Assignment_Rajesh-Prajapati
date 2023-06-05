const container = document.querySelector("#blog-container");

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function () {
    let inputSection = `
    <div  class="input-section">
    <label class="title">Title</label>
    <input type= "text" class="input-title">
    <br>
    <label>Body</label>
    <input type= "text" class="input-body /">
    <br>
    <button class="summit">Submit </button>
    </div>
    `
    container.innerHTML = inputSection;
})

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("summit")) {
        let text = event.target.parentElement.querySelector(".input-title")
        let text2 = event.target.parentElement.querySelector(".input-body")
        if ((text.value && text2.value).trim()) {
            let blogDiv = document.createElement('div');
            blogDiv.classList.add('blog');


            blogDiv.innerHTML = `
            <h2>📝 ${text.value}</h2>
            <p>${text2.value}</p>
            <button class="delete" >Delete </button>
            `

            let inputBox = document.querySelector(".input-section")
            inputBox.after(blogDiv)

            text.value = ""
            text2.value = ""


        }

    }
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove()
    }
})

// Fetch data from the API
const container2 = document.getElementById('blog-container2');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

        // Loop through the data and create HTML elements
        data.forEach((blogData) => {
            // Create a new post element
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog');

            // Set the title and body of the blog
            blogElement.innerHTML = `
                  <h2>📝 ${blogData.title}</h2>
                  <p>${blogData.body}</p>
                  <button class="delete">Delete</button>
              
              `;

            // Append the blog element to the container
            container2.appendChild(blogElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

container2.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove()
    }
})


