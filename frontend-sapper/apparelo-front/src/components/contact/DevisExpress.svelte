<script>
</script>

<style type="text/scss">
  .container-description {
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .blocL-apparelo {
    width: 40%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: fit-content;
    width: -moz-fit-content;
    font-family: "Alata", sans-serif;
    font-size: 34px;
    position: relative;
    justify-content: right;
  }

  .feuille {
    position: absolute;
    top: 20px;
    right: -35px;
    z-index: -1;
  }

  .text-content {
    width: 90%;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-size: 22px;
    text-align: right;
  }

  .blocR-identity {
    width: 50%;
    margin-top: 80px;

    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 850px) {
    .container-description {
      flex-direction: column-reverse;
      width: 100%;
      margin-bottom: 20px;
    }
    .title {
      margin: 0 auto;
    }
    .feuille {
      display: none;
    }
    .blocR-identity {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      &--logo {
        width: 80%;
        text-align: center;
      }
    }
    .imgLogo {
      width: 90%;
    }
    .text-content {
      font-size: 18px;
      margin: 0 auto;
    }

    .blocL-apparelo {
      width: 100%;
      margin-top: 80px;
      justify-content: center;
      &--title {
        font-size: 26px;
        width: 80%;
        text-align: center;
        margin: auto;
      }
    }
  }
</style>

<section class="container-description">
  <div class="blocR-identity">
    <div class="blocR-identity--logo">
      <img
        class="imgLogo"
        src="/Images/logoTeeshirtCadre.png"
        alt="logo Apparelo" />
    </div>
  </div>
  <div class="blocL-apparelo">
    <div class="title">
      <div class="blocL-apparelo--title">Besoin d'une réponse rapide ?</div>
      <div class="blocL-apparelo--title">
        <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
      </div>
    </div>
    <div class="text-content">
      <p>
        Une question ou des interrogations ! nous sommes là pour vous répondre.
        Une équipe dédié répondra à vos demandes et prendra contact avec vous
        dans les plus brefs délais
      </p>
    </div>
  </div>
</section>
