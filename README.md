# Minimal reproduction of Next.js server actions redirect issue

When Javascript is disabled (or when a form is submitted pre-hydration), redirects from a server action for a site with a base path do not prepend the base path to the redirect location, causing 404 errors.

This works correctly when Javascript is enabled.

## Reproduction steps

- Disable Javascript in browser
- `pnpm dev`
- Click submit button

## Expected

- Redirect to `/custom/success`, and see "OK" message

## Actual

- Redirect to `/success` and see a 404 error (because the base path `/custom` was not prepended to the redirect location)