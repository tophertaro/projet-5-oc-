
function Banner({bannerImg, bannerText}) {
  return(
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner__overlay">
        <h2>{bannerText}</h2>
      </div>
    </div>
  );
}

export default Banner