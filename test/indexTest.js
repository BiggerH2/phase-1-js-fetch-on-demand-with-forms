// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

const { JSDOM } = require("jsdom");
const { expect } = require("chai");
const index = require("./src/index");

describe("Index.js Tests", () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(`
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
  });

  describe("DOM Manipulation", () => {
    it("should update movie details when form is submitted", () => {
      const input = dom.window.document.querySelector("#searchByID");
      input.value = "1";

      const form = dom.window.document.querySelector("form");
      form.dispatchEvent(new dom.window.Event("submit"));

      const title = dom.window.document.querySelector("#movieDetails h4");
      const summary = dom.window.document.querySelector("#movieDetails p");
      expect(title.textContent).to.equal("The Brave Little Toaster");
      expect(summary.textContent).to.equal("A group of appliances set off on a journey");
    });
  });

  describe("Custom Tests", () => {
    it("should pass", () => {
      return true;
    });
  });
});
