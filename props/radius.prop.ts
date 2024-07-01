import type { PropDef } from './prop-def';

const radii = ['none', 'small', 'medium', 'large', 'full'] as const;

const radiusPropDef: { radius: PropDef<(typeof radii)[number]> } = {
  radius: {
    type: 'enum',
    values: radii,
    default: undefined,
  },
};

export { radiusPropDef, radii };
