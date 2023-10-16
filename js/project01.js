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