import { locationCords, mapStr } from "./data";
import {
  throttle,
  getDOMElements,
  parseAttributes,
  removeElement,
  drawMap,
  createTooltip,
  createMobileTooltip,
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

let state = {
  isPaused: false,
  mapIndex: null,
  pauseState: false,
  currentRegion: null,
  currentTooltip: null,
  currentSection: null,
  isMobile: false,
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

const handleButtonClick = (e) => {
  const allButtons = document.querySelectorAll(".logo-button");

  allButtons.forEach((button) => button.classList.remove("active"));
  e.currentTarget.classList.add("active");

  const buttonMapIndex = e.currentTarget?.getAttribute("data-dot-map-index");
  const dataItem = locationCords.find(
    (item) => item.map_index === buttonMapIndex
  );

  const DOMElement = document.querySelector(
    `[data-map-index="${buttonMapIndex}"]`
  );

  const { region, mapIndex } = parseAttributes(DOMElement);

  state = {
    ...state,
    ...{
      currentRegion: region,
      mapIndex: mapIndex,
      currentSection: dataItem.section,
      currentTooltip: dataItem.tooltip,
    },
  };

  console.log(state);

  handleNewRegion();
  handleNewLocation();
  handleDotsUpdate();
};

const handleClick = () => {
  if (!state.currentTooltip) {
    return;
  }
  state = { ...state, isPaused: !state.isPaused };
};

const handleMouseLeave = () => {
  // TODO: Discus about state reset with UI leads
  // state = {
  //   isPaused: false,
  //   mapIndex: null,
  //   pauseState: false,
  //   currentRegion: null,
  //   currentTooltip: null,
  //   currentSection: null,
  // };
  // resetDOM();
};

function handleMouseMove(e) {
  if (
    !e.target.classList.contains("dot") ||
    e.target.classList.contains("hidden")
  ) {
    return;
  }

  if (state.isPaused) {
    return;
  }

  const el = e.target.classList.contains("dot-inner")
    ? e.target.parentElement
    : e.target;

  const { region, mapIndex } = parseAttributes(el);

  if (mapIndex === state.mapIndex) {
    // We are on the same element, prevent state change
    return;
  }

  state = { ...state, mapIndex };

  const locationItem = locationCords.find((item) => item.map_index == mapIndex);

  if (region !== state.currentRegion) {
    state = { ...state, ...{ currentRegion: region, currentTooltip: null } };

    removeElement(".dot-tooltip");
    handleNewRegion();
  }

  if (locationItem && locationItem.tooltip) {
    state = {
      ...state,
      ...{
        currentTooltip: locationItem.tooltip,
        currentSection: locationItem.section,
      },
    };
    handleNewLocation();
  }
}

const handleNewLocation = () => {
  const existingEl = document.querySelector(`.dot-tooltip`);
  const mobileTooltipContainer = document.getElementById(
    "mobile-tooltip-container"
  );

  if (existingEl) {
    removeElement(".dot-tooltip");
  }

  mobileTooltipContainer.innerHTML = "";

  const currentDotDOM = document.querySelector(
    `[data-map-index="${state?.mapIndex}"]`
  );

  const tooltip = createTooltip(state.currentTooltip);
  const mobileTooltip = createMobileTooltip(state.currentTooltip);

  mobileTooltipContainer.append(mobileTooltip);
  currentDotDOM.append(tooltip);

  handleDotsUpdate();
  handleNewSection();
};

function handleNewRegion() {
  const allDots = document.querySelectorAll(`.dot`);
  const regionDots = document.querySelectorAll(
    `[data-region="${state?.currentRegion}"]`
  );

  allDots.forEach((dot) => {
    dot.classList.remove("highlight");
    dot.classList.remove("muted");
  });

  regionDots.forEach((dot) => {
    dot.classList.add("highlight");
  });
}

function handleNewSection() {
  const { sectionDescription, partnerLogoImage, partnerLink } =
    getDOMElements();

  sectionDescription.innerHTML = state.currentSection.description;
  partnerLogoImage.src = PARTNER_LOGO[state?.currentSection.logo];
  partnerLink.classList.add("labeled");
  partnerLink.setAttribute("href", state?.currentSection?.url);
  partnerLink.innerHTML = state?.currentSection?.url;
}

function handleDotsUpdate() {
  const { dots } = getDOMElements();

  dots.forEach((el) => {
    el.classList.remove("muted");
    el.classList.remove("enabled_muted");

    const { mapIndex, region } = parseAttributes(el);
    const isFromGroup =
      region === state.currentRegion && mapIndex !== state.mapIndex;

    if (isFromGroup) {
      if (el.classList.contains("enabled")) {
        el.classList.add("enabled_muted");
      } else {
        el.classList.add("muted");
      }
    }
    if (state.mapIndex === mapIndex) {
      el.classList.remove("enabled_muted");
    }
  });
}

// function resetDOM() {
//   const { sectionDescription, partnerLogoImage, partnerLink } =
//     getDOMElements();
//   sectionDescription.innerHTML = "";
//   partnerLogoImage.src = "";
//   partnerLogoImage.classList.add("hidden");
// }

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
