import { describe, it, expect } from 'vitest';
import { Call } from '../src/Call';
import { Direction } from '../src/Direction';
import { Lift } from '../src/Lift';
import { LiftSystem } from '../src/LiftSystem';
import { LiftSystemPrinter } from './LiftSystemPrinter';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadApprovedFile(filename: string): string {
    return readFileSync(join(__dirname, filename), 'utf-8');
}

describe('LiftPrinter', () => {
    it('no lifts', () => {
        const floors = [0, 1, 2, 3];
        const liftSystem = new LiftSystem(floors);
        const actual = new LiftSystemPrinter().print(liftSystem);
        const approved = loadApprovedFile('LiftPrinter.no_lifts.approved.txt');
        
        expect(actual).toBe(approved);
    });

    it('one lift no doors', () => {
        const liftA = new Lift({ id: "A", floor: 0, requests: [2, 3] });
        const floors = [0, 1, 2, 3];
        const liftSystem = new LiftSystem(floors, [liftA]);
        const actual = new LiftSystemPrinter().printWithoutDoors(liftSystem);
        const approved = loadApprovedFile('LiftPrinter.one_lift_no_doors.approved.txt');
        
        expect(actual).toBe(approved);
    });

    it('sample lift system', () => {
        const liftA = new Lift({ id: "A", floor: 3, requests: [0], doorsOpen: false });
        const liftB = new Lift({ id: "B", floor: 2 });
        const liftC = new Lift({ id: "C", floor: 2, doorsOpen: false });
        const liftD = new Lift({ id: "D", floor: 0, requests: [0], doorsOpen: false });
        const floors = [0, 1, 2, 3];
        const lifts = [liftA, liftB, liftC, liftD];
        const calls = [new Call(1, Direction.down)];
        const liftSystem = new LiftSystem(floors, lifts, calls);
        const actual = new LiftSystemPrinter().print(liftSystem);
        const approved = loadApprovedFile('LiftPrinter.sample_lift_system.approved.txt');
        
        expect(actual).toBe(approved);
    });

    it('large lift system', () => {
        const liftA = new Lift({ id: "A", floor: 3, requests: [3, 5, 7], doorsOpen: false });
        const liftB = new Lift({ id: "B", floor: 2, doorsOpen: true });
        const liftC = new Lift({ id: "C", floor: -2, requests: [-2, 0], doorsOpen: false });
        const liftD = new Lift({ id: "D", floor: 8, requests: [0, -1, -2], doorsOpen: true });
        const liftSVC = new Lift({ id: "SVC", floor: 10, requests: [0, -1], doorsOpen: false });
        const liftF = new Lift({ id: "F", floor: 8, doorsOpen: false });
        const floors = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const lifts = [liftA, liftB, liftC, liftD, liftSVC, liftF];
        const calls = [
            new Call(1, Direction.down),
            new Call(6, Direction.down),
            new Call(5, Direction.up),
            new Call(5, Direction.down),
            new Call(-1, Direction.up),
        ];
        const liftSystem = new LiftSystem(floors, lifts, calls);
        const actual = new LiftSystemPrinter().print(liftSystem);
        const approved = loadApprovedFile('LiftPrinter.large_lift_system.approved.txt');
        
        expect(actual).toBe(approved);
    });
});

