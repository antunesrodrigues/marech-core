import lib from '../lib';

interface ArgsType {
  [propName:string]: string;
}

const marechalCore = (componentHtml:string, args:ArgsType, defaultArgs:ArgsType = {}) => {
  // Define final component
  let finalComponent = componentHtml;

  // Go to each {...}
  const directives = finalComponent.match(/{( *).+( *)}/g);
  if (directives) {
    for (let i = 0; i < directives.length; i += 1) {
      const directive = directives[i];
      const directiveName = directive.replace(/{|}/g, '');

      const argsDirective = args[directiveName];
      const defaultDirective = defaultArgs[directiveName];

      const replace = argsDirective || defaultDirective || '';

      finalComponent = finalComponent.replace(new RegExp(`${directive}`, 'g'), replace);
    }
  }

  // Resolve JS outputs
  const rjs = finalComponent.match(/JS\(([^](?!(>)))*\)/g);
  if (rjs) {
    rjs.forEach((e) => {
      finalComponent = finalComponent.replace(e, lib.functions.resolveFunction(e));
    });
  }

  // Remove marech tag definition
  finalComponent = finalComponent.replace(lib.padroes.regExp.marechDef, '').trimLeft();
  return finalComponent;
};

export default marechalCore;
