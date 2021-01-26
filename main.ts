namespace StatusBarKind {
    export const ink = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . 6 6 6 6 6 . . . . . . . 
        . . . 6 6 6 6 6 6 6 . . . . . . 
        . . 6 f f f 6 f f f 6 . . . . . 
        . 6 6 f 1 f f f 1 f 6 6 . . . . 
        . 6 6 f f f f f f f 6 6 . . . . 
        . 9 6 6 6 6 6 6 6 6 9 6 . . . . 
        . 6 9 . 6 . 6 . 6 . 6 9 . . . . 
        . 9 6 . . . . . . . 9 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . 6 8 6 . . . . . . . 
        . . . . . 6 9 8 9 6 . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    statusbar2.value += 2
    statusbar.value += -1
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    pause(1000)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . f 6 8 8 8 6 f . . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . f 8 8 8 8 8 8 8 8 8 f . . . 
        . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
        f f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    statusbar2.value += 5
    statusbar.value += -5
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tilePath5, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
    	
    }
})
let projectile: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 6 6 d 6 6 6 6 . . . . 
    . d d d 6 6 d f f f d . . . . . 
    . . d d 6 6 d f 1 6 f . . . . . 
    . . . d 6 d d d f f d . . . . . 
    . 7 7 6 6 d d d d d d . . . . . 
    . 2 9 6 9 3 7 d d 3 . . . . . . 
    9 6 6 6 7 3 7 7 7 7 . . . . . . 
    6 6 9 6 9 7 7 9 7 9 . . . . . . 
    9 6 1 1 7 7 7 7 7 7 . . . . . . 
    1 d d . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
statusbar = statusbars.create(20, 4, StatusBarKind.ink)
statusbar.attachToSprite(mySprite)
statusbar.setColor(9, 1)
statusbar.setLabel("ink", 1)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Magic)
statusbar2.attachToSprite(mySprite, 6, 0)
statusbar2.setLabel("special", 1)
