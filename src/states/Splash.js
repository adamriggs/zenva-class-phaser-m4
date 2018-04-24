import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {
    console.log('Splash.init()')
  }

  preload () {
    console.log('Splash.preload()')

    //
    // load Game assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    console.log('Splash.create()')
    this.state.start('Game')
  }
}
