CREATE DATABASE IF NOT EXISTS 3Dmol_setting CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE 3Dmol_setting;

CREATE TABLE IF NOT EXISTS molecules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    scientific_name VARCHAR(255),
    gemstone_meaning TEXT,
    description TEXT,
    cif_filename VARCHAR(255) NOT NULL,
    type VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO molecules (name, scientific_name, gemstone_meaning, description, cif_filename, type) VALUES
('NaCl', 'Halite', '純粋・清らかさ', '塩化ナトリウムの結晶構造で、岩塩としても知られる。', '04269a.cif', '無機塩'),
('Diamond', 'Diamond', '永遠の絆・純潔', '炭素原子が正四面体構造をとる超硬質結晶。', 'diamond.cif', '元素'),
('Quartz', 'Silicon Dioxide', '調和・浄化・活性化', '二酸化ケイ素からなる六方晶系の鉱物。', 'quartz.cif', '酸化物');