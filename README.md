### 文化祭鉱石図鑑_3Dmol

#### メンバーのみんなへ
- ファイル構成などの共有します。
- 制作する時はcloneして使ってくれ!!

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
│   ├── diamond.cif
│   └── quartz.cif
├── js/
│   ├── main.js             ← 一覧表示・クリック処理など
│   └── viewer.js           ← 3Dmolでcifを読み込む処理
├── css/
│   └── style.css           ← 全体のデザインCSS
└── assets/
    └── logo.png            ← ロゴや画像（任意）

</code></pre>