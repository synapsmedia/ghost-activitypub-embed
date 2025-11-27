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

More details: [https://muratcorlu.com/adding-ghost-social-web-notes-to-your-website-2/](https://muratcorlu.com/adding-ghost-social-web-notes-to-your-website-2/)

## Usage

Import the component to your Ghost page (by Ghost's code injection or your template):

```html
<script src="https://cdn.jsdelivr.net/npm/@synapsmedia/ghost-activitypub-embed@latest/ghap-embed.min.js"></script>
```

And use it by adding component to wherever you want to show the feed:

```html
<ghost-activitypub-embed></ghost-activitypub-embed>
```

You can use a Ghost HTNL Card to embed the component or edit your theme directly.

### Attributes

- `url` - The base URL of your Ghost blog with ActivityPub enabled. By default it's the domain of your current page.

### Styling

This component is isolated from theme styles. That means it will work in any theme. You can customize the component using CSS variables and using CSS `part()` selector.

#### CSS Variables

- `--ghap-background-color` - The background color of the feed container (default `#fff`)
- `--ghap-text-color` - The text color of the feed container (default `#000`)
- `--ghap-padding` - The padding of the feed container (default `1rem`)
- `--ghap-border-color` - The border color of the feed container (default `rgb(229, 233, 235)`)
- `--ghap-feed-item-icon-size` - The size of the feed item icon (default `40px`)
- `--ghap-feed-vertical-gap` - The vertical gap between feed items (default `1rem`)
- `--ghap-font-family` - The font family of the feed container (default, Ghost's body font)
- `--ghap-font-size` - The font size of the feed container (default `10px`)
- `--ghap-border-radius` - The border radius of the feed container (default `10px`)
- `--ghap-border-width` - The border width of the feed container (default `1px`)

You can set CSS variables with code injection or in your theme's CSS file.

```html
<style>
  ghost-activitypub-embed {
    --ghap-background-color: #f0f0f0;
    --ghap-text-color: #333;
    --ghap-padding: 1rem;
    --ghap-border-color: #ccc;
    --ghap-feed-item-icon-size: 40px;
    --ghap-feed-vertical-gap: 1rem;
    --ghap-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    --ghap-font-size: 10px;
    --ghap-border-radius: 10px;
    --ghap-border-width: 1px;
  }
</style>
```

#### Proxy

You can use a proxy to fetch the feed data. This is useful if you want to run this component on a different domain.

```html
<ghost-activitypub-embed url="https://your-ghost-blog.com" proxy="https://your-proxy.com"></ghost-activitypub-embed>
```

Proxy server should accept requests starting with `/.ghost/activitypub/` and read `x-proxy` header to get the original URL. Then should make the same request to the original URL and return the response.

#### CSS Parts

- `container` - The feed container
- `header` - The profile header
- `feed-item` - The feed item
- `feed-item-content` - The feed item content
- `feed-author` - The feed author
- `feed-author-avatar` - The feed author avatar

**Examples of using CSS parts:**

Remove border from feed container:

```html
<style>
  ghost-activitypub-embed::part(container) {
    border: none;
  }
</style>
```

Hide profile header:

```html
<style>
  ghost-activitypub-embed::part(header) {
    display: none;
  }
</style>
```

Hide avatar column:

```html
<style>
  ghost-activitypub-embed::part(feed-author-avatar) {
    display: none;
  }

  ghost-activitypub-embed::part(feed-item-content) {
    padding-left: 0;
  }
</style>
```

## Requirements

- The Ghost blog must have ActivityPub integration enabled and configured

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/ghost-activitypub-embed.git
cd ghost-activitypub-embed
npm install
```

Start the development server:

```bash
npm run dev
```

You can check your changes on `http://localhost:8000`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
