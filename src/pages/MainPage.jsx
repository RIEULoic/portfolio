import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <p>texte de présentation</p>
      <div id="hero">
        <div class="polygon-container">
          <div class="polygon"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia
          beatae sunt, hic laboriosam voluptas nesciunt maiores, quisquam
          aliquam quasi autem! Facilis sed doloremque perspiciatis rerum quaerat
        </p>
      </div>
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
