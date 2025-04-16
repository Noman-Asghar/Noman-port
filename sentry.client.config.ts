// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://742f8f49bf1d3e132c56a188b00792d2@o4508064454279168.ingest.us.sentry.io/4508064467189760",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  integrations: [
    Sentry.replayIntegration({
      maskAllText:true,
      blockAllMedia: true
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark"
    })
  ]
});
