import * as fs from "fs";

setInterval(() => {
        console.log(`Forever Loop`);
        fs.readdir("/tmp/tsx-0", (_, files) => {
            console.log(files);
        });
}, 2000);
