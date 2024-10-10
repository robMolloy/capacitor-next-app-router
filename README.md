# capacitor nextjs app router walkthrough

## unresolved

- dynamic routes??? not possible - have to use query params

## prerequisites

- install cocoapods with `brew install cocoapods`
- install xcode and simulators

If at any point you run into a `missing cocoapods` simply navigate into your ios folder to the location of the .xcworkspace file/folder and run `pod init` followed by `pod install`

## installation

- create a next app

  - will only work if using the app router

- install dependencies

  - `npm i -D @capacitor/cli`
  - `npm i @capacitor/core @capacitor/ios`

- set up for build
  - add `output: "export"` to next.config.mjs
- build your web app `npm run build`
- Once `npm run build` has been run once use `npx cap sync` as it's quicker than `npm run build` and will update any new dependencies that have been added

- initiate capacitor with `npx cap init`

- add the native platform directories `npx cap add ios`

- `npx cap open ios` will open your app on xcode
- in xcode choose your device and run using the play button this should successfully show your web app in the simulator

- now set up live reload by adding server to your capacitor config. The file should now look like this;

```
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'my-app',
	webDir: 'out',
	server: {
		url: 'http://192.168.x.xx:3000',
		cleartext: true
	}
};
export default config;
```

- using the command `npx cap copy` will copy the capacitor config to the native app

- when dependencies change run `npx cap sync` to update

## Next14 - safe area css

- you will need to add `<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1" />` and make `env(safe-area-inset-top)` available use the following in global css.

```css
@supports (padding: max(0px)) {
  body {
    padding-top: env(safe-area-inset-top);
  }
}
```

- app directory - use object notation to describe the meta ta found in layout.tsx and [here](https://nextjs.org/docs/app/api-reference/functions/generate-viewport#width-initialscale-maximumscale-and-userscalable) or follow the extract below;

```ts
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};
```

- pages directory - use next/head `<Head>` tag with the above `<meta ...>` viewport as the children inside the \_app.page.tsx file. Also add the `<Head />` tag to the document but without any children.

## zustand

- zustand stores will not persist state when going from page router to app router pages
- there is scope to use a singleton pattern but better to convert all pages to app router
