import { REGION, REGION_STRING } from "./keys";
import { locationCords } from "./data";
import { createTooltip } from "./tooltip";

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

export const createTootipElement = (tooltip) => {
  const tooltipEl = document.createElement("div");
  tooltipEl.setAttribute("id", `tooltip-${tooltip.id}`);
  tooltipEl.setAttribute("class", "tooltip");
  tooltipEl.innerHTML = JSON.stringify(tooltip);

  return { tooltipEl };
};

export const handleTooltip = (currentTooltip, position) => {
  removeTooltip();

  if (!currentTooltip) {
    return;
  }

  const existingTooltip = document.querySelector(
    `#tooltip-${currentTooltip?.id}`
  );

  if (existingTooltip) {
    return null;
  }

  const tooltipEl = createTooltip(currentTooltip);

  tooltipEl.style.left = position.x;
  tooltipEl.style.top = position.y;

  const map = document.getElementById("map");
  map.append(tooltipEl);
};

export const getMapData = (str) => {
  const rows = str.split(",");

  const mapData = rows.map((row) =>
    row
      .split("")
      .map((char, index) => {
        if (char === "0") {
          return { _index: index, region: REGION.scotland };
        }

        if (char === "1") {
          return { _index: index, region: REGION.north_east };
        }

        if (char === "2") {
          return { _index: index, region: REGION.north_west };
        }

        if (char === "3") {
          return { _index: index, region: REGION.yorkshire_and_the_cumber };
        }

        if (char === "4") {
          return { _index: index, region: REGION.wales };
        }

        if (char === "5") {
          return { _index: index, region: REGION.west_midlands };
        }

        if (char === "6") {
          return { _index: index, region: REGION.east_midlands };
        }

        if (char === "7") {
          return { _index: index, region: REGION.east };
        }

        if (char === "8") {
          return { _index: index, region: REGION.south_west };
        }

        if (char === "9") {
          return { _index: index, region: REGION.south_east };
        }

        if (char === "=") {
          return { _index: index, region: "" };
        }

        if (char === "a") {
          return { _index: index, region: REGION.london_area };
        }

        if (char === "*") {
          return { _index: index, region: REGION.ireland, disabled: true };
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

export const removeTooltip = () => {
  const tooltip = document.querySelector(".tooltip");

  if (tooltip) {
    tooltip.remove();
  }
};
