import { Direction } from '../src/Direction';
import { LiftAndDoorPrinter } from './LiftAndDoorPrinter';
import { getWhitespace } from './printHelpers/getWhitespace';
import { SimpleLiftPrinter } from './SimpleLiftPrinter';
import type { LiftSystem } from '../src/LiftSystem';
import type { Lift } from '../src/Lift';
import type { Call } from '../src/Call';

interface LiftPrinter {
    printLiftForFloor(lift: Lift, floor: number): string;
}

export class LiftSystemPrinter {
    print(liftSystem: LiftSystem, liftPrinter: LiftPrinter = new LiftAndDoorPrinter()): string {
        const builder: string[] = [];
        const floorLength = this.calculateFloorLength(liftSystem.getFloorsInDescendingOrder());
        for (const floor of liftSystem.getFloorsInDescendingOrder()) {
            const floorPadding = getWhitespace(floorLength - floor.toString().length);
            builder.push(floorPadding);
            builder.push(floor.toString());

            const calls = liftSystem.getCallsForFloor(floor)
                .map(this.printCallDirection)
                .join("");
            // if there are less than 2 calls on a floor we add padding to keep everything aligned
            const callPadding = getWhitespace(2 - calls.length);
            builder.push(" ");
            builder.push(calls);
            builder.push(callPadding);

            builder.push(" ");
            const lifts = liftSystem.getLifts()
                .map(lift => liftPrinter.printLiftForFloor(lift, floor))
                .join(" ");
            builder.push(lifts);

            // put the floor number at both ends of the line to make it more readable when there are lots of lifts,
            // and to prevent the IDE from doing rstrip on save and messing up the approved files.
            builder.push(floorPadding);
            builder.push(floor.toString());

            builder.push('\n');
        }

        return builder.join("");
    }

    printWithoutDoors(liftSystem: LiftSystem): string {
        return this.print(liftSystem, new SimpleLiftPrinter());
    }

    private printCallDirection(call: Call): string {
        switch (call.getDirection()) {
            case Direction.down:
                return "v";
            case Direction.up:
                return "^";
            default:
                return " "; // should be unreachable
        }
    }

    private calculateFloorLength(floors: number[] = []): number {
        if (floors.length === 0) {
            throw new Error("InvalidArgumentExcpetion: Must have at least one floor");
        }

        const highestFloor = Math.max(...floors);
        const lowestFloor = Math.min(...floors);
        const highestFloorNameLength = highestFloor.toString().length;
        const lowestFloorNameLength = lowestFloor.toString().length;
        return Math.max(highestFloorNameLength, lowestFloorNameLength);
    }
}

