function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let result = -1;
    
    const len = points.length;
    for (let i = 0; i < len; i++) {
        const [px, py] = points[i];
        if (px === x || py === y) {
            const distance = Math.abs(px - x) + Math.abs(py - y);
            if (distance < minDistance) {
                minDistance = distance;
                result = i;
            }
        }
    }
    
    return result;
}