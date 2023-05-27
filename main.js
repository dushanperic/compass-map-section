import "./style.css";
import { mapStr } from "./data";
import { initDOM } from "./dom";

document.querySelector("#js-container").innerHTML = `
  <section class="map-section" id="map-section">
    <span class="section-label">Our platform</span>
    <div class="spacer-lg"></div>
    <div class="section-grid">
    <div class="grid-item map-container">
      <div class="item-container">
        <div id="map"></div>
      </div>
    </div>
    <div class="grid-item content-container">
        <div class="item-container content-flex">
          <div>
            <h3 class="section-large-h3">Find your new compass approved conveyancer within your area</h3>
            <div class="spacer-sm"></div>
            <p class="section-large-paragraph">Our conveyancers can save on average 30% on stamp duty tax.</p>
            <div class="spacer-lg"></div>
          </div>
          <div id="section-dynamic-content" class="section-dynamic-content">
            <img id="section-partner-logo" class="section-partner-logo" src="" alt=""/>
            <div class="spacer-lg"></div>
            <div id="section-description" class="section-description"></div>
            <div class="spacer-md"></div>
            <a class="partner-link" id="partner-link" href="" target="__blank"></a>
          </div> 
        </div>
      </div>
    </div>
  </section>
`;

initDOM(document.querySelector("#map"), { xCount: 44, yCount: 54, mapStr });
