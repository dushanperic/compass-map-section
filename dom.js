import { locationCords } from "./data";
import {
  throttle,
  getDOMElements,
  parseAttributes,
  handleTooltip,
  drawMap,
  removeTooltip,
} from "./utills";

import davisonsLogo from "/davisons-logo-new.svg";
import filedingsPorterLogo from "/fieldings_porter_logo.svg";
import cttLawLogo from "/logo-new-ctt-law-white.svg";
import farnworthRoseLogo from "/logo@2x.svg";
import edenConveyancingLogo from "/0x0.svg";

const throttleTime = 350;

const PARTNER_LOGO = {
  farnworth_rose: farnworthRoseLogo,
  fieldings_porter: filedingsPorterLogo,
  davisons_law: davisonsLogo,
  ctt_law: cttLawLogo,
  eden_conveyancing: edenConveyancingLogo,
};

let state = {
  pauseState: false,
  currentRegion: null,
  currentTooltip: null,
  currentSection: null,
  currentMapIndex: {
    row: 0,
    col: 0,
  },
  client: {
    x: 0,
    y: 0,
  },
};

const handleClick = (e) => {
  if (
    !e.target.classList.contains("dot") ||
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

  const { region, mapIndex } = parseAttributes(e.target);
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
          handleTooltip(state.currentTooltip, state.client);
        } else {
          removeTooltip();
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
      }

      if (dynamicContentContainer) {
        dynamicContentContainer.classList.add("fadeIn");
      }

      sectionDescription.innerHTML = state?.currentSection?.description;
      partnerLink.setAttribute("href", state?.currentSection?.url);
      partnerLink.innerHTML = state?.currentSection?.url;

      setTimeout(() => {
        dynamicContentContainer.classList.remove("fadeIn");
      }, 1000);
    }
  }
};

export function initDOM(rootElement, mapCfg) {
  drawMap(rootElement, mapCfg);

  rootElement.addEventListener("click", handleClick);
  rootElement.addEventListener("mouseleave", (e) => handleMouseLeave(e));
  rootElement.addEventListener("mousemove", (e) =>
    throttle(handleMouseMove(e), throttleTime)
  );

  window.addEventListener("resize", () =>
    throttle(drawMap(rootElement, mapCfg), throttleTime)
  );
}
