const sendError = (message:string = '') => {
  throw new Error(message);
};

export =  sendError;
