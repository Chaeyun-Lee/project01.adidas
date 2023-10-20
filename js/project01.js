//Modal
const modal = document.querySelector("#adiClub");
modal.showModal();

window.addEventListener("scroll", () => {
  const topMenu = document.querySelector("#headerBottom");
  if (window.scrollY > 10) {
    topMenu.style.position = "fixed";
    topMenu.style.top = "0";
    topMenu.style.zIndex = "50";
    topMenu.style.backgroundColor = "#ffffff";
  } else {
    topMenu.style.position = "relative";
  }
});

//HeaderTop 배너
var interval;
const banners = document.querySelector(".topBanner");
document.addEventListener("DOMContentLoaded", () => {
  // 롤링 초기화
  interval = window.setInterval(rollingCallback, 3000);

  //마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
  document
    .querySelector(".topBanner")
    .addEventListener("mouseover", function () {
      window.clearInterval(interval);
    });
  document
    .querySelector(".topBanner")
    .addEventListener("mouseout", function () {
      interval = window.setInterval(rollingCallback, 3000);
    });
});

function rollingCallback() {
  //.prev 클래스 삭제
  document.querySelector(".topBanner .prev").classList.remove("prev");

  //.current -> .prev
  let current = document.querySelector(".topBanner .current");
  current.classList.remove("current");
  current.classList.add("prev");

  //.next -> .current
  let next = document.querySelector(".topBanner .next");

  if (next.nextElementSibling == null) {
    document
      .querySelector(".topBanner ul li:first-child")
      .classList.add("next");
  } else {
    next.nextElementSibling.classList.add("next");
  }
  next.classList.remove("next");
  next.classList.add("current");
}

//Menu
const mainList = document.querySelectorAll(".mainList");
const dropMenu = document.querySelectorAll(".dropdownMenu");

//Subli
const menSubList = document.querySelectorAll(".menSubli");
const womenSubList = document.querySelectorAll(".womenSubli");
const kidsSubList = document.querySelectorAll(".kidsSubli");
const sportsSubList = document.querySelectorAll(".sportsSubli");
const brandsSubList = document.querySelectorAll(".brandsSubli");

//RightList
const menRightSubList = document.querySelectorAll(".menRightList");
const womenRightSubList = document.querySelectorAll(".womenRightList");
const kidsRightSubList = document.querySelectorAll(".kidsRightList");
const sportsRightSubList = document.querySelectorAll(".sportsRightList");
const brandsRightSubList = document.querySelectorAll(".brandsRightList");

//toggle용
const menRightBestLi = document.querySelectorAll(".menSubli #rightBest>li");
const menRightNewLi = document.querySelectorAll(".menSubli #rightNew>li");
const womenRightBestLi = document.querySelectorAll(".womenSubli #rightBest>li");
const womenRightNewLi = document.querySelectorAll(".womenSubli #rightNew>li");
const kidsRightBestLi = document.querySelectorAll(".kidsSubli #rightBest>li");
const kidsRightNewLi = document.querySelectorAll(".kidsSubli #rightNew>li");

//Men 베스트셀러, 신상 카테고리 Hover 시 Toggle 이벤트
for (let i = 0; i < menRightBestLi.length; i++) {
  let toggleTextBox = menRightBestLi[i].querySelector(".toggleTextBox");
  let rightImgBox = menRightBestLi[i].querySelector(".rightImgBox");

  menRightBestLi[i].addEventListener("mouseover", () => {
    toggleTextBox.style.transform = "translateY(-50%)";
    toggleTextBox.style.opacity = "1";
    rightImgBox.children[1].style.visibility = "visible";
  });
  menRightBestLi[i].addEventListener("mouseout", () => {
    toggleTextBox.style.transform = "translateY(0%)";
    toggleTextBox.style.opacity = "0";
    rightImgBox.children[1].style.visibility = "hidden";
  });
}

for (let i = 0; i < menRightNewLi.length; i++) {
  let toggleTextBox = menRightNewLi[i].querySelector(".toggleTextBox");
  let rightImgBox = menRightNewLi[i].querySelector(".rightImgBox");

  menRightNewLi[i].addEventListener("mouseover", () => {
    toggleTextBox.style.transform = "translateY(-50%)";
    toggleTextBox.style.opacity = "1";
    rightImgBox.children[1].style.visibility = "visible";
  });
  menRightNewLi[i].addEventListener("mouseout", () => {
    toggleTextBox.style.transform = "translateY(0%)";
    toggleTextBox.style.opacity = "0";
    rightImgBox.children[1].style.visibility = "hidden";
  });
}

//Women 베스트셀러, 신상 카테고리 Hover 시 Toggle 이벤트
for (let i = 0; i < womenRightBestLi.length; i++) {
  let toggleTextBox = womenRightBestLi[i].querySelector(".toggleTextBox");
  let rightImgBox = womenRightBestLi[i].querySelector(".rightImgBox");

  womenRightBestLi[i].addEventListener("mouseover", () => {
    toggleTextBox.style.transform = "translateY(-50%)";
    toggleTextBox.style.opacity = "1";
    rightImgBox.children[1].style.visibility = "visible";
  });
  womenRightBestLi[i].addEventListener("mouseout", () => {
    toggleTextBox.style.transform = "translateY(0%)";
    toggleTextBox.style.opacity = "0";
    rightImgBox.children[1].style.visibility = "hidden";
  });
}

for (let i = 0; i < womenRightNewLi.length; i++) {
  let toggleTextBox = womenRightNewLi[i].querySelector(".toggleTextBox");
  let rightImgBox = womenRightNewLi[i].querySelector(".rightImgBox");

  womenRightNewLi[i].addEventListener("mouseover", () => {
    toggleTextBox.style.transform = "translateY(-50%)";
    toggleTextBox.style.opacity = "1";
    rightImgBox.children[1].style.visibility = "visible";
  });
  womenRightNewLi[i].addEventListener("mouseout", () => {
    toggleTextBox.style.transform = "translateY(0%)";
    toggleTextBox.style.opacity = "0";
    rightImgBox.children[1].style.visibility = "hidden";
  });
}

//Kids 베스트셀러, 신상 카테고리 Hover 시 Toggle 이벤트
for (let i = 0; i < kidsRightBestLi.length; i++) {
  let toggleTextBox = kidsRightBestLi[i].querySelector(".toggleTextBox");
  let rightImgBox = kidsRightBestLi[i].querySelector(".rightImgBox");

  kidsRightBestLi[i].addEventListener("mouseover", () => {
    toggleTextBox.style.transform = "translateY(-50%)";
    toggleTextBox.style.opacity = "1";
    rightImgBox.children[1].style.visibility = "visible";
  });
  kidsRightBestLi[i].addEventListener("mouseout", () => {
    toggleTextBox.style.transform = "translateY(0%)";
    toggleTextBox.style.opacity = "0";
    rightImgBox.children[1].style.visibility = "hidden";
  });
}

for (let i = 0; i < kidsRightNewLi.length; i++) {
  let toggleTextBox = kidsRightNewLi[i].querySelector(".toggleTextBox");
  let rightImgBox = kidsRightNewLi[i].querySelector(".rightImgBox");

  kidsRightNewLi[i].addEventListener("mouseover", () => {
    toggleTextBox.style.transform = "translateY(-50%)";
    toggleTextBox.style.opacity = "1";
    rightImgBox.children[1].style.visibility = "visible";
  });
  kidsRightNewLi[i].addEventListener("mouseout", () => {
    toggleTextBox.style.transform = "translateY(0%)";
    toggleTextBox.style.opacity = "0";
    rightImgBox.children[1].style.visibility = "hidden";
  });
}

//드롭다운 메뉴 제어, 이 코드 줄이는 방법!알아오기
for (let i = 0; i < mainList.length; i++) {
  mainList[i].addEventListener("mouseover", () => {
    dropMenu[i].style.visibility = "visible";
  });
  mainList[i].addEventListener("mouseout", () => {
    dropMenu[i].style.visibility = "hidden";
  });
}
//드롭다운 서브메뉴 제어 , 이 코드 줄이는 방법!알아오기22
for (let i = 0; i < menSubList.length; i++) {
  menSubList[i].addEventListener("mouseover", () => {
    menRightSubList[0].style.display = "none";
    menRightSubList[i].style.display = "flex";
  });
  menSubList[i].addEventListener("mouseout", () => {
    menRightSubList[i].style.display = "none";
    menRightSubList[0].style.display = "flex";
  });
}
for (let i = 0; i < womenSubList.length; i++) {
  womenSubList[i].addEventListener("mouseover", () => {
    womenRightSubList[0].style.display = "none";
    womenRightSubList[i].style.display = "flex";
  });
  womenSubList[i].addEventListener("mouseout", () => {
    womenRightSubList[i].style.display = "none";
    womenRightSubList[0].style.display = "flex";
  });
}
for (let i = 0; i < kidsSubList.length; i++) {
  kidsSubList[i].addEventListener("mouseover", () => {
    kidsRightSubList[0].style.display = "none";
    kidsRightSubList[i].style.display = "flex";
  });
  kidsSubList[i].addEventListener("mouseout", () => {
    kidsRightSubList[i].style.display = "none";
    kidsRightSubList[0].style.display = "flex";
  });
}
for (let i = 0; i < sportsSubList.length; i++) {
  sportsSubList[i].addEventListener("mouseover", () => {
    sportsRightSubList[0].style.display = "none";
    sportsRightSubList[i].style.display = "flex";
  });
  sportsSubList[i].addEventListener("mouseout", () => {
    sportsRightSubList[i].style.display = "none";
    sportsRightSubList[0].style.display = "flex";
  });
}
for (let i = 0; i < brandsSubList.length; i++) {
  brandsSubList[i].addEventListener("mouseover", () => {
    brandsRightSubList[0].style.display = "none";
    brandsRightSubList[i].style.display = "flex";
  });
  brandsSubList[i].addEventListener("mouseout", () => {
    brandsRightSubList[i].style.display = "none";
    brandsRightSubList[0].style.display = "flex";
  });
}

//드롭다운 script 끝//

// terrex 캐러셀 script
let myIndex = 0;
const itemScreen = document.querySelector("#itemScreen");
carousel();
setInterval(carousel, 2000);

function carousel() {
  if (myIndex < 600) {console.log(myIndex+'slide');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
    myIndex += 600;
    
  } else if (myIndex >= 600 && myIndex < 1200) {console.log(myIndex+'slide');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
    myIndex += 600;
    
  } else if (myIndex >= 1200) {console.log(myIndex+'slide');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
    myIndex=0;
    
  }
}

const leftB = document.querySelector("#leftBtn");
const rightB = document.querySelector("#rightBtn");

leftB.addEventListener("click", leftBEvent);
rightB.addEventListener("click", rightBEvent);

function leftBEvent() {
  if (myIndex > 0) {
    myIndex -= 600;console.log(myIndex+'left');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
    
  } else if (myIndex == 0) {
    myIndex = 1200;console.log(myIndex+'left');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
    
  }
}

function rightBEvent() {
  if (myIndex < 1200) {
    myIndex+=600;
    console.log(myIndex+'right');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
    
  } else if (myIndex === 1200) {
    myIndex = 0; 
    console.log(myIndex+'right');
    itemScreen.style.transform = `translateX(-${myIndex}px)`;
  }
  // if (myIndex < 1200) {
  //   myIndex += 600;console.log(myIndex+'right');
  //   itemScreen.style.transform = `translateX(-${myIndex}px)`;
    
  // } else if (myIndex >= 1200) {
  //   myIndex = 0;console.log(myIndex+'right');
  //   itemScreen.style.transform = `translateX(-${myIndex}px)`;
  // }
}
// terrex 캐러셀 script 끝
