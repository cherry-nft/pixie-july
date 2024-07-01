import {
  asChildPropDef,
  accentColorPropDef,
  highContrastPropDef,
  radiusPropDef,
} from '@props/index';
import type { PropDef } from '@props/index';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'] as const;

const baseButtonPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'solid' },
  ...accentColorPropDef,
  ...highContrastPropDef,
  ...radiusPropDef,
  loading: { type: 'boolean', className: 'rt-loading', default: false },
};

export { baseButtonPropDefs };
