
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import { on } from 'events';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 60_000,  
  },
    reporter: [['html', { open: 'never' }]], // generates beautiful report

  use: {
    use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20_000,
    navigationTimeout: 60_000,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
    
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure'



  },

  

});
module.exports = config

