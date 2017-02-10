import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { env } from './environments/environment';
import { AppModule } from './app/app.module';



if (env.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(()=> console.log('App started !'))
    .catch((err)=> console.error(err))
