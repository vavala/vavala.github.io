function doesFileExist(urlToFile)
{
	var xhr = new XMLHttpRequest();
    	xhr.open('HEAD', urlToFile, false);
    	xhr.send(null);
    	if(xhr.status == "200") {
		console.log("File exists: ", urlToFile);
	        return true;
    	} 
	if(xhr.status == "0") {
		console.log("WARNING, probably due to configuration, can't check file!", urlToFile);
	        return false;
	}
	//else
	console.log("File doesn't exist: ", urlToFile);
        return false;
}

function DisableBadBibLinks() 
{
$(document).ready(function(){
        $('a[href]').each(function(){ 
		if($(this).attr('class') == "bibtexVar") {
			if($(this).attr('href').search("BIBTEXKEY") != -1) {
				console.log("skip link with BIBTEXKEY: ", $(this).attr('href'))
				return
			}
			
			if(doesFileExist($(this).attr('href')) == false ) {
				//try fallback to .html extension
				//append .html extension to link
				$(this).attr("href", $(this).attr('href') + ".html");
				//check again if resource exists
				if(doesFileExist($(this).attr('href')) == false ) {
					//even .html extension failed => disable it
					$(this).attr("href", "#"); // Set href value to hashtag
					$(this).addClass("BiblinkIsDisabled");
				}
			}
		}
        });
});
}

document.onreadystatechange = function () {
	console.log("Ready state changed triggered: ", document.readyState)
	if (document.readyState == "complete") {
		// document is ready. Do your stuff here
		DisableBadBibLinks();
   }
}
