AFRAME.registerComponent("player-movement", {
  schema:{

  },
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowDown"
      ) {
        var cam = document.querySelector("#camera");

        
        pos = cam.getAttribute("position");


        player.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var entity = document.querySelector("#steps");
        entity.components.sound.playSound();
        var camera = document.querySelector("#camera").object3D;

        // Establecer la dirección de la cámara como un vector de Three.js
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);


                // Establecer la velocidad y su dirección
        player.setAttribute("velocity", direction.multiplyScalar(-10));  
        var scene = document.querySelector("#player");  
        scene.appendChild(player);
      }
    });
  },
});
