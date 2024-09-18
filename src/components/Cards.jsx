import logements from "../../datas/logements.json";

function Cards() {
  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card">
          <img src={logement.cover} alt={logement.title} className="card-cover" />
          <div className="card-title">
            <h2>{logement.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;