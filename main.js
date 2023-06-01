import "./style.css";
import { initDOM, renderButtons } from "./dom";

document.querySelector("#js-container").innerHTML = `
    <section id="map-section">
      <div class="sm-visible">
        <span class="section-label">Our platform</span>
        <div class="spacer-lg"></div>
        <h3 class="section-title heading-style-h4">
          Find your new compass approved conveyancer within your area
        </h3>
        <div class="spacer-sm"></div>
        <p class="section-subtitle text-size-large">
          Our conveyancers can save on average 30% on stamp duty tax.
        </p>
        <div class="spacer-lg"></div>
        <div id="buttons-wrapper" class="sm-buttons-wrapper"></div>
      </div>
      <div class="section-grid">
        <div class="grid-item map-container">
          <div class="item-container content-flex">
            <div id="map" class="map-wrapper"></div>
          </div>
        </div>
        <div class="grid-item content-container">
          <div class="item-container content-flex">
            <div class="lg-visible">
              <span class="section-label">Our platform</span>
              <div class="spacer-lg"></div>
              <h3 class="section-title heading-style-h4">
                Find your new compass approved conveyancer within your area
              </h3>
              <div class="spacer-sm"></div>
              <p class="section-subtitle text-size-large">
                Our conveyancers can save on average 30% on stamp duty tax.
              </p>
              </div>
            
            <div id="section-dynamic-content" class="section-dynamic-content">
              <img
                id="section-partner-logo"
                class="section-partner-logo"
                src=""
                alt="Partner logo"
              />
              <div id="section-description" class="section-description text-size-medium"></div>
              <div class="spacer-md"></div>
              <a
                class="partner-link text-size-medium"
                id="partner-link"
                href=""
                target="__blank"
              ></a>
            </div>
              
            <div class="spacer-md"></div>
            <div id="mobile-tooltip-container" class="mobile-tooltip-container"></div>
          </div>
        </div>
      </div>
    </section>`;

initDOM(document.querySelector("#map"));
renderButtons();
