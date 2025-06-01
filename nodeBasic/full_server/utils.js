import { readFile } from 'node:fs/promises';

export default function readDatabase(path) {
  return readFile(path, { encoding: 'utf-8' }).then((data) => {
    const lines = data.trim().split('\n').slice(1);

    const csList = [];
    const sweList = [];
    for (const line of lines) {
      const list = line.split(',');
      if (list[list.length - 1] === 'CS') {
        csList.push(list[0]);
      } else if (list[list.length - 1] === 'SWE') {
        sweList.push(list[0]);
      }
    }

    return {
      CS: csList,
      SWE: sweList,
    };
  }).catch((error) => {
    throw error;
  });
}
