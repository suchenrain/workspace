export class DefaultSmartImage {
  static dummy: string = '';
  static aspectRatio: number = (9 / 16) * 100;
}
export enum DummyLoadMode {
  // only render when it in sight
  InSight = 0,

  // load dummy anyway
  Anyway = 1
}
