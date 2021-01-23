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
let mountain_div = document.getElementById("mountains");
let table_create = document.createElement("table");
mountain_div.appendChild(table_create);

// let tr_create = document.createElement("tr");
//let th_create = document.createElement("th");
//let td_create = document.createElement("td");

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
          td_create.innerText = MOUNTAINS[i].;
          break;
      };

      tr_create.appendChild(td_create);
    };
  };