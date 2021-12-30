
# Pinterdark


<img src="https://i.imgur.com/mZUZUDN.png" alt="Pinterest Logo Black" width="200"/>

Author: [Justin Carver](https://justincarver.work)
Published on: Firefox Add-on Store
Stack: Pure JS / CSS
License: GPL-3


A simple Firefox extension that allows custom CSS to be injected into Pinterest to allow for an accessible yet modern dark theme on Pinterest domains. (does not affect Pinterest sub-domains!)

![Pinterest Dark Mode](https://i.imgur.com/HaKFp0I.png)

---
I was completely bewildered to find out that Pinterest doesn't offer a native desktop dark mode, yet encourages users to use the mobile application which *does* support dark mode, sometimes I need a bigger screen to be more creative! Heading over to the Pinterest home page will burn your cornea if it's past 9PM.

This extension is a very simple, straight-forward, lightweight (2kb!) CSS override for Pinterest on desktop to give your tired eyes a break when creating your new story or reference board.

**Please Note**: I will update this extension occasionally as time progresses. Some things may break over this course of time, but I'll be sure to keep an eye on it. If you have any recommendations, or would like to add anything, submit a PR and I'll take a look at it.

Thanks!

\- Justin

## Technicals
- **I am unsure at this time if these will need to be rewritten if Pinterest updates their back-end and class names reset!**
- `#555` and `#333` were the to "bread-and-butter" colors selected for this theme, they pair great and are *light* on the eyes. In the future, I may expand this to select custom colors for themes, for now these are hard-coded.
- There is a custom `pinterdark.css` file that contains the overrides for the auto-generated classes on Pinterest's web pages. 
- There are some DOM elements that could not be styled without affecting every other element on the page as well. I wanted to avoid injecting custom classes on different element, this is supposed to be a *simple* extension, so some items are not as perfect as I would like them to be. This is only a few lines of code. 

This is the entire code. It simply will create a new stylesheet link, point it to the `pinterdark.css` file, then append it to the head element on any page within the **\*://www.pinterest.com/\*** domain. You may see a brief flicker of white from the previous stylesheet being applied before this is rendered, but will stay cached between page visits. It seems to occur on new sessions only.

```js
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', browser.runtime.getURL('css/pinterdark.css'));
document.head.appendChild(link);
```