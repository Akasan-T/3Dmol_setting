CREATE TABLE IF NOT EXISTS molecules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,         --日本語名(例：ダイヤモンド)
    scientific_name VARCHAR(255),       --学名(例：Diamond)
    gemstone_meaning TEXT,              --石言葉(例：永遠の絆)
    description TEXT,                   --詳細説明(構造・特徴など)
    cif_filename VARCHAR(255) NOT NULL, --cifファイル名
    type VARCHAR(100)                   --カテゴリー
);


INSERT INTO molecules (name, scientific_name, gemstone_meaning, description, cif_filename, type) VALUES
('NaCl', 'Halite', '純粋・清らかさ', '塩化ナトリウムの結晶構造で、岩塩としても知られる。', 'nacl.cif', '無機塩'),
('Diamond', 'Diamond', '永遠の絆・純潔', '炭素原子が正四面体構造をとる超硬質結晶。', 'diamond.cif', '元素'),
('Quartz', 'Silicon Dioxide', '調和・浄化・活性化', '二酸化ケイ素からなる六方晶系の鉱物。', 'quartz.cif', '酸化物');