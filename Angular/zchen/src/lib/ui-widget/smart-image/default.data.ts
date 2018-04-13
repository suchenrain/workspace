export class DefaultSmartImage {
  /**
   * default dummy
   *
   * @static
   * @type {string}
   * @memberof DefaultSmartImage
   */
  static dummy: string = "";
  /**
   * default aspect ratio
   *
   * @static
   * @type {number}
   * @memberof DefaultSmartImage
   */
  static aspectRatio: number = 9 / 16 * 100;
  /**
   * default image data when load failed
   *
   * @static
   * @type {string}
   * @memberof DefaultSmartImage
   */
  static fallback: string = "http://via.placeholder.com/10x10?";
}
