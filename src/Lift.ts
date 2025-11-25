export interface LiftConfig {
  id: string;
  floor: number;
  requests?: number[];
  doorsOpen?: boolean;
}

export class Lift {
  private id: string;
  private floor: number;
  private requests: number[];
  private doorsOpen: boolean;

  constructor({ id, floor, requests = [], doorsOpen = false }: LiftConfig) {
    this.id = id;
    this.floor = floor;
    this.requests = requests;
    this.doorsOpen = doorsOpen;
  }

  getId(): string {
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

