document.querySelector('main');
document.querySelector('main').remove();


const newHeader = document.createElement("h1");
newHeader.id = "victory"
// document.body.append(newHeader);
newHeader.textContent = "YOUR-NAME is the champion";
document.body.append(newHeader);