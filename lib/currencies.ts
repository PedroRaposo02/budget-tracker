export const Currencies = [
  {value: 'USD', label: "$ Dollar", locale: "en-US"},
  {value: 'EUR', label: "€ Euro", locale: "de-DE"},
  {value: 'JPY', label: "¥ Yen", locale: "ja-JP"},
  {value: 'GBP', label: "£ Pound", locale: "en-GB"},
  {value: 'AUD', label: "$ Dollar", locale: "en-AU"},
  {value: 'CAD', label: "$ Dollar", locale: "en-CA"},
  {value: 'CHF', label: "Fr Franc", locale: "fr-CH"},
  {value: 'CNY', label: "¥ Yuan", locale: "zh-CN"},
]

export type Currency = (typeof Currencies)[0]