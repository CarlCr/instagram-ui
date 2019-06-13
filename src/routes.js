import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import App from '~/pages/Index';

const Routes = createAppContainer(createSwitchNavigator({ App }));

export default Routes;
