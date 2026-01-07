import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { App } from './app/app';

bootstrapApplication(App, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideBrowserGlobalErrorListeners()
    ]
})
  .catch(err => console.error(err));
