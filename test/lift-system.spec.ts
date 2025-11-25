import { describe, it, expect } from 'vitest';
import { Direction, Call, Lift, LiftSystem } from '../src/index';

describe('Direction', () => {
  it('should have up and down constants', () => {
    expect(Direction.up).toBe('up');
    expect(Direction.down).toBe('down');
  });
});

describe('Call', () => {
  it('should store floor and direction', () => {
    const call = new Call(3, Direction.up);
    
    expect(call.getFloor()).toBe(3);
    expect(call.getDirection()).toBe(Direction.up);
  });
});

describe('Lift', () => {
  it('should initialize with config', () => {
    const lift = new Lift({
      id: 1,
      floor: 0,
      requests: [3, 5],
      doorsOpen: false
    });

    expect(lift.getId()).toBe(1);
    expect(lift.getFloor()).toBe(0);
    expect(lift.getRequests()).toEqual([3, 5]);
    expect(lift.areDoorsOpen()).toBe(false);
  });

  it('should have default empty requests', () => {
    const lift = new Lift({
      id: 1,
      floor: 0,
      doorsOpen: true
    });

    expect(lift.getRequests()).toEqual([]);
  });

  it('should check if has request for floor', () => {
    const lift = new Lift({
      id: 1,
      floor: 0,
      requests: [3, 5, 7],
      doorsOpen: false
    });

    expect(lift.hasRequestForFloor(3)).toBe(true);
    expect(lift.hasRequestForFloor(5)).toBe(true);
    expect(lift.hasRequestForFloor(2)).toBe(false);
  });
});

describe('LiftSystem', () => {
  it('should initialize with empty arrays', () => {
    const system = new LiftSystem();
    
    expect(system.getLifts()).toEqual([]);
    expect(system.getFloorsInDescendingOrder()).toEqual([]);
  });

  it('should return lifts', () => {
    const lift1 = new Lift({ id: 1, floor: 0, doorsOpen: false });
    const lift2 = new Lift({ id: 2, floor: 3, doorsOpen: true });
    const system = new LiftSystem([], [lift1, lift2], []);

    const lifts = system.getLifts();
    expect(lifts).toHaveLength(2);
    expect(lifts[0].getId()).toBe(1);
    expect(lifts[1].getId()).toBe(2);
  });

  it('should return floors in descending order', () => {
    const system = new LiftSystem([0, 1, 2, 3, 4], [], []);
    
    expect(system.getFloorsInDescendingOrder()).toEqual([4, 3, 2, 1, 0]);
  });

  it('should return calls for specific floor', () => {
    const call1 = new Call(3, Direction.up);
    const call2 = new Call(5, Direction.down);
    const call3 = new Call(3, Direction.down);
    const system = new LiftSystem([], [], [call1, call2, call3]);

    const callsForFloor3 = system.getCallsForFloor(3);
    expect(callsForFloor3).toHaveLength(2);
    expect(callsForFloor3[0].getFloor()).toBe(3);
    expect(callsForFloor3[1].getFloor()).toBe(3);
  });
});

