// クエリからID取得
const urlParams = new URLSearchParams(window.location.search);
const moleculeId = urlParams.get("id");

fetch("data/molecules.json")
  .then(res => res.json())
  .then(molecules => {
    const mol = molecules.find(m => m.id === moleculeId);
    if (!mol) return alert("分子が見つかりません");

    document.getElementById("mol-name").textContent = mol.name;
    document.getElementById("mol-desc").textContent = mol.description;

    // 3Dmolで表示
    fetch(mol.file)
      .then(res => res.text())
      .then(cifData => {
        const viewer = $3Dmol.createViewer("viewer", { backgroundColor: "white" });
        viewer.addModel(cifData, mol.type); // ← typeは"cif"
        viewer.setStyle({}, {stick: {}});
        viewer.zoomTo();
        viewer.render();
      });
  });