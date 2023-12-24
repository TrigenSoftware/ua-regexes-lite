/**
 * @typedef {import('./index.d').UserAgentRegex} UserAgentRegex
 */

/** @type {UserAgentRegex[]} */
export const regexes = [
  {
    regex: /IE (\d+)\.(\d+)/,
    family: 'ie',
    maxVersion: [
      7,
      Infinity,
      Infinity
    ]
  },
  /**
   * IE can be in Compatability Mode (IE 7.0)
   * so we need to check Trident version
   */
  {
    regex: /Trident\/4\.0/,
    family: 'ie',
    version: [
      8,
      0,
      0
    ]
  },
  {
    regex: /Trident\/5\.0/,
    family: 'ie',
    version: [
      9,
      0,
      0
    ]
  },
  {
    regex: /Trident\/6\.0/,
    family: 'ie',
    version: [
      10,
      0,
      0
    ]
  },
  {
    regex: /Trident\/[78]\.0/,
    family: 'ie',
    version: [
      11,
      0,
      0
    ]
  },
  {
    regex: /Edge?\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'edge'
  },
  {
    regex: /Firefox\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'firefox'
  },
  {
    regex: /Chrom(ium|e)\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'chrome'
  },
  /**
   * Ignore Edge with EdgeHTML engine.
   */
  {
    regex: /Chrom(ium|e)\/(\d+)\.(\d+)(\.(\d+)|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))/,
    family: 'chrome',
    maxVersion: [
      70,
      Infinity,
      Infinity
    ]
  },
  /**
   * Safari on iPad have desktop-like useragent
   * Some versions contains letter subversions
   * GNOME Web (X11) is based on WebKit and should be detected as Safari
   */
  {
    regex: /(Maci|X11).+ Version\/(\d+)\.(\d+)([.,](\d+)|)( \(\w+\)|)( Mobile\/\w+|) Safari\//,
    family: 'safari'
  },
  /**
   * Presto Opera
   */
  {
    regex: /Opera\/9\.80.+Version\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'opera',
    maxVersion: [
      12,
      15,
      0
    ]
  },
  /**
   * Chromium based Opera
   */
  {
    regex: /Chrome.+OPR\/(\d+)\.(\d+)\.(\d+)/,
    family: 'opera',
    minVersion: [
      15,
      0,
      0
    ]
  },
  {
    regex: /(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(\d+)[_.](\d+)([_.](\d+)|)/,
    family: 'ios_saf'
  },
  /**
   * Ignore IE Mobile 11
   */
  {
    regex: /[^e] (CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(\d+)[_.](\d+)([_.](\d+)|)/,
    family: 'ios_saf',
    version: [
      7,
      0,
      3
    ]
  },
  {
    regex: /Opera Mini/,
    family: 'op_mini'
  },
  {
    regex: /Android Donut/,
    family: 'android',
    version: [
      1,
      2,
      0
    ]
  },
  {
    regex: /Android Eclair/,
    family: 'android',
    version: [
      2,
      1,
      0
    ]
  },
  {
    regex: /Android Froyo/,
    family: 'android',
    version: [
      2,
      2,
      0
    ]
  },
  {
    regex: /Android Gingerbread/,
    family: 'android',
    version: [
      2,
      3,
      0
    ]
  },
  {
    regex: /Android Honeycomb/,
    family: 'android',
    version: [
      3,
      0,
      0
    ]
  },
  {
    regex: /Android:?[ /-](\d+)(\.(\d+)|)(\.(\d+)|)/,
    family: 'android'
  },
  /**
   * Ignore IE Mobile 11
   */
  {
    regex: /Android:?[ /-](\d+)(\.(\d+)|)(\.(\d+)|);(?! ARM; Trident)/,
    family: 'android',
    version: [
      4,
      0,
      0
    ]
  },
  {
    regex: /PlayBook.+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/,
    family: 'bb'
  },
  {
    regex: /(Black[bB]erry|BB10).+Version\/(\d+)\.(\d+)\.(\d+)/,
    family: 'bb'
  },
  /**
   * Presto Opera Mobile
   */
  {
    regex: /Opera\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/,
    family: 'op_mob',
    maxVersion: [
      12,
      16,
      0
    ]
  },
  /**
   * Chromium based Opera Mobile
   */
  {
    regex: /Mobile Safari.+OPR\/(\d+)\.(\d+)\.(\d+)/,
    family: 'op_mob',
    minVersion: [
      14,
      0,
      0
    ]
  },
  {
    regex: /Android.+Firefox\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'and_ff'
  },
  {
    regex: /Android.+Chrom(ium|e)\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'and_chr'
  },
  {
    regex: /IEMobile[ /](\d+)\.(\d+)/,
    family: 'ie_mob'
  },
  {
    regex: /Android.+(UC? ?Browser|UCWEB|U3)[ /]?(\d+)\.(\d+)\.(\d+)/,
    family: 'and_uc'
  },
  {
    regex: /SamsungBrowser\/(\d+)\.(\d+)/,
    family: 'samsung'
  },
  {
    regex: /Android.+MQQBrowser\/(\d+)(\.(\d+)|)(\.(\d+)|)/,
    family: 'and_qq'
  },
  {
    regex: /baidubrowser[/\s](\d+)(\.(\d+)|)(\.(\d+)|)/,
    family: 'baidu'
  },
  {
    regex: /K[Aa][Ii]OS\/(\d+)\.(\d+)(\.(\d+)|)/,
    family: 'kaios'
  }
]
