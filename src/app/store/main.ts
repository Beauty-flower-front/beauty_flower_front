import { atom } from 'recoil';

const test = atom({
  key: 'test',
  default: 'hello yeheum!',
});

export { test };
