// クエリからID取得
const urlParams = new URLSearchParams(window.location.search);
const moleculeId = urlParams.get("id");

fetch(`/api/get_molecule.php?id=${id}`)
  .then(res => res.json())
  .then(mol => {
    document.getElementById("mol-name").textContent = mol.name;
    document.getElementById('mol-sci-name').textContent = mol.scientific_name || '—';
    document.getElementById('mol-meaning').textContent = mol.gemstone_meaning || '—';
    document.getElementById("mol-desc").textContent = mol.description;

    const viewer = $3Dmol.createViewer("viewer-div");
    $3Dmol.download(`cif/${mol.cif_filename}`, viewer, {}, () => {
      viewer.setStyle({}, { stick: {} });
      viewer.zoomTo();
      viewer.render();
    });
  })
  .catch(err => {
    console.error("表示エラー:", err);
  });