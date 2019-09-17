//----------------News DOM Printer---------------//
const newsDomPrinter = {
    // method that accepts an array of news objects and prints them to the DOM
    printNewsToDOM: arrayOfNewsParam => {
        // Grab a reference to the output container
        document.querySelector("#news-container").innerHTML = ""
        document.querySelector("#news-container").innerHTML = "<h2>News</h2>"

        // Loop through the array
        arrayOfNewsParam.forEach(singleNews => {

            //  print a p tag for each news item to the DOM
            document.querySelector("#news-container").innerHTML +=
        `<div id = "input-boxes">
            <div id = "news-card-${singleNews.id}">
               <p>Title</p>
               <p> ${singleNews.title}</p>
               <p>Synopsis</p>
               <p> ${singleNews.synopsis}</p>
               <p>Article URL:</p>
               <p> ${singleNews.url}</p>
               <p> ${singleNews.id}</p>

                <button id="delete-news-${singleNews.id}">Delete</button>
                <button id="edit-news-${singleNews.id}">Edit</button>
            </div>
        </div>`


            console.log(singleNews.title)
        });



        //Print input boxes and save button to DOM

        document.querySelector("#news-container").innerHTML +=
            `<section>

            <div id = "edit-input-boxes">
                <p>Article Title:</p>
                <p><input type="text" id="newsTitleInput"></p>
                <p>Article Synopsis:</p>
                <textarea name="" id="newsSynopsisInput" cols="30" rows="10"></textarea>
                <p>Article URL Address:</p>
                <p><input type="text" id="newsURLInput"></p>

                <button id="save-news-button">Save</button>
            </div>
        </section>`
    },

    //Print edit fields to DOM
    printNewsEditForm: newsObject => {

        const targetCard = document.querySelector(`#news-card-${newsObject.id}`)


        targetCard.innerHTML =
            `<section>
            <div>
                <p>Edit Article</p>
                <p>Title:</p>
                <p><input id="edit-title-input-${newsObject.id}" type="text" value="${newsObject.title}"></p>
                <p>Synopsis:</p>
                <p><input id="edit-synopsis-input-${newsObject.id}" type="text" value="${newsObject.synopsis}"></p>
                <p>Article URL:</p>
                <p><input id="edit-URL-input-${newsObject.id}" type="text" value="${newsObject.url}"></p>

                <button id="save-edit-${newsObject.id}">Save</button>
            </div>
        </section>`
    }
}


export default newsDomPrinter
