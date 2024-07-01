import type { PropDef } from './prop-def';

// prettier-ignore
const accentColors = ['gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky'] as const;

const grayColors = ['auto', 'gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const;

const colorPropDef: { color: PropDef<(typeof accentColors)[number]> } = {
  color: {
    type: 'enum',
    values: accentColors,
    default: undefined as (typeof accentColors)[number] | undefined,
  },
};

const accentColorPropDef: { color: PropDef<(typeof accentColors)[number]> } = {
  color: {
    type: 'enum',
    values: accentColors,
    default: '' as (typeof accentColors)[number],
  },
};

export {
  accentColorPropDef,
  colorPropDef,
  //
  accentColors,
  grayColors,
};
