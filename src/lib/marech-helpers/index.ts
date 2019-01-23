// Attributes and properties
import nameOrProps from './attr-and-props/name-or-props';

import attrToObj from './attr-and-props/attr-to-obj';
import execObj from './attr-and-props/exec-obj';

// Files
import findComponentName from './files/find-component-name';

// General
import beforeAndAfterMatch from './general/before-and-after-match';
import uxMarech from './general/ux-marech';

// All itens
const itens:{ [propName: string]:any; } = {
  nameOrProps,

  attrToObj,
  execObj,

  findComponentName,

  beforeAndAfterMatch,
  uxMarech,
};

// Export all
export default itens;
