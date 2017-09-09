export default function (arr, className) {
	var menu = document.createElement('ul');
	menu.className = className;
	var itemList = '';
	arr.forEach( function(item) {
		itemList += '<li>' + item + '</li>';
	});
 	menu.innerHTML = itemList;
	return menu;
};