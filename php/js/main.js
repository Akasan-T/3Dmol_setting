fetch('/api/get_molecules.php')
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById('molecule-list');
        data.forEach(mol => {
            const item = document.createElement('li');
            item.innerHTML = `<a href="molecule.html?id=${mol.id}">${mol.name} (${mol.type})</a>`;
            list.appendChild(item);
        });
    })
    .catch(err => {
        console.error("一覧取得エラー:", err);
});