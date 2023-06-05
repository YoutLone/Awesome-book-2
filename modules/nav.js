const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const addSection = document.getElementById('addSection');
const listSection = document.getElementById('listSection');
const contactSection = document.getElementById('contactSection');
const home = document.getElementById('homePage');

const listShow = () => {
  addSection.style.display = 'none';
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
  home.style.display = 'none';
  addNew.style.color = 'black';
  contact.style.color = 'black';
  list.style.color = 'rgb(59, 59, 190)';
};

const addShow = () => {
  addSection.style.display = 'flex';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  home.style.display = 'none';
  list.style.color = 'black';
  contact.style.color = 'black';
  addNew.style.color = 'rgb(59, 59, 190)';
};

const contactShow = () => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'flex';
  home.style.display = 'none';
  list.style.color = 'black';
  addNew.style.color = 'black';
  contact.style.color = 'rgb(59, 59, 190)';
};

const homePage = () => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  home.style.display = 'block';
  list.style.color = 'black';
  addNew.style.color = 'black';
};

export {
  listShow, addShow, contactShow, homePage,
};