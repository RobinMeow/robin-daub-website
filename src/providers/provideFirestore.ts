import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  Firestore,
  connectFirestoreEmulator,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { environment } from '@environment';
import { LOG_FAILURE, LOG_SUCCESS } from '@macros';

function getFirestoreChecked(): Firestore {
  const productionFirestore: Firestore = getFirestore(getApp());

  if (environment.useEmulatorFirestore) {
    connectFirestoreEmulator(productionFirestore, 'localhost', 8080);

    fetch('http://localhost:8080', {
      mode: 'no-cors',
    })
      .then(() => LOG_SUCCESS('Firestore Emulator has been connected.'))
      .catch((reason) => {
        LOG_FAILURE(
          `Firestore Emulator has not been connected. \nPlease run 'npm run firestore-emu' to start up the firestore emulator before running 'ng serve' for testing.`,
        );
        throw reason;
      });
  }

  return productionFirestore;
}

export function provideFirstore(): EnvironmentProviders {
  return importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(getFirestoreChecked),
  );
}
