interface ArgsType {
    [propName: string]: string;
}
declare const marechalCore: (telegHtml: string, args: ArgsType, defaultArgs?: ArgsType) => string;
export default marechalCore;
