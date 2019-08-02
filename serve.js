const { spawn } = require("child_process");
const args = ["start"];
const client = { stdio: "inherit", cwd: "client", shell: true };
const api = { stdio: "inherit", cwd: "api", shell: true };

spawn("yarn", args, api);
spawn("yarn", args, client);
