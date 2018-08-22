import { storiesOf } from '@storybook/angular';
import { SplashScreenComponent, HealthService } from '../dead-simple-splash-screen';

storiesOf('Splash Screen', module)
  .add('default', () => ({
    component: SplashScreenComponent,
    // props: {
    //   url: 'http://localhost:3000/status'
    // },
    // moduleMetadata: {
    //   providers: [
    //     HealthService
    //   ]
    // }
  }));
