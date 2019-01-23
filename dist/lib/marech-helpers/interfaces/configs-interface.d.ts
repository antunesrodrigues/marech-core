export interface ConfigsInterface {
    output: string;
    input: {
        path: string;
        files: string;
    };
    components: {
        path: string;
        filesByComponentName?: boolean;
        files?: {
            id: string;
            file: string;
        }[];
    };
}
