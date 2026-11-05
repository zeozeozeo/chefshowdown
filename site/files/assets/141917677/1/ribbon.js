var Ribbon = pc.createScript('ribbon');

Ribbon.attributes.add("lifetime", {type:"number", default:0.5});
Ribbon.attributes.add("xoffset", {type:"number", default:-0.8});
Ribbon.attributes.add("yoffset", {type:"number", default:1});
Ribbon.attributes.add("height", {type:"number", default:0.4});
Ribbon.attributes.add("colour", {type:"rgba", default: [0.945, 0.676, 0.0, 0.5]});
Ribbon.attributes.add("additive", {type:"boolean", default:true});

var MAX_VERTICES = 600;
var VERTEX_SIZE = 4;


Ribbon.prototype.initialize = function () {
      var shaderDefinition = {
        attributes: {
            aPositionAge: pc.SEMANTIC_POSITION
        },
        vshader: [
            "attribute vec4 aPositionAge;",
            "",
            "uniform mat4 matrix_viewProjection;",
            "uniform float trail_time;",
            "",
            "varying float vAge;",
            "",
            "void main(void)",
            "{",
            "    vAge = trail_time - aPositionAge.w;",
            "    gl_Position = matrix_viewProjection * vec4(aPositionAge.xyz, 1.0);",
            "}"
        ].join("\n"),
        fshader: [
            "precision mediump float;",
            "",
            "varying float vAge;",
            "",
            "uniform float trail_lifetime;",
            "uniform vec4 trail_colour;",
            "",
            "vec3 rainbow(float x)",
            "{",
                "float level = floor(x * 6.0);",
                "float r = float(level <= 2.0) + float(level > 4.0) * 0.5;",
                "float g = max(1.0 - abs(level - 2.0) * 0.5, 0.0);",
                "float b = (1.0 - (level - 4.0) * 0.5) * float(level >= 4.0);",
                "return vec3(r, g, b);",
            "}",
            "vec3 gold(float x)",
            "{",
                "return vec3(0.945, 0.676, 0.0);",
            "}",
            "void main(void)",
            "{",
//            "    gl_FragColor = vec4(gold(vAge / trail_lifetime), (1.0 - (vAge / trail_lifetime)) * 0.5);",            
            "    gl_FragColor = vec4(trail_colour.rgb, (1.0 - (vAge / trail_lifetime)) * trail_colour.a);",            
            "}"
        ].join("\n")
    };
    
    var shader = new pc.Shader(this.app.graphicsDevice, shaderDefinition);

    this.material = new pc.Material();
    this.material.shader = shader;
    this.material.setParameter('trail_time', 0);
    this.material.setParameter('trail_lifetime', this.lifetime);
    this.material.setParameter('trail_colour', [this.colour.r, this.colour.g, this.colour.b, this.colour.a]);
    this.material.cull = pc.CULLFACE_NONE;
    this.material.blend = true;
    this.material.blendSrc = pc.BLENDMODE_SRC_ALPHA;
    this.material.blendDst = this.additive ? pc.BLENDMODE_ONE : pc.BLENDMODE_ONE_MINUS_SRC_ALPHA;
    this.material.blendEquation = pc.BLENDEQUATION_ADD;
    this.material.depthWrite = false;

    this.timer = 0;

    // The generated ribbon vertices data
    this.vertices = [];

    // Vertex array to use with Mesh API and update the mesh
    this.vertexData = new Float32Array(MAX_VERTICES * VERTEX_SIZE);
    
    // Create the array for the vertex positions
    this.vertexIndexArray = [];
    for (var i = 0; i < this.vertexData.length; ++i) {
        this.vertexIndexArray.push(i);
    }
    
    // Prepare the mesh to be created into a mesh instance
    this.mesh = new pc.Mesh(this.app.graphicsDevice);
    this.mesh.clear(true, false);
    this.mesh.setPositions(this.vertexData, VERTEX_SIZE, MAX_VERTICES);
    this.mesh.setIndices(this.vertexIndexArray, MAX_VERTICES);
    this.mesh.update(pc.PRIMITIVE_TRISTRIP);

    // Create the mesh instance
    var meshInstance = new pc.MeshInstance(this.mesh, this.material);

    this.entity.addComponent('render', {
        meshInstances: [meshInstance],
        layers: [this.app.scene.layers.getLayerByName('World').id]
    });
    
    this.entity.render.enabled = false;
};


Ribbon.prototype.reset = function () {
    this.timer = 0;
    this.vertices = [];
};


Ribbon.prototype.spawnNewVertices = function () {
    var node = this.entity;
    var pos = node.getPosition();
    var yaxis = node.up.clone().scale(this.height);

    var s = this.xoffset;
    var e = this.yoffset;
    
    var spawnTime = this.timer;
    var vertexPair = [
        pos.x + yaxis.x * s, pos.y + yaxis.y * s, pos.z + yaxis.z * s, 
        pos.x + yaxis.x * e, pos.y + yaxis.y * e, pos.z + yaxis.z * e
    ];
    
    this.vertices.unshift({ spawnTime, vertexPair });
};


Ribbon.prototype.clearOldVertices = function () {
    for (var i = this.vertices.length - 1; i >= 0; i--) {
        var vp = this.vertices[i];
        if (this.timer - vp.spawnTime >= this.lifetime) {
            this.vertices.pop();
        } else {
            break;
        }
    }
};


Ribbon.prototype.prepareVertexData = function () {
    for (var i = 0; i < this.vertices.length; i++) {
        var vp = this.vertices[i];
        
        this.vertexData[i * 8 + 0] = vp.vertexPair[0];
        this.vertexData[i * 8 + 1] = vp.vertexPair[1];
        this.vertexData[i * 8 + 2] = vp.vertexPair[2];
        this.vertexData[i * 8 + 3] = vp.spawnTime;

        this.vertexData[i * 8 + 4] = vp.vertexPair[3];
        this.vertexData[i * 8 + 5] = vp.vertexPair[4];
        this.vertexData[i * 8 + 6] = vp.vertexPair[5];
        this.vertexData[i * 8 + 7] = vp.spawnTime;
        
        if (this.vertexData.length === i) {
            break;
        }
    }
};


Ribbon.prototype.update = function (dt) {
    this.timer += dt;
    this.material.setParameter('trail_time', this.timer);
    
    // Remove any old vertices at the end of the trail based on the timer value
    this.clearOldVertices();
    
    // Create new vertices on the updated position of the beginning of the trail
    this.spawnNewVertices();
    
    // Update the mesh
    if (this.vertices.length > 1) {
        this.prepareVertexData();
        var currentLength = this.vertices.length * 2;
        var limit = MAX_VERTICES;
        
        if (currentLength < limit) {
            limit = currentLength;
        }
        
        this.mesh.setPositions(this.vertexData, VERTEX_SIZE, limit);
        this.mesh.setIndices(this.vertexIndexArray, limit);
        this.mesh.update(pc.PRIMITIVE_TRISTRIP);
        this.entity.render.enabled = true;
    }
};
