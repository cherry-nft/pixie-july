import type { PropDef } from './prop-def';

const textAlignValues = ['left', 'center', 'right'] as const;

const textAlignPropDef = {
  align: {
    type: 'enum',
    className: 'rt-r-ta',
    values: textAlignValues,
    responsive: true,
  } as PropDef<(typeof textAlignValues)[number]>,
};

export { textAlignPropDef };
