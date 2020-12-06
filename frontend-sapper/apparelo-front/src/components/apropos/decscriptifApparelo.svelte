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
  }

  .blocL-apparelo {
    width: 50%;
    margin-top: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
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
    width: 50%;
    margin-top: 80px;

    display: flex;
    justify-content: center;
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

    .blocR-identity {
      width: 100%;
      margin-top: 10px;
      &--logo {
        width: 80%;
        text-align: center;
      }
    }
    .imgLogo {
      width: 80%;
    }
  }
</style>

<!-- Mon code -->

<section class="container">
  <div class="blocL-apparelo">
    <div class="title">
      <div class="blocL-apparelo--title">Qui sommes nous ?</div>
      <div class="blocL-apparelo--title">
        <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
      </div>
    </div>
    <div class="text-content">
      <p>
        <strong>Apparelo</strong>, est une entreprise qui permet aux
        associations, aux entreprises et toutes structures de pouvoir créer une
        panoplie de textiles ou d'objets à leur image en leur permettant de les
        personnaliser.
        <strong>Apparelo</strong>
        est un partenaire spécialisé dans la conception et la réalisation de
        supports de communication.
      </p>
    </div>
  </div>
  <div class="blocR-identity">
    <div class="blocR-identity--logo">
      <img
        class="imgLogo"
        src="/Images/logoAppareloCadre.png"
        alt="logo Apparelo" />
    </div>
  </div>
</section>
