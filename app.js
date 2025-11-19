var reviews = [
  {
    name: "Hameed Rehman",
    job: "Web Developer",
    img: "https://i.pravatar.cc/150?img=47",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
  },
  {
    name: "Haseebullah Khan",
    job: "UI Designer",
    img: "https://i.pravatar.cc/150?img=12",
    text: "Helvetica narwhal forage, tacos skateboard selvage coloring book."
  },
  {
    name: "Jamshed Riaz",
    job: "Project Manager",
    img: "https://i.pravatar.cc/150?img=32",
    text: "."
  }
]

var index = 0

var img = document.getElementById("img")
var nameEl = document.getElementById("name")
var jobEl = document.getElementById("job")
var textEl = document.getElementById("text")

var next = document.getElementById("next")
var prev = document.getElementById("prev")

function showReview(i) {
  var r = reviews[i]
  img.src = r.img
  nameEl.innerHTML = r.name
  jobEl.innerHTML = r.job
  textEl.innerHTML = r.text
}


next.onclick = function () {
  index++
  if (index > reviews.length - 1) index = 0
  showReview(index)
};


prev.onclick = function () {
  index--
  if (index < 0) index = reviews.length - 1
  showReview(index)
}



showReview(index)
