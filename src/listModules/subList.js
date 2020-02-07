import globalStore from '../store';

class SubList {
  renderSublist(curr) {
    let markup;
    if (curr !== null)
      markup = this.getSublistItemHTML(curr.id, curr.value, curr.striked);
    document
      .querySelector('.temp-todo-task-list-holder')
      .insertAdjacentHTML('beforeend', markup);
  }
  removeCurrentSubList(e) {
    if (globalStore.state !== null) {
      let element = document.getElementById(globalStore.state);
      element.classList.remove('active');
    }
    globalStore.state = e.target.id;
    let parent;
    let child;
    if (
      e.path[1].id !== globalStore.state &&
      document.querySelector('.list-name')
    ) {
      console.log('comse - 2');
      parent = document.querySelector('.list-name-container');
      child = document.querySelector('.list-name');
      parent.removeChild(child);
    }
    document.querySelector('#sub-input').focus();
    if (globalStore.state !== null) {
      document
        .querySelector('.list-name-container')
        .insertAdjacentHTML(
          'beforeend',
          `<h4 class="list-name">${e.target.firstElementChild.innerHTML}</h4>`
        );
    }
  }
  getSublistItemHTML(id, value, striked) {
    if (striked)
      return `<div id=${id} class = "sub-task-item flex" ><input type="checkbox" checked="true" id="strike"><div contentEditable="false"><strike>${value}</strike></div><button id="delete-tasks">delete</button></div>`;
    else
      return `<div id=${id} class = "sub-task-item flex"><input type="checkbox" id="strike"><div class="sublist-text-box" contentEditable="true" >${value}</div> <button id="delete-tasks">delete</button></div>`;
  }
  strikeAll(e) {
    let selectedList = globalStore.listItems.find(elem => {
      return elem.id === globalStore.state;
    });
    selectedList.sublist.forEach(elem => {
      elem.striked = true;
    });
    console.log();
    // this.displaySubList(e);
    let parent = document.querySelector('.todo-items-container');
    let child = document.querySelector('.temp-todo-task-list-holder');
    parent.removeChild(child);
    let temp = `<div class="temp-todo-task-list-holder"></div>`;
    parent.insertAdjacentHTML('beforeend', temp);
    selectedList.sublist.forEach(elem => this.renderSublist(elem));
  }
  deleteAll(e) {
    let listItemsToBeDeleted = globalStore.listItems.find(
      elem => elem.id === globalStore.state
    );
    console.log(listItemsToBeDeleted);
    listItemsToBeDeleted.sublist = [];
    this.displaySubList([]);
  }
  strikeItem(e) {
    let selectedList = globalStore.listItems.find(elem => {
      return elem.id === globalStore.state;
    });
    let currentTask = selectedList.sublist.find(
      elem => elem.id === e.target.parentElement.id
    );
    if (e.target.checked) {
      currentTask.striked = true;
      document.getElementById(currentTask.id).contentEditable = 'false';
      let z = e.target.nextElementSibling.textContent.strike();
      e.target.nextElementSibling.innerHTML = z;
    } else if (!e.target.checked) {
      document.getElementById(currentTask.id).contentEditable = 'true';
      currentTask.striked = false;
      e.target.nextElementSibling.innerHTML =
        e.target.nextElementSibling.innerText;
    }
  }
  deleteItem(e) {
    console.log(e);
    let temp = globalStore.listItems.find(
      elem => elem.id === globalStore.state
    );
    let i = globalStore.listItems.indexOf(temp);
    globalStore.listItems[i].sublist.forEach((elem, j, listItems) => {
      if (elem.id === e.path[1].id) {
        listItems.splice(j, 1);
      }
    });

    let element = document.getElementById(e.path[1].id);
    element && element.parentElement.removeChild(element);
  }

  addToSubList() {
    console.log('state', globalStore.state);
    let subEntry = {};
    let a = globalStore.listItems.filter(elem => elem.id === globalStore.state);
    let elem = a[0];
    let input = document.querySelector('#sub-input').value;
    document.querySelector('#sub-input').value = '';
    subEntry.value = input;
    subEntry.id = Date.now() + '-sub-item';
    subEntry.striked = false;
    elem.sublist.push(subEntry);
    let markup = this.getSublistItemHTML(subEntry.id, input);
    document
      .querySelector('.temp-todo-task-list-holder')
      .insertAdjacentHTML('beforeend', markup);
  }

  saveChanges(e) {
    console.log('check', e);
    let currentListSelected = globalStore.listItems.find(
      elem => elem.id === globalStore.state
    );
    let reqdElement = currentListSelected.sublist.find(
      elem => elem.id === e.target.parentNode.id
    );
    reqdElement.value = e.target.innerText;
  }

  displaySubList(e) {
    let parent = document.querySelector('.todo-items-container');
    let child = document.querySelector('.temp-todo-task-list-holder');
    parent.removeChild(child);
    let temp = `<div class="temp-todo-task-list-holder"></div>`;
    parent.insertAdjacentHTML('beforeend', temp);

    let currentElement = globalStore.listItems.find(elem => {
      return e.target && elem.id === e.target.id;
    });
    console.log('currentElement', currentElement);
    if (currentElement) {
      globalStore.state = currentElement.id;
    }
    currentElement &&
      currentElement.sublist.forEach(elem => this.renderSublist(elem));
    let element = document.getElementById(globalStore.state);
    element.classList.add('active');
  }
}

export default new SubList();
