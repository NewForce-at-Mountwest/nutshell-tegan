
 const newsDomPrinter = {
    // method that accepts an array of news objects and prints them to the DOM
    printNewsToDOM: arrayOfNewsParam => {
      // Grab a reference to the output container
      document.querySelector("#news-container").innerHTML = "";
      // Loop through the array
      arrayOfNewsParam.forEach(singleNews => {

        //  print a p tag for each news item to the DOM
        document.querySelector("#news-container").innerHTML += `<div>
        <p> ${singleNews.title} ${singleNews.synopsis} ${singleNews.url} ${singleNews.id}</p>

          <button id="delete-news-${singleNews.id}">Delete</button>
          <button id="edit-news-${singleNews.id}">Edit</button>
        </div>
        <div>
        <p><input type="text" id="newsTitleInput"></p>
        <p><input type="text" id="newsSynopsisInput"></p>
        <p><input type="text" id="newsURLInput"></p>
        <button id="save-new-news-button">Save</button>
        </div>`;

        console.log(singleNews.title)
      })
    }

}


export default newsDomPrinter
