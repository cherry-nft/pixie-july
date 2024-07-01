import type { PropDef } from './prop-def';

const textWrapValues = ['wrap', 'nowrap', 'pretty', 'balance'] as const;

const textWrapPropDef: { wrap: PropDef<(typeof textWrapValues)[number]> } = {
  wrap: {
    type: 'enum',
    className: 'rt-r-tw',
    values: textWrapValues,
    responsive: true,
  },
};

export { textWrapPropDef };
