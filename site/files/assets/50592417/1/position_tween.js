var PositionTween = pc.createScript('positionTween');

// make sure tween.js in in the project or this wont work!!!
// this bit up here populates the interface with tween options

PositionTween.attributes.add('startPosition', {
    type: 'vec3'
});

PositionTween.attributes.add('endPosition', {
    type: 'vec3'
});

PositionTween.attributes.add('speed', {
    type: 'number', default: 1
});

PositionTween.attributes.add('delay', {
    type: 'number', default: 0
});

// initialize code called once per entity
PositionTween.prototype.initialize = function() {
    //kicks off the animation initally
    this.animateLoop();
};

PositionTween.prototype.animateLoop = function() {
    this.entity.setLocalPosition(this.startPosition.x, this.startPosition.y, this.startPosition.z);
    // here's where i pasted the code from the tween tutorial, but i needed to precede it with '.this' and add the '.start()' to trigger tween on load - pc .SineOut is the easing!!
   this.entity.tween(this.entity.getLocalPosition()).to({x: this.endPosition.x, y: this.endPosition.y, z: this.endPosition.z}, this.speed, pc.Linear).delay(this.delay).start().once('complete', function(){
       //now this bit is calling it
       this.animateLoop();
    }.bind(this));
};

// update code called every frame
PositionTween.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// PositionTween.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
// 
// Notes: 'bind' to do with anonymous functions - reminds that thing what it can do it might forget otherwise