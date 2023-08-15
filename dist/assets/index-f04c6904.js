(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const s of e)
      if (s.type === "childList")
        for (const t of s.addedNodes)
          t.tagName === "LINK" && t.rel === "modulepreload" && r(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(e) {
    const s = {};
    return (
      e.integrity && (s.integrity = e.integrity),
      e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = a(e);
    fetch(e.href, s);
  }
})();
const O =
    "@@@@@@@@@@@@@@@@@@@@@@@@0@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@@@@@@@@@@0@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@@@@@@@@@@@0@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@@@@@@@@@@0@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@0@@@0000000@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@00@@@0000000@@@@@@@@@@@@@@@@@,@@@@@@@@@@@000@@@0000000@@@@@@@@@@@@@@@@@@,@@@@@@@@@@@000@@@000000@@@@@@@@@@@@@@@@@@@,@@@@@@@@@@@00@@0@00000@@@@@@@@@@@@@@@@@@@@,@@@@@@@@@@@0@@@@0000000@@@@@@@@@@@@@@@@@@@,@@@@@@@@@@0@@00@0000000000000@@@@@@@@@@@@@,@@@@@@@@@@@@00000000000000000@@@@@@@@@@@@@,@@@@@@@@@@0@@@000000000000000@@@@@@@@@@@@@,@@@@@@@@@@@@@@@00000000000000@@@@@@@@@@@@@,@@@@@@@@@@0@@0@0000000000000@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@0000000000000@@@@@@@@@@@@@@,@@@@@@@@@@@@0@0000000000000@@@@@@@@@@@@@@@,@@@@@@@@@@@0@@@0@000000000@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@00@0000000000@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@@000000000@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@0000000000000@@@@@@@@@@@@@@@,@@@@@@@@@@@@@00@0@@0000000000@@@@@@@@@@@@@,@@@@@@@@@@@@@@0@00@00000000011@@@@@@@@@@@@,@@@@@@@@@@@@@@@@00@00000000011@@@@@@@@@@@@,@@@@@@@@@@==@@@@0@000000000111@@@@@@@@@@@@,@@@@@@@========@@@0000000011111@@@@@@@@@@@,@@@@@@@========@@@0000000021111@@@@@@@@@@@,@@@@@@==========@@0@000@2221111@@@@@@@@@@@,@@@@@============@@@@@@222211111@@@@@@@@@@,@@@@@@@==========@@@@@@22222333333@@@@@@@@,@@**@****==*=====@@@=@@@22223333333@@@@@@@,@@***********===@@@==@@@22233333333@@@@@@@,@*************@@@@@@@@@@@2223333333@@@@@@@,@@************@@@@@@@@@@@22233333333@@@@@@,@**************@@@@@@@@@@2222333333@@@@@@@,@**************@@@@@4@@@@22226336666@@@@@@,@@@*@**********@@@@@44444222266666666@@@@@,@@@@***********@@@@@44444522556666666@@@@@,@@@************@@@@44@44455555666666@777@@,@@*************@@@@@@44445555566666677777@,@@************@@@@@@@444455555566677777777,@@************@@@@@@@444455555566677777777,************@*@@@@@@444445555556677777777@,@*********@@@@@@@@4444444555889997777777@@,*@******@@@@@@@@44444444448888999777777@@@,@@****@@@@@@@@@@@@@4@4444488889999aa777@@@,@@@@@@@@@@@@@@@@@@@@@@@44@88889999aa99@@@@,@@@@@@@@@@@@@@@@@@@@@@@@@8888899999999999@,@@@@@@@@@@@@@@@@@@@@@8888888889999999999@@,@@@@@@@@@@@@@@@@@@@@888888888999999999@@@@,@@@@@@@@@@@@@@@@@@@888888@888@99@@@@9@@@@@,@@@@@@@@@@@@@@@@@@888888@@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@@@888888@@@@@@@@@@@@@@@@@@@,@@@@@@@@@@@@@@@@888@@@@@@@@@@@@@@@@@@@@@@@",
  h = [
    {
      map_index: "31-26",
      row: 31,
      col: 26,
      key: "farnworth_rose",
      tooltip: {
        id: "1",
        title: "Farnworth rose",
        locations: [
          "First Floor Finance House, 17 Kenyon Road, Lomeshaye Estate, Nelson, BB9 5SP",
        ],
      },
      section: {
        description:
          "At Farnworth Rose Solicitors we provide a complete range of legal services to clients in Nelson, Burnley and across Pendle. No matter what your legal requirements are, we are always on your side. We strive to achieve the best outcome for every case we are instructed to handle. Our solicitors and administration staff offer a warm and welcoming service and are always available to offer you any advice you may need.",
        url: "https://www.farnworthrose.co.uk/",
        logo: "farnworth_rose",
      },
    },
    {
      map_index: "34-26",
      row: 34,
      col: 26,
      key: "fieldings_porter",
      tooltip: {
        id: "2",
        title: "Fieldings Porter",
        locations: [
          "First Floor Finance House, 17 Kenyon Road, Lomeshaye Estate, Nelson, BB9 5SP",
        ],
      },
      section: {
        description:
          "Fieldings Porter Solicitors are a long established firm providing a range of legal services and we have offices in Bolton Town Centre and Manchester City Centre. We have a culture of clients who use our professional solicitors instructing us again and again when they need legal services, advice and assistance. Once you’ve instructed us, we’re confident you’ll do the same.",
        url: "https://www.fieldingsporter.co.uk/",
        logo: "fieldings_porter",
      },
    },
    {
      map_index: "37-27",
      row: 37,
      col: 27,
      key: "davisons_law",
      tooltip: {
        id: "3",
        title: "Davisons Law",
        locations: [
          "Stafford Office - Friars Mill, Friars Terrace, Stafford, ST17 4AU",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "38-28",
      row: 38,
      col: 28,
      key: "davisons_law",
      tooltip: {
        id: "4",
        title: "Davisons Law",
        locations: [
          "Lichfield Office - 2a Bore Street, Lichfield, Staffordshire, WS13 6LL",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "39-27",
      row: 39,
      col: 27,
      key: "davisons_law",
      tooltip: {
        id: "5",
        title: "Davisons Law",
        locations: [
          "Wolverhampton Office - 21 Waterloo Road, Wolverhampton, WV1 4DJ",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "39-28",
      row: 39,
      col: 28,
      key: "davisons_law",
      tooltip: {
        id: "6",
        title: "Davisons Law",
        locations: [
          "Sutton Coldfield Office - 254 Lichfield Road, Four Oaks, Sutton Coldfield, B74 2UH",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "40-28",
      row: 40,
      col: 28,
      key: "davisons_law",
      tooltip: {
        id: "7",
        title: "Davisons Law",
        locations: [
          "Colmore Row Office - 75-77 Colmore Row, Birmingham, B3 2AP",
          "Cotteridge Office - 1886-1888 Pershore Road, Cotteridge, Birmingham, B30 3AS",
          "Weoley Castle Office - 63-65 Beckbury Road, Weoley Castle, Birmingham, B29 5HS",
          "Edgbaston Office - Sycamore House, 54 Calthorpe Road, Edgbaston, Birmingham, B15 1TH",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "40-29",
      row: 40,
      col: 29,
      key: "davisons_law",
      tooltip: {
        id: "8",
        title: "Davisons Law",
        locations: [
          "Solihull Office - No.4 The Courtyard, 707 Warwick Road, Solihull, B91 3DA",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "41-29",
      row: 41,
      col: 29,
      key: "davisons_law",
      tooltip: {
        id: "9",
        title: "Davisons Law",
        locations: [
          "Leamington Spa Office - Estate House, 4 Euston Place, Leamington Spa, CV32 4LN",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "41-30",
      row: 41,
      col: 30,
      key: "ctt_law",
      tooltip: {
        id: "9",
        title: "CTT Law",
        locations: [
          "Gables House, 62 Kenilworth Road, Leamington Spa, CV32 6JX",
        ],
      },
      section: {
        description:
          "At CTT Law, we are an SRA regulated legal firm that provides innovative, modern, and dynamic solutions to even the most complex legal problems with an established team from diverse backgrounds. Our approach is thoughtful, honest and caring. We strive to deliver a professional service with a personal touch. We have a passion for excellence regarding the law and pride ourselves on the quality of services provided to our valued clients.",
        url: "https://cttlaw.co.uk/",
        logo: "ctt_law",
      },
    },
    {
      map_index: "42-28",
      row: 42,
      col: 28,
      key: "davisons_law",
      tooltip: {
        id: "9",
        title: "Davisons Law",
        locations: [
          "Stratford Upon Avon Office - 20A Rother Street, Stratford-upon-Avon, Warwickshire, CV37 6NE",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "46-34",
      row: 46,
      col: 34,
      key: "davisons_law",
      tooltip: {
        id: "9",
        title: "Davisons Law",
        locations: [
          "Streatham Office - 266-268 Streatham High Rd, London, SW16 1HS",
        ],
      },
      section: {
        description:
          "We put our clients at the heart of everything we do, and our experts pride themselves on being able to simplify the legal issue no matter how straightforward or complex. Our aim is to offer clear, practical legal advice in order to achieve the best possible outcomes for our clients. We have experts in housing & property, family, wills & probate, employment and litigation. We also have specialists in commercial law and offer a range of legal services for businesses. With over 350 staff operating out of 12 offices, you can rest assured that we have the resources and expertise to provide a full range of legal services for you or your business.",
        url: "https://www.davisons.law/",
        logo: "davisons_law",
      },
    },
    {
      map_index: "47-26",
      row: 47,
      col: 26,
      key: "eden_conveyancing",
      tooltip: {
        id: "9",
        title: "Eden Conveyancing",
        locations: [
          "Unit 7, 19 Paintworks, Bath Rd, Arno's Vale, Bristol BS4 3EA, United Kingdom ",
        ],
      },
      section: {
        description:
          "We believe buying or selling a home should be a smooth, enjoyable experience. And so our team take the stress out of the process by making sure you are looked after and guided every step of the way. With Eden you’ll have your own dedicated property lawyer to guide you every step of the way. They’ll explain the conveyancing process and take care of the details so that everything runs as smoothly as possible.",
        url: "https://www.edenconveyancing.com/",
        logo: "eden_conveyancing",
      },
    },
  ],
  u = {
    scotland: "scotland",
    north_east: "north_east",
    north_west: "north_west",
    yorkshire_and_the_humber: "yorkshire_and_the_humber",
    wales: "wales",
    west_midlands: "west_midlands",
    east_midlands: "east_midlands",
    east: "east",
    south_west: "south_west",
    south_east: "south_east",
    london_area: "london_area",
  },
  _ = {
    scotland: "Scotland",
    north_east: "North East",
    north_west: "North West",
    yorkshire_and_the_humber: "Yorkshire and the Cumber",
    wales: "Wales",
    west_midlands: "West Midlands",
    east_midlands: "East Midlands",
    east: "East",
    south_west: "South West",
    south_east: "South East",
    london_area: "London Area",
  };
let v;
const $ = (i, o) => {
    v ||
      ((v = !0),
      setTimeout(() => {
        i && i(), (v = !1);
      }, o));
  },
  w = () => {
    const i = document.getElementById("tooltip-test"),
      o = document.getElementById("tooltip-test-title"),
      a = document.getElementById("tooltip-test-list"),
      r = document.getElementById("region-tooltip"),
      e = document.querySelectorAll(".dot"),
      s = document.getElementById("section-description"),
      t = document.getElementById("section-partner-logo"),
      d = document.getElementById("partner-link"),
      l = document.getElementById("section-dynamic-content");
    return {
      dots: e,
      dynamicContentContainer: l,
      sectionDescription: s,
      partnerLogoImage: t,
      partnerLink: d,
      tooltip: i,
      tooltipTitle: o,
      tooltipList: a,
      regionTooltip: r,
    };
  },
  y = (i) => {
    const o = i.getAttribute("data-tooltip"),
      a = i.getAttribute("data-map-index"),
      r = i.getAttribute("data-region");
    return {
      region: r || null,
      tooltipData: o ? JSON.parse(o) : null,
      mapIndex: a || null,
    };
  },
  A = (i) =>
    i.split(",").map((r, e) =>
      r
        .split("")
        .map((s, t) => {
          if (s === "0")
            return { _index: t, region: u.scotland, map_index: `${e}-${t}` };
          if (s === "1")
            return { _index: t, region: u.north_east, map_index: `${e}-${t}` };
          if (s === "2")
            return { _index: t, region: u.north_west, map_index: `${e}-${t}` };
          if (s === "3")
            return {
              _index: t,
              region: u.yorkshire_and_the_humber,
              map_index: `${e}-${t}`,
            };
          if (s === "4")
            return { _index: t, region: u.wales, map_index: `${e}-${t}` };
          if (s === "5")
            return {
              _index: t,
              region: u.west_midlands,
              map_index: `${e}-${t}`,
            };
          if (s === "6")
            return {
              _index: t,
              region: u.east_midlands,
              map_index: `${e}-${t}`,
            };
          if (s === "7")
            return { _index: t, region: u.east, map_index: `${e}-${t}` };
          if (s === "8")
            return { _index: t, region: u.south_west, map_index: `${e}-${t}` };
          if (s === "9")
            return { _index: t, region: u.south_east, map_index: `${e}-${t}` };
          if (s === "=")
            return { _index: t, region: "", map_index: `${e}-${t}` };
          if (s === "a")
            return { _index: t, region: u.london_area, map_index: `${e}-${t}` };
          if (s === "*")
            return {
              _index: t,
              region: u.ireland,
              disabled: !0,
              map_index: `${e}-${t}`,
            };
        })
        .filter((s) => s && s)
    ),
  k = (i, o) => {
    var d;
    const a = document.createElement("div"),
      { xCount: r, yCount: e, mapStr: s } = o,
      t = A(s);
    for (let l = 0; l < e; l++) {
      const m = document.createElement("div");
      m.setAttribute("class", `row row-${l}`), m.setAttribute("data-index", l);
      for (let p = 0; p < r; p++) {
        const f = document.createElement("div"),
          b = document.createElement("div");
        b.classList.add("dot-inner"), f.append(b);
        const c =
            (d = t == null ? void 0 : t[l]) == null
              ? void 0
              : d.find((g) => g._index == p),
          T = h.find((g) => g.row === l && g.col === p);
        f.setAttribute("data-map-index", `${l}-${p}`),
          f.setAttribute("class", `dot col-${p}`),
          !c && !(c != null && c.region)
            ? f.classList.add("hidden")
            : (c != null &&
                c.region &&
                (c == null ? void 0 : c.region) !== void 0 &&
                f.setAttribute("data-region", c == null ? void 0 : c.region),
              c != null && c.disabled && f.classList.add("disabled"),
              c != null && c.enabled && f.classList.add("enabled"),
              T &&
                (f.setAttribute("data-map-index", `${l}-${p}`),
                f.classList.add("enabled"))),
          m.append(f);
      }
      a.append(m);
    }
    (i.innerHTML = ""), i.append(a);
  },
  L = (i) => {
    const o = document.querySelector(`${i}`);
    o && o.remove();
  },
  B = (i) => {
    const { title: o, locations: a, id: r } = i,
      e = document.createElement("div");
    e.setAttribute("class", "dot-tooltip"),
      e.setAttribute("id", `dot-tooltip-${r}`),
      (e.innerHTML = `<h4 class="dot-list-title">${o}</h4>`);
    const s = document.createElement("ul");
    return (
      s.setAttribute("class", "dot-tooltip-list"),
      a == null ||
        a.forEach((t) => {
          const d = document.createElement("li");
          d.classList.add("dot-tooltip-li"),
            t.length && ((d.innerHTML = t), s.append(d));
        }),
      e.append(s),
      e
    );
  },
  M = (i) => {
    const { title: o, locations: a, id: r } = i,
      e = document.createElement("div");
    e.setAttribute("class", "mobile-tooltip"),
      e.setAttribute("id", `mobile-tooltip-${r}`);
    const s = h.filter((t) => t.key === "davisons_law");
    if (o === "Davisons Law") {
      const t = document.createElement("div");
      return (
        s.forEach((d) => {
          const l = document.createElement("ul");
          l.setAttribute("class", "mobile-tooltip-list"),
            (l.innerHTML = `<h4 class="dot-list-title">${o}</h4>`),
            d.tooltip.locations.forEach((m) => {
              const p = document.createElement("li");
              p.classList.add("dot-tooltip-li"), (p.innerHTML = m), l.append(p);
            }),
            t.append(l);
        }),
        t
      );
    } else {
      const t = document.createElement("ul");
      return (
        t.setAttribute("class", "mobile-tooltip-list"),
        (t.innerHTML = `<h4 class="dot-list-title">${o}</h4>`),
        a == null ||
          a.forEach((d) => {
            const l = document.createElement("li");
            l.classList.add("mobile-tooltip-li"),
              d.length && ((l.innerHTML = d), t.append(l));
          }),
        e.append(t),
        e
      );
    }
  },
  I = 350,
  x = {
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
let n = {
  isPaused: !1,
  mapIndex: null,
  pauseState: !1,
  currentRegion: null,
  currentTooltip: null,
  currentSection: null,
  isMobile: !1,
};
const R = () => {
    const i = Object.entries(x).map(([a, r]) => {
        const e = document.createElement("button"),
          s = document.createElement("img");
        e.classList.add("logo-button"),
          e.setAttribute("id", `button-${a}`),
          e.setAttribute("data-name", a);
        const t = h.find((d) => d.key === a);
        return (
          t &&
            (e.setAttribute("data-dot-map-index", `${t.row}-${t.col}`),
            e.setAttribute("data-region", t.region)),
          (s.src = r),
          (s.alt = _[a]),
          (s.width = 300),
          e.append(s),
          e.addEventListener("click", C),
          e
        );
      }),
      o = document.getElementById("buttons-wrapper");
    i.forEach((a) => {
      o.append(a);
    });
  },
  C = (i) => {
    var l;
    const o = document.querySelectorAll(".logo-button"),
      a = document.querySelector("#partner-link");
    o.forEach((m) => m.classList.remove("active")),
      i.currentTarget.classList.add("active");
    const r =
        (l = i.currentTarget) == null
          ? void 0
          : l.getAttribute("data-dot-map-index"),
      e = h.find((m) => m.map_index === r),
      s = document.querySelector(`[data-map-index="${r}"]`),
      { region: t, mapIndex: d } = y(s);
    (n = {
      ...n,
      currentRegion: t,
      mapIndex: d,
      currentSection: e.section,
      currentTooltip: e.tooltip,
    }),
      a.scrollIntoView({ behavior: "smooth", block: "end" }),
      W(),
      S(),
      E();
  },
  D = () => {
    n.currentTooltip && (n = { ...n, isPaused: !n.isPaused });
  },
  H = () => {
    n.isPaused ||
      ((n = {
        isPaused: !1,
        mapIndex: null,
        pauseState: !1,
        currentRegion: null,
        currentTooltip: null,
        currentSection: null,
      }),
      F());
  };
function P(i) {
  if (window.innerWidth < 1200) return;
  const o = document.getElementById("region-tooltip");
  if (
    (n.currentRegion &&
      o &&
      ((o.style.left = `${i.clientX + 20}px`),
      (o.style.top = `${i.clientY}px`)),
    !i.target.classList.contains("dot") ||
      i.target.classList.contains("hidden") ||
      n.isPaused)
  )
    return;
  const a = i.target.classList.contains("dot-inner")
      ? i.target.parentElement
      : i.target,
    { region: r, mapIndex: e } = y(a);
  if (e === n.mapIndex) return;
  n = { ...n, mapIndex: e };
  const s = h.find((t) => t.map_index == e);
  r !== n.currentRegion &&
    ((n = { ...n, currentRegion: r, currentTooltip: null }),
    L(".dot-tooltip"),
    W()),
    s &&
      s.tooltip &&
      ((n = { ...n, currentTooltip: s.tooltip, currentSection: s.section }),
      S());
}
const S = () => {
  const i = document.querySelector(".dot-tooltip"),
    o = document.getElementById("mobile-tooltip-container");
  i && L(".dot-tooltip"), (o.innerHTML = "");
  const a = document.querySelector(
      `[data-map-index="${n == null ? void 0 : n.mapIndex}"]`
    ),
    r = B(n.currentTooltip),
    e = M(n.currentTooltip);
  o.append(e), a.append(r), E(), N();
};
function W() {
  const i = document.getElementById("region-tooltip"),
    o = document.querySelectorAll(".dot"),
    a = document.querySelectorAll(
      `[data-region="${n == null ? void 0 : n.currentRegion}"]`
    );
  n != null && n.currentRegion
    ? (i.innerHTML = _[n == null ? void 0 : n.currentRegion])
    : (i.innerHTML = ""),
    o.forEach((r) => {
      r.classList.remove("highlight"), r.classList.remove("muted");
    }),
    a.forEach((r) => {
      r.classList.add("highlight");
    });
}
function N() {
  var r, e;
  const { sectionDescription: i, partnerLogoImage: o, partnerLink: a } = w();
  (i.innerHTML = n.currentSection.description),
    o.classList.remove("hidden"),
    (o.src = x[n == null ? void 0 : n.currentSection.logo]),
    a.classList.add("labeled"),
    a.setAttribute(
      "href",
      (r = n == null ? void 0 : n.currentSection) == null ? void 0 : r.url
    ),
    (a.innerHTML =
      (e = n == null ? void 0 : n.currentSection) == null ? void 0 : e.url);
}
function E() {
  const { dots: i } = w();
  i.forEach((o) => {
    o.classList.remove("muted"), o.classList.remove("enabled_muted");
    const { mapIndex: a, region: r } = y(o);
    r === n.currentRegion &&
      a !== n.mapIndex &&
      (o.classList.contains("enabled")
        ? o.classList.add("enabled_muted")
        : o.classList.add("muted")),
      n.mapIndex === a && o.classList.remove("enabled_muted");
  });
}
function F() {
  const {
    sectionDescription: i,
    partnerLogoImage: o,
    partnerLink: a,
    regionTooltip: r,
  } = w();
  (i.innerHTML = ""),
    (o.src = ""),
    o.classList.add("hidden"),
    (r.innerHTML = ""),
    (a.innerHTML = ""),
    a.classList.remove("labeled");
}
function q(i) {
  k(document.querySelector("#map"), { xCount: 44, yCount: 54, mapStr: O }),
    i.addEventListener("click", D),
    i.addEventListener("mouseleave", (o) => H()),
    i.addEventListener("mousemove", (o) => $(P(o), I)),
    window.addEventListener("load", () => {
      n.isMobile = window.innerWidth < 1200;
    });
}
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
            <div id="region-tooltip"></div>
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
                class="section-partner-logo hidden"
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
q(document.querySelector("#map"));
R();
