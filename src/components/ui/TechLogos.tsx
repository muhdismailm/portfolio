import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function FlutterLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Flutter logo">
      <path d="M14.314 0L2.3 12.014l3.7 3.7L21.714 0h-7.4z" fill="#02569B" />
      <path d="M14.214 10.986L8.4 16.8l5.814 5.814h7.5L14.214 10.986z" fill="#0175C2" />
      <path d="M8.4 16.8l3.7-3.7 3.7 3.7-3.7 3.7-3.7-3.7z" fill="#29B6F6" />
    </svg>
  );
}

export function DartLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Dart logo">
      <path d="M4.1 4.1L12 12l-4.7 4.7L3 12.4V4.1z" fill="#0081C6" />
      <path d="M12 12l7.9 7.9H8.5L3.8 15.2 12 12z" fill="#00B4AB" />
      <path d="M19.9 4.1L12 12l4.7 4.7L21 12.4V4.1z" fill="#00A8E8" />
      <path d="M12 1.5L4.1 4.1l7.9 7.9 7.9-7.9L12 1.5z" fill="#0175C2" />
    </svg>
  );
}

export function FirebaseLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Firebase logo">
      <path d="M3.89 15.672L6.255.986A.706.706 0 0 1 7.558.73l3.158 5.908L3.89 15.672z" fill="#FFA000" />
      <path d="M13.693 7.82l2.366-4.52a.706.706 0 0 1 1.28.057l3.858 12.316L13.693 7.82z" fill="#F57C00" />
      <path d="M3.89 15.672l8.038 4.52a1.411 1.411 0 0 0 1.368 0l7.896-4.52-5.7-10.82-1.799 3.468-4.135-7.734L3.89 15.672z" fill="#FFCA28" />
    </svg>
  );
}

export function PythonLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Python logo">
      <path
        fill="#3776AB"
        d="M11.914 0C5.82 0 6.185 2.645 6.185 2.645l.007 2.738h5.83v.823H3.844S0 5.766 0 11.874c0 6.107 3.35 5.892 3.35 5.892h2.002v-2.8s-.11-3.35 3.292-3.35h5.666s3.18.053 3.18-3.128V3.128S17.872 0 11.914 0zm-2.48 1.53a1.147 1.147 0 1 1 0 2.294 1.147 1.147 0 0 1 0-2.294z"
      />
      <path
        fill="#FFD43B"
        d="M12.086 24c6.094 0 5.729-2.645 5.729-2.645l-.007-2.738h-5.83v-.823h8.178s3.844.44 3.844-5.668c0-6.108-3.35-5.892-3.35-5.892h-2.002v2.8s.11 3.35-3.292 3.35H8.692s-3.18-.053-3.18 3.128v5.39s-.38 3.128 5.574 3.128zm2.48-1.53a1.147 1.147 0 1 1 0-2.294 1.147 1.147 0 0 1 0 2.294z"
      />
    </svg>
  );
}

export function DjangoLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Django logo">
      <rect width="24" height="24" rx="4" fill="#092E20" />
      <path
        fill="#44B78B"
        d="M13.2 5.5h2.6v9.2c0 2.6-1.3 3.8-3.7 3.8-1.1 0-2.1-.2-2.7-.6l.6-2.1c.5.3 1.1.5 1.7.5 1.2 0 1.5-.7 1.5-1.9V5.5zm-4.7 5.6v2.1c-.5-.2-1-.3-1.6-.3-1.3 0-2 .7-2 1.9 0 1.2.7 1.9 1.9 1.9.6 0 1.1-.1 1.7-.3v2.2c-.7.3-1.6.4-2.5.4-2.4 0-3.9-1.5-3.9-4.1 0-2.6 1.6-4.2 4-4.2 1 0 1.8.2 2.4.4z"
      />
    </svg>
  );
}

export function FlaskLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Flask logo">
      <path
        fill="#FFFFFF"
        d="M19.345 17.587L14.73 8.358V2.625h1.229a.625.625 0 0 0 0-1.25H8.041a.625.625 0 0 0 0 1.25h1.23v5.733L4.655 17.587A4.27 4.27 0 0 0 4 19.863C4 22.146 5.854 24 8.137 24h7.726A4.137 4.137 0 0 0 20 19.863a4.27 4.27 0 0 0-.655-2.276zM8.137 22.75A2.887 2.887 0 0 1 5.25 19.863c0-.665.215-1.296.61-1.808l4.41-8.82V2.625h3.46v6.61l4.41 8.82a3.003 3.003 0 0 1 .61 1.808 2.887 2.887 0 0 1-2.887 2.887H8.137z"
      />
      <path
        fill="#38BDF8"
        d="M6.8 17.5l2.2-4.4h6l2.2 4.4a2 2 0 0 1-1.8 2.9H8.6a2 2 0 0 1-1.8-2.9z"
        opacity="0.85"
      />
    </svg>
  );
}

export function RestApiLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="REST API logo">
      <rect x="1" y="4" width="22" height="16" rx="4" fill="#064E3B" stroke="#10B981" strokeWidth="1.2" />
      <text x="12" y="15" fill="#34D399" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
        REST
      </text>
    </svg>
  );
}

export function FastApiLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="FastAPI logo">
      <circle cx="12" cy="12" r="11" fill="#059669" />
      <path d="M12.5 3L6 14h5.5L10.5 21 18 10h-5.5L12.5 3z" fill="#FFFFFF" />
    </svg>
  );
}

export function ReactLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" aria-label="React logo">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NodejsLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Node.js logo">
      <path
        fill="#5FA04E"
        d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072a.312.312 0 0 0-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zM19.099 13.993c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742a.258.258 0 0 0-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 3.328 0 4.926-1.097 4.926-3.014z"
      />
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="JavaScript logo">
      <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
      <path
        fill="#000000"
        d="M6.4 18.5c-.8 0-1.5-.2-2-.5l.4-1.8c.4.3 1 .5 1.6.5.9 0 1.4-.4 1.4-1.4V8.5h2.1v6.8c0 2-1.2 3.2-3.5 3.2zm6.8 0c-1.1 0-2-.3-2.7-.7l.5-1.8c.6.4 1.4.7 2.2.7 1.1 0 1.8-.5 1.8-1.3 0-.8-.7-1.2-1.8-1.7l-.6-.3c-1.6-.7-2.5-1.6-2.5-3.1 0-1.9 1.5-3.2 3.7-3.2 1.1 0 2 .2 2.6.6l-.5 1.8c-.5-.3-1.3-.6-2.1-.6-1 0-1.6.5-1.6 1.2 0 .7.6 1.1 1.6 1.5l.6.3c1.8.8 2.7 1.7 2.7 3.3 0 2.1-1.6 3.3-3.9 3.3z"
      />
    </svg>
  );
}

export function FigmaLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Figma logo">
      <path d="M5.5 0h6.5v8H5.5a4 4 0 0 1 0-8z" fill="#F24E1E" />
      <path d="M12 0h6.5a4 4 0 1 1 0 8H12V0z" fill="#FF7262" />
      <path d="M5.5 8h6.5v8H5.5a4 4 0 0 1 0-8z" fill="#A259FF" />
      <path d="M12 8h6.5a4 4 0 1 1 0 8H12V8z" fill="#1ABCFE" />
      <path d="M5.5 16h6.5v4a4 4 0 1 1-6.5-4z" fill="#0ACF83" />
    </svg>
  );
}

export function HtmlLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="HTML5 logo">
      <path d="M2.5 1.5h19l-1.7 19.3L12 23.5l-7.8-2.7L2.5 1.5z" fill="#E34F26" />
      <path d="M12 3.3v18l6.3-2.2 1.4-15.8H12z" fill="#EF652A" />
      <path d="M12 7.7H7.7l.3 3.5h4V7.7zm0 6.4h-2.1l-.2-1.8H7.9l.4 4.3 3.7 1v-3.5z" fill="#ECECEC" />
      <path d="M12 7.7v3.5h3.7l-.3 3.8-3.4.9v3.6l6.3-1.7.9-10.1H12z" fill="#FFFFFF" />
    </svg>
  );
}

export function CssLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="CSS3 logo">
      <path d="M2.5 1.5h19l-1.7 19.3L12 23.5l-7.8-2.7L2.5 1.5z" fill="#1572B6" />
      <path d="M12 3.3v18l6.3-2.2 1.4-15.8H12z" fill="#33A9DC" />
      <path d="M12 7.7H7.7l.3 3.5h4V7.7zm0 6.4h-2.1l-.2-1.8H7.9l.4 4.3 3.7 1v-3.5z" fill="#ECECEC" />
      <path d="M12 7.7v3.5h3.7l-.3 3.8-3.4.9v3.6l6.3-1.7.9-10.1H12z" fill="#FFFFFF" />
    </svg>
  );
}

export function NextjsLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Next.js logo">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1" />
      <path d="M7 6h2.2l7.8 11.2V6H19v12h-2.2L9 6.8V18H7V6z" fill="#FFFFFF" />
    </svg>
  );
}

export function TailwindLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Tailwind CSS logo">
      <path
        fill="#38BDF8"
        d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.3 1.3 2.8 2.8 6.3 2.8 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17 7.7 15.5 6 12 6zm-7 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.3 1.3 2.8 2.8 6.3 2.8 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C10 13.7 8.5 12 5 12z"
      />
    </svg>
  );
}

export function SqlLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="SQL Database logo">
      <path
        d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c4.42 0 8 .9 8 1.5S16.42 7 12 7s-8-.9-8-1.5S7.58 4 12 4zm8 15c0 .6-3.58 1.5-8 1.5s-8-.9-8-1.5v-2.13c1.9 1.05 4.81 1.63 8 1.63s6.1-.58 8-1.63V19zm0-4.5c0 .6-3.58 1.5-8 1.5s-8-.9-8-1.5v-2.13c1.9 1.05 4.81 1.63 8 1.63s6.1-.58 8-1.63v2.13zm0-4.5c0 .6-3.58 1.5-8 1.5s-8-.9-8-1.5V7.87c1.9 1.05 4.81 1.63 8 1.63s6.1-.58 8-1.63V10z"
        fill="#00758F"
      />
    </svg>
  );
}

export function PostgreSqlLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="PostgreSQL logo">
      <path
        fill="#4169E1"
        d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
      />
    </svg>
  );
}

export function MongoDbLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="MongoDB logo">
      <path
        fill="#47A248"
        d="M17.193 9.555c-1.264-4.89-4.297-7.77-4.88-8.307a.539.539 0 0 0-.626 0c-.583.537-3.616 3.417-4.88 8.307-1.42 5.504.606 9.877 4.88 13.91.134.127.32.198.513.198.194 0 .38-.071.514-.198 4.273-4.033 6.3-8.406 4.879-13.91zm-5.193 12.38V2.19c.47.46 3.037 3.056 4.093 7.153 1.192 4.622-.52 8.324-4.093 12.592z"
      />
    </svg>
  );
}

export function VsCodeLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="VS Code logo">
      <path d="M17.5 1.7L9.2 8.4l-4.5-3.5L2 6.3v11.4l2.7 1.4 4.5-3.5 8.3 6.7 4.5-2.1V3.8l-4.5-2.1z" fill="#0066B8" />
      <path d="M17.5 1.7L9.2 8.4l-4.5-3.5L2 6.3l2.7 1.4 4.5-3.5 8.3-2.5z" fill="#007ACC" opacity="0.8" />
      <path d="M17.5 1.7v20.6l4.5-2.1V3.8l-4.5-2.1z" fill="#1F9CF0" />
      <path d="M9.2 8.4l8.3 3.6-8.3 3.6-4.5-3.5 4.5-3.7z" fill="#0066B8" />
    </svg>
  );
}

export function GitLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Git logo">
      <path
        fill="#F05032"
        d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l2.833 2.833a1.78 1.78 0 0 1 2.25 2.261l2.723 2.723a1.776 1.776 0 0 1 1.716 2.274l-2.737-2.737a1.776 1.776 0 0 1-2.274-1.716L10.6 5.5l-2.427 2.427a1.78 1.78 0 0 1-.368 2.05l-2.723 2.723a1.78 1.78 0 0 1-2.261 2.25L.454 12.583a1.5 1.5 0 0 0 0 2.126l10.48 10.48a1.5 1.5 0 0 0 2.125 0l10.487-10.48a1.5 1.5 0 0 0 0-2.126z"
      />
      <circle cx="10.5" cy="5.5" r="1.5" fill="#FFFFFF" />
      <circle cx="17.5" cy="12.5" r="1.5" fill="#FFFFFF" />
      <circle cx="5.5" cy="17.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function PostmanLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Postman logo">
      <circle cx="12" cy="12" r="11" fill="#FF6C37" />
      <path
        fill="#FFFFFF"
        d="M12.9 6.8c-.3.4-.6.8-.7 1.3l-2.7 1.1-1.3-.8c-.3-.2-.7-.1-.9.2-.2.3-.1.7.2.9l1.4.9-.3 2.2-2.1.9c-.3.1-.5.5-.4.8.1.3.5.5.8.4l2.3-1 .6 2.1c.1.3.4.5.8.4.3-.1.5-.4.4-.8l-.7-2.3 2.4-1c.5-.2.8-.7.8-1.2 0-.2-.1-.5-.2-.7l.9-1.2c.2-.3.1-.7-.2-.9-.3-.2-.7-.1-.9.2l-.6.7zm-1.8 3.5l1.8-.7c.2 0 .4.2.4.4s-.2.4-.4.4l-1.8.7-.2-.8h.2z"
      />
    </svg>
  );
}

export function VercelLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Vercel logo">
      <path fill="#FFFFFF" d="M12 1L24 22H0L12 1z" />
    </svg>
  );
}

export function DockerLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Docker logo">
      <path
        fill="#2496ED"
        d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.145a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm5.884 2.714h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.145a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H2.216a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm21.808 2.982c-.35-.23-1.495-.834-3.188-.834-.725 0-1.461.122-2.19.364-.298-1.745-1.506-2.512-1.506-2.512h-.372l-.17.375c-.567 1.25-.438 2.65-.357 3.32-.477.26-.98.487-1.505.674v.004H1.396a1.396 1.396 0 0 0-1.396 1.396c0 1.954.595 3.963 1.77 5.68C3.125 24.364 5.378 25 8.012 25c7.05 0 12.18-4.043 14.195-10.457.808-.078 1.487-.417 1.777-.662l.016-.015z"
      />
    </svg>
  );
}

export function AndroidStudioLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="Android Studio logo">
      <path
        fill="#3DDC84"
        d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0003s.4482-1.0003.9993-1.0003c.5511 0 .9993.4486.9993 1.0003s-.4482 1.0003-.9993 1.0003m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0003s.4482-1.0003.9993-1.0003c.5511 0 .9993.4486.9993 1.0003s-.4482 1.0003-.9993 1.0003m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.0805 12 8.0805c-1.8533 0-3.5902.3321-5.1368.8692L4.8409 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"
      />
    </svg>
  );
}

/**
 * Helper that resolves an exact brand SVG logo based on tech name
 */
export function TechLogo({ name, className = "w-4 h-4 shrink-0" }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes("flutter")) return <FlutterLogo className={className} />;
  if (normalized.includes("dart")) return <DartLogo className={className} />;
  if (normalized.includes("firebase")) return <FirebaseLogo className={className} />;
  if (normalized.includes("android")) return <AndroidStudioLogo className={className} />;
  if (normalized.includes("python")) return <PythonLogo className={className} />;
  if (normalized.includes("django")) return <DjangoLogo className={className} />;
  if (normalized.includes("flask")) return <FlaskLogo className={className} />;
  if (normalized.includes("fastapi")) return <FastApiLogo className={className} />;
  if (normalized.includes("rest") || normalized.includes("api")) return <RestApiLogo className={className} />;
  if (normalized.includes("react")) return <ReactLogo className={className} />;
  if (normalized.includes("javascript") || normalized === "js") return <JavaScriptLogo className={className} />;
  if (normalized.includes("html")) return <HtmlLogo className={className} />;
  if (normalized.includes("css")) return <CssLogo className={className} />;
  if (normalized.includes("next")) return <NextjsLogo className={className} />;
  if (normalized.includes("tailwind")) return <TailwindLogo className={className} />;
  if (normalized.includes("postgres")) return <PostgreSqlLogo className={className} />;
  if (normalized.includes("sql") || normalized.includes("database")) return <SqlLogo className={className} />;
  if (normalized.includes("mongo")) return <MongoDbLogo className={className} />;
  if (normalized.includes("node")) return <NodejsLogo className={className} />;
  if (normalized.includes("figma")) return <FigmaLogo className={className} />;
  if (normalized.includes("vscode") || normalized.includes("vs code")) return <VsCodeLogo className={className} />;
  if (normalized.includes("git")) return <GitLogo className={className} />;
  if (normalized.includes("postman")) return <PostmanLogo className={className} />;
  if (normalized.includes("vercel")) return <VercelLogo className={className} />;
  if (normalized.includes("docker")) return <DockerLogo className={className} />;

  // Default fallback
  return <VsCodeLogo className={className} />;
}
