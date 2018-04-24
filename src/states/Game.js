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
    this.game.physics.arcade.enable(this.ground)
    this.ground.body.allowGravity = false
    this.ground.body.immovable = true

    this.platform = this.add.sprite(0, 300, 'platform')
    this.game.physics.arcade.enable(this.platform)
    this.platform.body.allowGravity = false
    this.platform.body.immovable = true

    this.player = this.add.sprite(100, 200, 'player', 3)
    this.player.anchor.setTo(0.5)
    this.player.animations.add('walking', [0, 1, 2, 1], 6, true)
    this.player.play('walking')
    this.game.physics.arcade.enable(this.player)
  }

  update () {
    this.game.physics.arcade.collide(this.player, this.ground)
    this.game.physics.arcade.overlap(this.player, this.platform, this.landed)
  }

  render () {
    // console.log('Game.render()')
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

  landed (player, ground) {
    console.log('landed')
  }
}
