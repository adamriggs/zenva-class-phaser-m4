/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {
    console.log('Game.init()')
  }
  preload () {
    console.log('Game.preload()')
  }

  create () {
    console.log('Game.create()')

    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    // this.game.add.existing(this.mushroom)

    this.ground = this.add.sprite(0, 500, 'ground')

    var platform = this.add.sprite(0, 300, 'platform')

    this.player = this.add.sprite(100, 200, 'player', 3)
    this.player.anchor.setTo(0.5)
    this.player.animations.add('walking', [0, 1, 2, 1], 6, true)
    this.player.play('walking')
  }

  render () {
    // console.log('Game.render()')
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
