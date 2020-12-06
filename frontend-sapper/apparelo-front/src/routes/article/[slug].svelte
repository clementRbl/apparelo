<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(
      `http://ec2-15-236-181-77.eu-west-3.compute.amazonaws.com:3000/article/${params.slug}`
    );
    const data = await res.json();

    if (res.status === 200) {
      return {
        article: data,
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  // NE PAS SUPPRIMER !
  /* for (const element of $articles) { // cette boucle permet d'afficher l'id de chaque article présent dans le store
     const elementId = element.articleId;
     if (elementId) {
             
       console.log('article dans le store' ,elementId);
     } else {
             
       console.log('pas d\'ID');
     }
    }
    
    for (let i = 0; i < articles.useLocalStorage.length; i++) { // cette boucle me permet de recuperer l'id de l'article dans LOCALSTORAGE
        const idInStore = articles.useLocalStorage.getItem(useLocalStorage.key(i));
        
    } */
  import ProductSize from "../../components/articleElement/ProductSize.svelte";
  import ProductColor from "../../components/articleElement/ProductColor.svelte";
  import TextileSuggest from "../../components/articleElement/TextileSuggest.svelte";
  import ObjectSuggest from "../../components/articleElement/ObjectSuggest.svelte";
  import PackContent from "../../components/articleElement/PackContent.svelte";

  import { articles } from "../../store/store.js";
  export let article;

  let data = {
    articleId: "",
    quantity: 10,
    name: "",
  };

  function oneArticle(event) {
    const newData = {
      articleId: event.target.id,
      name: event.target.name,
      quantity: data.quantity,
    };

    $articles = [newData, ...$articles];
  }

  // $: console.log("$articles : ", $articles);

  // export let article;

  export let type = article.type;

  // console.log('ceci est le type de la page:', type);
</script>

<style type="text/scss">
  .containerImg {
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

  // GENERAL

  .container {
    width: 80%;
    margin: auto;

    &-article {
      display: flex;
      justify-content: space-evenly;
    }

    &-article--bloc1 {
      width: 40%;
    }

    &-article--bloc2 {
      width: 40%;
    }
  }

  // Article

  .container-article {
    margin: 80px auto;

    &--bloc1 {
      display: flex;
      align-items: center;
    }

    &--bloc2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .image {
    margin: auto;
    border: 5px solid #5c9599;
    border-radius: 20px;
  }

  .article-content {
    display: flex;
    flex-direction: column;

    &--title {
      font-size: 30px;
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
    }

    &--description {
      font-family: "Ubuntu", sans-serif;
    }
  }

  .article-details {
    &--quantity {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 50px;

      font-size: "Ubuntu", sans-serif;
      font-weight: bold;
    }
  }

  .input-quantity {
    height: 20px;
    width: 120px;
    color: black;
    border: 1px solid #000;
    border-radius: 5px;

    text-align: right;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
  }

  .input-quantity:focus {
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin-left: 10px;
  }

  .button {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    width: fit-content;
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;

    background-color: #5c9599;
    padding: 10px 25px;
    border: 1px solid #5c9599;

    border-radius: 10px;
  }

  .btn:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }
</style>

<!-- Mon code -->

<section class="containerImg">
  <div class="header">
    <button class="button-catalogue">Votre produit</button>
  </div>
</section>

<section class="container">
  <div class="container-article">
    <div class="container-article--bloc1">
      <img
        src="Images/articles/{article.family}.png"
        alt={article.denomination}
        class="image" />
    </div>
    <form class="container-article--bloc2">
      <div class="article-content">
        <h3 class="article-content--title">{article.denomination}</h3>
        <p class="article-content--description">{article.description}</p>
      </div>

      <div class="article-details">
        <!-- quantity -->

        <div class="article-details--quantity">
          <label for="quantity" class="label-quantity">Quantité :</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="10"
            max="500"
            step="10"
            class="input-quantity"
            placeholder="0"
            bind:value={data.quantity} />
        </div>

        {#if type == 'Textile'}
          <ProductSize />
          <ProductColor />
        {:else if type == 'Objet'}
          <ProductColor />
        {/if}

        <div class="button">
          <a href="devis"><button
              on:click={oneArticle}
              id={article.id}
              name={article.denomination}
              type="submit"
              class="btn">Ajouter au devis</button></a>
        </div>
      </div>
    </form>
  </div>

  {#if type == 'Textile'}
    <TextileSuggest />
  {:else if type == 'Objet'}
    <ObjectSuggest />
  {:else}
    <PackContent />
  {/if}
</section>
