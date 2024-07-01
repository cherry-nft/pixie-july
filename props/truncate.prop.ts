import type { PropDef } from './prop-def';

const truncatePropDef: { truncate: PropDef<boolean> } = {
  truncate: {
    type: 'boolean',
    className: 'rt-truncate',
  },
};

export { truncatePropDef };
