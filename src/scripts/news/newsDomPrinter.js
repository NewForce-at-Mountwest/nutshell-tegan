
 const newsDomPrinter = {
    // method that accepts an array of news objects and prints them to the DOM
    printNewsToDOM: arrayOfNewsParam => {
      // Grab a reference to the output container
      document.querySelector("#news-container").innerHTML = ""
       //Print input boxes and save button to DOM

      document.querySelector("#news-container").innerHTML = `<div>
      <p><input type="text" id="newsTitleInput">Title</p>
      <p><input type="text" id="newsSynopsisInput">Synopsis</p>
      <p><input type="text" id="newsURLInput">URL</p>
      <button id="save-news-button">Save</button>
      </div>`;

      // Loop through the array
      arrayOfNewsParam.forEach(singleNews => {

        //  print a p tag for each news item to the DOM
        document.querySelector("#news-container").innerHTML += `<div id = "news-card">
        <p>Title</p><p> ${singleNews.title}</p><p>Synopsis</p><p> ${singleNews.synopsis}</p><p>Article URL:</p><p> ${singleNews.url}</p><p> ${singleNews.id}</p>

          <button id="delete-news-${singleNews.id}">Delete</button>
          <button id="edit-news-${singleNews.id}">Edit</button>
        </div>`


        console.log(singleNews.title)
      })
    },
    printNewsEditForm: newsObjectToEdit => {

      const targetCard = document.querySelector(`#student-card-${newsObjectToEdit.id}`)

      targetCard.innerHTML = `<section>
        <input id="edit-input-${newsObjectToEdit.id}" type="text" value="${newsObjectToEdit.name}">
        <button id="save-edit-${newsObjectToEdit.id}">Save</button>
      </section>`

  }
}


export default newsDomPrinter
