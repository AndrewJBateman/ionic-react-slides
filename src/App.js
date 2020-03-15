import React from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader
} from '@ionic/react';

import './App.css';

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">Ionic React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <IonCard>
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1113&q=80" alt="view of mountain"/>
          <IonCardHeader>
            <IonCardTitle class="card-title">Look at this view</IonCardTitle>
            <IonCardSubtitle>Isn't it great?</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Although it does look cold</IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
