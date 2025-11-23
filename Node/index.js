// import { sum, sub } from "./Maths.js";
// import kuchBhi from "./Maths.js";

// // console.log(kuchBhi(1, 3));

// import * as googleTTS from "google-tts-api"; // ES6 or TypeScript

// // get audio URL
// // const url = googleTTS.getAudioUrl("Hello World To the node kfjwfojefhewbfkwebhfbhk", {
// //   lang: "en",
// //   slow: false,
// //   host: "https://translate.google.com",
// // });
// // console.log(url); // https://translate.google.com/translate_tts?...

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Saurabh Bansal");
//   console.log(text);
// }

// doStuff();

// import os from 'node:os';

// console.log(os.arch())

import fs from "fs";

// Creating a new file and also writing content in the file
//  const data = fs.writeFileSync("./test1.txt", "Content chnaged");

const data = fs.writeFileSync(
  "./test/test.js",
  'import fs from "fs"; fs.unlinkSync("./myfile.txt");'
);

// This will delete the file
// fs.unlinkSync("./myfile.txt");

// fs.mkdirSync("./test")
