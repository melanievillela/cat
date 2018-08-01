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
    let name = catList[i].name;
    const ul = document.querySelector(".names");
    li.innerText = name;
    ul.append(li);
  }
  //Make cat names clickable
  for (let j = 0; j < catList.length; j++) {
    let names = document.querySelectorAll("li");
    names[j].addEventListener("click", function() {
      console.log(names[j].innerText);
      return names[j];
      containerCreate();
    })
  }
})();

//Create display for cats
function containerCreate() {
  const info = document.querySelector(".info");
  const h1 = document.createElement("h1");
  info.append(h1);
  h1.innerText = names[j].innerText;
}

/*
//Add names into h2 fields from names
for (let i = 0; i < cats.length; i++) {
  name[i].innerText = names[i];
}

//Add event listener and increment counter for each cat clicked
for (let j = 0; j < cats.length; j++) {
  let k = 0;
  cats[j].addEventListener("click", function() {
    k++;
    clicks[j].innerText = k;
  })
}
*/
