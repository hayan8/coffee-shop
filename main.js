let firstImage = document.getElementById("firstImage");

function changeImageA() {
  firstImage.src = "css/images/machine2.jfif"
}

function changeImageB() {
  firstImage.src = "css/images/machine3.jfif"
}

function changeImageC() {
  firstImage.src = "css/images/machine4.jfif"
}

function changeImageD() {
  firstImage.src = "css/images/machine5.jfif"
}

function changeImageE() {
  firstImage.src = "css/images/machine6.jpg"
}

function changeImageF() {
  firstImage.src = "css/images/machine.jfif"
}

let scroll = document.querySelector('#scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 272.7272644042969) {
    scroll.style.display = 'inline';
  } else {
    scroll.style.display = 'none';
  }
})

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: "0",
    behavior: 'smooth'
  })
})
