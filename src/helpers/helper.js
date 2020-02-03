export function getSublistItemHTML(id, value) {
  return `<li id=${id} class = "sub-list-items" contentEditable="true"><span>${value}</span><button  id="save-changes">Save</button> <button id="delete-sublist">delete</button></li>`;
}

export function renderSublist(curr) {
  let markup = getSublistItemHTML(curr.id, curr.value);
  document
    .querySelector('.sub-list-items')
    .insertAdjacentHTML('beforeend', markup);
}

// export default getSublistItemHTML;
