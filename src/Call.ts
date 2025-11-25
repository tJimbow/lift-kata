import { DirectionType } from './Direction';

export class Call {
  constructor(
    private floor: number,
    private direction: DirectionType
  ) {}

  getFloor(): number {
    return this.floor;
  }

  getDirection(): DirectionType {
    return this.direction;
  }
}

