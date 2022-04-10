import Vector from "./Vector"

class RigidBody {
    position: Vector;
    velocity: Vector;
    acceleration: Vector;

    constructor(position: [x: number, y: number] | Vector) {
        this.position = position instanceof Array ? new Vector(...position) : position;
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);
    }
}

export default RigidBody