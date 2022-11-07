let previousSelectedTabId = "tab1";

document.querySelectorAll(".tab__title").forEach((tabTitle) => {
  tabTitle.addEventListener("click", onClickTabTitle);
});

function onClickTabTitle(event) {
  const currentTab = event.target;
  const currentDataTabId = currentTab.dataset["tabId"];

  if (currentDataTabId === previousSelectedTabId) {
    return;
  }

  const previousSelectedTab = document.querySelector(
    `[data-tab-id=${previousSelectedTabId}]`
  );

  const previousSelectedContent = document.querySelector(
    `[data-tab-content="${previousSelectedTab.dataset["tabId"]}"]`
  );

  previousSelectedTab.classList.remove("tab__title--active");
  previousSelectedContent.classList.remove("tab__content--active");

  currentTab.classList.add("tab__title--active");

  const currentContent = document.querySelector(
    `[data-tab-content="${currentDataTabId}"]`
  );

  currentContent.classList.add("tab__content--active");
  previousSelectedTabId = currentDataTabId;
}
