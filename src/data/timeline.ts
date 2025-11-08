import { Timelines } from '../type/Timelines';

export const timelineData: Timelines = {
  start: [
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: 'う、うーん・・・ ▼'},
    {type: 'setBackground', x: 400, y: 300, key: 'bg_sky'},
    {type: 'dialog', text: 'ここは・・・？ ▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'chara_lex'},
    {type: 'dialog', text: '目が覚めましたか。 ▼', actorName: '???'},
    {type: 'dialog', text: '猫・・・？ ▼'},
    {type: 'dialog', text: '私は「レクス」といいます。 ▼', actorName: '???'},
    {type: 'dialog', text: '早速ですが、ちょっとした質問を。 ▼', actorName: 'レクス'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],
  // 選択肢01
  choice01: [
    {type: 'setBackground', x: 400, y: 300, key: 'bg_sky'},
    {type: 'addForeground', x: 400, y: 300, key: 'chara_lex'},
    {type: 'dialog', text: 'あなたはきのこの山とたけのこの里、\nどちらが好きですか？ ▼', actorName: 'レクス'},
    {type: 'choice', choices: [
      {text: 'きのこの山', timelineID: 'choice01_a_kinoko'},
      {text: 'たけのこの里', timelineID: 'choice01_a_takenoko'},
      {text: '猫風情が話しかけるな', timelineID: 'choice01_a_nekohuzei'}
    ]}
  ],
  // 選択肢01の分岐
  choice01_a_kinoko: [
    {type: 'setBackground', x: 400, y: 300, key: 'bg_sky'},
    {type: 'addForeground', x: 400, y: 300, key: 'chara_lex'},
    {type: 'dialog', text: 'よろしい。ではこちらへ来てください。 ▼', actorName: 'レクス'},
    {type: 'clearForeground'},
    {type: 'dialog', text: 'こうして世界を股にかけた物語が始まるのであった・・・ ▼'},
    {type: 'sceneTransition', key: 'ending'}
  ],
  // 選択肢01の分岐
  choice01_a_takenoko: [
    {type: 'setBackground', x: 400, y: 300, key: 'bg_sky'},
    {type: 'addForeground', x: 400, y: 300, key: 'chara_lex'},
    {type: 'dialog', text: '・・・困りましたね。 ▼', actorName: 'レクス'},
    {type: 'dialog', text: '今は事情を話している暇がないんです。 ▼', actorName: 'レクス'},
    {type: 'dialog', text: 'あなたは捕まるべきではない。 ▼', actorName: 'レクス'},
    {type: 'dialog', text: 'もう一度聞きますね？ ▼', actorName: 'レクス'},
    {type: 'timelineTransition', timelineID: 'choice01'} // 選択肢01に戻る
  ],
  // 選択肢01の分岐
  choice01_a_nekohuzei: [
    {type: 'setBackground', x: 400, y: 300, key: 'bg_sky'},
    {type: 'addForeground', x: 400, y: 300, key: 'chara_lex'},
    {type: 'dialog', text: '・・・・・・ ▼', actorName: 'レクス'},
    {type: 'dialog', text: 'そうですか。では。 ▼', actorName: 'レクス'},
    {type: 'clearForeground'},
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: 'この後、俺は謎の組織に捕まってしまうのであった・・・ ▼'},
    {type: 'sceneTransition', key: 'ending'}
  ]
}
