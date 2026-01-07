import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import {appConfig} from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
