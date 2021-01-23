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
  }
]


for (let i = 0; links.length - 1; i++) {
  var ol = document.getElementsByTagName("ol")[0];

  let list_item = document.createElement("li");

  let a = document.createElement("a");

  a.href = links[i].url;
  a.innerText = links[i].label;

  list_item.appendChild(a);
  ol.appendChild(list_item);
}