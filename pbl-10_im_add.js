var kokki_num = parseInt(window.innerWidth / 200);
console.log(kokki_num);
//var img = "<img src=\"https://cdn.pixabay.com/photo/2017/10/25/05/47/usa2887014_960_720.png\" width=\"" + 100 / kokki_num + "%\">";
//var img = "<img src=\"./img/abehiroshi.jpg\" width=\"" + 100 / kokki_num + "%\", position=\"fixed\">";
var img = "<img src=\"https://raw.githubusercontent.com/PBL-10/img/master/usa_bg_1.jpg\" width=\"" + 100 / kokki_num + "%\", position=\"fixed\">";
var div = document.getElementById("pbl-10_im_add");
var text = "";
for (var i = 0; i < kokki_num; ++i) {
    text += img;
}
div.innerHTML = text;
