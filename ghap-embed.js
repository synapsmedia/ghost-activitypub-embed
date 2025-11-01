const styles = `
:host {
  display: block;
}
.feed-container {
  --background-color: var(--ghap-background-color, #fff);
  --text-color: var(--ghap-text-color, #000);
  --padding: var(--ghap-padding, 1rem);

  font-family: var(--ghap-font-family, var(--gh-font-body, Inter -apple-system BlinkMacSystemFont 'avenir next' avenir 'helvetica neue' helvetica ubuntu roboto noto 'segoe ui' arial sans-serif));
  font-size: var(--ghap-font-size, 10px);
  max-width: 100%;
  border-radius: var(--ghap-border-radius, 10px);
  border-color: var(--ghap-border-color, rgb(229, 233, 235));
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
  border-bottom: 1px solid var(--ghap-border-color, rgb(229, 233, 235));
  padding-bottom: var(--padding);
}
.profile-image {
  width: 100%;
  height: 300px;
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
  margin-left: var(--padding);
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
.feed-item {
  --icon-size: var(--ghap-feed-item-icon-size, 40px);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: var(--ghap-feed-vertical-gap, 1rem);
  border-bottom: 1px solid var(--ghap-border-color, rgb(229, 233, 235));
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
.feed-item-date {
  color: rgb(124 139 154);
  font-size: 1.3em;
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
dialog button {
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
`

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
      return ['url'];
    }
  
    /**
     * Format a date string in a more readable format
     */
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('en-US', {
        // year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(date);
    }
  
    renderProfileHeader(profileData) {
      return `
        <div class="profile-header" part="header">
          <img class="profile-image" src="${profileData.image.url}">
          <div class="profile-info">
            <img class="profile-icon" src="${profileData.icon.url}">
            <h2 class="profile-name">${profileData.name}</h2>
            <p class="profile-username">@${profileData.preferredUsername}@${profileData.serverHost}</p>
            <p class="profile-description">${profileData.summary}</p>
          </div>
        </div>`;
    }
    /**
     * Format the feed item content based on its type
     */
    renderItem(item, profileData) {
      // Check if it's a Create activity with a Note
      if (item.type === 'Create' && item.object && item.object.type === 'Note') {
        const note = item.object;
        const published = note.published;
        let attachment = '';
        
        // Handle attachments (images)
        if (note.attachment && note.attachment.type === 'Image') {
          attachment = `<img class="feed-item-image" src="${note.attachment.url}" alt="Attached image">`;
        }
        
        return `
          <div class="feed-item" part="feed-item">
            <div class="feed-author" part="feed-author">
              <div class="feed-author-avatar" part="feed-author-avatar">
                <img src="${profileData.icon.url}">
              </div>
              <div class="feed-author-meta" part="feed-author-meta">
                <div class="feed-author-name">${profileData.name}</div>
                <div class="feed-author-username">@${profileData.preferredUsername}@${profileData.serverHost} · <span class="feed-author-date">${this.formatDate(published)}</span></div>
              </div>
            </div>
            <div class="feed-item-content" part="feed-item-content">
              ${ note.content }
              ${attachment}
            </div>
          </div>
        `;
      } 
      else {
        return ``;
      }
    }
  
    /**
     * Fetch and display feed data
     */
    async fetchFeed() {

      const url = new URL(this.getAttribute('url') || document.location.href);
      
      try {
        // Fetch the main outbox
        const response = await fetch(`${url.origin}/.ghost/activitypub/outbox/index`, {
          headers: {
            accept: 'application/activity+json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const outboxData = await response.json();
        
        // Check if it has a "first" property to fetch the items
        if (!outboxData.first) {
          throw new Error('Invalid feed format: missing "first" property');
        }
        
        // Fetch the actual items from the "first" URL
        const itemsResponse = await fetch(outboxData.first, {
          headers: {
            accept: 'application/activity+json'
          }
        });
        if (!itemsResponse.ok) {
          throw new Error(`HTTP error! status: ${itemsResponse.status}`);
        }
        
        const itemsData = await itemsResponse.json();
        
        // Check if we have items to display
        if (!itemsData.orderedItems || !Array.isArray(itemsData.orderedItems)) {
          throw new Error('Invalid feed format: missing "orderedItems" array');
        }
        
        // Fetch profile info
        const profile = await fetch(`${url.origin}/.ghost/activitypub/users/index`)
        
        if (!profile.ok) {
          throw new Error(`HTTP error! status: ${profile.status}`);
        }
        
        const profileData = await profile.json();
        
        profileData.serverHost = url.hostname.replace('www.', '');

        const profileHeaderHTML = this.renderProfileHeader(profileData);
            
        // Get the first 10 items
        const items = itemsData.orderedItems.slice(0, 10);
        
        // Render the feed items
        let html = '';
        if (items.length === 0) {
          html = '<div class="feed-item">No items in feed</div>';
        } else {
          items.forEach(item => {
            html += this.renderItem(item, profileData);
          });
        }
        
        const attachmentModal = `<dialog><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><div class="dialog-content"></div></dialog>`
        this.shadowRoot.querySelector('.feed-container').innerHTML = `${attachmentModal}${profileHeaderHTML}${html}`;
        
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
      const dialogCloser = this.dialog.querySelector('button');
      
      dialogCloser.addEventListener('click', () => {
        this.dialog.close();
      });
      
      this.dialogInitiated = true;
      console.log('dialogInitiated');
    }
  
    showAttachment(content) {
      console.log('showAttachment');
      this.initDialog();
      console.log('sed content')
      this.dialogContent.innerHTML = content.outerHTML;
      this.dialog.showModal();
    }
  
    connectedCallback() {
      console.log('connectedCallback');
      this.fetchFeed();
      
      this.shadowRoot.addEventListener('click', (event) => {
        if (event.target.matches('.feed-item .feed-item-image')) {
          this.showAttachment(event.target);
        }
      }, false)
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'url' && oldValue !== newValue) {
        this.fetchFeed();
      }
    }
  }
  
  // Register the custom element
  customElements.define('ghost-activitypub-embed', GhostActivityPubEmbed);
  
  console.log('ghost-activitypub-embed registered');
