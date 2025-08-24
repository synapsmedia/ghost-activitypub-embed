# Ghost ActivityPub Feed Embedder

A custom element (a.k.a. web component) to display the latest notes from a Ghost blog's ActivityPub feed.

## Features

- Zero dependencies - pure vanilla JavaScript web component
- Displays profile header with name, username, image, and summary
- Shows the latest notes from the ActivityPub feed
- Renders note content and attached image
- Formats and displays post dates
- Handles errors gracefully
- Customizable with CSS

## Usage

Import the component to your Ghost page (by Ghost's code injection or your template):

```html
<script src="https://cdn.jsdelivr.net/npm/ghost-activitypub-feed@latest/ghap-embed.js"></script>
```

And use it by adding component to wherever you want to show the feed:

```html
<ghost-activitypub-embed></ghost-activitypub-embed>
```

You can use a Ghost HTNL Card to embed the component or edit your theme directly.

### Attributes

- `url` - The base URL of your Ghost blog with ActivityPub enabled. By default it's the domain of your current page.

### Styling

You can customize the component using CSS variables and using CSS `part()` selector.

_Details will be added soon._

## Requirements

- The Ghost blog must have ActivityPub integration enabled and configured
- Modern browser with Web Components support

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/ghost-activitypub-feed.git
cd ghost-activitypub-feed
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
