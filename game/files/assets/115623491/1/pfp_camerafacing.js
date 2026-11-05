var PfpCamerafacing = pc.createScript('pfpCamerafacing');

// initialize code called once per entity
PfpCamerafacing.prototype.initialize = function() {
    this.initialPosition = this.entity.getPosition().clone();
    this.initialRotation = this.entity.getEulerAngles().clone();
};

// update code called every frame
PfpCamerafacing.prototype.update = function(dt) {    
    // Rotate the object about the y axis to face the camera
    
    // Rotate the object slightly 
    var rot = this.entity.getEulerAngles().clone();
    rot.x = this.initialRotation.x + Math.cos(this.time * 0.1) * 1;
    rot.z = this.initialRotation.z + Math.sin(this.time * 0.25) * 2;
    this.entity.setLocalEulerAngles(rot.x,rot.y,rot.z);
};

// swap method called for script hot-reloading
// inherit your script state here
// PfpCamerafacing.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/