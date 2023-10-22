import ElectronStore from 'electron-store'

type LayoutType = 'right' | 'left' | 'bottom'
export const store = new ElectronStore({
  defaults: {
    options: {
      layout: 'bottom' as LayoutType,
      windowSortByPositionInApp: false
    },
    filters: [
      [{ property: 'kCGWindowIsOnscreen', is: false }],
      [{ property: 'kCGWindowOwnerName', is: 'Dock' }],
      [{ property: 'kCGWindowOwnerName', is: 'DockHelper' }],
      [{ property: 'kCGWindowOwnerName', is: 'screencapture' }],
      [{ property: 'kCGWindowOwnerName', is: 'スクリーンショット' }],
      [{ property: 'kCGWindowName', is: 'Notification Center' }],
      [{ property: 'kCGWindowOwnerName', is: '通知センター' }],
      [{ property: 'kCGWindowName', is: 'Item-0' }],
      [{ property: 'kCGWindowOwnerName', is: 'Window Server' }],
      [{ property: 'kCGWindowOwnerName', is: 'コントロールセンター' }],
      [{ property: 'kCGWindowOwnerName', is: 'Spotlight' }],
      [{ property: 'kCGWindowOwnerName', is: 'GoogleJapaneseInputRenderer' }],
      [{ property: 'kCGWindowOwnerName', is: 'taskbar.fm' }],
      [{ property: 'kCGWindowName', is: 'taskbar.fm' }],
      [
        { property: 'kCGWindowOwnerName', is: 'Finder' },
        { property: 'kCGWindowName', is: '' }
      ]
    ]
  }
})
export type Options = typeof store.store.options