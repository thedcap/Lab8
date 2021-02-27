const iconPath = require('../assets/scripts/main');

describe('volLevels', () => {
  test('is level 3', () => {
    expect(iconPath(67)).toBe('./assets/media/icons/volume-level-3.svg')
  })

  test('is level 2', () => {
    expect(iconPath(34)).toBe('./assets/media/icons/volume-level-2.svg')
  })
  
  test('is level 1', () => {
    expect(iconPath(1)).toBe('./assets/media/icons/volume-level-1.svg')
  })

  test('is level 0', () => {
    expect(iconPath(0)).toBe('./assets/media/icons/volume-level-0.svg')
  })
})
