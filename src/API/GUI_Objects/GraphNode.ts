export class GraphNode {
    private x
    private y
    public readonly id: number
    public static radius = 40
    public NodeInfo = {}

    constructor(x: number, y: number, id: number) {
        this.id = id
        this.x = x
        this.y = y
    }

    // Utility functions
    public GetX(): number {
        return this.x
    }

    public GetY(): number {
        return this.y
    }

    public SetX(x: number): number {
        return this.x = x
    }

    public SetY(y: number): number {
        return this.y = y
    }
}