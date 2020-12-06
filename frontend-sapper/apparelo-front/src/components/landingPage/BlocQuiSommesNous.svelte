<!-- script -->
<script>
</script>

<!-- Style -->
<style>
  .mainContainer {
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
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
    left: 166px;
    z-index: -34;
  }

  .infoContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .imgTshirt {
    width: 50%;
  }
  img {
    width: 100%;
  }

  .textContent {
    text-align: left;
    width: 42%;
    height: 50%;
    background-color: #dfdad7;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .textContent-item {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-size: 22px;
    margin-bottom: 40px;
  }

  .btn-aPropos {
    width: fit-content;
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;

    background-color: #5c9599;
    padding: 10px 25px;
    border: 1px solid #5c9599;

    border-radius: 10px;
  }

  .btn-aPropos:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 850px) {
    .mainContainer {
      margin-bottom: 50px;
    }
    .title {
      font-size: 26px;
    }
    .feuille {
      display: none;
    }
    .infoContainer {
      width: 80%;
      flex-direction: column;
    }
    .imgTshirt {
      width: 100%;
    }
    .textContent {
      width: 80%;
      margin: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .textContent-item {
      font-size: 16px;
    }

    .btn-aPropos {
      width: 100%;
      font-size: 16px;
    }
    .bloc-titre {
      margin-bottom: 20px;
    }
  }
</style>

<!-- Mon code -->

<div id="about" class="mainContainer">
  <div class="bloc-titre">
    <h2 class="title">qui sommes nous ?</h2>
    <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
  </div>
  <div class="infoContainer">
    <div class="imgTshirt">
      <img src="/Images/imgTshirtLanding.png" alt="Tshirt Apparelo" />
    </div>
    <div class="textContent">
      <p class="textContent-item">
        Apparelo c’est votre plateforme de personnalisation de vêtements et
        d’objets, mais avant tout c’est une équipe de passionnés à votre écoute
        !
      </p>
      <a href="apropos" class="btn-aPropos"> Je découvre Apparelo ! </a>
    </div>
  </div>
</div>
