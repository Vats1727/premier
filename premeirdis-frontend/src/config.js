export const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export async function postJSON(path, body, opts = {}) {
  const base = API_BASE.replace(/\/+$/, '');
  const rel = path.startsWith('/') ? path : `/${path}`;
  const url = base + rel;

  const res = await fetch(url, {
    method: opts.method || 'POST',
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    body: JSON.stringify(body),
    credentials: opts.credentials || 'same-origin',
  });

  return res;
}

export default {
  API_BASE,
  postJSON,
};
