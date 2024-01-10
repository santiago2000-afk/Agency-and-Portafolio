$(document).ready(function () {
  const pageHeader = document.querySelector(".page-header");
  const toggleMenu = pageHeader.querySelector(".toggle-menu");
  const menuWrapper = pageHeader.querySelector(".menu-wrapper");
  const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");
  const listWrapper2 = pageHeader.querySelector(".list-wrapper:nth-child(2)");
  const listWrapper3 = pageHeader.querySelector(".list-wrapper:nth-child(3)");
  const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
  const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
  const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
  const backLabel2 = listWrapper2.querySelector(".back-one-level span");
  const backLabel3 = listWrapper3.querySelector(".back-one-level span");
  const isVisibleClass = "is-visible";
  const isActiveClass = "is-active";
  
  toggleMenu.addEventListener("click", function () {
    menuWrapper.classList.toggle(isVisibleClass);
    if (!this.classList.contains(isVisibleClass)) {
      listWrapper2.classList.remove(isVisibleClass);
      listWrapper3.classList.remove(isVisibleClass);
      const menuLinks = menuWrapper.querySelectorAll("a");
      for (const menuLink of menuLinks) {
        menuLink.classList.remove(isActiveClass);
      }
      backLabel2.textContent = "";
      backLabel3.textContent = "";
    }
  });
  
  for (const level1Link of level1Links) {
    level1Link.addEventListener("click", function (e) {
      const siblingList = level1Link.nextElementSibling;
      if (siblingList) {
        e.preventDefault();
        this.classList.add(isActiveClass);
        const cloneSiblingList = siblingList.cloneNode(true);
        subMenuWrapper2.innerHTML = "";
        subMenuWrapper2.append(cloneSiblingList);
        listWrapper2.classList.add(isVisibleClass);
        backLabel2.textContent = level1Link.textContent;
      }
    });
  }
  
  listWrapper2.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
      const siblingList = target.nextElementSibling;
      e.preventDefault();
      target.classList.add(isActiveClass);
      const cloneSiblingList = siblingList.cloneNode(true);
      subMenuWrapper3.innerHTML = "";
      subMenuWrapper3.append(cloneSiblingList);
      listWrapper3.classList.add(isVisibleClass);
      backLabel3.textContent = target.textContent;
    }
  });
  
  for (const backOneLevelBtn of backOneLevelBtns) {
    backOneLevelBtn.addEventListener("click", function () {
      const parent = this.closest(".list-wrapper");
      parent.classList.remove(isVisibleClass);
      parent.previousElementSibling
        .querySelector(".is-active")
        .classList.remove(isActiveClass);
    });
  }
});
