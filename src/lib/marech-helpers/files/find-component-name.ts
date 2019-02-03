import { ConfigsInterface } from '../interfaces/configs-interface';

const findComponentFile:Function = (componentName:string, configs:ConfigsInterface) => {
  let file = `${componentName}.html`;

  if (configs.components.files) {
    configs.components.files.forEach((fl:{ id: string, file: string }) => {
      if (fl.id === componentName) {
        ({ file } = fl);
      }
    });
  }

  return file;
};

export =  findComponentFile;
