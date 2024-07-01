import { asChildPropDef } from '@props/index';
import type { PropDef } from '@props/index';

interface TabNavLinkProps {
  active: PropDef<boolean>;
}

const tabNavLinkPropDefs: TabNavLinkProps = {
  ...asChildPropDef,
  active: { type: 'boolean', default: false },
};

export { baseTabListPropDefs as tabNavRootPropDefs } from './base-tab-list.props';
export { tabNavLinkPropDefs };
