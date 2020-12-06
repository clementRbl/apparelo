<!-- script -->
<script>
</script>

<!-- Style -->
<style>
  .container {
    width: 100%;
  }
  .header {
    background-image: url("/Images/bgCatalogueTextile.png");
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
    color: #fff;
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

  @media screen and (max-width: 850px) {
    .header {
      width: 100%;
      height: 40vh;
    }
    .button-catalogue {
      width: 50%;
      font-size: 20px;
      height: 40px;
      line-height: 20px;
      margin-bottom: 20%;
    }
  }
</style>

<!-- Mon code -->

<section class="container">
  <div class="header">
    <button class="button-catalogue">Catalogue Objet</button>
  </div>
</section>
