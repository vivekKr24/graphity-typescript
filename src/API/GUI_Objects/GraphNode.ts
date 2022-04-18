export class GraphNode {
    private readonly x
    private readonly y
    public readonly id: number
    public static radius = 40
    public NodeInfo = {}

    constructor(x: number, y: number, id: number) {
        this.id = id
        this.x = x
        this.y = y
    }

    //Event functions
    
    public static OnClick(click_x: number, click_y: number) {
        
    }

    // Utility functions
    public GetX(): number {
        return this.x
    }

    public GetY(): number {
        return this.y
    }
}