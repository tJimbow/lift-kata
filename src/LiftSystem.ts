import { Lift } from './Lift';
import { Call } from './Call';

export class LiftSystem {
  private floors: number[];
  private lifts: Lift[];
  private calls: Call[];

  constructor(floors: number[] = [], lifts: Lift[] = [], calls: Call[] = []) {
    this.floors = floors;
    this.lifts = lifts;
    this.calls = calls;
  }

  getLifts(): Lift[] {
    return this.lifts;
  }

  getFloorsInDescendingOrder(): number[] {
    return [...this.floors].reverse();
  }

  getCallsForFloor(floor: number): Call[] {
    return this.calls.filter(call => call.getFloor() === floor);
  }

  tick(): void {
    // TODO: implement this method
  }
}

