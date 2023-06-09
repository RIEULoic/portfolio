import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <h1>Titre</h1>
      <p>texte de présentation</p>
      <div>hero image</div>
      <div className="works-container">
        <div>
          <h2>Travaux1</h2>
          <p>résumé</p>
          <h6>lien</h6>
        </div>
        <div>
          <h2>Travaux2</h2>
          <p>résumé</p>
          <h6>lien</h6>
        </div>
        <div>
          <h2>Travaux2</h2>
          <p>résumé</p>
          <h6>lien</h6>
        </div>
      </div>
      <p>contact</p>
    </div>
  );
};

export default MainPage;
