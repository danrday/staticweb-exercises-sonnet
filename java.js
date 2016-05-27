var sonnetContents = document.getElementById("sonnet").innerHTML;

console.log(sonnetContents);

var locationOfOrphans = sonnetContents.indexOf("orphans");

console.log("Location of Orphans", locationOfOrphans);

console.log("# of chars in sonnet", sonnetContents.length);

var newStr = document.getElementById("sonnet").innerHTML.replace(/the /g, 'a large ');

console.log(newStr);

var yuletide = newStr.replace ('winter', 'yuletide');

console.log(yuletide);

document.getElementById("sonnet").innerHTML = yuletide;