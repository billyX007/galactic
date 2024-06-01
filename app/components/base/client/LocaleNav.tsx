// "use client";

// import { useEffect, useState } from "react";

// interface region {
//   [key: string]: string;
// }

// const regions: region[] = [
//   {
//     label: "UK & Europe",
//     value: "",
//     id: "uk-and-europe",
//   },
//   {
//     label: "USA",
//     value: "us",
//     id: "us",
//   },
//   {
//     label: "GCC",
//     value: "gcc",
//     id: "gcc",
//   },
//   {
//     label: "Asia-Pacific",
//     value: "apac",
//     id: "apac",
//   },
// ];

// export function LocaleNav() {
//   const [selectedRegion, setSelectedRegion] = useState<region>({});

//   useEffect(() => {
//     const reg =
//       regions.find((region) => window.location.href.includes(region.value)) ??
//       regions[0];
//     setSelectedRegion(reg);
//   }, []);

//   return (
//     <nav className="header__locale" aria-label="Website locale">
//       <button
//         id="locale-toggle"
//         className="header__locale-button"
//         data-region="apac"
//         aria-label="Change your locale"
//       >
//         {selectedRegion.label}
//       </button>
//       <div className="header__locale-options">
//         <ul data-barba-prevent="all">
//           {regions.map((region) => (
//             <li key={region.value}>
//               <button
//                 id={`locale-link-${region.id}`}
//                 data-url={`https://www.the-boundary.com/${region.value}`}
//                 className={`header__locale-option ${
//                   selectedRegion.value === region.value
//                     ? "header__locale-option--selected"
//                     : ""
//                 }`}
//               >
//                 {region.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

export function LocaleNav() {
  return (
    <nav className="header__locale" aria-label="Website locale">
      <button
        id="locale-toggle"
        className="header__locale-button"
        data-region="uk-and-europe"
        aria-label="Change your locale"
      >
        UK &amp; Europe
      </button>
      <div className="header__locale-options">
        <ul data-barba-prevent="all">
          <li>
            <button
              id="locale-link-uk-and-europe"
              data-url="https://www.the-boundary.com/"
              className="header__locale-option header__locale-option--selected"
            >
              UK &amp; Europe
            </button>
          </li>
          <li>
            <button
              id="locale-link-us"
              data-url="https://www.the-boundary.com/us/"
              className="header__locale-option"
            >
              USA
            </button>
          </li>
          <li>
            <button
              id="locale-link-gcc"
              data-url="https://www.the-boundary.com/gcc/"
              className="header__locale-option"
            >
              GCC
            </button>
          </li>
          <li>
            <button
              id="locale-link-apac"
              data-url="https://www.the-boundary.com/apac/"
              className="header__locale-option"
            >
              Asia-Pacific
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}