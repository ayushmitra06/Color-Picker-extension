document.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("colorPicker");
  const selectedColor = document.getElementById("selectedColor");

  colorPicker.addEventListener("change", function () {
    const color = colorPicker.value;
    selectedColor.textContent = `Selected Color: ${color}`;
  });
});
