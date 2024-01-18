import * as fs from "fs";
import * as childProcess from "child_process";

let start = Date.now();

setInterval(() => {
        console.log(`Loop`);
        fs.readdir("/tmp/tsx-0", (_, files) => {
            console.log(files);
        });

        // It is working,
        if (Date.now() - start > 10000) {
            console.log("OK! Stopping this stack");
            childProcess.execSync("/usr/local/bin/docker-compose stop");
        }
}, 2000);
