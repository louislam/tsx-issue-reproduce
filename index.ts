import * as fs from "fs";

let start = Date.now();

setInterval(() => {
        console.log(`Loop`);
        fs.readdir("/tmp/tsx-0", (_, files) => {
            console.log(files);
        });

        // It is working
        if (Date.now() - start > 10000) {
            process.exit();
        }
}, 2000);
