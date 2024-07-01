import type { PropDef } from './prop-def';

interface AsChildProp {
  /**
   * Composes the component into its immediate child instead of rendering its own HTML element.
   * You’ll have to provide a single React Element child.
   */
  asChild: PropDef<boolean>;
}

const asChildPropDef: AsChildProp = {
  asChild: {
    type: 'boolean',
  },
};

export { asChildPropDef };

