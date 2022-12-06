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
    retries: 2,
    timeout: 60000,
    projects: [
        {
          name: 'Chromium 600x800',
          use: { browserName: 'chromium',  viewport:{width: 600, height: 800},},
        },
        {
            name: 'Chromium 1280x720',
            use: { browserName: 'chromium',  viewport:{width: 1280, height: 720},},
          },
        {
          name: 'Webkit',
          use: { browserName: 'webkit',},
        },
      ],
}

module.exports = config