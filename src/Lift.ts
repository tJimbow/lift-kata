export interface LiftConfig {
  id: number;
  floor: number;
  requests?: number[];
  doorsOpen: boolean;
}

export class Lift {
  private id: number;
  private floor: number;
  private requests: number[];
  private doorsOpen: boolean;

  constructor({ id, floor, requests = [], doorsOpen }: LiftConfig) {
    this.id = id;
    this.floor = floor;
    this.requests = requests;
    this.doorsOpen = doorsOpen;
  }

  getId(): number {
    return this.id;
  }

  getFloor(): number {
    return this.floor;
  }

  getRequests(): number[] {
    return this.requests;
  }

  areDoorsOpen(): boolean {
    return this.doorsOpen;
  }

  hasRequestForFloor(floor: number): boolean {
    return this.requests.includes(floor);
  }
}

