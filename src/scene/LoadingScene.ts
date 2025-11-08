export class LoadingScene extends Phaser.Scene {
  constructor() {
    // シーンのkeyを指定
    super('loading');
  }

  // preload()はシーンが呼び出されたら実行される
  preload() {
    this.load.image('bg_loading', 'assets/background_loading.png');
  }

  // create()はpreload内のアセットのロードが完了したら実行される
  create() {
    // 描画領域のサイズを取得
    const { width, height } = this.game.canvas;

    // 背景画像のオブジェクトを作成
    this.add.image(width/2, height/2, 'bg_loading');

    // アセットをロード（一度ロードしたアセットは他のシーンでも使用可）
    this.load.image('chara_lex', 'assets/character_lex.png');
    this.load.image('bg_sky', 'assets/background_sky.png');
    this.load.image('bg_title', 'assets/background_title.png');
    this.load.image('bg_ending', 'assets/background_ending.png');

    // アセットのロードが完了したらTitleSceneに遷移
    this.load.on('complete', () => {
      this.scene.start('title');
    });

    // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
    this.load.start();
  }
}
