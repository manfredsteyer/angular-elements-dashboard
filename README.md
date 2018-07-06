# Angular Elements Dashboard Demo

Shows how to dynamically load and create Angular Elements (Custom Elements, Web Components).

![Show Case](./img.png)

Features:
- Dynamically create app-internal Angular Elements
- Lazy load app-internal Angular Elements
- Load external Custom Elements

Remarks:
- The external Custom Element is built with [ngx-build-plus](https://www.npmjs.com/package/ngx-build-plus)
- The example uses the ``@webcomponents/custom-elements`` polyfill (see references in ``angular.json`` and ``polyfills.ts``)
- For lazy loading without the router, the lazy module is also mentioned in ``angular.json``.
- External Components will become much smaller when ngIvy arrives (planned for Angular 7)
- For sharing dependencies b/w components, lookup [ngx-build-plus](https://www.npmjs.com/package/ngx-build-plus)

## Start

Build the external Custom Elements project before starting the main project:

```
npm install
npm run build:ce
npm start
```

