const newsApiManager = {
  // Method to get all news articles
  getAllNews: () => {
    return fetch("http://localhost:8088/news")
      .then(response => response.json())
  },

  //Method to get one news article
  getOneStudent: newsId => {
    return fetch(`http://localhost:8088/news/${newsId}`).then(response =>
      response.json()
    );
  },
  // Method to post one news article
  postOneNews: singleNewsObject =>
    fetch("http://localhost:8088/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singleNewsObject)
    }),

  // Method to delete one news article
  deleteOneNews: newsId =>
    fetch(`http://localhost:8088/news/${newsId}`, {
      method: "DELETE"
    }),

  // Method to edit/PUT one news article
  editOneNews: (newsId, newsObject) => {
    return fetch(`http://localhost:8088/news/${newsId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsObject)
    })
  }
}


export default newsApiManager;
