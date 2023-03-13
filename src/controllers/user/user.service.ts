export const getUser = () => {
    return new Promise((resolve, reject) => {
        resolve([
          { name: 'samrat', gf: 'smundra' },
          { name: 'nripesh', gf: 'samik' },
        ]);
    })
}

export const postUser = () => {
  return new Promise((resolve, reject) => {
      reject({
        message:"Random Error Occured"
    });
  });
};