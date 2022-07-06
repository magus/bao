// import * as React from "react";
// import chalk from "chalk";

// 'http.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file.
// Add an import, export, or an empty 'export {}' statement to make it a module.ts(1208)
export const MODULE = true;

console.log("Starting HTTP server ...");

const ServerConfig = {
  // better error pages
  development: false,
  // if error returns a string, it will be returned instead of default error page
  error(error: Error) {
    // return new Response("Uh oh!!\n" + error.toString(), { status: 500 });
    throw new Error("error in error handler function");
  },

  port: 3000,
  fetch(request) {
    console.debug(`[${request.method}]`, request.url);
    // console.debug(Object.keys(request));

    const url = new URL(request.url);

    switch (url.pathname) {
      case "/": {
        return new Response(JSON.stringify({ message: "Welcome to Bun!" }));
      }

      default: {
        throw new Error(`[${url.pathname}] unhandled request path`);
      }
    }
  },
};

// // If the file used to start bun has a default export with a fetch function, it will start the http server.
// // https://github.com/Jarred-Sumner/bun#bunserve---fast-http-server
// export default ServerConfig;

// Bun.serve starts the http server explicitly
// why does this `Cannot find name 'Bun'.ts(2304)` when this is a .ts file?
Bun.serve(ServerConfig);

console.log(">", "http://localhost:3000");
