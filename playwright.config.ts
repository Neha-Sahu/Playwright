// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',                    // ← This is the key line!
  testMatch: '**/*.spec.ts',             // ← Finds all .spec.ts files in subfolders
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,       // Auto-retry in CI
  reporter: [
    ['html'],                            // Beautiful HTML report
    ['junit', { outputFile: 'playwright-report/results.xml' }]
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
});
