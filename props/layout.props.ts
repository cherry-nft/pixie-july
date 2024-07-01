import { paddingPropDefs } from './padding.props';
import type { PropDef, GetPropDefTypes } from './prop-def';
import { heightPropDefs } from './height.props';
import { widthPropDefs } from './width.props';

const overflowValues = ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const;
const positionValues = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const;
// prettier-ignore
const positionEdgeValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;
const flexShrinkValues = ['0', '1'] as const;
const flexGrowValues = ['0', '1'] as const;

const layoutPropDefs = {
  ...paddingPropDefs,
  ...widthPropDefs,
  ...heightPropDefs,
  position: {
    type: 'enum',
    className: 'rt-r-position',
    values: positionValues,
    responsive: true,
  },
  inset: {
    type: 'enum | string',
    className: 'rt-r-inset',
    customProperties: ['--inset'],
    values: positionEdgeValues,
    responsive: true,
  },
  top: {
    type: 'enum | string',
    className: 'rt-r-top',
    customProperties: ['--top'],
    values: positionEdgeValues,
    responsive: true,
  },
  right: {
    type: 'enum | string',
    className: 'rt-r-right',
    customProperties: ['--right'],
    values: positionEdgeValues,
    responsive: true,
  },
  bottom: {
    type: 'enum | string',
    className: 'rt-r-bottom',
    customProperties: ['--bottom'],
    values: positionEdgeValues,
    responsive: true,
  },
  left: {
    type: 'enum | string',
    className: 'rt-r-left',
    customProperties: ['--left'],
    values: positionEdgeValues,
    responsive: true,
  },
  overflow: {
    type: 'enum',
    className: 'rt-r-overflow',
    values: overflowValues,
    responsive: true,
  },
  overflowX: {
    type: 'enum',
    className: 'rt-r-ox',
    values: overflowValues,
    responsive: true,
  },
  overflowY: {
    type: 'enum',
    className: 'rt-r-oy',
    values: overflowValues,
    responsive: true,
  },
  flexBasis: {
    type: 'string',
    className: 'rt-r-fb',
    customProperties: ['--flex-basis'],
    responsive: true,
  },
  flexShrink: {
    type: 'enum | string',
    className: 'rt-r-fs',
    customProperties: ['--flex-shrink'],
    values: flexShrinkValues,
    responsive: true,
  },
  flexGrow: {
    type: 'enum | string',
    className: 'rt-r-fg',
    customProperties: ['--flex-grow'],
    values: flexGrowValues,
    responsive: true,
  },
  gridColumn: {
    type: 'string',
    className: 'rt-r-gc',
    customProperties: ['--grid-column'],
    responsive: true,
  },
  gridColumnStart: {
    type: 'string',
    className: 'rt-r-gcs',
    customProperties: ['--grid-column-start'],
    responsive: true,
  },
  gridColumnEnd: {
    type: 'string',
    className: 'rt-r-gce',
    customProperties: ['--grid-column-end'],
    responsive: true,
  },
  gridRow: {
    type: 'string',
    className: 'rt-r-gr',
    customProperties: ['--grid-row'],
    responsive: true,
  },
  gridRowStart: {
    type: 'string',
    className: 'rt-r-grs',
    customProperties: ['--grid-row-start'],
    responsive: true,
  },
  gridRowEnd: {
    type: 'string',
    className: 'rt-r-gre',
    customProperties: ['--grid-row-end'],
    responsive: true,
  },
};

type LayoutProps = GetPropDefTypes<
  typeof paddingPropDefs & typeof widthPropDefs & typeof heightPropDefs & typeof layoutPropDefs
>;

export { layoutPropDefs };
export type { LayoutProps };
