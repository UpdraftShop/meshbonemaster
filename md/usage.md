# <a name="usage_top" href="https://www.youtube.com/watch?v=aoHXTMpmqDo" target="_blank" rel="noopener noreferrer">使用方法</a>


### <a name="open_tool">= ツールの開き方<br></a>
unity上部のメニューから<br>
[UpdraftShop] → [MeshBoneMaster]<br>
の順でクリックする事で本ツールを開くことが出来ます。<br>
<br>
<img src="/updraftshop/meshbonemaster/images/usage/open_tool.png" width="287">
<br>
<br>

### <a name="screen_tool">= 画面の説明<br></a>
<div style="display: flex;">
    <img src="/updraftshop/meshbonemaster/images/usage/screen_tool.png" style="width: 317px; height: 524px;">
    <div style="margin-left: 20px;">
        右上には言語切替機能があり,現在では[日本語(jp)/英語(en)/韓国語(ko)]に対応しています。<br>
        クリックする毎に順番に言語が切り替わります。<br>
        ※翻訳が不十分な場合があります。<br>
        　その際はご連絡下さい。<br>
        <br>
        現在では3つの機能があり,[ウェイト検索][メッシュ検索][ボーン削除]があります。<br>
        クリックするとそれに応じた内容がそれ以降のエリアに表示されます。
    </div>
</div>
<br>
<br>

### <a name="function_tool">= 各種機能の説明<br></a>

#### <a name="function_tool_find_weight">・ ウェイト検索<br></a>
<img src="/updraftshop/meshbonemaster/images/usage/function_find_weight.png" style="width: 827.25px; height: 415.5px;"><br>
検索対象の欄に検索したいメッシュのオブジェクトを指定します。<br>
指定されたメッシュが使用しているボーンを自動で検索し,検索した結果をリストに表示します。<br>
リストに表示されたボーンをクリックする事でヒエラルキー上の同じオブジェクトが選択されます。<br>
検索対象は1つに限らず複数同時に検索もできます。<br>
右上の **[ + ]** **[ - ]** から検索対象を増やしたり,減らしたりする事ができます。<br>
<br>
またリストに表示されたボーンに対して一括で名前の変更をすることもできます。<br>
入力欄に編集したい内容を入れ,右側の[✓]を押すことで実行できます。
<br>
<br>
#### <a name="function_tool_find_mesh">・ メッシュ検索<br></a>
<img src="/updraftshop/meshbonemaster/images/usage/function_find_mesh.png" style="width: 827.25px; height: 415.5px;"><br>
ウェイト検索の逆でボーンから使われているメッシュを検索します。<br>
検索対象に検索したいボーンのオブジェクトを,ルートオブジェクトにアバター本体,もしくはボーンが含まれている衣装本体を指定します。<br>
検索した結果がリストに表示されます。

#### <a name="function_tool_remove_bone">・ ボーン削除<br></a>
<img src="/updraftshop/meshbonemaster/images/usage/function_remove_bone.png" style="width: 827.25px; height: 415.5px;"><br>
ボーンのルートには全てのボーンの親元のArmature(アバターによって名称が変わります)を指定します。<br>
<br>

**メッシュ除外リスト**では消したくない服のメッシュなどを指定します。<br>
これによりそのメッシュで使われているボーンは削除対象から除外されます。<br>
<br>

**ボーン除外リスト**では直接ボーンを指定します。<br>
ここで指定されたボーンはボーンの削除対象から除外されます。<br>
<br>

**コンポーネント除外リスト**ではVRChatで許可されているコンポーネントを指定します。<br>
ここで指定したコンポーネントを持っているボーンは除外対象から除外されます。<br>

VRChatで許可されているコンポーネントは右上の [ ? ] にカーソルを重ねると確認する事ができます。<br>
<br>
この許可されたコンポーネントの中で削除予定のボーンが持っているコンポーネントが自動でドロップダウンに表示され<br>
選択する事ができるようになります。<br>

<img src="/updraftshop/meshbonemaster/images/usage/function_remove_bone_component_list.png" style="width: 317px; height: 540px;"><br>
<br>
<br>
一番下までスクロールし,「削除リストを表示」をクリックする事で削除対象になっているボーンの一覧を見ることが出来ます。<br>
他機能同様リストに表示されているオブジェクトをクリックする事でヒエラルキー上でも選択されます。<br>
<br>
<img src="/updraftshop/meshbonemaster/images/usage/function_remove_bone_list.png" style="width: 639px; height: 524px;"><br>
<br>
<br>
各種設定が完了したら一番右下にある削除ボタンを押すことで削除する事ができます。<br>
※プレハブ状態だと編集が出来ないのでUnpack Prefabをするか,編集可能な状態にしてください。<br>
<br>
少し上に「親オブジェクトを保持しますか?」のチェックボックスがありますが,これはチェックを入れると<br>
除外対象になっているボーンの親オブジェクトも自動で除外されます。<br>
```
Armature
  L Hips
    L Spine
      L Chest
        L Neck
        L LeftShoulder
```
上記の様な構造の場合に「Neck」のボーンを除外対象に指定して「親オブジェクトを保持しますか?」にチェックをすると<br>
「Neck」の親にあたる「Chest」「Spine」「Hips」も除外対象になります。<br>
<br>
削除ボタンを押すと確認用のダイアログが出てくるので問題なければ「OK」で削除が完了します。<br>