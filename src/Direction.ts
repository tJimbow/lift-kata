export const Direction = {
  up: "up",
  down: "down"
} as const;

export type DirectionType = typeof Direction[keyof typeof Direction];

