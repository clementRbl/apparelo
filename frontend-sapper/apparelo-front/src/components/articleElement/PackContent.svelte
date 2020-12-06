<script>
</script>

<style type="text/scss">
  .containerTitle {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
  }

  .title {
    width: fit-content;
    font-family: "Alata", sans-serif;
    font-size: 30px;
    position: relative;

    &--feuille {
      position: absolute;
      top: 20px;
      right: -30px;
      z-index: -1;
    }
  }

  .container-articles {
    width: 100%;
    margin: 80px auto;
    display: flex;
    justify-content: center;
  }

  .article {
    width: 15%;

    &-box {
      display: flex;
      flex-direction: column;
      text-align: center;

      margin-right: 20px;
    }
    &-box--imagePack {
      width: 50%;
      border: 3px solid #5c9599;
      border-radius: 20px;
      padding: 10px;
    }

    &-title {
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
    }
  }
</style>

<div class="container-suggestion">
  <div class="container-content">
    <div class="containerTitle">
      <div class="title">
        Ce pack comprend
        <img
          src="/Images/Feuille.png"
          alt="icone de feuille"
          class="title--feuille" />
      </div>
    </div>

    <div class="container-articles">
      <div class="article">
        <div class="article-box">
          <div>
            <img
              src="/Images/articles/Tshirt.png"
              class="article-box--imagePack"
              alt="Tshirt" />
          </div>
          <h4 class="article-title">Tshirt</h4>
        </div>
      </div>

      <div class="article">
        <div class="article-box">
          <div>
            <img
              src="/Images/articles/Casquette.png"
              class="article-box--imagePack"
              alt="Casquettes" />
          </div>
          <h4 class="article-title">Casquette</h4>
        </div>
      </div>

      <div class="article">
        <div class="article-box">
          <div>
            <img
              src="/Images/articles/Sweat.png"
              class="article-box--imagePack"
              alt="Sweats" />
          </div>
          <h4 class="article-title">Sweat</h4>
        </div>
      </div>

      <div class="article">
        <div class="article-box">
          <div>
            <img
              src="/Images/articles/Bracelet.png"
              class="article-box--imagePack"
              alt="Bracelet" />
          </div>
          <h4 class="article-title">Bracelet</h4>
        </div>
      </div>
    </div>
  </div>
</div>
