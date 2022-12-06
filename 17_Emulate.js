const {chromium, devices} = require('playwright');

// (async()=>{
//     const browser = await chromium.launch({headless:false});
//     const context = await browser.newContext();
//     // const context = await browser.newContext({viewport: {width:1600, height:1200}});
//     const page = await context.newPage();

//     await page.setViewportSize( {width:1600, height:1200})
//     await page.goto('http://todomvc.com/examples/react/#/')

//     // await browser.close();
// }) ()

// (async()=>{
//     const browser = await chromium.launch({headless:false});

//     const context = await browser.newContext({
//         locale: 'de-De',
//         timezoneId: 'Europe/Berlin',
//     });
//     const page = await context.newPage();

//     await page.goto('https://dateful.com/time-zone-converter')

//     // await browser.close();
// }) ()


// (async()=>{
//     const browser = await chromium.launch({headless:false});
// // set geolocation
//     const context = await browser.newContext({
//         geolocation:{longitude: 48.858455, latitude: 2.294474},
//         permissions: ['geolocation']
//     });
//     // or
//     // await context.grantPermissions(['geolocation']);
//     // await context.clearPermissions();
//     // await context.setGeolocation({longitude: 48.858455, latitude: 2.294474});
//     const page = await context.newPage();

//     await page.goto('https://www.maps.ie/coordinates.html')
//     page.click('#find-loc')

//     // await browser.close();
// }) ()

(async()=>{
    const browser = await chromium.launch({headless:false});
    const iPhone11 = devices['iPhone 11 Pro'];
    const context = await browser.newContext({...iPhone11});

    const page = await context.newPage();

    await page.goto('http://todomvc.com/examples/react/#/')

    // await browser.close();
}) ()
