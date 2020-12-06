<style type="text/scss">
  .container {
    width: 100%;
  }
  .header {
    background-image: url("/Images/bgAdmin.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .button-catalogue {
    width: 500px;
    height: 80px;
    background-color: rgba(223, 218, 215, 0.5);
    color: #000;
    font-family: "Alata", sans-serif;
    font-size: 30px;
    border: 1px solid rgba(223, 218, 215, 0.5);
    border-radius: 10px;

    text-align: center;
    line-height: 70px;

    text-decoration: none;
    margin-bottom: 7%;
  }

  /* .button-catalogue:hover {
background-color: #5c9599;
} */

  /* TITRE.TABLEAU */
  .title {
    width: 80%;
    margin: 3rem auto;
    font-family: "Ubuntu", sans-serif;
    font-size: 30px;
    font-weight: bold;
  }

  .container-main {
    width: 80%;
    margin: auto;

    display: flex;
    justify-content: space-around;

    background-color: #5c9599;
    color: #fff;
    padding: 1rem 0;
    font-family: "Ubuntu" sans-serif;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 10px;
    margin-bottom: 3rem;

    &--item {
      width: 18%;
      text-align: center;
      border-right: 1px solid #fff;
    }
  }
  .lastcol {
    width: 10%;
    border-right: none;
  }
</style>

<section class="container">
  <div class="header">
    <button class="button-catalogue">Espace administrateur</button>
  </div>
</section>
<h2 class="title">Récapitulatif des devis :</h2>

<section class="container-main">
  <div class="container-main--item">Date</div>
  <div class="container-main--item">Order ID</div>
  <div class="container-main--item">Organisme</div>
  <div class="container-main--item">Téléphone</div>
  <div class="container-main--item">Email</div>
  <div class="container-main--item lastcol">Supprimer</div>
</section>
