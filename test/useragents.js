/**
 * @typedef {import('../index.d').UserAgentRegex} UserAgentRegex
 */

export const useragents = [
  /**
   * IE 6
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)',
    regex: ['ie@<=7']
  },
  /**
   * IE 7
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)',
    regex: ['ie@<=7']
  },
  /**
   * IE 8
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)',
    regex: ['ie@8.0.0', 'ie@<=7']
  },
  /**
   * IE 8 Compatability Mode
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)',
    regex: ['ie@8.0.0', 'ie@<=7']
  },
  /**
   * IE 9
   */
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
    regex: ['ie@9.0.0', 'ie@<=7']
  },
  /**
   * IE 9 Compatability Mode
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)',
    regex: ['ie@9.0.0', 'ie@<=7']
  },
  /**
   * IE 10
   */
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    regex: ['ie@10.0.0', 'ie@<=7']
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)',
    regex: ['ie@10.0.0', 'ie@<=7']
  },
  /**
   * IE 10 Compatability Mode
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)',
    regex: ['ie@10.0.0', 'ie@<=7']
  },
  /**
   * IE 11
   */
  {
    ua: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
    regex: ['ie@11.0.0']
  },
  /**
   * IE 11 Compatability Mode
   */
  {
    ua: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)',
    regex: ['ie@11.0.0', 'ie@<=7']
  },
  /**
   * Edge on EdgeHTML
   */
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
    regex: ['edge', 'chrome']
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363',
    regex: ['edge', 'chrome']
  },
  /**
   * Edge on Chromium
   */
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36 Edg/80.0.361.62',
    regex: [
      'edge',
      'chrome',
      'chrome@<=70'
    ]
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.25',
    regex: [
      'edge',
      'chrome',
      'chrome@<=70'
    ]
  },
  /**
   * Firefox Desktop
   */
  {
    ua: 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18 (.NET CLR 3.5.30729)',
    regex: ['firefox']
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
    regex: ['firefox']
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:6.0.1) Gecko/20100101 Firefox/6.0.1',
    regex: ['firefox']
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 5.2; rv:10.0) Gecko/20100101 Firefox/10.0',
    regex: ['firefox']
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 5.2; rv:42.0) Gecko/20100101 Firefox/42.0',
    regex: ['firefox']
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0',
    regex: ['firefox']
  },
  /**
   * Chrome Desktop
   */
  {
    ua: 'Mozilla/5.0 (Windows NT 5.2) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2',
    regex: ['chrome', 'chrome@<=70']
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36',
    regex: ['chrome', 'chrome@<=70']
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
    regex: ['chrome', 'chrome@<=70']
  },
  /**
   * Safari Desktop
   */
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8',
    regex: ['safari']
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15',
    regex: ['safari']
  },
  /**
   * Safari iPad Desktop-like
   */
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15',
    regex: ['safari']
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15',
    regex: ['safari']
  },
  {
    // Weird case with comma
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Safari/605.1.15',
    regex: ['safari']
  },
  {
    // iPad 7th Gen have "Mobile/"
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Mobile/15E148 Safari/604.1',
    regex: ['safari']
  },
  /**
   * Opera Desktop on Presto
   */
  {
    ua: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11',
    regex: ['opera@<=12.15.0']
  },
  {
    ua: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8) Presto/2.12.388 Version/12.15',
    regex: ['opera@<=12.15.0']
  },
  /**
   * Opera Desktop on Chromium
   */
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36 OPR/15.0.1147.153',
    regex: [
      'chrome',
      'chrome@<=70',
      'opera@>=15.0.0'
    ]
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 OPR/91.0.4516.16',
    regex: [
      'chrome',
      'chrome@<=70',
      'opera@>=15.0.0'
    ]
  },
  /**
   * iOS iPhone Safari
   */
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A405 Safari/601.1',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_6 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0 Mobile/15D100 Safari/604.1',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  /**
   * iOS iPhone Other Browsers
   */
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS /92.0.4515.90 Mobile/15E148 Safari/604.1',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebkit/601.1.46 (KHTML, like Gecko) FxiOS/7.22672 Mobile/13A405 Safari/601.1.46',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X; en-US) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/13A405 UCBrowser/10.4.0.693 Mobile',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  /**
   * iOS iPad Safari
   */
  {
    ua: 'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  {
    ua: 'Mozilla/5.0 (iPad; CPU OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  /**
   * iOS iPad Other Browsers
   */
  {
    ua: 'Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/92.0.4515.90 Mobile/15E148 Safari/604.1',
    regex: ['ios_saf', 'ios_saf@7.0.3']
  },
  /**
   * Opera Mini
   */
  {
    ua: 'Opera/9.80 (Android; Opera Mini/12.0.1987/37.7327; U; pl) Presto/2.12.423 Version/12.16',
    regex: ['opera@<=12.15.0', 'op_mini']
  },
  /**
   * Android
   */
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    regex: ['android', 'android@4.0.0']
  },
  /**
   * Opera Mobile
   */
  {
    ua: 'Opera/9.80 (S60; SymbOS; Opera Mobi/SYB-1107071606; U; en) Presto/2.8.149 Version/11.10',
    regex: ['opera@<=12.15.0', 'op_mob@<=12.16.0']
  },
  {
    ua: 'Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02',
    regex: [
      'android',
      'android@4.0.0',
      'op_mob@<=12.16.0'
    ]
  },
  {
    ua: 'Mozilla/5.0 (Linux; Android 12; Pixel 3a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/ 537.36 OPR/71.3.3718.67322',
    regex: [
      'chrome',
      'chrome@<=70',
      'opera@>=15.0.0',
      'android',
      'android@4.0.0',
      'op_mob@>=14.0.0',
      'and_chr'
    ]
  },
  /**
   * Android Firefox
   */
  {
    ua: 'Mozilla/5.0 (Android 12; Mobile; rv:102.0) Gecko/102.0 Firefox/102.0',
    regex: [
      'firefox',
      'android',
      'android@4.0.0',
      'and_ff'
    ]
  },
  /**
   * Android Chrome
   */
  {
    ua: 'Mozilla/5.0 (Linux; Android 12; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36',
    regex: [
      'chrome',
      'chrome@<=70',
      'android',
      'android@4.0.0',
      'and_chr'
    ]
  },
  /**
   * IE Mobile
   */
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 710)',
    regex: [
      'ie@9.0.0',
      'ie@<=7',
      'ie_mob'
    ]
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
    regex: [
      'ie@10.0.0',
      'ie@<=7',
      'ie_mob'
    ]
  },
  {
    ua: 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537',
    regex: [
      'ie@11.0.0',
      'ios_saf',
      'android',
      'ie_mob'
    ]
  },
  /**
   * Android UC Browser
   */
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 9; en-US; SM-G973F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.10.2.1164 Mobile Safari/537.36',
    regex: [
      'chrome',
      'chrome@<=70',
      'android',
      'android@4.0.0',
      'and_chr',
      'and_uc'
    ]
  },
  /**
   * Samsung Internet
   */
  {
    ua: 'Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
    regex: [
      'chrome',
      'chrome@<=70',
      'android',
      'android@4.0.0',
      'and_chr',
      'samsung'
    ]
  },
  /**
   * QQ Browser
   */
  {
    ua: 'Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.0 QQ-URL-Manager Mobile Safari/537.36',
    regex: [
      'android',
      'android@4.0.0',
      'and_qq'
    ]
  },
  /**
   * KaiOS
   */
  {
    ua: 'Mozilla/5.0 (Mobile; rv:48.0; A405DL) Gecko/48.0 Firefox/48.0 KAIOS/2.5',
    regex: ['firefox', 'kaios']
  }
]

/**
 * @param {UserAgentRegex} regex
 * @returns {string} Useragent regex id.
 */
export function getRegexId(regex) {
  let { family: id } = regex
  let version

  if (regex.version) {
    id += '@'
    version = regex.version
  } else
  if (regex.minVersion) {
    id += '@>='
    version = regex.minVersion
  } else
  if (regex.maxVersion) {
    id += '@<='
    version = regex.maxVersion
  }

  if (version) {
    id += version.filter(isFinite).join('.')
  }

  return id
}
