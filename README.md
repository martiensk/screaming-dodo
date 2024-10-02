# Documentation

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

## How to Configure

All configuration settings are kept in a file called `config.json` in the project root.
All configuration settings will be hidden when a value is defined for them in this file, unless you force them to be visible via the `forceConfig` key.
When all configuration settings have been set the configuration bar will be removed.

### Name

The name of the blog. Could be used in display.

### Tagline

The tagline of the blog. Could be used in display.

### Theming

Select a theme from the dropdown to preview .Once you have found one you like add it to the config file under `theme -> default` and it will be automagically applied from then on.

https://realfavicongenerator.net/
