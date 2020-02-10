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
    if (globalStore.selectedList !== null) {
      let element = document.getElementById(globalStore.selectedList);
      element.classList.remove('active');
    }
    globalStore.selectedList = e.target.id
      ? e.target.id
      : e.target.parentElement.id; // identifier for current element is in the parent div

    if (document.querySelector('.list-name')) {
      let parent = document.querySelector('.list-name-container');
      let child = document.querySelector('.list-name');
      parent.removeChild(child);
    }
    document.querySelector('.sub-input').focus();
    if (globalStore.selectedList !== null) {
      if (e.target.id) {
        document
          .querySelector('.list-name-container')
          .insertAdjacentHTML(
            'beforeend',
            `<h4 class="list-name">${e.target.firstElementChild.innerHTML}</h4>`
          );
      } else {
        document
          .querySelector('.list-name-container')
          .insertAdjacentHTML(
            'beforeend',
            `<h4 class="list-name">${e.target.innerText}</h4>`
          );
      }
    }
  }

  getSublistItemHTML(id, value, striked) {
    if (striked)
      return `<div id=${id} class = "sub-task-item flex" ><input type="checkbox" checked="true" id="strike"><div class="sublist-text-box"><strike>${value}</strike></div><button id="delete-tasks">delete</button></div>`;
    else
      return `<div id=${id} class = "sub-task-item flex"><input type="checkbox" id="strike"><div class="sublist-text-box" contentEditable="true" >${value}</div> <button id="delete-tasks">delete</button></div>`;
  }
  strikeAll() {
    let selectedList = globalStore.listItems.find(elem => {
      return elem.id === globalStore.selectedList;
    });
    selectedList.sublist.forEach(elem => {
      elem.striked = true;
    });
    let parent = document.querySelector('.todo-items-container');
    let child = document.querySelector('.temp-todo-task-list-holder');
    parent.removeChild(child);
    let temp = `<div class="temp-todo-task-list-holder"></div>`;
    parent.insertAdjacentHTML('beforeend', temp);
    selectedList.sublist.forEach(elem => this.renderSublist(elem));
  }
  deleteAll() {
    let listItemsToBeDeleted = globalStore.listItems.find(
      elem => elem.id === globalStore.selectedList
    );
    console.log(listItemsToBeDeleted);
    listItemsToBeDeleted.sublist = [];
    this.displaySubList();
  }
  strikeItem(e) {
    let selectedList = globalStore.listItems.find(elem => {
      return elem.id === globalStore.selectedList;
    });
    let currentTask = selectedList.sublist.find(
      elem => elem.id === e.target.parentElement.id
    );
    if (e.target.checked) {
      e.target.nextElementSibling.contentEditable = 'false';

      currentTask.striked = true;
      let strikedText = e.target.nextElementSibling.textContent.strike();
      e.target.nextElementSibling.innerHTML = strikedText;
      document.querySelector('.sublist-text-box');
    } else if (!e.target.checked) {
      e.target.nextElementSibling.contentEditable = 'true';
      currentTask.striked = false;
      e.target.nextElementSibling.innerHTML =
        e.target.nextElementSibling.innerText;
    }
  }
  deleteItem(e) {
    console.log('check', e);
    let temp = globalStore.listItems.find(
      elem => elem.id === globalStore.selectedList
    );
    let index = globalStore.listItems.indexOf(temp);
    globalStore.listItems[index].sublist.forEach((elem, i, arr) => {
      if (elem.id === e.target.parentElement.id) {
        arr.splice(i, 1);
      }
    });
    let element = document.getElementById(e.target.parentNode.id);
    element && element.parentElement.removeChild(element);
  }

  addToSubList() {
    let subEntry = {};
    let a = globalStore.listItems.filter(
      elem => elem.id === globalStore.selectedList
    );
    let elem = a[0];
    let input = document.querySelector('.sub-input').value;
    document.querySelector('.sub-input').value = '';
    subEntry.value = input;
    subEntry.id = Date.now() + '-sub-item';
    subEntry.striked = false;
    elem.sublist.push(subEntry);
    let markup = this.getSublistItemHTML(subEntry.id, input, subEntry.striked);
    document
      .querySelector('.temp-todo-task-list-holder')
      .insertAdjacentHTML('beforeend', markup);
  }

  saveChanges(e) {
    let currentListSelected = globalStore.listItems.find(
      elem => elem.id === globalStore.selectedList
    );
    let reqdElement = currentListSelected.sublist.find(
      elem => elem.id === e.target.parentNode.id
    );
    reqdElement.value = e.target.innerText;
  }

  displaySubList(e) {
    console.log('e inside func', e);
    let parent = document.querySelector('.todo-items-container');
    let child = document.querySelector('.temp-todo-task-list-holder');
    parent.removeChild(child);
    let temp = `<div class="temp-todo-task-list-holder"></div>`;
    parent.insertAdjacentHTML('beforeend', temp);
    console.log(e.target.parentElement.id);
    let currentElement = globalStore.listItems.find(elem => {
      if (e.target.id) return e.target && elem.id === e.target.id;
      else return e.target.parentElement.id === elem.id;
    });
    console.log('currentElem', currentElement);
    if (currentElement) {
      globalStore.selectedList = currentElement.id;
    }
    currentElement &&
      currentElement.sublist.forEach(elem => this.renderSublist(elem));
    let element = document.getElementById(globalStore.selectedList);
    element.classList.add('active');
  }
}

export default new SubList();
