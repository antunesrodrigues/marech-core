export interface ConfigsInterface {
    input: {
        path: string;
        files: string;
    };
    components: {
        path: string;
        files?: {
            id: string;
            file: string;
        }[];
    };
    output: {
        path: string;
    };
}
