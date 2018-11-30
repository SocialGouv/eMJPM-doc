import ReactPiwik from "react-piwik";

const piwik = new ReactPiwik({
  url: "stats.num.social.gouv.fr",
  siteId: 5,
  trackErrors: true
});

export default piwik;
export { ReactPiwik };
