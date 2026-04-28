const filterButtons = document.querySelectorAll(".filter-button");
const zoneBlocks = document.querySelectorAll(".zone-block");

const zoneLabels = {
  "zona-leste": "Zona Leste",
  "zona-oeste": "Zona Oeste",
  "zona-sul": "Zona Sul",
  "zona-norte": "Zona Norte",
  centro: "Centro"
};

zoneBlocks.forEach((zoneBlock) => {
  const zone = zoneBlock.dataset.zone;
  const label = zoneLabels[zone] || "São Paulo";
  const cards = zoneBlock.querySelectorAll(".location-card");

  cards.forEach((card) => {
    const tag = document.createElement("span");
    tag.className = "location-tag";
    tag.textContent = label;

    const mapLabel = document.createElement("span");
    mapLabel.className = "map-link-label";
    mapLabel.textContent = "Abrir no Google Maps";

    card.prepend(tag);
    card.append(mapLabel);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedZone = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    zoneBlocks.forEach((zoneBlock) => {
      const shouldShow = selectedZone === "todos" || zoneBlock.dataset.zone === selectedZone;
      zoneBlock.classList.toggle("hidden", !shouldShow);
    });
  });
});
