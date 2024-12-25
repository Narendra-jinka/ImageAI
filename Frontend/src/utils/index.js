import {surpriseMePrompts } from '../Constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(promt){
    const getRandomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[getRandomIndex];
    if(randomPrompt===promt) return getRandomPrompt(promt);

    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo,`download-${_id}.jpeg`);
}
