/**
 * Created by miguhruiz on 7/12/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)