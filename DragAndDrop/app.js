var items = document.getElementsByClassName('list-group-item');

Object.keys(items).forEach((item, key) => {
    items[key].ondragstart = function (e) {
        e.dataTransfer.setData("item", e.target.id);
    }
});

var DropZone = document.getElementById('DropZone');
DropZone.ondragover = function (e) {
    e.preventDefault();
    document.getElementById('remove').style = "display: block"
}

DropZone.ondrop = function (e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("item");
    DropZone.appendChild(document.getElementById(data).cloneNode(true));
    document.getElementById(data).style = "background-color: #f01; color: #fff";
    document.getElementById('remove').style = "display: none"
}