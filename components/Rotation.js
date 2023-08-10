AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
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
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });
  
  //boy rotation component
  AFRAME.registerComponent("boy-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var boyRotation = this.data.speedOfRotation;
        var boyPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (boyRotation.x < 10) {
            boyRotation.x += 0.5;
            this.el.setAttribute("rotation", boyRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (boyRotation.x > -10) {
            boyRotation.x -= 0.5;
            this.el.setAttribute("rotation", boyRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (boyRotation.z < 20) {
            boyRotation.z += 0.5;
            this.el.setAttribute("rotation", boyRotation);
          }
          if (boyPosition.y < 2) {
            boyPosition.y += 0.01;
            this.el.setAttribute("position", boyPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (boyRotation.z > -10) {
            boyRotation.z -= 0.5;
            this.el.setAttribute("rotation", boyRotation);
          }
          if (boyPosition.y > -2) {
            boyPosition.y -= 0.01;
            this.el.setAttribute("position", boyPosition);
          }
        }
      });
    },
  });