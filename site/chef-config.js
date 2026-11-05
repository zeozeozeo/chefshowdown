/* Fallback runtime config. The Node web server serves this file dynamically in Docker. */
window.CHEF_NAKAMA = window.CHEF_NAKAMA || {
  host: location.hostname,
  port: location.port || (location.protocol === "https:" ? "443" : "80"),
  ssl: location.protocol === "https:",
  clientKey: "defaultkey"
};
