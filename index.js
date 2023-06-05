import Book from './modules/book.js';
import * as nav from './modules/nav.js';
import { DateTime } from './modules/luxon.js';

const dateLabel = document.querySelector('#time');
const myLuxon = DateTime.local();
const monthName = myLuxon.monthLong; // get the full name of the month
// eslint-disable-next-line max-len
const hour = myLuxon.hour % 12 === 0 ? 12 : myLuxon.hour % 12; // convert 24-hour time to 12-hour time
const amPm = myLuxon.hour < 12 ? 'am' : 'pm'; // determine if it's AM or PM

dateLabel.innerHTML = `${monthName} ${myLuxon.day} ${
  myLuxon.year
} ${hour}:${myLuxon.minute.toString().padStart(2, '0')}:${myLuxon.second
  .toString()
  .padStart(2, '0')} ${amPm}`;

document.getElementById('list').addEventListener('click', nav.listShow);
document.getElementById('addNew').addEventListener('click', nav.addShow);
document.getElementById('contact').addEventListener('click', nav.contactShow);
document.getElementById('logo').addEventListener('click', nav.homePage);

const newBook = new Book();
newBook.displayInfo();
document.getElementById('addButton').addEventListener('click', () => {
  newBook.add();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});