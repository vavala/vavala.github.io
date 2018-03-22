function seticon(filename) {
	var fileref=document.createElement('link');
	fileref.setAttribute("rel", "icon");
        fileref.setAttribute("href", filename);
}

seticon("img/icons/vavala-logo.png");

document.write("<title>*****</title>");

//document.write("
//<link rel='icon' href='./img/icons/vavala-logo.png'>
//<title>*****</title>
//");


