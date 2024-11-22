import { readFile } from "fs";

readFile("./package.json", (err: Error, buffer: Buffer) => {
  //예외처리
  if (err) {
    throw err;
  } else {
    const content: string = buffer.toString();
    console.log(content);
    //콜백
    readFile("./tsconfig.json", (err: Error, buffer: Buffer) => {
      if (err) throw err;
      else {
        const content: string = buffer.toString();
        console.log(content);
      }
    });
  }
});
