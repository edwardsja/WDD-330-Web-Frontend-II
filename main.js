const links = [{
    label: "Week1 Exercise",
    url: "Week 1/index.html"
  },
  {
    label: "Week2 Exercise",
    url: "Week 2/Notes/index.html"
  },
  {
    label: "Week2 Team",
    url: "Week 2/Team/index.html"
  },
  {
    label: "Week3 Exercise",
    url: "Week 3/Notes/index.html"
  },
  {
    label: "Week3 Team",
    url: "Week 3/Team/index.html"
  },
  {
    label: "Week4 Exercise",
    url: "Week 4/Notes/index.html"
  },
  {
    label: "Week4 Team",
    url: "Week 4/Team/index.html"
  },
  {
    label: "Week5 Exercise",
    url: "Week 5/Notes/index.html"
  },
  {
    label: "Week5 Team",
    url: "Week 5/Team/index.html"
  },
  {
    label: "Challenge 1",
    url: "Week 6/Challenge/index.html"
  },
  {
    label: "Week7 Excercise",
    url: "Week 7/Notes/index.html"
  },
  {
    label: "Week7 Team",
    url: "Week 7/Team/index.html"
  },
  {
    label: "Week8 Excercise",
    url: "Week 8/Notes/index.html"
  },
  {
    label: "Week8 Team",
    url: "Week 8/Team/index.html"
  },
  {
    label: "Week9 Excercise",
    url: "Week 9/Notes/index.html"
  },
  {
    label: "Week9 Team",
    url: "Week 9/Team/index-START.html"
  }
]


for (let i = 0; links.length - 1; i++) {
  var ol = document.getElementsByTagName("ol")[0];

  let list_item = document.createElement("li");

  let a = document.createElement("a");

  a.href = links[i].url;
  a.innerText = links[i].label;

  //first iteration, display normally
  if (i === 0) {
    list_item.appendChild(a);
    ol.appendChild(list_item);
  } else {
    // if the previous li's week# is equal to the current li, then insted of making a new li, attach the current a to the previous one
    let new_i = i - 1;
    if (links[new_i].url.split("/")[0] === links[i].url.split("/")[0]) {
      ol.lastChild.innerHTML += " | " + a.outerHTML;
    } else {
      list_item.appendChild(a);
      ol.appendChild(list_item);
    }
  }
  
}