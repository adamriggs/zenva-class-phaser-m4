import Phaser from 'phaser'
// import WebFont from 'webfontloader'
// import config from '../config'

export default class extends Phaser.State {
  init () {
    console.log('Boot.init()')
    this.stage.backgroundColor = '#000'

    this.scale.scaleMode = Phaser.ScaleManager.RESIZE
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
  }

  preload () {
    console.log('Boot.preload()')

    //
    // load preloader assets
    //

    this.load.image('logo', 'assets/images/mushroom2.png')
    this.load.image('loaderBg', 'assets/images/loader-bg.png')
    this.load.image('loaderBar', 'assets/images/loader-bar.png')
  }

  create () {
    console.log('Boot.create()')
    this.game.stage.backgroundColor = '#fff'
    this.state.start('Preload')
  }

  render () {
    console.log('Boot.render()')
  }
}
