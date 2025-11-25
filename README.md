# lift-kata

Kata de simulation de système d'ascenseur en TypeScript.

## Modules

- **Direction** : Constantes pour les directions (up/down)
- **Call** : Représente un appel d'ascenseur avec étage et direction
- **Lift** : Représente un ascenseur avec son état (étage, requêtes, portes)
- **LiftSystem** : Système de gestion des ascenseurs

## Structure du projet

```
lift-kata/
├── src/          # Code source TypeScript
│   ├── Direction.ts
│   ├── Call.ts
│   ├── Lift.ts
│   ├── LiftSystem.ts
│   └── index.ts
├── test/         # Tests Vitest (.spec.ts)
├── coverage/     # Rapport de couverture (généré)
└── node_modules/ # Dépendances
```

## Installation

```bash
npm install
```

## Scripts disponibles

### Tests (Vitest)
- `npm test` - Lance les tests en mode watch
- `npm run test:ui` - Lance l'interface UI de Vitest
- `npm run test:coverage` - Lance les tests avec le rapport de couverture

### Linting (ESLint)
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les problèmes ESLint

## Configuration

- **Vitest** : Configuration dans `vitest.config.ts`
  - Tests : `test/**/*.spec.ts`
  - Couverture : `src/**/*.ts`
- **ESLint** : Configuration dans `eslint.config.mjs`
  - Source : `src/**/*.ts`
  - Tests : `test/**/*.spec.ts`
- **TypeScript** : Configuration dans `tsconfig.json`
  - Alias de chemin `@/*` pointant vers `src/*`
