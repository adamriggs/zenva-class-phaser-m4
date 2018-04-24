import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {
    console.log('Preload.init()')
  }

  preload () {
    console.log('Preload.preload()')

    //
    // load Splash assets
    //

    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')
    this.logo.anchor.setTo(0.5)

    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])
    this.load.setPreloadSprite(this.loaderBar)
  }

  create () {
    console.log('Preload.create()')

    this.state.start('Splash')
  }
}
