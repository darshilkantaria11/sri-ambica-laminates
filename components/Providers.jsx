"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";

// Lets page content wait for the preloader curtain to lift before animating in.
const IntroContext = createContext({ ready: true, setReady: () => {} });

export const useIntro = () => useContext(IntroContext);

export default function Providers({ children }) {
  const [ready, setReady] = useState(false);
  const value = useMemo(() => ({ ready, setReady }), [ready]);

  return (
    // reducedMotion="user": people who prefer reduced motion get fades instead of movement
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
    </MotionConfig>
  );
}
