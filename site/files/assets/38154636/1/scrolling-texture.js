var ScrollingTexture = pc.createScript('scrollingTexture');

ScrollingTexture.attributes.add('materialAsset', {
    type: 'asset'
});

ScrollingTexture.attributes.add('speed', {
    type: 'vec2'
});

ScrollingTexture.tmp = new pc.Vec2();

// initialize code called once per entity
ScrollingTexture.prototype.initialize = function() {
    // get the material that we will animate
    if (this.materialAsset) {
        this.material = this.materialAsset.resource;
    } 
};

// update code called every frame
ScrollingTexture.prototype.update = function(dt) {
    if(this.material) {
        var tmp = ScrollingTexture.tmp;
    
        // Calculate how much to offset the texture
        // Speed * dt
        tmp.set(this.speed.x, this.speed.y);
        tmp.scale(dt);

        // Update the diffuse and X map offset values
        this.material.diffuseMapOffset.add(tmp);
        this.material.opacityMapOffset.add(tmp);
        this.material.normalMapOffset.add(tmp);
        this.material.glossMapOffset.add(tmp);
        this.material.emissiveMapOffset.add(tmp);
        this.material.update();
    }
};
