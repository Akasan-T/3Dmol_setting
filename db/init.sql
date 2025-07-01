CREATE TABLE IF NOT EXISTS molecules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cif_filename VARCHAR(255) NOT NULL,
    type VARCHAR(100)
);

INSERT INTO molecules (name, description, cif_filename, type) VALUES
('NaCl', '塩化ナトリウムの結晶構造', 'nacl.cif', '無機塩'),
('Diamond', 'ダイヤモンドの結晶構造', 'diamond.cif', '元素'),
('Quartz', '石英の結晶構造', 'quartz.cif', '酸化物');