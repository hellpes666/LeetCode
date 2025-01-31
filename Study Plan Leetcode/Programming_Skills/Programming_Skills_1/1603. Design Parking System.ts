class ParkingSystem {
    private big: number;
    private medium: number;
    private small: number;

    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                const condBig: boolean = this.big >= 1;
                if (condBig) {
                    this.big -= 1;
                }
                return condBig;
            case 2:
                const condMedium: boolean = this.medium >= 1;
                if (condMedium) {
                    this.medium -= 1;
                }
                return condMedium;

            case 3:
                const condSmall: boolean = this.small >= 1;
                if (condSmall) {
                    this.small -= 1;
                }
                return condSmall;
            default:
                return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
