export class EndingScene extends Phaser.Scene {
  constructor() {
    super('ending');
  }

  create() {
    const { width, height } = this.game.canvas;

    // 背景画像のオブジェクトを作成
    this.add.image(width/2, height/2, 'bg_ending');

    const zone = this.add.zone(width/2, height/2, width, height);
    zone.setInteractive({
      useHandCursor: true
    });
    zone.on('pointerdown', () => {
      this.scene.start('title');  // TitleSceneに遷移
    });
  }
}
