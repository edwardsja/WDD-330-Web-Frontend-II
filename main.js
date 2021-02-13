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