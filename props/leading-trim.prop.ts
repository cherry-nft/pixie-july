import type { PropDef } from './prop-def';
const leadingTrimValues = ['normal', 'start', 'end', 'both'] as const;

const leadingTrimPropDef = {
  trim: {
    type: 'enum',
    className: 'rt-r-lt',
    values: leadingTrimValues,
    responsive: true,
  } as PropDef<(typeof leadingTrimValues)[number]>,
};

export { leadingTrimPropDef };
