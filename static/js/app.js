document.addEventListener("DOMContentLoaded", () => {
  const selectAll = document.getElementById("selectAll");
  if (selectAll) {
    selectAll.addEventListener("change", () => {
      document.querySelectorAll(".row-check").forEach(cb => cb.checked = selectAll.checked);
    });
  }

  const file = document.getElementById("file");
  if (file) {
    file.addEventListener("change", () => {
      const label = document.querySelector(".drop-label");
      if (label && file.files.length) label.textContent = "📄 " + file.files[0].name;
    });
  }
});

function selectedCount() {
  return document.querySelectorAll(".row-check:checked").length;
}

function confirmSelected(action) {
  const count = selectedCount();
  if (!count) {
    alert("Please select at least one email account.");
    return false;
  }
  return confirm(`Are you sure you want to ${action} ${count} selected account(s)?`);
}
