<!-- script -->
<script>
</script>

<!-- Style -->
<style>
  .container {
    background-image: url("/Images/sliderLanding1.png");
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 100vh;
    display: flex;
    align-items: center;

    margin-bottom: 100px;
  }

  .container-infos {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 70px 0;

    color: white;
  }

  .bloc-infos {
    width: 80%;
    height: 80%;
    margin: auto;

    display: flex;
    flex-direction: column;

    text-align: left;
  }

  .mainTitle {
    font-family: "Alata", sans-serif;
    font-size: 35px;

    margin-top: 0;
  }

  .textContent {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    width: 30%;
    margin-bottom: 40px;
  }

  .btn-devis {
    width: fit-content;
    width: -moz-fit-content;
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

  .btn-devis:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 850px) {
    .container {
      margin-bottom: 20px;
      min-height: 70vh;
    }
    .mainTitle {
      font-size: 20px;
    }

    .textContent {
      width: 100%;
    }

    .btn-devis {
      font-size: 20px;
      margin: auto;
    }
  }
</style>

<!-- Mon code -->

<div class="container">
  <div class="container-infos">
    <div class="bloc-infos">
      <h2 class="mainTitle">Besoin d’objets à votre image ?</h2>
      <p class="textContent">
        Expliquez-nous votre projet en quelques mots et en un clic obtenez le
        devis qui vous convient !
      </p>
      <a href="contact" class="btn-devis"> Mon devis express </a>
    </div>
  </div>
</div>
