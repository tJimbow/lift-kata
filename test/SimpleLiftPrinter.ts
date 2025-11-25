import { getWhitespace } from './printHelpers/getWhitespace';
import type { Lift } from '../src/Lift';

export class SimpleLiftPrinter {
    printLiftForFloor(lift: Lift, floor: number): string {
        if (lift.getFloor() === floor) {
            return this.printLift(lift, floor);
        }
        
        const padding = getWhitespace(lift.getId().length);
        if (lift.hasRequestForFloor(floor)) {
            return "*" + padding;
        } else {
            return " " + padding;
        }
    }

    private printLift(lift: Lift, floor: number): string {
        if (lift.hasRequestForFloor(floor)) {
            return "*" + lift.getId();
        } else {
            return lift.getId() + " ";
        }
    }
}

