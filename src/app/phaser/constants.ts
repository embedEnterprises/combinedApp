export const ANALOG = 0;
export const DIGITAL = 1;

export const gearsConf = {
  x: 0.9,
  y: 0.05,
  w: 0.05,
};

export const breakConf = {
  x: 0.05,
  y: 0.7,
  w: 0.15,
  zx: 0.055,
  zy: 0.5,
  zw: 0.05,
  zh: 0.4,
  mode: DIGITAL,
};

export const gasConf = {
  x: 0.14,
  y: 0.7,
  w: 0.15,
  zx: 0.155,
  zy: 0.5,
  zw: 0.05,
  zh: 0.4,
  mode: ANALOG,
};

export const steerConf = {
  x: 0.85,
  y: 0.7,
  w: 0.25,
  maxRotation: 220,
};

export const hornConf = {
  x: steerConf.x,
  y: steerConf.y,
  w: 0.08,
};

export const ledKnobConf = {
  x: 0.07,
  y: 0.085,
  w: 0.07,
};

export const speedometerConf = {
  x: 0.495,
  y: 0.72,
  w: 0.32,
  maxSpeed: 200,
};

export const batteryIndicatorConf = { x: 0.4, y: 0.025, w: 0.04 };

export const gearShifterConf = { x: 0.92, y: 0.0, w: 0.08, isVisible: false };
