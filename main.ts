scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile5, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Roberto.vy == 0) {
        Roberto.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . . . . . . 
        . c c b b b b . 
        f 3 d d 5 1 5 b 
        f 3 d d 5 1 5 b 
        . c c b b b b . 
        . . . . . . . . 
        . . . . . . . . 
        `, Roberto, 50, 0)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile4, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let munition: Sprite = null
let projectile2: Sprite = null
let Roberto: Sprite = null
scene.setBackgroundColor(1)
Roberto = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 6 6 f f f . . . . 
    . . . f f f 6 6 6 6 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 6 6 6 6 6 6 e e f . . 
    . . f e 6 f f f f f f 6 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Roberto, 100, 0)
Roberto.ay += 500
scene.cameraFollowSprite(Roberto)
tiles.setCurrentTilemap(tilemap`First level`)
tiles.placeOnTile(Roberto, tiles.getTileLocation(0, 11))
info.startCountdown(60)
let Nicky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f 3 3 3 b f . . . . . 
    . . . . . f b f f b f . . . . . 
    . . . . . f b 1 1 3 f f . . . . 
    . . f f f f 3 3 3 3 3 f f f . . 
    . f f b 3 3 3 2 2 3 b 3 3 f f . 
    f f 3 3 b 3 2 3 3 2 b 3 3 3 f f 
    f 3 3 f f f f f f f f f f b 3 f 
    f 3 3 f 3 c a f f a c 3 f 3 3 f 
    f c c f 3 3 c f f c 3 3 f c c f 
    f f f f 3 3 3 f f 3 3 b f f f f 
    . . . f b 3 b f f 3 3 b f . . . 
    . . . f b 3 3 f f 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Nicky, tiles.getTileLocation(11, 12))
Nicky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f 3 3 3 b f . . . . . 
    . . . . . f b f f b f . . . . . 
    . . . . . f b 1 1 3 f f . . . . 
    . . f f f f 3 3 3 3 3 f f f . . 
    . f f b 3 3 3 2 2 3 b 3 3 f f . 
    f f 3 3 b 3 2 3 3 2 b 3 3 3 f f 
    f 3 3 f f f f f f f f f f b 3 f 
    f 3 3 f 3 c a f f a c 3 f 3 3 f 
    f c c f 3 3 c f f c 3 3 f c c f 
    f f f f 3 3 3 f f 3 3 b f f f f 
    . . . f b 3 b f f 3 3 b f . . . 
    . . . f b 3 3 f f 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Nicky, tiles.getTileLocation(12, 6))
Nicky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f 3 3 3 b f . . . . . 
    . . . . . f b f f b f . . . . . 
    . . . . . f b 1 1 3 f f . . . . 
    . . f f f f 3 3 3 3 3 f f f . . 
    . f f b 3 3 3 2 2 3 b 3 3 f f . 
    f f 3 3 b 3 2 3 3 2 b 3 3 3 f f 
    f 3 3 f f f f f f f f f f b 3 f 
    f 3 3 f 3 c a f f a c 3 f 3 3 f 
    f c c f 3 3 c f f c 3 3 f c c f 
    f f f f 3 3 3 f f 3 3 b f f f f 
    . . . f b 3 b f f 3 3 b f . . . 
    . . . f b 3 3 f f 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Nicky, tiles.getTileLocation(45, 7))
Nicky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f 3 3 3 b f . . . . . 
    . . . . . f b f f b f . . . . . 
    . . . . . f b 1 1 3 f f . . . . 
    . . f f f f 3 3 3 3 3 f f f . . 
    . f f b 3 3 3 2 2 3 b 3 3 f f . 
    f f 3 3 b 3 2 3 3 2 b 3 3 3 f f 
    f 3 3 f f f f f f f f f f b 3 f 
    f 3 3 f 3 c a f f a c 3 f 3 3 f 
    f c c f 3 3 c f f c 3 3 f c c f 
    f f f f 3 3 3 f f 3 3 b f f f f 
    . . . f b 3 b f f 3 3 b f . . . 
    . . . f b 3 3 f f 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Nicky, tiles.getTileLocation(44, 11))
Nicky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f 3 3 3 b f . . . . . 
    . . . . . f b f f b f . . . . . 
    . . . . . f b 1 1 3 f f . . . . 
    . . f f f f 3 3 3 3 3 f f f . . 
    . f f b 3 3 3 2 2 3 b 3 3 f f . 
    f f 3 3 b 3 2 3 3 2 b 3 3 3 f f 
    f 3 3 f f f f f f f f f f b 3 f 
    f 3 3 f 3 c a f f a c 3 f 3 3 f 
    f c c f 3 3 c f f c 3 3 f c c f 
    f f f f 3 3 3 f f 3 3 b f f f f 
    . . . f b 3 b f f 3 3 b f . . . 
    . . . f b 3 3 f f 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Nicky, tiles.getTileLocation(33, 10))
forever(function () {
    munition = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 3 3 3 2 2 2 . . . . . 
        . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
        . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
        . . . . 2 3 3 3 3 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Nicky, 50, 0)
    munition.setKind(SpriteKind.Enemy)
    pause(2000)
})
