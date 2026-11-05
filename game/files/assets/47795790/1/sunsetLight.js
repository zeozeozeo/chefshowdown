var SunsetLight = pc.createScript('sunsetLight');

SunsetLight.attributes.add('duration', {
    type: 'number',
    default: 90
});
SunsetLight.attributes.add('colors', {type: 'curve', color: 'rgba', curves: [ 'x', 'y', 'z' ], title: "Colour gradient"});
// initialize code called once per entity
SunsetLight.prototype.initialize = function() {
    this.startTime = Date.now();
    this.endTime = Date.now() + this.duration * 1000;
};
// update code called every frame
SunsetLight.prototype.update = function(dt) {
    if(Date.now() < this.endTime) {
        const timeElapsed = Date.now() - this.startTime;
        const wavePerc = timeElapsed / (this.duration * 1000);
        const color = this.colors.value(wavePerc);
        this.entity.light.color = new pc.Color(color[0], color[1], color[2]);
    }
};