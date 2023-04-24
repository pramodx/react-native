/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/gw.png'),
    home: {
      Painter: require('@/Assets/Images/painter.png'),
      Plumber: require('@/Assets/Images/plumber.png'),
      'Cabinet Maker': require('@/Assets/Images/carpenter.png'),
      Tiler: require('@/Assets/Images/tiling.png'),
      Bricklayer: require('@/Assets/Images/bricklaying.png'),
    },
  }
}
