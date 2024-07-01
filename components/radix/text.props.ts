import {
  weightPropDef,
  textAlignPropDef,
  leadingTrimPropDef,
  highContrastPropDef,
  colorPropDef,
  textWrapPropDef,
  truncatePropDef,
  asChildPropDef,
} from '@props/index';
import type { PropDef } from '@props/index';

const as = ['span', 'div', 'label', 'p'] as const;
const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

interface TextPropDefs {
  as: PropDef<(typeof as)[number]>;
  size: PropDef<(typeof sizes)[number]>;
}

const textPropDefs: TextPropDefs = {
  as: { type: 'enum', values: as, default: 'span' },
  ...asChildPropDef,
  size: {
    type: 'enum',
    className: 'rt-r-size',
    values: sizes,
    responsive: true,
  },
  ...weightPropDef,
  ...textAlignPropDef,
  ...leadingTrimPropDef,
  ...truncatePropDef,
  ...textWrapPropDef,
  ...colorPropDef,
  ...highContrastPropDef,
};
export { textPropDefs };
