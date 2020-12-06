<script>
</script>

<style>
  #produits {
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
    left: 115px;
    z-index: -34;
  }

  .container-produits {
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-between;
  }

  .button-produits1 {
    position: absolute;
    top: 63%;
    right: 20%;
    width: 220px;
    height: 66px;
    background: rgba(0, 0, 0, 0);
    border: 2px solid #fff;
    color: #fff;
    font-size: 30px;
    font-family: "Alata", sans-serif;
    cursor: pointer;
    transition: 0.5s;
  }

  .button-produits1:hover {
    background: rgb(255, 255, 255, 0.2);
  }

  .button-produits1:focus {
    outline: none;
  }

  .cartes-produits1 {
    position: relative;
  }
  @media screen and (max-width: 1370px) {
    .container-produits {
      justify-content: center;
    }
  }

  @media screen and (max-width: 850px) {
    #produits {
      margin-bottom: 20px;
    }
    .title {
      font-size: 26px;
    }
    .feuille {
      display: none;
    }

    .container-produits {
      width: 80%;
      justify-content: center;
    }
    .cartes-produits1 {
      margin-bottom: 10px;
    }
  }
</style>

<section id="produits">
  <div class="bloc-titre">
    <h2 class="title">nos produits</h2>
    <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
  </div>

  <div class="container-produits">
    <div class="cartes-produits1">
      <img
        src="Images/img_textile.png"
        class="img-produits"
        alt="catalogue textile" />
      <a href="article/textile"><button
          class="button-produits1 button-color">TEXTILES</button></a>
    </div>

    <div class="cartes-produits1">
      <img
        src="Images/img_objet.png"
        class="img-produits"
        alt="catalogue objet" />
      <a href="article/objet"><button
          class="button-produits1">OBJETS</button></a>
    </div>

    <div class="cartes-produits1">
      <img
        src="Images/img_pack.png"
        class="img-produits"
        alt="catalogue pack" />
      <a href="article/pack"><button class="button-produits1">IDÉE PACKS</button></a>
    </div>
  </div>
</section>
