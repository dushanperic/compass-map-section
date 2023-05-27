export const createTooltip = (data) => {
  if (!data) return;

  const tooltipEl = document.createElement("div");
  const tooltipContent = document.createElement("div");
  const title = document.createElement("span");

  tooltipEl.setAttribute("id", `tooltip-${data.id}`);
  tooltipEl.classList.add("tooltip");

  tooltipContent.classList.add("tooltip-content");

  title.classList.add("tooltip-title");
  title.innerHTML = data.title;

  tooltipContent.append(title);
  if (data.locations.length) {
    data.locations.forEach((element) => {
      const ul = document.createElement("ul");
      ul.classList.add("tooltip-list");
      element.map((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;

        ul.append(li);
      });

      tooltipContent.append(ul);
    });
  }

  tooltipEl.append(tooltipContent);

  return tooltipEl;
};
