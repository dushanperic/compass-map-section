import { locationCords, mapStr } from "./data";
import {
  throttle,
  getDOMElements,
  parseAttributes,
  removeTooltip,
  drawMap,
} from "./utills";
import { REGION_STRING } from "./keys";

const throttleTime = 350;

const PARTNER_LOGO = {
  farnworth_rose:
    "https://uploads-ssl.webflow.com/644244ec3d142e0be4b0a381/6470b414937a5e96de042cd9_farnworth%20rose%20logo.png",
  fieldings_porter:
    "https://uploads-ssl.webflow.com/644244ec3d142e0be4b0a381/6470b41585072710b1f6590d_fieldings%20porter%20logo.png",
  davisons_law:
    "https://uploads-ssl.webflow.com/644244ec3d142e0be4b0a381/6470b415d3b6b46a21d50ab8_davisons%20logo.png",
  ctt_law:
    "https://uploads-ssl.webflow.com/644244ec3d142e0be4b0a381/6470b4148f24096486fb6aaf_ctt%20logo.png",
  eden_conveyancing:
    "https://uploads-ssl.webflow.com/644244ec3d142e0be4b0a381/6470b4147bca0de38576511f_eden%20logo.png",
};

export const renderButtons = () => {
  const btns = Object.entries(PARTNER_LOGO).map(([key, value]) => {
    const el = document.createElement("button");
    const img = document.createElement("img");
    el.classList.add("logo-button");
    el.setAttribute("id", `button-${key}`);

    const matched = locationCords.find((item) => item.key === key);

    if (matched) {
      el.setAttribute("data-dot-map-index", `${matched.row}-${matched.col}`);
      el.setAttribute("data-region", matched.region);
    }

    img.src = value;
    img.alt = REGION_STRING[key];
    img.width = 300;

    el.append(img);
    el.addEventListener("click", handleButtonClick);
    return el;
  });

  const wrapper = document.getElementById("buttons-wrapper");

  btns.forEach((btn) => {
    wrapper.append(btn);
  });
};

let state = {
  pauseState: false,
  currentRegion: null,
  currentTooltip: null,
  currentSection: null,
  isMobile: false,
  currentMapIndex: {
    row: 0,
    col: 0,
  },
  client: {
    x: 0,
    y: 0,
  },
};

const handleButtonClick = (e) => {
  const mapIndex = e.currentTarget?.getAttribute("data-dot-map-index");
  const region = e.currentTarget?.getAttribute("data-region");
  const dot = document.querySelector(`[data-map-index="${mapIndex}"]`);

  const [row, col] = mapIndex.split("-");
  const selectedItem = locationCords.find(
    (item) => item.row == row && item.col == col
  );

  state = {
    ...state,
    ...{
      currentRegion: region,
      currentMapIndex: { row, col },
      currentTooltip: selectedItem?.tooltip ? selectedItem.tooltip : null,
      currentSection: selectedItem?.section ? selectedItem.section : null,
    },
  };

  updateDOM();
};

const handleClick = (e) => {
  if (
    !e.target.classList.contains("dot") ||
    !e.target.classList.contains("dot-inner") ||
    e.target.classList.contains("hidden")
  )
    return;

  state.pauseState = state.pauseState ? false : true;
};

const handleMouseMove = (e) => {
  if (
    !e.target.classList.contains("dot") ||
    e.target.classList.contains("hidden")
  ) {
    return;
  }

  const el = e.target.classList.contains("dot-inner")
    ? e.target.parentElement
    : e.target;

  const { region, mapIndex } = parseAttributes(el);

  const [row, col] = mapIndex.split("-");
  const hoveredItem = locationCords.find(
    (item) => item.row == row && item.col == col
  );

  state.client = {
    y: e.clientY,
    x: e.clientX,
  };

  if (JSON.stringify(state.currentMapIndex) === JSON.stringify({ row, col })) {
    return;
  }

  if (region && region !== state.currentRegion) {
    state = { ...state, ...{ currentRegion: region, pauseState: false } };
  }

  state = {
    ...state,
    ...{
      currentMapIndex: { row, col },
      currentTooltip: hoveredItem?.tooltip ? hoveredItem.tooltip : null,
      currentSection: hoveredItem?.section ? hoveredItem.section : null,
    },
  };

  if (state.pauseState) {
    return;
  }

  updateDOM();
};

const handleMouseLeave = () => {
  state = {
    ...state,
    ...{
      currentRegion: null,
      currentMapIndex: null,
      currentTooltip: null,
      currentSection: null,
    },
  };

  updateDOM();
};

const updateDOM = () => {
  const {
    dots,
    sectionDescription,
    partnerLogoImage,
    partnerLink,
    dynamicContentContainer,
    tooltip,
    tooltipTitle,
    tooltipList,
  } = getDOMElements();

  if (state.currentRegion) {
    dots.forEach((dot) => {
      const { region, mapIndex } = parseAttributes(dot);
      const isEnabled = dot.classList.contains("enabled");
      const isFromGroup =
        mapIndex !==
        `${state.currentMapIndex.row}-${state.currentMapIndex.col}`;

      if (region == state.currentRegion) {
        dot.classList.add("highlight");

        if (state.currentTooltip) {
          tooltipTitle.innerHTML = state.currentTooltip.title;
          tooltip.style.left = `${state.client.x}px`;
          tooltip.style.top = `${state.client.y}px`;
          tooltip.classList.add("visible");
          tooltipList.innerHTML = "";

          if (state.currentTooltip.locations.length) {
            state.currentTooltip.locations.forEach((element) => {
              const ul = document.createElement("ul");
              ul.classList.add("tooltip-list");
              element.map((item) => {
                const li = document.createElement("li");
                li.innerHTML = item;

                ul.append(li);
              });

              tooltipList.append(ul);
            });
          }
        } else {
          removeTooltip();
          tooltip.classList.remove("visible");
        }

        if (state.currentTooltip !== null && isEnabled && isFromGroup) {
          dot.classList.add("enabled_muted");
        } else {
          dot.classList.remove("enabled_muted");
        }

        if (state.currentTooltip !== null && isFromGroup) {
          dot.classList.add("muted");
        } else {
          dot.classList.remove("muted");
        }
      } else {
        dot.classList.remove("highlight");
        dot.classList.remove("muted");
        dot.classList.remove("enabled_muted");
      }
    });

    if (state.currentSection) {
      if (partnerLogoImage) {
        partnerLogoImage.src = PARTNER_LOGO[state?.currentSection.logo];
        partnerLogoImage.classList.remove("hidden");
      }

      if (dynamicContentContainer) {
        dynamicContentContainer.classList.add("fadeIn");
      }

      sectionDescription.innerHTML = state?.currentSection?.description;
      partnerLink.classList.add("labeled");
      partnerLink.setAttribute("href", state?.currentSection?.url);
      partnerLink.innerHTML = state?.currentSection?.url;

      setTimeout(() => {
        dynamicContentContainer.classList.remove("fadeIn");
      }, 1000);
    }
  }
};

export function initDOM(rootElement) {
  drawMap(document.querySelector("#map"), { xCount: 44, yCount: 54, mapStr });

  rootElement.addEventListener("click", handleClick);
  rootElement.addEventListener("mouseleave", (e) => handleMouseLeave(e));
  rootElement.addEventListener("mousemove", (e) =>
    throttle(handleMouseMove(e), throttleTime)
  );

  window.addEventListener("load", () => {
    state.isMobile = window.innerWidth < 1200;
  });
}
