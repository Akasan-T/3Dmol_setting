### 文化祭鉱石図鑑_3Dmol

#### ブランチ内容

    - main : 完成したものを追加する
    - div : 作業用ブランチ
    - DB_test_brunch : データベース設定ブランチ
    - その他test-branch : その他テストで使用するブランチ


--------

### 使用言語 
PHP<br>
HTML/CSS <br>
JavaScript <br>

--------

### データベース
MYSQL <br>

--------

### 使用ライブラリ

- **3Dmol.js(スリーディーモル・ジェーエス)** :JavaScriptで書かれた「分子・結晶構造の3D可視化ライブラリ」

--------

### 使い方

①Dockerを起動すること　<br>

②該当ディレクトリでbuildすること`docker compose up -d --build` <br>

③ [リンクへ飛ぶ](http://localhost:8080/)

## バックエンドのみんなへ

### idの構成

    - name : 日本語名(例：ダイヤモンド)
    - scientific_name : 学名(例：Diamond)Add commentMore actions
    - gemstone_meaning : 石言葉(例：永遠の絆)
    - description : 詳細説明(構造・特徴など)
    - cif_filename : cifファイル名
    - type : カテゴリー


### ディレクトリ構成

<pre><code>
3Dmol-setting/
├── docker-compose.yml         ← Docker構成ファイル（PHP + MySQL）
├── php/
│   ├── Dockerfile             ← PHP用のDockerイメージビルド設定
│   ├── index.html             ← 一覧ページ（カードやリスト形式）
│   ├── molecule.html          ← 詳細ページ（?id=で取得）
│   ├── js/
│   │   ├── main.js            ← 一覧取得・クリック処理
│   │   └── viewer.js          ← 3Dmol.jsでcif表示
│   ├── css/
│   │   └── style.css          ← デザイン用CSS
│   ├── cif/
│   │   ├── nacl.cif
│   │   ├── diamond.cif
│   │   └── quartz.cif
│   ├── assets/
│   │   └── logo.png
│   └── api/
│       ├── db.php             ← DB接続設定
│       ├── get_molecules.php  ← 分子一覧取得API
│       └── get_molecule.php   ← 単一分子詳細取得API
├── db/
│   └── init.sql               ← MySQL用 初期テーブル＆データ挿入SQL
├── .env 
├── .env.example
└── README.md                  ← プロジェクト説明（任意）
</code></pre>

