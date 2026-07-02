

/* Options:
  -V, --version                          output the version number
  -h, --help                             display help for command

Commands:
  open [options] [url]                   open page in browser specified via -b, --browser
  codegen [options] [url]                open page and generate code for user actions
  install [options] [browser...]         ensure browsers necessary for this version of Playwright are installed
  uninstall [options]                    Removes browsers used by this installation of Playwright from the system
                                         (chromium, firefox, webkit, ffmpeg). This does not include branded channels.
  install-deps [options] [browser...]    install dependencies necessary to run browsers (will ask for sudo
                                         permissions)
  cr [options] [url]                     open page in Chromium
  ff [options] [url]                     open page in Firefox
  wk [options] [url]                     open page in WebKit
  screenshot [options] <url> <filename>  capture a page screenshot
  pdf [options] <url> <filename>         save page as pdf
  show-trace [options] [trace]           show trace viewer
  trace                                  inspect trace files from the command line
  test [options] [test-filter...]        run tests with Playwright Test
  show-report [options] [report]         show HTML report
  merge-reports [options] [dir]          merge multiple blob reports (for sharded tests) into a single report
  clear-cache [options]                  clears build and test caches
  init-agents [options]                  Initialize repository agents
  help [command]                         display help for command  */

/* node -v, npm -v
   npm init -y                  // to create package.json
   npm install playwright       // install playwrright
   npx playwright install       // run the command automatically

   npx playwright                 // for commands
   npx playwright --version
   npx playwright open https://sdet.live

   npx playwright install-deps
   npx playwright pdf https://sdet.live "sdet_live.pdf"

*/
