import { ConfigsInterface } from './../lib/marech-helpers/interfaces/configs-interface';
declare const _default: {
    defaultNames: {
        filename: string;
    };
    defaultConfigs: (input?: string, output?: string, compnt?: string) => ConfigsInterface;
    simpleConfig: (confd: any) => ConfigsInterface;
    mergeConfigs: (userConfigs: ConfigsInterface) => {
        input: {
            path: string;
            files: string;
        };
        components: {
            path: string;
            files?: {
                id: string;
                file: string;
            }[] | undefined;
        };
        output: {
            path: string;
        };
    };
    resolveConfig: (config: object, dir?: string) => ConfigsInterface;
};
export = _default;
