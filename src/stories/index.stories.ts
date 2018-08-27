import { storiesOf } from '@storybook/angular';
import { SplashScreenComponent, HealthService } from '../dead-simple-splash-screen';

storiesOf('Splash Screen', module)

  .add('default', () => ({
    component: SplashScreenComponent,
    props: {
      endpoint: 'http://localhost:3000/status'
    },
    moduleMetadata: {
      providers: [
        { provide: HealthService, useValue: null }
      ]
    }
  }))

  .add('inverted', () => ({
    component: SplashScreenComponent,
    props: {
      endpoint: 'http://localhost:3000/status',
      textColor: "black",
      backgroundColor: "white"
    },
    moduleMetadata: {
      providers: [
        { provide: HealthService, useValue: null }
      ]
    }
  }))

  .add('green on yellow', () => ({
    component: SplashScreenComponent,
    props: {
      endpoint: 'http://localhost:3000/status',
      textColor: "green",
      backgroundColor: "yellow"
    },
    moduleMetadata: {
      providers: [
        { provide: HealthService, useValue: null }
      ]
    }
  }))
