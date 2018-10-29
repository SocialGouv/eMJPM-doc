import Link from "next/link";

const BASE_HREF = process.env.BASE_HREF || "";

const Header = () => (
  <header className="navbar">
    <div className="navbar__container" style={{ display: "flex" }}>
      <div style={{ flex: "1 0 150px" }} />
      <img
        src={BASE_HREF + "/static/images/emjpm.png"}
        style={{ maxHeight: 50 }}
      />
      <nav style={{ flex: "1 0 150px", textAlign: "right" }}>
        <Link href="/">
          <a>Guide d'utilisation</a>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://emjpm.num.social.gouv.fr">Se connecter</a>
      </nav>
    </div>
  </header>
);

export default Header;
