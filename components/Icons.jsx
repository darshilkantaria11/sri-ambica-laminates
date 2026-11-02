// Lightweight inline icon set (stroke icons, 24x24)

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

function make(children, extra = {}) {
  return function Icon({ className = "h-5 w-5", ...props }) {
    return (
      <svg {...base} {...extra} className={className} {...props}>
        {children}
      </svg>
    );
  };
}

export const ArrowRight = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowUpRight = make(<path d="M7 17L17 7M8 7h9v9" />);
export const Close = make(<path d="M6 6l12 12M18 6L6 18" />);
export const Menu = make(<path d="M4 8h16M4 16h16" />);
export const Plus = make(<path d="M12 5v14M5 12h14" />);
export const Check = make(<path d="M20 6L9 17l-5-5" />);
export const Sparkle = make(
  <path d="M12 3l2 6.2L20.5 12 14 14.8 12 21l-2-6.2L3.5 12 10 9.2 12 3z" />
);

export const Phone = make(
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.66 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.23a2 2 0 0 1 2.11-.45c.83.32 1.7.54 2.6.66A2 2 0 0 1 22 16.92z" />
);
export const Mail = make(
  <>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="M3 7l9 6.5L21 7" />
  </>
);
export const Pin = make(
  <>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </>
);
export const Clock = make(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 6.5V12l3.5 2" />
  </>
);
export const Download = make(
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
);
export const Book = make(
  <>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </>
);
export const Whatsapp = make(
  <>
    <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.35L3 21z" />
    <path d="M9 8.8c-.3 2.6 2.7 5.8 5.9 6.2l1.3-1.5-2-1-1 .8a4.3 4.3 0 0 1-1.7-1.7l.8-1-1-2L9 8.8z" />
  </>
);
export const Layers = make(
  <>
    <path d="M12 2.5L2.5 7.5 12 12.5l9.5-5L12 2.5z" />
    <path d="M2.5 12l9.5 5 9.5-5" />
    <path d="M2.5 16.5l9.5 5 9.5-5" />
  </>
);
export const Shield = make(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </>
);
export const Leaf = make(
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </>
);
export const Bolt = make(<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />);
export const Truck = make(
  <>
    <path d="M1.5 4h14v12h-14z" />
    <path d="M15.5 8.5h4l3 3.5V16h-7V8.5z" />
    <circle cx="6" cy="18.5" r="2.2" />
    <circle cx="18.5" cy="18.5" r="2.2" />
  </>
);
export const Tag = make(
  <>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.2" />
  </>
);
export const Heart = make(
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
);
export const Chat = make(<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2z" />);

export const Star = make(
  <path
    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    fill="currentColor"
    stroke="none"
  />
);
export const Quote = make(
  <path
    d="M9.4 5.5C6.2 6.6 4 9.5 4 13.5V19h6.5v-6.5H7.2c.1-2 1.1-3.4 3-4.1L9.4 5.5zm10 0c-3.2 1.1-5.4 4-5.4 8V19h6.5v-6.5h-3.3c.1-2 1.1-3.4 3-4.1l-.8-2.9z"
    fill="currentColor"
    stroke="none"
  />
);

export const iconMap = {
  truck: Truck,
  layers: Layers,
  chat: Chat,
  bolt: Bolt,
  shield: Shield,
  tag: Tag,
  handshake: Heart,
  heart: Heart,
  leaf: Leaf,
  sparkle: Sparkle,
};
