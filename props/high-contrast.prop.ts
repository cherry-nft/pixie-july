import type { PropDef } from './prop-def';

const highContrastPropDef: { highContrast: PropDef<boolean> } = {
  highContrast: {
    type: 'boolean',
    className: 'rt-high-contrast',
    default: undefined,
  },
};

export { highContrastPropDef };
