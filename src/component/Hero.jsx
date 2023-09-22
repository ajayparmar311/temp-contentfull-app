import heroImg from '../assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>ContentFul API</h1>
          <p>
            Mumblecore four dollar toast pok pok meggings hot chicken enamel
            pin, dreamcatcher PBR&B lyft blue bottle chicharrones. Flannel PBR&B
            bruh four loko farm-to-table godard. Unicorn same messenger bag
            chillwave. Kombucha vape crucifix ugh freegan. Banjo vape VHS ramps
            wayfarers kinfolk vegan pabst blackbird spyplane whatever. Keffiyeh
            trust fund flannel, tumblr hell of retro gentrify bruh. Craft beer
            leggings JOMO, literally unicorn tofu plaid gorpcore jean shorts
            locavore whatever kickstarter slow-carb chartreuse air plant.
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
