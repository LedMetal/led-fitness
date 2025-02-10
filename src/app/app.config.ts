import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyDL8zNtCEMkmTAjGjV3qZi3JFyfo5w7Tuw',
  authDomain: 'led-fitness-9edae.firebaseapp.com',
  projectId: 'led-fitness-9edae',
  storageBucket: 'led-fitness-9edae.firebasestorage.app',
  messagingSenderId: '1080888119156',
  appId: '1:1080888119156:web:63bfc9aba1943718dee621',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
