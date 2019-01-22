import { ConfigsInterface } from './../lib/marech-helpers/interfaces/configs-interface';
declare const _default: {
    defaultNames: {
        filename: string;
    };
    defaultConfigs: (input?: string, output?: string, teleg?: string) => ConfigsInterface;
    simpleConfig: (confd: any) => ConfigsInterface;
    mergeConfigs: (userConfigs: ConfigsInterface) => {
        output: string;
        input: {
            path: string;
            files: string;
        };
        telegs: {
            path: string;
            filesByTelegName?: boolean | undefined;
            files?: {
                id: string;
                file: string;
            }[] | undefined;
        };
    };
    resolveConfig: (config: object, dir?: string) => ConfigsInterface;
};
export default _default;
