// // main body
// const mainBody = document.getElementsByTagName('body')

// const header = document.createElement('h1');

// header.innerHtml = "Warranty Inforamtion";
// console.log(header);

// document.body.appendChild(header);



// const nameDiv = createElement("div");
// const firstName = nameDiv.createElement("label");
// firstName.innerHtml = "First Name";
// document.body.appendChild(firstname);



let div = document.createElement('div');
div.className = 'main';

let h1 = document.createElement('h1');
h1.innerHTML = 'Warranty Information';
div.appendChild(h1)


document.body.appendChild(div);