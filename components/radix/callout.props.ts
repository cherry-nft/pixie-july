import { asChildPropDef, accentColorPropDef, highContrastPropDef } from '@props/index';
import type { PropDef } from '@props/index';

const sizes = ['1', '2', '3'] as const;
const variants = ['soft', 'surface', 'outline'] as const;

const calloutRootPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'soft' },
  ...accentColorPropDef,
  ...highContrastPropDef,
};

export { calloutRootPropDefs };
