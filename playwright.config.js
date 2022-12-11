const config = {
    use: {
        baseURL: 'https://react-redux.realworld.io',
        // browserName: 'webkit',
        headless: false,
        // viewport:{width: 1280, height: 720},
        launchOptions: {
            sloMo:50,
        },
        video: 'on',
        screenshot: 'only-on-failure',
        trace:'on',
    },
    testDir: 'tests',
    // retries: 2,
    timeout: 60000,
    // projects: [
    //     {
    //       name: 'Chromium 600x800',
    //       use: { browserName: 'chromium',  viewport:{width: 600, height: 800},},
    //     },
    //     {
    //         name: 'Chromium 1280x720',
    //         use: { browserName: 'chromium',  viewport:{width: 1280, height: 720},},
    //       },
    //     {
    //       name: 'Webkit',
    //       use: { browserName: 'webkit',},
    //     },
    //   ],

    workers: 4, // or npx playwright test --workers 4; playwright runs test in parallel, to disable it set number of workers to 1
    //reporter: 'allure-playwright', // to use allure in your project run first: 
    //1)npm install -g allure-commandline --save-dev
    //2) run your tests (in your config reporter should be allure-playwright)
    //3) after generating allure report run: allure generate ./allure-results --clean && allure open ./allure-report

}

module.exports = config