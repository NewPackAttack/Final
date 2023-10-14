if (e.key === "ArrowRight") {
    if (this.data.speedOfRotation < 0.1) {
      this.data.speedOfRotation += 0.01;
    }
  }
  if (e.key === "ArrowLeft") {
    if (this.data.speedOfRotation > -0.1) {
      this.data.speedOfRotation -= 0.01;
    }
  }
