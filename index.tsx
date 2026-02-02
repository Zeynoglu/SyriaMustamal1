
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

class MustamalElement extends HTMLElement {
  private root: any;

  // الخصائص التي يمكن تغييرها من واجهة ويكس دون كود
  static get observedAttributes() {
    return ['user-data', 'primary-color', 'site-name', 'show-hero'];
  }

  connectedCallback() {
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    this.appendChild(container);

    this.root = createRoot(container);
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    if (this.root) {
      // قراءة القيم من واجهة ويكس
      const userData = this.getAttribute('user-data');
      const config = {
        user: userData ? JSON.parse(userData) : null,
        primaryColor: this.getAttribute('primary-color') || '#008fa0',
        siteName: this.getAttribute('site-name') || 'مستعمل.com',
        showHero: this.getAttribute('show-hero') !== 'false'
      };
      
      this.root.render(
        <React.StrictMode>
          <App config={config} />
        </React.StrictMode>
      );
    }
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount();
  }
}

if (!customElements.get('mustamal-app')) {
  customElements.define('mustamal-app', MustamalElement);
}

// تشغيل افتراضي للمعاينة
const standaloneRoot = document.getElementById('root');
if (standaloneRoot) {
  createRoot(standaloneRoot).render(<App config={{ primaryColor: '#008fa0', siteName: 'مستعمل.com', showHero: true }} />);
}
