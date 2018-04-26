/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import level from '../level'

export default class extends Phaser.State {
  init () {
    console.log('Game.init()')
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.RUNNING_SPEED = 180
    this.JUMPING_SPEED = 550
  }
  preload () {
    console.log('Game.preload()')

    // console.log(this.cursors)
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

    this.ground = this.add.sprite(0, 638, 'ground')
    this.game.physics.arcade.enable(this.ground)
    this.ground.body.allowGravity = false
    this.ground.body.immovable = true
    this.ground.scale.x = 1.3

    // this.platform = this.add.sprite(0, 300, 'platform')
    // this.game.physics.arcade.enable(this.platform)
    // this.platform.body.allowGravity = false
    // this.platform.body.immovable = true

    var platformData = [
      {'x': 0, 'y': 430},
      {'x': 45, 'y': 560},
      {'x': 90, 'y': 290},
      {'x': 0, 'y': 140}
    ]

    this.platforms = this.add.group()
    this.platforms.enableBody = true

    platformData.forEach(function (element) {
      this.platforms.create(element.x, element.y, 'platform')
    }, this)

    this.platforms.setAll('body.immovable', true)
    this.platforms.setAll('body.allowGravity', false)

    this.player = this.add.sprite(10, 545, 'player', 3)
    this.player.anchor.setTo(0.5)
    this.player.animations.add('walking', [0, 1, 2, 1], 6, true)
    this.player.play('walking')
    this.game.physics.arcade.enable(this.player)
    this.player.customParams = {}

    this.game.camera.follow(this.player)

    this.createOnscreenControls()
  }

  update () {
    this.game.physics.arcade.collide(this.player, this.ground)
    this.game.physics.arcade.collide(this.player, this.platforms)

    this.player.body.velocity.x = 0

    if (this.cursors.left.isDown|| this.player.customParams.isMovingLeft) {
      this.player.body.velocity.x = -this.RUNNING_SPEED
    }

    if (this.cursors.right.isDown || this.player.customParams.isMovingRight) {
      this.player.body.velocity.x = this.RUNNING_SPEED
    }

    if ((this.cursors.up.isDown || this.player.customParams.mustJump) && this.player.body.touching.down) {
      this.player.body.velocity.y = -this.JUMPING_SPEED
      this.player.customParams.mustJump = false
    }
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

  createOnscreenControls () {
    this.leftArrow = this.add.button(20, 735, 'arrowButton')
    this.rightArrow = this.add.button(110, 735, 'arrowButton')
    this.actionButton = this.add.button(280, 735, 'actionButton')

    this.leftArrow.alpha = 0.5
    this.rightArrow.alpha = 0.5
    this.actionButton.alpha = 0.5

    this.leftArrow.fixedToCamera = true
    this.rightArrow.fixedToCamera = true
    this.actionButton.fixedToCamera = true

    this.actionButton.events.onInputDown.add(function () {
      this.player.customParams.mustJump = true
    }, this)

    this.actionButton.events.onInputUp.add(function () {
      this.player.customParams.mustJump = false
    }, this)

    // left
    this.leftArrow.events.onInputDown.add(function () {
      this.player.customParams.isMovingLeft = true
    }, this)

    this.leftArrow.events.onInputUp.add(function () {
      this.player.customParams.isMovingLeft = false
    }, this)

    this.leftArrow.events.onInputOver.add(function () {
      this.player.customParams.isMovingLeft = true
    }, this)

    this.leftArrow.events.onInputOut.add(function () {
      this.player.customParams.isMovingLeft = false
    }, this)

    // right
    this.rightArrow.events.onInputDown.add(function () {
      this.player.customParams.isMovingRight = true
    }, this)

    this.rightArrow.events.onInputUp.add(function () {
      this.player.customParams.isMovingRight = false
    }, this)
    this.rightArrow.events.onInputOver.add(function () {
      this.player.customParams.isMovingRight = true
    }, this)

    this.rightArrow.events.onInputOut.add(function () {
      this.player.customParams.isMovingRight = false
    }, this)
  }
}
