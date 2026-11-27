const styles = `
:host {
  display: block;
}
.feed-container {
  --background-color: var(--ghap-background-color, #fff);
  --text-color: var(--ghap-text-color, #000);
  --padding: var(--ghap-padding, 1rem);
  --font-family: var(--ghap-font-family, var(--gh-font-body, Inter -apple-system BlinkMacSystemFont 'avenir next' avenir 'helvetica neue' helvetica ubuntu roboto noto 'segoe ui' arial sans-serif));
  --font-size: var(--ghap-font-size, 10px);
  --border-color: var(--ghap-border-color, rgb(229, 233, 235));

  font-family: var(--font-family);
  font-size: var(--font-size);
  max-width: 100%;
  border-radius: var(--ghap-border-radius, 10px);
  border-color: var(--border-color);
  border-style: solid;
  border-width: var(--ghap-border-width, 1px);
  overflow: hidden;
}
.feed-container :where(*:not(dialog)) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.profile-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--padding);
}
.profile-info-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-inline: var(--padding);
}

.profile-info-header .ghap-follow-button {
  display: inline-flex;
  align-items: center;
  height: 2.3em;
  border: none;
  padding: 0 14px;
  background-color: var(--text-color);
  color: var(--background-color);
  border-radius: 9999px;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1.4;
}
/* The site's accent colour, like the Subscribe button, when it's known */
.profile-info-header .ghap-follow-button.has-accent {
  background-color: var(--accent-color);
  color: #fff;
}
.profile-info-header .ghap-follow-button:hover {
  opacity: 0.88;
}
.profile-image-placeholder {
  height: 100px;
}
.profile-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
.profile-icon {
  --icon-size: var(--profile-icon-size, 90px);
  --icon-border-size: var(--profile-icon-border-size, 5px);
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 50%;
  border: var(--icon-border-size) solid var(--ghap-background-color);
  margin-top: calc((var(--icon-size) / -2) - var(--icon-border-size));
  background-color: #fff;
  outline: #15171a1a;
}

.profile-name {
  font-size: 2.2em;
  padding-inline: var(--padding);
}
.profile-username,
.profile-description {
  font-size: 1.5em;
  padding-inline: var(--padding);
}
.profile-username {
  display: flex;
  gap: 5px;
}
.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-inline: var(--padding);
  margin-top: 0.75rem;
  font-size: 1.4em;
}
.profile-link,
.profile-subscribe {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 2.3em;
  padding: 0 14px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.4;
}
/* Trim the space fonts leave above capitals and below the baseline, so the
   letters themselves are centred. It has to be on a block: text directly in a
   flex button sits in an anonymous box that doesn't get it. */
.pill-label {
  display: block;
  text-box: trim-both cap alphabetic;
}
.profile-link {
  background-color: rgba(21, 23, 26, 0.06);
  color: var(--text-color);
}
.profile-link:hover {
  background-color: rgba(21, 23, 26, 0.1);
}
.profile-link img {
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
}
.profile-subscribe {
  background-color: var(--accent-color, #15171a);
  color: #fff;
}
.profile-subscribe svg {
  width: 1.1em;
  height: 1.1em;
}
.profile-subscribe:hover {
  opacity: 0.88;
}
.profile-username a {
  color: var(--ghap-text-color);
  text-decoration: none;
}
.profile-username pre {
  font-family: monospace;
}
.profile-username .copy-handle {
  color: var(--ghap-text-color);
  opacity: 0.5;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  height: 24px;
  width: 24px;
  transition: opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.profile-username .copy-handle:hover {
  opacity: 1;
}
.profile-username .copy-handle svg {
  stroke-width: 1.5px;
}
.profile-username .copy-handle .lucide-check {
  display: none;
}
.profile-username .copy-handle-success {
  opacity: 0;
  color: green;
  transition: opacity 0.2s ease;
}
.copy-handle.copied + .copy-handle-success {
  opacity: 1;
}
.copy-handle.copied .lucide-copy {
  display: none;
}
.copy-handle.copied .lucide-check {
  color: green;
  display: inline-flex;
}

.feed-item {
  --icon-size: var(--ghap-feed-item-icon-size, 40px);
  display: flex;
  flex-direction: column;
  padding: var(--ghap-feed-vertical-gap, 1rem);
  border-bottom: 1px solid var(--border-color);
}
.feed-item:last-child {
  border-bottom: none;
}
.feed-author {
  display: flex;
  gap: 1rem;
}
.feed-author .feed-author-avatar {
  width: var(--icon-size);
}
.feed-author .feed-author-avatar img {
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 50%;
}
.feed-author .feed-author-meta {
  display: flex;
  flex-direction: column;
}
.feed-author .feed-author-meta .feed-author-name {
  font-weight: 600;
  font-size: 1.4em;
  color: rgb(21, 23, 26);
}
.feed-author .feed-author-meta .feed-author-username {
  color: rgb(124 139 154);
  font-size: 1.3em;
}
.feed-item-content {
  margin: 0.5em 0;
  padding-left: calc(var(--icon-size) + 1em);
  font-size: 1.4em;
  color: rgb(57, 64, 71);
}
.feed-item-article-preview {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  border: solid 1px var(--border-color);
  border-radius: 7px;
}
.feed-item-article-preview:hover {
  background-color: var(--border-color);
}
.feed-item-article-preview h3 {
  margin: 0 0 0.5em 0;
  font-size: 1.2em;
}
.feed-item-article-preview p {
  margin: 0;
  color: rgb(124 139 154);
}
.feed-item-date {
  color: rgb(124 139 154);
  font-size: 1.3em;
}
.feed-item-parent {
  --icon-size: var(--ghap-thread-parent-icon-size, 32px);
  position: relative;
  border-bottom: none;
  padding-bottom: 0;
}
.feed-item-parent .feed-author-name {
  font-size: 1.3em;
}
.feed-item-parent .feed-author-username {
  font-size: 1.2em;
}
.feed-item-parent .feed-item-content {
  font-size: 1.3em;
}
.feed-item-main {
  --icon-size: var(--ghap-thread-main-icon-size, 48px);
  background-color: var(--ghap-highlight-color, rgb(239, 246, 255));
}
.feed-item-main .feed-item-content {
  font-size: 1.6em;
}
.feed-item-parent::before {
  content: '';
  position: absolute;
  left: calc(var(--ghap-feed-vertical-gap, 1rem) + var(--icon-size) / 2 - 1px);
  top: calc(var(--ghap-feed-vertical-gap, 1rem) + var(--icon-size) + 4px);
  bottom: 0.5rem;
  width: 2px;
  background-color: var(--border-color);
}
.feed-item-parent .feed-item-content {
  margin-bottom: 1rem;
}
.thread-earlier,
.thread-missing {
  display: block;
  padding: var(--ghap-feed-vertical-gap, 1rem) var(--ghap-feed-vertical-gap, 1rem) 0;
  font-size: 1.3em;
  color: rgb(124 139 154);
}
.thread-earlier:hover {
  color: rgb(21, 23, 26);
}
.feed-author-date a,
.feed-author a.feed-author-link {
  color: inherit;
  text-decoration: none;
}
.feed-author-date a:hover,
.feed-author a.feed-author-link:hover {
  text-decoration: underline;
}
.feed-item-content .invisible {
  display: none;
}
.feed-item-content .ellipsis::after {
  content: '…';
}
.feed-item .feed-item-image {
  max-width: 100%;
  max-height: 200px;
  height: auto;
  margin-top: 0.5rem;
  border-radius: 4px;
}
.loading {
  padding: 1rem;
  text-align: center;
  color: #666;
}
.error {
  padding: 1rem;
  color: #e53935;
  border: 1px solid #e53935;
  border-radius: 4px;
}
dialog {
  border: none;
  padding: 0;
  background: transparent;
  width: 100%;
}
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}
dialog .close-dialog {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 20px;
  background-color: rgba(21, 23, 26, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}
dialog .feed-item-image {
  display: block;
  margin: auto;
  max-width: 100vw;
  max-height: 100vh;
}
.follow-modal {
  background-color: white;
  padding: 15px;
  max-width: 400px;
  border-radius: 15px;
  font-size: 1.4em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
}
.follow-modal .profile-username-container {
  color: rgb(2, 18, 217);
  border-color: rgba(2, 18, 217, 0.2);
  background: linear-gradient(to right top, rgba(2, 18, 217, 0.04), rgba(2, 18, 217, 0.16));
  padding: 10px;
  text-align: center;
  border-radius: 9999px;
}
.follow-modal .profile-username {
  font-size: 1rem;
  display: inline-flex;
}
`
const avatarPlaceholder = 'https://static.ghost.org/v5.0.0/images/orb-email-head-static.png';

/**
 * Text for HTML, and URLs for attributes (http and https only)
 */
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

const safeUrl = (value) => {
  if (!value || typeof value !== 'string') {
    return '';
  }
  try {
    const url = new URL(value, document.baseURI);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
};

/**
 * Post and profile HTML comes from other servers: keep text formatting and links only
 */
const ALLOWED_TAGS = ['A', 'B', 'BLOCKQUOTE', 'BR', 'CODE', 'DEL', 'EM', 'I', 'LI', 'OL', 'P', 'PRE', 'S', 'SPAN', 'STRONG', 'U', 'UL'];
const DROPPED_TAGS = ['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'FORM', 'INPUT', 'BUTTON', 'TEXTAREA', 'SELECT', 'LINK', 'META', 'BASE', 'SVG', 'MATH', 'TEMPLATE', 'NOSCRIPT'];

const sanitizeHtml = (html) => {
  const template = document.createElement('template');
  template.innerHTML = String(html ?? '');

  // Deepest first, so unwrapping an element never skips its children
  for (const el of Array.from(template.content.querySelectorAll('*')).reverse()) {
    const tag = el.tagName.toUpperCase();
    if (DROPPED_TAGS.includes(tag)) {
      el.remove();
      continue;
    }
    if (!ALLOWED_TAGS.includes(tag)) {
      el.replaceWith(...el.childNodes);
      continue;
    }

    const href = tag === 'A' ? safeUrl(el.getAttribute('href')) : '';
    const className = tag === 'SPAN' ? el.getAttribute('class') : null;
    for (const attr of Array.from(el.attributes)) {
      el.removeAttribute(attr.name);
    }
    if (className) {
      el.setAttribute('class', className);
    }
    if (tag === 'A') {
      if (href) {
        el.setAttribute('href', href);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'nofollow noopener noreferrer');
      } else {
        el.replaceWith(...el.childNodes);
      }
    }
  }

  return template.innerHTML;
};

// "@user@domain" or "user@domain"
const parseHandle = (value) => {
  const match = String(value || '').trim().replace(/^@/, '').match(/^([^@\/\s]+)@([^@\/\s]+)$/);
  return match ? { username: match[1], domain: match[2] } : null;
};

const firstUrl = (value) => [].concat(value || [])
  .map((u) => typeof u === 'string' ? u : u?.href)
  .find(Boolean) || '';

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

class GhostActivityPubEmbed extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Default styles
    this.shadowRoot.innerHTML = `
        <style>
          ${styles}
        </style>
        <div class="feed-container" part="container">
          <div class="loading">Loading activity feed...</div>
        </div>
      `;
  }

  static get observedAttributes() {
    return ['url', 'proxy', 'include-posts', 'post'];
  }

  _profileData = null;
  _parent = null;

  /**
   * The post a single `post` is replying to, shown above it. Set by the page that
   * resolved it: { object, author, link }, where `object` is the ActivityPub object
   * (null when it couldn't be loaded), `author` its actor (or null) and `link`
   * where it opens.
   */
  get parent() {
    return this._parent;
  }

  set parent(value) {
    this._parent = value || null;
    if (this.isConnected) {
      this.fetchFeed();
    }
  }

  _copyHandleButton = ({ preferredUsername, serverHost }) => `<button class="copy-handle" data-handle="@${escapeHtml(preferredUsername)}@${escapeHtml(serverHost)}" title="Copy handle">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  </button>`;

  /**
   * Format a date string in a more readable format
   */
  formatDate(dateStr, full = false) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', full ? {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    } : {
      month: 'short',
      day: 'numeric',
    }).format(date);
  }

  /**
   * With `site-links`: the profile's website and, when the Ghost site takes sign-ups,
   * a Subscribe link to its Portal. Ghost's public site info allows any origin.
   */
  async fetchSiteLinks(profileData) {
    if (!this.hasAttribute('site-links')) {
      return null;
    }

    const website = safeUrl(firstUrl(profileData.url)) || safeUrl(`https://${profileData.serverHost}/`);
    if (!website) {
      return null;
    }

    let site = null;
    try {
      const response = await fetch(new URL('members/api/site/', website), {
        signal: AbortSignal.timeout(3000),
      });
      if (response.ok) {
        site = (await response.json())?.site || null;
      }
    } catch {
      // the website link alone
    }

    // Same rule as Ghost's recommendations: sign-up open, no terms checkbox to tick
    let subscribe = '';
    if (site?.allow_external_signup === true) {
      const signup = new URL(website);
      signup.searchParams.set('ref', document.location.hostname);
      signup.hash = '#/portal/signup';
      subscribe = signup.href;
    }

    return {
      website,
      subscribe,
      // Ghost's icon setting, else the site's favicon (hidden if there's none)
      icon: safeUrl(site?.icon) || new URL('/favicon.ico', website).href,
      accentColor: /^#[0-9a-f]{3,8}$/i.test(site?.accent_color || '') ? site.accent_color : '',
    };
  }

  renderSiteLinks(links) {
    if (!links) {
      return '';
    }

    const host = hostOf(links.website);
    return `
            <div class="profile-links" part="profile-links">
              <a class="profile-link" href="${escapeHtml(links.website)}" target="_blank" rel="noopener">
                ${links.icon ? `<img src="${escapeHtml(links.icon)}" alt="" onerror="this.remove()">` : ''}<span class="pill-label">${escapeHtml(host)} ↗</span>
              </a>
              ${links.subscribe ? `<a class="profile-subscribe" href="${escapeHtml(links.subscribe)}" target="_blank" rel="noopener"${links.accentColor ? ` style="--accent-color: ${links.accentColor}"` : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span class="pill-label">Subscribe ↗</span>
              </a>` : ''}
            </div>`;
  }

  renderProfileHeader(profileData, links = null) {
    return `
        <div class="profile-header" part="header">
          ${ safeUrl(profileData.image?.url) ? `<img class="profile-image" src="${escapeHtml(safeUrl(profileData.image.url))}">` : '<div class="profile-image-placeholder"></div>' }
          <div class="profile-info">
            <div class="profile-info-header">
              <img class="profile-icon" src="${escapeHtml(safeUrl(profileData.icon?.url) || avatarPlaceholder)}">
              <button class="ghap-follow-button${links?.accentColor ? ' has-accent' : ''}"${links?.accentColor ? ` style="--accent-color: ${links.accentColor}"` : ''}><span class="pill-label">Follow</span></button>
            </div>
            <h2 class="profile-name">${escapeHtml(profileData.name)}</h2>
            <p class="profile-username">
              <a href="https://${escapeHtml(profileData.serverHost)}" target="_blank">@${escapeHtml(profileData.preferredUsername)}@${escapeHtml(profileData.serverHost)}</a>
              ${this._copyHandleButton(profileData)}
              <span class="copy-handle-success">Copied!</span>
            </p>
            <p class="profile-description">${sanitizeHtml(profileData.summary)}</p>
            ${this.renderSiteLinks(links)}
          </div>
        </div>`;
  }
  /**
   * Format the feed item content based on its type
   */
  renderItem(item, profileData) {
    // A single post is shown whatever its type; the feed shows articles only with include-posts
    const includePosts = this.hasAttribute('include-posts') || this.hasAttribute('post');
    const profileLink = this.getAttribute('profile-url') || '';
    // Check if it's a Create activity with a Note
    if (item.type === 'Create' && item.object && (item.object.type === 'Note' || includePosts && item.object.type === 'Article')) {
      if (this.hasAttribute('post')) {
        return this.renderPost(item.object, profileData, {
          className: this._parent ? 'feed-item-main' : '',
          fullDate: true,
          profileLink,
        });
      }
      return this.renderPost(item.object, profileData, { profileLink });
    }
    return '';
  }

  /**
   * A note, or an article as a preview card. `link` makes the date a link to the post,
   * `profileLink` the author's avatar, name and handle links to their profile.
   */
  renderPost(note, profileData, { className = '', link = '', fullDate = false, profileLink = '' } = {}) {
    // Handle attachments (images); a note with several images has an array
    const attachment = [].concat(note.attachment || [])
      .filter((a) => a && a.type === 'Image' && safeUrl(a.url))
      .map((a) => `<img class="feed-item-image" src="${escapeHtml(safeUrl(a.url))}" alt="${escapeHtml(a.name || 'Attached image')}">`)
      .join('');

    const date = escapeHtml(note.published ? this.formatDate(note.published, fullDate) : '');
    const dateLink = safeUrl(link);
    const articleUrl = [].concat(note.url || [])
      .map((u) => safeUrl(typeof u === 'string' ? u : u?.href))
      .find(Boolean) || '';

    const authorHref = escapeHtml(safeUrl(profileLink));
    const authorLink = (content) => authorHref
      ? `<a class="feed-author-link" href="${authorHref}" target="_top">${content}</a>`
      : content;
    const avatar = `<img src="${escapeHtml(safeUrl(profileData.icon?.url) || avatarPlaceholder)}">`;
    const name = escapeHtml(profileData.name || profileData.preferredUsername);
    const handle = `@${escapeHtml(profileData.preferredUsername)}@${escapeHtml(profileData.serverHost)}`;

    return `
        <div class="feed-item ${className}" part="feed-item">
          <div class="feed-author" part="feed-author">
            <div class="feed-author-avatar" part="feed-author-avatar">
              ${authorLink(avatar)}
            </div>
            <div class="feed-author-meta" part="feed-author-meta">
              <div class="feed-author-name">${authorLink(name)}</div>
              <div class="feed-author-username">${authorLink(handle)} · <span class="feed-author-date">${dateLink ? `<a href="${escapeHtml(dateLink)}" target="_top">${date}</a>` : date}</span></div>
            </div>
          </div>
          <div class="feed-item-content" part="feed-item-content">
            ${note.type === 'Article' ? `<a href="${escapeHtml(articleUrl)}" target="_top" class="feed-item-article-preview">
              <h3>${escapeHtml(note.name)}</h3>
              <p>${escapeHtml(note.summary || '')}</p>
            </a>` : sanitizeHtml(note.content)}
            ${attachment}
          </div>
        </div>
      `;
  }

  /**
   * The post a single post replies to, joined to it by a thread line
   */
  renderParent({ object, author, handle, link } = {}) {
    const href = escapeHtml(safeUrl(link));

    if (!object || !['Note', 'Article'].includes(object.type)) {
      return href
        ? `<a class="thread-missing" href="${href}" target="_top" part="thread-missing">Replying to a post that couldn't be loaded</a>`
        : '';
    }

    const attributedTo = [].concat(object.attributedTo || [])
      .map((a) => typeof a === 'string' ? a : a?.id)
      .find(Boolean) || '';
    const actorId = author?.id || attributedTo;
    const knownHandle = parseHandle(handle);
    const profile = {
      ...author,
      preferredUsername: knownHandle?.username || author?.preferredUsername || actorId.split('/').filter(Boolean).pop() || '',
      serverHost: knownHandle?.domain || hostOf(actorId),
    };

    // The parent replies to something too: its own page continues the thread
    const earlier = object.inReplyTo && href
      ? `<a class="thread-earlier" href="${href}" target="_top" part="thread-earlier">Show earlier replies</a>`
      : '';

    return earlier + this.renderPost(object, profile, { className: 'feed-item-parent', link });
  }

  async fetchEndpoint(endpoint) {
    const isAbsoluteUrl = endpoint.startsWith('http://') || endpoint.startsWith('https://');
    const url = new URL(isAbsoluteUrl ? endpoint : (this.getAttribute('url') || document.location.href));
    const proxy = new URL(this.getAttribute('proxy') || url);

    const proxyMode = proxy.hostname !== url.hostname;

    const path = endpoint.replace(`${url.origin}/.ghost/activitypub/`, '');
    
    const baseUrl = proxyMode ? proxy.origin : url.origin;

    try {
      const response = await fetch(`${baseUrl}/.ghost/activitypub/${path}`, {
        headers: {
          accept: 'application/activity+json',
          ...(proxyMode ? { 'x-proxy': url.origin } : {})
        }
      });
      if (!response.ok) {
        return [new Error(`HTTP error! status: ${response.status}`), null];
      }

      return [null, await response.json()];

    } catch (error) {
      return [error, null];
    }
  }

  /**
   * Fetch and display feed data
   */
  async fetchFeed() {

    const url = new URL(this.getAttribute('url') || document.location.href);

    try {
      // Fetch profile info
      const [profileError, profileData] = await this.fetchEndpoint('users/index');
      if (profileError) {
        throw profileError;
      }

      this._profileData = profileData;

      this._profileData.serverHost = url.hostname.replace('www.', '');

      // The handle can be on another domain than the site (custom social web domains)
      const handle = parseHandle(this.getAttribute('handle'));
      if (handle) {
        this._profileData.preferredUsername = handle.username;
        this._profileData.serverHost = handle.domain;
      }

      const siteLinks = this.fetchSiteLinks(this._profileData);

      let items = [];
      const post = this.getAttribute('post');

      if (post) {
        // A single post: an object path like `note/<id>` or `article/<id>`, or its full URL
        const [postError, postData] = await this.fetchEndpoint(post);
        if (postError) {
          throw postError;
        }
        items = [{ type: 'Create', object: postData }];
      } else {
        // Fetch the main outbox
        const [error, outboxData] = await this.fetchEndpoint('outbox/index');

        if (error) {
          throw error;
        }

        if (outboxData.totalItems > 0) {
          // Check if it has a "first" property to fetch the items
          if (!outboxData.first) {
            throw new Error('Invalid feed format: missing "first" property');
          }

          // Fetch the actual items from the "first" URL
          const [firstError, itemsData] = await this.fetchEndpoint(outboxData.first);
          if (firstError) {
            throw firstError;
          }

          // Check if we have items to display
          if (!itemsData.orderedItems || !Array.isArray(itemsData.orderedItems)) {
            throw new Error('Invalid feed format: missing "orderedItems" array');
          }

          // Get the first 10 items
          items = itemsData.orderedItems?.slice(0, 10) || [];
        }
      }

      // Render the feed items
      let html = post && this._parent ? this.renderParent(this._parent) : '';
      items.forEach(item => {
        html += this.renderItem(item, this._profileData);
      });

      const attachmentModal = `<dialog><button class="close-dialog"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><div class="dialog-content"></div></dialog>`;

      const profileHeaderHTML = this.renderProfileHeader(this._profileData, await siteLinks);

      // The page can put its own content (e.g. tabs) under the profile header
      const afterHeader = '<slot name="after-header"></slot>';

      this.shadowRoot.querySelector('.feed-container').innerHTML = `${attachmentModal}${profileHeaderHTML}${afterHeader}${html}`;

    } catch (error) {
      console.error('Error fetching feed:', error);
      this.shadowRoot.querySelector('.feed-container').innerHTML = `
          <div class="error">Error loading feed: ${error.message}</div>
        `;
    }
  }

  initDialog() {
    if (this.dialogInitiated) return;

    this.dialog = this.shadowRoot.querySelector('dialog');
    this.dialogContent = this.dialog.querySelector('.dialog-content');
    const dialogCloser = this.dialog.querySelector('.close-dialog');

    dialogCloser.addEventListener('click', () => {
      this.dialog.close();
    });

    this.dialogInitiated = true;
  }

  showDialog(content) {
    this.initDialog();
    this.dialogContent.innerHTML = content.outerHTML;
    this.dialog.showModal();
  }

  connectedCallback() {
    this.fetchFeed();

    this.shadowRoot.addEventListener('click', (event) => {
      if (event.target.matches('.feed-item .feed-item-image')) {
        this.showDialog(event.target);
      }

      if (event.target.matches('.copy-handle *')) {
        const copyHandleButton = this.shadowRoot.querySelector('.copy-handle');

        navigator.clipboard.writeText(copyHandleButton.getAttribute('data-handle'));
        copyHandleButton.classList.add('copied');
        setTimeout(() => {
          copyHandleButton.classList.remove('copied');
        }, 2000);
      }

      if (event.target.closest('.ghap-follow-button')) {
        const followModalContent = document.createElement('div');
        followModalContent.innerHTML = `
          <h2>Follow me on the fediverse</h2>
          <p>Available on Ghost, Flipboard, Threads, Bluesky, Mastodon, or wherever you get your social web feeds.</p>

          <p>Copy the handle below and search it on your platform to follow me.</p>

          <div class="profile-username-container">
            <div class="profile-username">
              <pre>@${escapeHtml(this._profileData.preferredUsername)}@${escapeHtml(this._profileData.serverHost)}</pre>
              ${this._copyHandleButton(this._profileData)}
            </div>
          </div>
        `;
        followModalContent.classList.add('follow-modal');
        this.showDialog(followModalContent);
      }
    }, false)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Before it's connected, connectedCallback does the first fetch with all attributes set
    if ((name === 'url' || name === 'post') && oldValue !== newValue && this.isConnected) {
      this.fetchFeed();
    }
  }
}

// Register the custom element
customElements.define('ghost-activitypub-embed', GhostActivityPubEmbed);
