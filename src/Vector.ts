class Vector {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(quantity: Vector | number): void {
        if (typeof quantity === "number") {
            this.x += quantity;
            this.y += quantity;
        } else {
            this.x += quantity.x;
            this.y += quantity.y;
        }
    }
    sub(quantity: Vector | number): void {
        if (typeof quantity === "number") {
            this.x -= quantity;
            this.y -= quantity;
        } else {
            this.x -= quantity.x;
            this.y -= quantity.y;
        }
    }
    mul(quantity: Vector | number): void {
        if (typeof quantity === "number") {
            this.x *= quantity;
            this.y *= quantity;
        } else {
            this.x *= quantity.x;
            this.y *= quantity.y;
        }
    }
    div(quantity: Vector | number): void {
        if (typeof quantity === "number") {
            this.x /= quantity;
            this.y /= quantity;
        } else {
            this.x /= quantity.x;
            this.y /= quantity.y;
        }
    }
    getMag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    setMag(mag: number): void {
        let ratio: number = mag / this.getMag();
        this.mul(ratio);
    }
    limitMag(max: number): void {
        if (this.getMag() > max) {
            this.setMag(max);
        }
    }
    static add(vector: Vector, quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            return new Vector(vector.x + quantity, vector.y + quantity);
        } else {
            return new Vector(vector.x + quantity.x, vector.y + quantity.y);
        }
    }
    static sub(vector: Vector, quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            return new Vector(vector.x - quantity, vector.y - quantity);
        } else {
            return new Vector(vector.x - quantity.x, vector.y - quantity.y);
        }
    }
    static mul(vector: Vector, quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            return new Vector(vector.x * quantity, vector.y * quantity);
        } else {
            return new Vector(vector.x * quantity.x, vector.y * quantity.y);
        }
    }
    static div(vector: Vector, quantity: Vector | number): Vector {
        if (typeof quantity === "number") {
            return new Vector(vector.x / quantity, vector.y / quantity);
        } else {
            return new Vector(vector.x / quantity.x, vector.y / quantity.y);
        }
    }
    static getMag(vector: Vector): number {
        return vector.getMag();
    }
}

export default Vector;