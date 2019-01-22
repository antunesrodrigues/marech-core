export interface ConfigsInterface {
    output: string;
    input: {
        path: string;
        files: string;
    };
    telegs: {
        path: string;
        filesByTelegName?: boolean;
        files?: {
            id: string;
            file: string;
        }[];
    };
}
