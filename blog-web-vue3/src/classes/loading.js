class Loading {
  static start() {
    const loadingDiv = document.createElement("div");
    loadingDiv.setAttribute("id", "loading-overlay");
    document.body.appendChild(loadingDiv);
  }

  static stop() {
    const loadingDiv = document.getElementById("loading-overlay");
    if (loadingDiv) {
      document.body.removeChild(loadingDiv);
    }
  }
}
