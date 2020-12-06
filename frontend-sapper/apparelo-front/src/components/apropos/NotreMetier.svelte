<!-- script -->
<script>
</script>

<!-- Style -->
<style type="text/scss">
  .container {
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .blocL-apparelo {
    width: 50%;
    margin-top: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: auto;
  }

  .title {
    width: fit-content;
    width: -moz-fit-content;
    font-family: "Alata", sans-serif;
    font-size: 34px;
    position: relative;
  }

  .feuille {
    position: absolute;
    top: 20px;
    right: -35px;
    z-index: -1;
  }

  .text-content {
    width: 70%;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-size: 22px;
  }

  .blocR-identity {
    width: 40%;
    margin-top: 80px;
  }

  .img-penderie {
    width: 100%;
    height: 120%;
    background-image: url("/Images/penderie.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 850px) {
    .container {
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;
    }
    .title {
      margin: 0 auto;
    }
    .feuille {
      display: none;
    }
    .blocL-apparelo {
      width: 100%;
      text-align: center;

      &--title {
        font-size: 26px;
      }
    }
    .text-content {
      font-size: 18px;
      margin: 0 auto;
    }

    .blocL-apparelo {
      margin-top: 20px;
    }
    .blocR-identity {
      display: none;
    }
  }
</style>

<!-- Mon code -->

<section class="container">
  <div class="blocR-identity">
    <div class="img-penderie" />
  </div>
  <div class="blocL-apparelo">
    <div class="title">
      <div class="blocL-apparelo--title">Notre Métier</div>
      <div class="blocL-apparelo--title">
        <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
      </div>
    </div>
    <div class="text-content">
      <p>
        Broderie, impression numérique, flocage, sérigraphie, nous utilisons les
        techniques les plus adaptées à votre projet afin d'obtenir le meilleur
        rapport qualité/prix. Une fois votre choix d'articles effectué, validez
        votre devis et notre conseiller vous rappellera afin d'affiner votre
        souhait et vous proposer la meilleur offre.
      </p>
    </div>
  </div>
</section>
