function init() {
  const MENU = {
    data: [
      { title: "Game", link: "/game", sub: null },
      { title: "Community", link: "/community", sub: null },
      { title: "Media", link: "/media", sub: null },
      {
        title: "Forums",
        link: "/forums",
        sub: [
          { title: "Gameplay", link: "/gameplay", sub: null },
          {
            title: "Classes",
            link: "/classes",
            sub: [
              { title: "Barbarian", link: "/barbarian", sub: null },
              { title: "Demon Hunter", link: "/demon-hunter", sub: null },
              { title: "Monk", link: "/monk", sub: null },
              { title: "Witch Doctor", link: "/witch-doctor", sub: null },
              { title: "Wizard", link: "/wizard", sub: null },
            ],
          },
          { title: "Beta", link: "/beta", sub: null },
          { title: "Support", link: "/support", sub: null },
        ],
      },
      { title: "Services", link: "/services", sub: null },
    ],
  };

  const menuUl = document.querySelector("#menu");
  const mainMenu = buildMenu(MENU.data, false, menuUl);
  const nav = document.querySelector("#nav");
  nav.appendChild(mainMenu);
}

function buildMenu(data, isSubMenu = false, menuUl = null) {
  const menu = menuUl ?? document.createElement("ul");

  menu.classList.add("menu");
  if (isSubMenu) menu.classList.add("menu--submenu");

  for (const item of data) {
    menu.appendChild(buildMenuItem(item));
  }

  return menu;
}

function buildMenuItem(data) {
  const menuItem = document.createElement("li");
  menuItem.classList.add("menu__item");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu__item--title");

  if (Array.isArray(data.sub)) {
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = data.title;
    menuTitle.append(titleParagraph, buildCaret());

    const subMenu = buildMenu(data.sub, true);
    menuItem.append(menuTitle, subMenu);
  } else {
    menuTitle.textContent = data.title;
    menuItem.appendChild(menuTitle);
  }

  return menuItem;
}

function buildCaret() {
  const caretEl = document.createElement("p");
  caretEl.textContent = ">";
  caretEl.classList.add("caret");

  return caretEl;
}

init();
