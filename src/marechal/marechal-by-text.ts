// Required libs
import path from 'path';

import lib from '../lib';
import marechalCore from './marechal-core';
import { ConfigsInterface } from './../lib/marech-helpers/interfaces/configs-interface';

const marechalByData = (originalData:string, configs:ConfigsInterface) => {
  // Keep original data and set it to another
  let finalData = originalData;

  // Go to each <Marech@...> tag
  const marechExp = lib.padroes.regExp.marechTag;

  while (finalData.match(marechExp)) {
    let match;
    while ((match = marechExp.exec(finalData))) {
      // Normalize if user use break-line inside marech tag
      match[0] = match[0].replace(/(\r|\t|\n| {2,})/g, ' ');

      // Text before MarechTag definition
      const beforeTag = lib.marechHelpers.beforeAndAfterMatch.before(finalData, match);
      // Before tag + tag
      const beforeAndTag = beforeTag + match[0];
      // Text after MarechTag definition
      const afterTag = lib.marechHelpers.beforeAndAfterMatch.after(finalData, match);

      // Get Component name
      const name = lib.marechHelpers.nameOrProps('name', match[0]);
      // Get Properties definition
      const props = lib.marechHelpers.nameOrProps('props', match[0]);
      // Pre-props (marech UX)
      const preProps = lib.marechHelpers.uxMarech(match[0], beforeAndTag);

      // Find component file from Marech@... definition
      const componentFile = lib.marechHelpers.findComponentName(name, configs);
      // Read the component
      const componentPath = path.join(configs.components.path, componentFile);
      const originalMarechComponent = lib.disk.file.readFile(componentPath);

      // Split to content and args
      const splitedItens = lib.marechHelpers.execObj(originalMarechComponent, props, preProps);
      const { marechComponent, args, defaultComponentArgs } = splitedItens;

      // MarechalCORE
      const mareched = marechalCore(marechComponent, args, defaultComponentArgs);

      // Replace the <Marech@...> to imported component
      finalData = beforeTag + mareched + afterTag;
    }
  }

  // Convert multiples empty break lines to one only
  finalData = finalData.replace(/\n {3,}\n/g, '\n');

  // Return mareched
  return finalData;
};

export =  marechalByData;
