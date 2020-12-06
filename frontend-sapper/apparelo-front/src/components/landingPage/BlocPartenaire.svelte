<script>
</script>

<style type="text/scss">
  #container-partenaire {
    margin-bottom: 150px;
  }

  .bloc-titre {
    text-align: center;
    font-family: "Alata", sans-serif;
    margin-bottom: 80px;
  }
  .title {
    position: relative;
    margin: 0;
    font-size: 34px;
    text-transform: uppercase;
  }

  .feuille {
    position: relative;
    max-width: 4%;

    top: -23px;
    left: 215px;
    z-index: -1;
  }

  .slide-track:hover {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;

    cursor: pointer;
  }

  @mixin white-gradient {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  $animationSpeed: 40s;

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  // Styling
  .slider {
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 80%;
    margin-bottom: 150px;

    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 100%;
      position: absolute;
      width: 200px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      width: calc(400px * 14);
    }

    .slide {
      height: 100px;
      width: 250px;
    }
  }
  @media screen and (max-width: 850px) {
    .title {
      font-size: 26px;
    }
    .feuille {
      display: none;
    }
    #container-partenaire {
      margin-bottom: 20px;
    }
    .slider {
      margin-bottom: 20px;
    }
    .slide {
    }
  }
</style>

<section id="container-partenaire">
  <div class="bloc-titre">
    <h2 class="title">ils nous font confiance !</h2>
    <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
  </div>

  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoHec.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoMap.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoRocket.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoWorkingoo.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoHec.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoMap.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoRocket.png"
          height="100"
          width="250"
          alt="" />
      </div>

      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoHec.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoMap.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoRocket.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoWorkingoo.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoHec.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoMap.png"
          height="100"
          width="250"
          alt="" />
      </div>
      <div class="slide">
        <img
          src="Images/LogoPartenaire/logoRocket.png"
          height="100"
          width="250"
          alt="" />
      </div>
    </div>
  </div>
</section>
