import type { PropDef } from '@props/index';

const sizes = ['1', '2', '3'] as const;

const spinnerPropDefs = {
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  loading: { type: 'boolean', default: true },
};

export { spinnerPropDefs };
