// Required libs
import path from 'path';
import { ConfigsInterface } from './../lib/marech-helpers/interfaces/configs-interface';

// Default names
const defaultNames = {
  filename: 'marech-config',
};

// Get default configs
const defaultConfigs = (input = 'src', output = 'dist', compnt = 'src/marech'):ConfigsInterface => {
  const configs = {
    input: {
      path: input,
      files: '**/*.html',
    },

    components: {
      path: compnt,
    },
    output: {
      path: output,
    },

  };
  return configs;
};

// Get 'default' configs with path changed
const simpleConfig = (confd:any) => {
  const { input, output, component } = confd;
  return defaultConfigs(input, output, component);
};

// Merge default configs with user configs
const mergeConfigs = (userConfigs:ConfigsInterface) => {
  const mergedConfigs = { ...defaultConfigs, ...userConfigs };

  return mergedConfigs;
};

// Convert relative paths to real paths
const resolveConfig = (config:object, dir = './'):ConfigsInterface => {
  const resolvedConfigs = JSON.parse(JSON.stringify(config));

  resolvedConfigs.components.path = path.join(path.resolve(dir), resolvedConfigs.components.path);
  resolvedConfigs.input.path = path.join(path.resolve(dir), (resolvedConfigs.input.path));
  resolvedConfigs.output.path = path.join(path.resolve(dir), resolvedConfigs.output.path);

  return resolvedConfigs;
};

// Export all
export =  {
  defaultNames,

  defaultConfigs,
  simpleConfig,

  mergeConfigs,

  resolveConfig,
};
