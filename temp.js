let globalStore = (function() {
  let globalObject = {
    arr: [],
    state: null
  };
  return () => {
    return globalObject;
  };
})();

const displaySubList = e => {
  let parent = document.querySelector('.sub-lists');
  let child = document.querySelector('.sub-list-items');
  parent.removeChild(child);
  let temp = `<ul class="sub-list-items"></ul>`;
  parent.insertAdjacentHTML('beforeend', temp);
  let current_element = globalStore().arr.find(elem => elem.id === e.target.id);
  globalStore().state = current_element.id;
  current_element.sublist.forEach(elem => renderSublist(elem));
};

const deleteItem = e => {
  let temp = globalStore().arr.find(elem => elem.id === globalStore().state);
  let i = globalStore().arr.indexOf(temp);
  globalStore().arr[i].sublist.forEach((elem, j, arr) => {
    if (elem.id === e.path[1].id) {
      arr.splice(j, 1);
    }
  });

  let element = document.getElementById(e.path[1].id);
  element && element.parentElement.removeChild(element);
};
const getSublistItemHTML = (id, value) => {
  return `<li id=${id} contentEditable="true"><span>${value}</span><button  id="save-changes">Save</button> <button id="delete-sublist">delete</button></li>`;
};
const renderSublist = curr => {
  let markup = getSublistItemHTML(curr.id, curr.value);
  document
    .querySelector('.sub-list-items')
    .insertAdjacentHTML('beforeend', markup);
};

const addToSubList = e => {
  let subEntry = {};
  let a = globalStore().arr.filter(elem => elem.id === globalStore().state);
  let elem = a[0];
  let input = document.querySelector('#sub-input').value;
  document.querySelector('#sub-input').value = '';
  subEntry.value = input;
  subEntry.id = Date.now() + '-sub-item';
  elem.sublist.push(subEntry);
  let markup = getSublistItemHTML(subEntry.id, input);
  document
    .querySelector('.sub-list-items')
    .insertAdjacentHTML('beforeend', markup);
};

const addToMainList = () => {
  let entry = { sublist: [] };
  let x = document.querySelector('#list_name').value;

  document.querySelector('#list_name').value = '';

  (entry.id = Date.now() + '-item'),
    (entry.value = x),
    globalStore().arr.push(entry);
  const markup = `<li id="${
    globalStore().arr[globalStore().arr.length - 1].id
  }">${
    globalStore().arr[globalStore().arr.length - 1].value
  } <button class="delete">Delete</button></li>`;
  document
    .querySelector('.main-list-items')
    .insertAdjacentHTML('beforeend', markup);
};
const saveChanges = e => {
  let current_list_selected = globalStore().arr.find(
    elem => elem.id === globalStore().state
  );
  let reqd_element = current_list_selected.sublist.find(
    elem => elem.id === e.path[1].id
  );
  reqd_element.value = e.target.previousElementSibling.innerText;
};
const setupEventListeners = () => {
  document.querySelector('.sub-lists').addEventListener('click', e => {
    if (e.target.id === 'delete-sublist') deleteItem(e);
    else if (e.target.id === 'save-changes') {
      saveChanges(e);
    }
  });

  document.querySelector('#sub-entry-btn').addEventListener('click', e => {
    addToSubList(e);
  });

  document.querySelector('.main-list-items').addEventListener('click', e => {
    if (e.toElement.id == '') {
      deleteItem(e);
    }
    //when the list item is clicked
    else {
      displaySubList(e);
    }
  });
  document.querySelector('#enter_data').addEventListener('click', () => {
    addToMainList();
  });
};

setupEventListeners();
