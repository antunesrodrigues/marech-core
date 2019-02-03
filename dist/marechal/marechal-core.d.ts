interface ArgsType {
    [propName: string]: string;
}
declare const marechalCore: (componentHtml: string, args: ArgsType, defaultArgs?: ArgsType) => string;
export = marechalCore;
