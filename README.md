
# Pinterdark


<img src="https://i.imgur.com/mZUZUDN.png" alt="Pinterest Logo Black" width="200"/>

Author: [Justin Carver](https://justincarver.work)
Published on: Firefox Add-on Store
Stack: Pure JS / CSS


A simple Firefox extension that allows custom CSS to be injected into Pinterest to allow for an accessible yet modern dark theme on Pinterest domains. (does not affect Pinterest sub-domains!)

![Pinterest Dark Mode](https://i.imgur.com/HaKFp0I.png)

---
I was completely bewildered to find out that Pinterest doesn't offer a native desktop dark mode, yet encourages users to use the mobile application which *does* support dark mode.

This extension is a very simple, straight-forward, lightweight (2kb!) CSS override for Pinterest on desktop to give your tired eyes a break when creating your new story or reference board.

## Technicals
- `#555` and `#333` were the to "bread-and-butter" colors selected for this theme, they pair great and are light on the eyes. In the future, I may expand this to select custom colors, for now these are hard-coded.
- There is a custom `pinterdark.css` file that contains the overrides for the auto-generated classes on Pinterest's web pages. **I am unsure at this time if these will need to be rewritten if Pinterest updates their back-end.**
- There are some DOM elements that could not be styled without affecting every other element on the page as well. I wanted to avoid injecting custom classes on different element, this is supposed to be a *simple* extension.

This is the entire code. It simply will create a new stylesheet link, point it to the `pinterdark.css` file, then append it to the head element on the page. You may see a brief flicker of the previous style sheets being applied before this is rendered.
```js
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', browser.runtime.getURL('css/pinterdark.css'));
document.head.appendChild(link);
```
