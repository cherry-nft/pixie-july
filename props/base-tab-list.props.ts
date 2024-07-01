import { colorPropDef, highContrastPropDef } from '@props/index';
import type { PropDef } from '@props/index';

const sizes = ['1', '2'] as const;
const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;
const justifyValues = ['start', 'center', 'end'] as const;

type BaseTabListProps = {
  size: PropDef<(typeof sizes)[number]>;
  wrap: PropDef<(typeof wrapValues)[number]>;
  justify: PropDef<(typeof justifyValues)[number]>;
  // Include types for colorPropDef and highContrastPropDef if they are not already included in PropDef
};

const baseTabListPropDefs: BaseTabListProps = {
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  wrap: {
    type: 'enum',
    className: 'rt-r-fw',
    values: wrapValues,
    responsive: true,
  },
  justify: {
    type: 'enum',
    className: 'rt-r-jc',
    values: justifyValues,
    responsive: true,
  },
  ...colorPropDef,
  ...highContrastPropDef,
};

export { baseTabListPropDefs };
