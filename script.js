// Get the container element where posts will be displayed
const postsContainer = document.getElementById("posts");

// Use the Fetch API to get data from the JSONPlaceholder API
fetch("#")
  .then((response) => response.json()) // Convert the response to JSON format
  .then((data) => {
    const albumsArray = data.album; // access the array inside the object

    // Loop through each post and display it on the page
    albumsArray.forEach((album) => {
      // Create a new div element for each post
      const postDiv = document.createElement("div");
      postDiv.innerHTML = `
        <h2>${album.strAlbum}</h2>
        <img src ="${album.strAlbumThumb}" >
        <p>${album.strDescriptionEN}</p>
      `;
      // Append the new div to the container
      postsContainer.appendChild(postDiv);
    });
  })
  .catch((error) => console.error("Error fetching posts:", error));
//https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=The+Doors