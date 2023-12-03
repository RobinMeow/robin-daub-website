import { EnvironmentProviders, isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

export function providePwa(): EnvironmentProviders {
  return provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:3000',
  });
}
