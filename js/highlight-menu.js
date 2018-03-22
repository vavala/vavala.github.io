$(document).ready(function() {
 var url = window.location.href;
 url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
 url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
 url = url.substr(url.lastIndexOf("/") + 1);
 if(url == ''){
 url = 'index.html';
 }
 //highlight menu item on left side (if loaded page matches left item)
 $('.sidenav li').each(function(){

  // select href
  var href = $(this).find('a').attr('href');
 
  // Check filename
  if(url == href){
   $(this).children('a').addClass('highlight');
  }
 });
 //highlight menu item on right side (if loaded page matches right item)
 $('.sidenav-right li').each(function(){

  // select href
  var href = $(this).find('a').attr('href');
 
  // Check filename
  if(url == href){
   $(this).children('a').addClass('highlight');
  }
 });
});