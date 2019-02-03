import { ConfigsInterface as CI } from '../lib/marech-helpers/interfaces/configs-interface';
declare const _default: {
    byFile: (file: string, relativeConfigs: CI, resolvedConfigs: CI) => string;
    byFileAndCreate: (workDir: string, file: string, relativeConfigs: CI, resolvedConfigs: CI) => void;
};
export = _default;
