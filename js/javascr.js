let elementofnavi =["HOME",  "ORIGINALS", "MOVIES","SERIES"]
let links = ["index.html", "originals.html", "movies.html","series.html"]
let navtext = '<ul class="flex">';
for (i=0; i<elementofnavi.length; i++){
    navtext += '<li><a href="'+links[i] + '">' + elementofnavi[i] + "</a></li>";
    console.log(navtext);
   
}
navtext += "</ul>";
document.getElementById("nav").innerHTML = navtext;

