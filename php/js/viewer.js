// URLから ?id=〜 を取得
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (!id) {
  document.getElementById("name").textContent = "分子が指定されていません。";
  throw new Error("URLにidが指定されていません");
}

// 例：id が 'NaCl' の場合、それに対応するデータを取得（PHP経由 or JSでマッピング）
fetch(`api/get_molecule.php?id=${encodeURIComponent(id)}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("description").textContent = data.description;

    const viewer = $3Dmol.createViewer("viewer", {
      defaultcolors: $3Dmol.rasmolElementColors
    });

    viewer.addModelFromUrl(`cif/${data.cif_filename}`, "cif", function(model) {
      viewer.setStyle({}, { stick: {} });
      viewer.zoomTo();
      viewer.render();
    });
  })
  .catch(err => {
    console.error("分子データの取得に失敗しました", err);
  });