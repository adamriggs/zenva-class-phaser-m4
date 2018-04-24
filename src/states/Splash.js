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

    this.load.image('ground', 'assets/images/ground.png')
    this.load.image('platform', 'assets/images/platform.png')
    this.load.image('goal', 'assets/images/gorilla3.png')
    this.load.image('arrowButton', 'assets/images/arrowButton.png')
    this.load.image('actionButton', 'assets/images/actionButton.png')
    this.load.image('barrel', 'assets/images/barrel.png')

    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 28, 30, 5, 1, 1)
    this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 20, 21, 2, 1, 1)
  }

  create () {
    console.log('Splash.create()')
    this.game.stage.backgroundColor = '#000'
    this.state.start('Game')
  }
}
