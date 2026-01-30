document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("discount-row").addEventListener("click", function (e) {
    if (e.target.classList.contains("discount")) {
      e.preventDefault();
      document.getElementById("product").innerHTML = e.target.dataset["product"];
      document.getElementById("discountTitle").innerHTML = e.target.dataset["discountTitle"];
      document.getElementById("discountCode").innerHTML = "Code: " + e.target.dataset["discountCode"];
      bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast")).show();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const toast = bootstrap.Toast.getInstance(document.getElementById("liveToast"));
      if (toast) {
        toast.hide();
      }
    }
  });
});
