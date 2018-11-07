var items = document.getElementsByClassName('list-group-item');

Object.keys(items).forEach((item, key) => {
	items[key].ondragstart=function(e){
		e.dataTransfer.setData("items",  key);
		console.log(key)
	}

});
var DropArea = document.getElementById('DropArea');
DropArea.ondragover = function(e){
	e.preventDefault();
	document.getElementById('remove').style= "display:block"
}

DropArea.ondrop = function(e){
	e.preventDefault();

	var data=e.dataTransfer.getData("items");
	console.log(data)
	DropArea.appendChild(document.getElementsByClassName('list-group-item')[data].cloneNode(true));
	document.getElementById('remove').style = "display:none"
	
}