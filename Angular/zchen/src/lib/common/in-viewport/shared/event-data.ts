export const eventWindowResize = "resize";
export const eventWindowScroll = "scroll";

export const eventScroll = 'scroll';

export const inViewportClass = "class.zc-viewport-in";
export const outViewportClass = "class.zc-viewport-out";

export const eventPathScroll = [
  "$event.target.defaultView.innerHeight",
  "$event.target.defaultView.innerWidth",
  "$event.target.defaultView.scrollY",
  "$event.target.defaultView.scrollX"
];

export const eventPathResize = [
  "$event.target.innerHeight",
  "$event.target.innerWidth",
  "$event.target.scrollY",
  "$event.target.scrollX"
];
