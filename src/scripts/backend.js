/**
 * Constructs a standard URL to use when performing a HTTP backend request.
 * @param {string} path Path with leading slash, e.g. "/randomgif/gif/random"
 * @param {string} query Query parameters without leading question mark: e.g. "query=toast"
 */
function getBackendUrl(path, query = null) {
  path = path || '';
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  if (query && query.startsWith('?')) {
    //  no-no
    query = query.substr(1);
  }
  return `http://localhost:8080/api${path}${query ? `?${query}` : ''}`;
}
