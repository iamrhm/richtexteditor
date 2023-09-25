import fs from 'fs';
import path from 'path';

import data from '../data/data.json';
import { IParsedRichData } from '@packages/types';


export const writeToFile = (newData: IParsedRichData): void => {
  const updatedData: IParsedRichData[] = data;
  updatedData.push(newData);
  fs.writeFileSync(
    path.resolve('/Users/rahulmitra/Projects/personal/richtexteditor/demo/data/data.json'),
    JSON.stringify(updatedData, null, 2)
  );
};