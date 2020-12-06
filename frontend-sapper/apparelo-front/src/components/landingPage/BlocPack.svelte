<!-- script -->
<script>
</script>

<!-- Style -->
<style>
  .container {
    background-image: url("/Images/imgPack.png");
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 90vh;
    display: flex;
    align-items: center;
  }

  .container-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    font-size: 30px;
    text-align: center;
    margin: auto;

    color: #fff;
    font-family: "Ubuntu", sans-serif;
  }

  .text-content {
    font-weight: 400;
  }

  .btn {
    width: fit-content;
    font-weight: bold;
    color: #fff;
    background-color: #5c9599;
    padding: 10px 25px;
    border: 1px solid #5c9599;

    border-radius: 10px;
  }

  .btn:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
  }
  @media screen and (max-width: 850px) {
    .container {
      background-size: 180%;
      min-height: 34vh;
    }
    .text-content {
      width: 300%;
      font-size: 18px;
    }
    .btn {
      width: 100%;
      font-size: 18px;
    }
  }
</style>

<!-- Mon code -->

<div class="container">
  <div class="container-infos">
    <p class="text-content">
      Vous aussi, lancez-vous et obtenez une panoplie à votre image !
    </p>
    <a href="article/pack" class="btn">J'y vais !</a>
  </div>
</div>
