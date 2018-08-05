const img = document.querySelector(".images")
let count = 0;
const counter = document.querySelector(".counter");

//Cat object
function Cat(name, image) {
  this.name = name;
  this.image = image;
}

//Cat instances
const catOne = new Cat("Alpha", "cat-1");
const catTwo = new Cat("Beta", "cat-2");
const catThree = new Cat("Gamma", "cat-3");
const catFour = new Cat("Delta", "cat-4");
const catFive = new Cat("Epsilon", "cat-5");

const catList = [catOne, catTwo, catThree, catFour, catFive];

//Append cat names to list
(function makeClickable() {
  for (let i = 0; i < catList.length; i++) {
    let li = document.createElement("li");
    let catName = catList[i].name;
    const ul = document.querySelector(".names");
    li.innerText = catName;
    ul.append(li);
  }
  //Make cat names clickable
  for (let j = 0; j < catList.length; j++) {
    let names = document.querySelectorAll("li");
    names[j].addEventListener("click", containerCreate);
  }
})();

//Create display for cats
function containerCreate() {
  //Add cat name to DOM
  const h1 = document.querySelector(".name");
  h1.innerText = this.innerText;
  //Add cat image to DOM
  for (let k = 0; k < catList.length; k++) {
    if (this.innerText === catList[k].name) {
      img.setAttribute("src", catList[k].image + ".jpg");
      counter.innerText = "";
      clicks();
    }
  }
}

//Event listener on cat images to display clicks
function clicks() {
  count = 0;
  img.addEventListener("click", function() {
    count++;
    counter.innerText = count;
  })
}
