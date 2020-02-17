import MainList from './listModules/mainlList';
import SubList from './listModules/subList';
import subList from './listModules/subList';
class EventListener {
  setupEventListeners() {
    document
      .querySelector('.list-name-input')
      .addEventListener('keypress', e => {
        if (e.keyCode === 13) MainList.addToMainList();
      });
    document.querySelector('.add-listname-btn').addEventListener('click', e => {
      console.log(e);
      MainList.addToMainList();
    });

    document.querySelector('.main-list-item').addEventListener('click', e => {
      if (e.target.className == 'delete-main-list-item-container') {
        MainList.deleteItem(e);
      } else if (
        /item/.test(e.target.id) ||
        /item/.test(e.target.parentNode.id)
      ) {
        subList.removeCurrentSubList(e);
        SubList.displaySubList(e);
      }
    });

    document
      .querySelector('.todo-items-container')
      .addEventListener('keypress', e => {
        SubList.saveChanges(e);
      });
    document.querySelector('.create-task-btn').addEventListener('click', e => {
      SubList.addToSubList(e);
    });
    document.querySelector('.sub-input').addEventListener('keypress', e => {
      if (e.keyCode === 13) SubList.addToSubList(e);
    });
    document.querySelector('.todo-tasks-div').addEventListener('click', e => {
      console.log('check', e.target.id);
      if (e.target.id === 'strike-all') {
        SubList.strikeAll(e);
      } else if (e.target.id === 'delete-all') {
        SubList.deleteAll(e);
      } else if (e.target.id === 'delete-tasks') {
        SubList.deleteItem(e);
      } else if (e.target.id === 'strike') {
        SubList.strikeItem(e);
      } else if (e.target.id === 'save-changes') {
        SubList.saveChanges(e);
      }
    });
  }
}

export default new EventListener();
