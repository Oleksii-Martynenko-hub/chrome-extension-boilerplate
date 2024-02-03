import { createRoot } from 'react-dom/client';

import { ROOT_ID, SHADOW_ROOT_ID } from './constants/element-ids';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

import App from '@pages/content/ui/app';
import injectedStyle from './injected.css?inline';

refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = ROOT_ID;

document.body.append(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = SHADOW_ROOT_ID;

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

const styleElement = document.createElement('style');
styleElement.innerHTML = injectedStyle;
shadowRoot.appendChild(styleElement);

createRoot(rootIntoShadow).render(<App />);
