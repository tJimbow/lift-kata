import { describe, it, expect } from 'vitest';
import { Lift } from '../src/Lift';
import { LiftSystem } from '../src/LiftSystem';
import { LiftSystemPrinter } from './LiftSystemPrinter';

describe('LiftSystem', () => {
    // TODO: enable this test and finish writing it
    it.skip('do something', () => {
        const liftA = new Lift({ id: "A", floor: 0 });
        const floors = [0, 1, 2, 3];
        const liftSystem = new LiftSystem(floors, [liftA]);
        liftSystem.tick();
        const actual = new LiftSystemPrinter().print(liftSystem);
        
        // TODO: add assertion
        expect(actual).toBeDefined();
    });
});

