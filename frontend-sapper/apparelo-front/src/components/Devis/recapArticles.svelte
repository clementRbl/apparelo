<script>
  import { articles } from "../../store/store.js";
  function deleteArticle(articleId) {
    $articles = $articles.filter((item) => item.articleId !== articleId);
  }
</script>

<style type="text/scss">
  .content-quantity--input:focus {
    outline: none;
  }

  .description {
    width: 80%;
    margin: 80px auto;
  }

  .title-description {
    font-size: 28px;
    color: black;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
  }

  /* RECAP article */

  .scroll-container {
    width: 70%;
    margin: auto;
    min-height: 20vh;
    max-height: 50vh;
    overflow: scroll;
    border: 1px solid #5c9599;
    // padding: 30px 0;
    border-radius: 20px;
    background-color: rgba(210, 205, 205, 0.2);
  }

  .container {
    width: 80%;
    margin: auto;
    border: 3px solid #5c9599;
    border-radius: 10px;

    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-recap {
      width: 100%;
      margin: auto;
      height: 125px;
      display: flex;
    }
  }

  .noarticles {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-textcontent {
      text-align: center;
      font-size: 20px;
    }

    &-link {
      display: flex;
      justify-content: center;
      width: fit-content;
      text-align: center;
      text-decoration: none;
      background-color: #5c9599;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      margin: 15px auto;
      border: 2px solid #5c9599;
    }

    &-link:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .decoration {
    text-decoration: none;
  }

  .article {
    width: 15%;
    display: flex;

    &-img {
      width: 75%;
      margin: auto;
    }
  }

  .content {
    width: 90%;
    display: flex;
    justify-content: space-between;

    padding: 30px;
  }

  .bloc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .content {
    &-title {
      font-family: "Ubuntu", sans-serif;
      font-weight: 300;
    }

    &-quantity {
      &--label {
        font-size: 16px;
        font-weight: 300;
      }

      &--input {
        height: 20px;
        width: 80px;
        color: black;
        border: 1px solid #000;
        border-radius: 5px;

        text-align: right;
        font-family: "Ubuntu", sans-serif;
        font-size: 18px;
        margin-left: 100px;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin-left: 10px;
  }

  .content-delete {
    display: flex;
    align-items: center;

    &--text {
      font-size: 20px;
      font-family: "Ubuntu", sans-serif;
    }

    &--btnpicto {
      width: 25px;
      height: 25px;
      font-family: "Ubuntu", sans-serif;
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: bold;
      border: 3px solid #5c9599;
      border-radius: 5px;
      padding-right: 15px;
      cursor: pointer;
      outline: none;
    }

    &--btnpicto:hover {
      background-color: #5c9599;
      color: #fff;
    }
  }

  .containerBtnAddArticle {
    width: 15%;
    margin: 10px auto;
  }

  .btnAddArticle {
    border: 1px solid #5c9599;
    background-color: #5c9599;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px 25px;
    text-align: center;
    transition: 0.1s;
    width: fit-content;

    &-link {
      text-decoration: none;
    }
  }

  .btnAddArticle:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>

<div class="description">
  <h3 class="title-description">Mes articles :</h3>
</div>
<div class="scroll-container">
  {#if $articles.length == 0}
    <div class="noarticles">
      <p class="noarticles-textcontent">Vous n'avez pas d'articles :</p>
      <div class="noarticles-link">
        <a class="decoration" href="./#produits">Ajoutez un article</a>
      </div>
    </div>
  {:else if $articles.length >= 1}
    {#each $articles as article}
      <div class="container">
        <div class="container-recap">
          <div class="article">
            <img
              src="/Images/articles/{article.name}.png"
              class="article-img"
              alt="tee-shirt" />
          </div>
          <div class="content">
            <div class="bloc">
              <h3 class="content-title">{article.name}</h3>
              <div class="content-quantity">
                <label for="quantity" class="content-quantity--label">Quantité :</label><input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="10"
                  max="500"
                  step="10"
                  bind:value={article.quantity}
                  class="content-quantity--input" />
              </div>
            </div>
            <div class="content-delete">
              <p class="content-delete--text">supprimer</p>
              <button
                on:click={deleteArticle(article.articleId)}
                class="content-delete--btnpicto">x</button>
            </div>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>

{#if $articles.length >= 1}
  <div class="containerBtnAddArticle">
    <div class="btnAddArticle">
      <a href="/#produits" class="btnAddArticle-link">Ajoutez un article</a>
    </div>
  </div>
{/if}
