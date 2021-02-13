//Start 14.1
const MOUNTAINS = [{
    name: "Kilimanjaro",
    height: 5895,
    place: "Tanzania"
  },
  {
    name: "Everest",
    height: 8848,
    place: "Nepal"
  },
  {
    name: "Mount Fuji",
    height: 3776,
    place: "Japan"
  },
  {
    name: "Vaalserberg",
    height: 323,
    place: "Netherlands"
  },
  {
    name: "Denali",
    height: 6168,
    place: "United States"
  },
  {
    name: "Popocatepetl",
    height: 5465,
    place: "Mexico"
  },
  {
    name: "Mont Blanc",
    height: 4808,
    place: "Italy/France"
  }
];

// Your code here

MOUNTAINS.push({
  name: "big mountain",
  height: 99999,
  place: "nowhere"
});

console.log(MOUNTAINS);


function create_table() {
  let mountain_div = document.getElementById("mountains");
  let table_create = document.createElement("table");
  mountain_div.appendChild(table_create);

  for (let i = 0; i < MOUNTAINS.length + 1; i++) {
    let tr_create = document.createElement("tr");
    table_create.appendChild(tr_create);

    if (i === 0) {
      for (let x = 0; x < Object.keys(MOUNTAINS[x]).length; x++) {
        let th_create = document.createElement("th");
        th_create.innerText = Object.keys(MOUNTAINS[x])[x];
        tr_create.appendChild(th_create);
      };
    } else {
      for (let y = 0; y < Object.keys(MOUNTAINS[y]).length; y++) {
        let td_create = document.createElement("td");
        switch (y) {
          case 0:
            td_create.innerText = MOUNTAINS[i].name;
            break;
          case 1:
            td_create.innerText = MOUNTAINS[i].height;
            td_create.style.textAlign = "right";
            break;
          case 2:
            td_create.innerText = MOUNTAINS[i].place;
            break;
        };

        tr_create.appendChild(td_create);
      };
    };
  };
};
//End 14.1

//Start 14.2
let para = document.querySelector("p");
function byTagName(node, tagName) {
  document.getElementById("display").innerHTML = node.getElementsByTagName(tagName).length;
};
//End 14.2

//Start 15.1 
var balloon_size = 100;
window.addEventListener("keydown", event => {
  if (event.key == "ArrowUp") {
    balloon_size = balloon_size * 1.1;
    if (balloon_size >= 300) {
      document.getElementById("balloon").remove();
    }
  document.getElementById("balloon").style.fontSize = balloon_size + "%";
  }
});

window.addEventListener("keydown", event => {
  if (event.key == "ArrowDown") {
    balloon_size = balloon_size / 1.1;
  document.getElementById("balloon").style.fontSize = balloon_size + "%";
  }
});
//End 15.1