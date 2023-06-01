import { REGION, REGION_STRING } from "./keys";
import { locationCords } from "./data";

let throttlePause;

export const throttle = (callback, time) => {
  if (throttlePause) return;

  throttlePause = true;
  setTimeout(() => {
    callback && callback();
    throttlePause = false;
  }, time);
};

export const getDOMElements = () => {
  const tooltip = document.getElementById("tooltip-test");
  const tooltipTitle = document.getElementById("tooltip-test-title");
  const tooltipList = document.getElementById("tooltip-test-list");

  const dots = document.querySelectorAll(".dot");
  const sectionDescription = document.getElementById("section-description");
  const partnerLogoImage = document.getElementById("section-partner-logo");
  const partnerLink = document.getElementById("partner-link");
  const dynamicContentContainer = document.getElementById(
    "section-dynamic-content"
  );

  return {
    dots,
    dynamicContentContainer,
    sectionDescription,
    partnerLogoImage,
    partnerLink,
    tooltip,
    tooltipTitle,
    tooltipList,
  };
};

export const parseAttributes = (el) => {
  const tooltipData = el.getAttribute("data-tooltip");
  const mapIndex = el.getAttribute("data-map-index");
  const region = el.getAttribute("data-region");

  return {
    region: region ? region : null,
    tooltipData: tooltipData ? JSON.parse(tooltipData) : null,
    mapIndex: mapIndex ? mapIndex : null,
  };
};

export const getMapData = (str) => {
  const rows = str.split(",");

  const mapData = rows.map((row, rowindex) =>
    row
      .split("")
      .map((char, index) => {
        if (char === "0") {
          return {
            _index: index,
            region: REGION.scotland,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "1") {
          return {
            _index: index,
            region: REGION.north_east,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "2") {
          return {
            _index: index,
            region: REGION.north_west,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "3") {
          return {
            _index: index,
            region: REGION.yorkshire_and_the_cumber,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "4") {
          return {
            _index: index,
            region: REGION.wales,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "5") {
          return {
            _index: index,
            region: REGION.west_midlands,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "6") {
          return {
            _index: index,
            region: REGION.east_midlands,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "7") {
          return {
            _index: index,
            region: REGION.east,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "8") {
          return {
            _index: index,
            region: REGION.south_west,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "9") {
          return {
            _index: index,
            region: REGION.south_east,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "=") {
          return {
            _index: index,
            region: "",
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "a") {
          return {
            _index: index,
            region: REGION.london_area,
            map_index: `${rowindex}-${index}`,
          };
        }

        if (char === "*") {
          return {
            _index: index,
            region: REGION.ireland,
            disabled: true,
            map_index: `${rowindex}-${index}`,
          };
        }
      })
      .filter((data) => data && data)
  );

  return mapData;
};

export const drawMap = (rootElement, cfg) => {
  const mapContainer = document.createElement("div");

  const { xCount, yCount, mapStr } = cfg;
  const mapData = getMapData(mapStr);

  for (let i = 0; i < yCount; i++) {
    // Create rows
    const row = document.createElement("div");
    row.setAttribute("class", `row row-${i}`);
    row.setAttribute("data-index", i);
    // Create cols
    for (let y = 0; y < xCount; y++) {
      const dotEl = document.createElement("div");
      const dotElInner = document.createElement("div");
      dotElInner.classList.add("dot-inner");
      dotEl.append(dotElInner);

      const matchingEl = mapData?.[i]?.find((item) => item._index == y);
      const activeDot = locationCords.find(
        (item) => item.row === i && item.col === y
      );

      dotEl.setAttribute("data-map-index", `${i}-${y}`);
      dotEl.setAttribute("class", `dot col-${y}`);

      if (!matchingEl && !matchingEl?.region) {
        dotEl.classList.add("hidden");
      } else {
        dotEl.setAttribute("data-region", matchingEl?.region);
        dotEl.setAttribute("data-title", REGION_STRING[matchingEl?.region]);

        if (matchingEl?.disabled) {
          dotEl.classList.add("disabled");
        }

        if (matchingEl?.enabled) {
          dotEl.classList.add("enabled");
        }

        if (activeDot) {
          dotEl.setAttribute("data-map-index", `${i}-${y}`);
          dotEl.classList.add("enabled");
        }
      }

      row.append(dotEl);
    }
    mapContainer.append(row);
  }

  rootElement.innerHTML = "";
  rootElement.append(mapContainer);
};

export const removeElement = (selector) => {
  const element = document.querySelector(`${selector}`);

  if (element) {
    element.remove();
  }
};

export const createTooltip = (data) => {
  const { title } = data;
  const el = document.createElement("div");
  el.setAttribute("class", "dot-tooltip-li dot-tooltip");
  el.setAttribute("id", `dot-tooltip-${data.id}`);
  const tooltipInnerHTML = `
    <h4 class="dot-list-title">${title}</h4>
  `;
  el.innerHTML = tooltipInnerHTML;
  const ul = document.createElement("ul");
  ul.setAttribute("class", "dot-tooltip-list");

  data.locations.forEach((listItem) => {
    const liEl = document.createElement("li");
    liEl.classList.add("dot-tooltip-li");

    if (listItem.length) {
      liEl.innerHTML = listItem;
      ul.append(liEl);
    }
  });

  el.append(ul);

  return el;
};
