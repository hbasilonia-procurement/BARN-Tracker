# BARN Daily Delivery Tracker

Daily delivery tracker for the BARN delivery schedule (Eight8Ate Purchasing).

- Weekly order vs. actual delivery by receiving point (BARN / MFI / MSL)
- Today view, supplier fill-rate summary, alerts, master list with item-code auto-fill
- Export in the BARN DELIVERY SCHEDULE Excel format
- Light / dark mode (glass design)
- Data stored in Supabase (`dt_docs` table), with sign-in using the same account as Receiving Monitoring and the AP Tracker

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (single file) |
| `favicon.svg` | Browser-tab / home-screen icon |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Deploy to GitHub Pages

1. On GitHub (account **hbasilonia-procurement**), create a new repository, e.g. `Barn-Tracker`.
2. Upload `index.html`, `favicon.svg`, `README.md` and `.nojekyll` (**Add file → Upload files → Commit**).
3. Go to **Settings → Pages**. Under *Build and deployment*, pick **Deploy from a branch**, then branch **main** and folder **/ (root)**, and click **Save**.
4. After about a minute the site is live at
   `https://hbasilonia-procurement.github.io/Barn-Tracker/`

## Updating

Upload the new `index.html` over the old one and commit. GitHub Pages refreshes within a minute or two. If you still see the old version, press Ctrl + F5.

## Sign-in link (optional)

For the **"Email me a sign-in link"** button to work, add the site address in Supabase:
**Authentication → URL Configuration → Redirect URLs** → add
`https://hbasilonia-procurement.github.io/Barn-Tracker/`

Signing in with email and password works without this step.
