# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Backend configuration

Add the backend base URL to a `.env` file at project root using the variable `VITE_API_BASE_URL`.

Example `.env`:

```
VITE_API_BASE_URL=https://new-premierdis.martyn-benjamin.workers.dev
```

`ContactUsForm.jsx` uses `import.meta.env.VITE_API_BASE_URL` and POSTs form data to `{VITE_API_BASE_URL}/contact`.
