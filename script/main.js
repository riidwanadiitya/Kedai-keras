var menuListElement = document.querySelector("#menuList");


var maenuElement = document.createElement("div");
menuElement.setAttribute("class", "menu");

menuElement.innerHTML = '<img class="img" src="' + photo + '" alt="Fan Art">\n' +
    '<div class="content">\n' +
    '<h2>' + name + '</h2>\n' +
    '<p>' + description + '</p>' +
    '</div>';
menuListElement.appendChild(menuElement);