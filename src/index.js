// Import necessary modules
const { JSDOM } = require("jsdom");

// Your code goes here

// Function to initialize the application
const init = () => {
  // Set up a virtual DOM environment
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <h2>Movies Database</h2>
      <ul>
        <li>
          <h3>The Brave Little Toaster</h3>
          <div>ID: 1</div>
        </li>
        <li>
          <h3>The Princess Bride</h3>
          <div>ID: 2</div>
        </li>
        <li>
          <h3>Spirited Away</h3>
          <div>ID: 3</div>
        </li>
      </ul>
      <section>
        <form>
          <label for="searchByID">Search By ID</label>
          <input id="searchByID" type="text" placeholder="Enter ID here"/>
          <input type="submit" />
        </form>
      </section>
      <section id="movieDetails">
        <h4>Title</h4>
        <p>Summary</p>
      </section>
    </body>
    </html>
  `);

  // Assign the window and document objects from JSDOM
  global.window = dom.window;
  global.document = dom.window.document;

  // Include your index.js file
  require("./index.js");
};

// Call the init function to initialize the application
init();
