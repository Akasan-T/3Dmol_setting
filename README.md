### 文化祭鉱石図鑑_3Dmol

#### メンバーのみんなへ
- ファイル構成などの共有します。
- 制作する時はcloneして使ってくれ!!

- ちなみに3Dmolは結晶構造の1ユニットセル（単位格子）だけが描画されるらしいからマジで表記してもつまらん
- 今GitHubに入っているcifファイルじゃ動かない　04369a.cifファイルは動きます。
--------

### 使用言語 (今のところ)
HTML/CSS <br>
JavaScript <br>

--------

### 使用ライブラリ

- **3Dmol.js(スリーディーモル・ジェーエス)** :JavaScriptで書かれた「分子・結晶構造の3D可視化ライブラリ」

--------

### 使い方

①Dockerを起動すること　<br>

②該当ディレクトリでbuildすること`docker compose up -d --build` <br>

③ [リンクへ飛ぶ](http://localhost:8080/)

### ファイル構成

<pre><code>

3Dmol_setting/
├── docker-compose.yml
├── index.html              ← 一覧ページ（カードやリスト形式）
├── molecule.html           ← 詳細ページ（URLで?ID=を受け取る）
├── data/
│   └── molecules.json      ← 各分子の情報（ID・名前・説明・cifファイル・タイプ）
├── cif/                    ← `.cif`ファイル格納場所
│   ├── .cif
│   ├── diamond.cif         ← 仮ファイル
│   └── quartz.cif          ← 仮ファイル
├── js/
│   ├── main.js             ← 一覧表示・クリック処理など
│   └── viewer.js           ← 3Dmolでcifを読み込む処理
├── css/
│   └── style.css           ← 全体のデザインCSS
└── assets/
    └── logo.png            ← ロゴや画像（任意）

</code></pre>
