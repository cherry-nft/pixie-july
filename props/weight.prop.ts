import type { PropDef } from './prop-def';

const weights = ['light', 'regular', 'medium', 'bold'] as const;

const weightPropDef: { weight: PropDef<(typeof weights)[number]> } = {
  weight: {
    type: 'enum',
    className: 'rt-r-weight',
    values: weights,
    responsive: true,
  },
};

export { weightPropDef };
