**Routing :**
** Browser Routing**
        Browser Routing uses the HTML5 History API (pushState, replaceState) to manage routes.
Example URL:
https://example.com/profile

**Advantages**
* Clean & professional URLs (no #)
* Better for SEO
* Used in most real-world production apps

**Disadvantages**
* Page refresh panna server-ku request pogum
* Server-side configuration required
  (Ex: fallback to index.html)
* Proper setup illa na 404 error varum

**When to use**
* Production apps
* When you control server configuration

**Hash Routing**

Hash Routing uses the URL hash (#) to manage routes.
Example URL:
https://example.com/#/profile

**Advantages**
* Server-side configuration thevai illa
* Refresh pannalum route break aagadhu
* Easy to deploy (GitHub Pages, Netlify basic setup)

**Disadvantages**
* URL clean-aa irukaadhu
* SEO-ku suitable illa
* Looks less professional

**When to use**
* Static hosting
* No access to server config
* Small / demo projects

**Path Params (React Router)**
  * Path Params are dynamic values passed through the URL path.
  * They are mainly used to identify specific data like user ID, product ID, etc.
**Example URL**
/user/101
/product/25

Here:
101 → user id
25 → product id

**Defining Path Params**
Path params are defined using colon (:) in the route.

/user/:id
/product/:productId

Accessing Path Params
Path params are accessed using the useParams() hook.
const { id } = useParams()

**Why use Path Params?**
* To show dynamic pages
* To fetch data based on ID
* To avoid creating multiple routes manually

