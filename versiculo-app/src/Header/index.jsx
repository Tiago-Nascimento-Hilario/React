import "./index.css";

export default function Header() {
  const textoHeader =
    "Examinais as Escrituras, porque vós cuidais ter nelas a vida eterna, e são elas que de mim testificam";
  return (
    <div className="header-container">
      <p className="paragrafo-container">{textoHeader}</p>
    </div>
  );
}
