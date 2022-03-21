import { list } from './variables.js';
export class Awesome {
  constructor() {
    this.data = {};
    this.record = [];
  }

  addRecord(title, author) {
    this.data = { title, author };
    this.record.push(this.data);
    return this.data;
  }

  local() {
    localStorage.setItem('books', JSON.stringify(this.record));
    this.returnInfo();
  }

  returnInfo() {
    list.innerHTML = '';
    this.record = JSON.parse(localStorage.getItem('books'));
    if (this.record === null) {
      this.record = [];
    } else {
      let count = 0;
      this.record.forEach((element) => {
        count += 1;
        function color(counter) {
          let change;
          if (counter % 2 !== 0) {
            change = 'newColor';
            return change;
          }
          change = 'old';
          return change;
        }
        list.innerHTML += `
          <div id="books" class = "${color(count)}">
            <div class="bTitle">${element.title}</div>
            <div class="by">by</div>
            <div class="bAuthor">${element.author}</div>
            <button class="delete">Remove</button>
          </div>
          `;
      });
    }
  }

  eliminate(title, author) {
    let indexArray;
    this.record.forEach((element, index) => {
      if (element.title === title && element.author === author) {
        indexArray = index;
      }
    });
    this.record.splice(indexArray, 1);
    this.local();
  }
}