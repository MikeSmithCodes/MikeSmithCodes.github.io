The generic architecture I am following is based on the following modern modular approach:

website/
├── index.html
├── pages/
│   ├── about.html
│   ├── contact.html
│   └── services.html
├── src/
│   ├── css/
│   │   ├── base/
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── variables.css
│   │   ├── components/
│   │   │   ├── header.css
│   │   │   ├── footer.css
│   │   │   ├── buttons.css
│   │   │   └── forms.css
│   │   ├── pages/
│   │   │   ├── home.css
│   │   │   ├── about.css
│   │   │   └── contact.css
│   │   └── main.css          # Imports all other CSS
│   ├── js/
│   └── images/
├── dist/                     # Compiled/minified files
│   ├── css/
│   │   └── main.min.css
│   └── js/
└── package.json              # If using build tools

(Please note this is not the actual site structure but a rough guideline.)
