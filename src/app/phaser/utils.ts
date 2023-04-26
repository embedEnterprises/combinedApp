
export function scaleToGameW(scene , obj, per) {
  obj.displayWidth = Number(scene.sys.game.config.width) * per;
  obj.scaleY = obj.scaleX;
}
export function scaleToGameR(scene , obj, per) {
  obj.radius = Number(scene.sys.game.config.width) * per;
  obj.scaleY = obj.scaleX;
}
export function setPos(scene ,obj , x: number, y: number) {
  obj.setPosition(Number(scene.sys.game.config.width) * x, Number(scene.sys.game.config.height) * y);
}

export const scaleToGameZone = (scene, obj, perW, perH) => {
  obj.displayWidth = Number(scene.sys.game.config.width) * perW;
  obj.displayHeight = Number(scene.sys.game.config.height) * perH;
}

export const getPointOnArc = (container, obj, angle: number): Phaser.Math.Vector2 => {
  const radians = Phaser.Math.DegToRad(angle);
  const scale = container.scaleX;
  const x = container.x + obj.x * scale + Math.cos(radians) * obj.radius * scale;
  const y = container.y + obj.y * scale + Math.sin(radians) * obj.radius * scale;
  return new Phaser.Math.Vector2(x, y);
}

export const scaleToGameContainer = (scene, obj, refObj, config) => {
  setPos(scene, obj, config.x, config.y)
  let prev = refObj.scale;
  scaleToGameW(scene, refObj, config.w);
  let after = refObj.scale;
  refObj.setScale(prev)
  obj.setScale(after / prev);
}