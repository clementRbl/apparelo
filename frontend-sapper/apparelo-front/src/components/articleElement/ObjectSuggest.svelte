<script>
  import { onMount } from "svelte";

  let articlesList = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onMount(async () => {
    const res = await fetch(
      `http://ec2-15-236-181-77.eu-west-3.compute.amazonaws.com:3000/article/by-type/Objet`
    );
    articlesList = await res.json();

    articlesList = [
      articlesList[getRandomInt(0, 2)],
      articlesList[getRandomInt(3, 5)],
      articlesList[getRandomInt(6, 7)],
      articlesList[getRandomInt(0, 2)],
    ];
  });
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

    &-box--image {
      width: 50%;
      border: 3px solid #5c9599;
      border-radius: 20px;
      padding: 10px;
    }

    &-box--image:hover {
      background-color: #5c9599;
      border: 3px solid #000;
    }

    &-title {
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
  }
</style>

<div class="container-suggestion">
  <div class="container-content">
    <div class="containerTitle">
      <div class="title">
        Suggestions
        <img
          src="/Images/Feuille.png"
          alt="icone de feuille"
          class="title--feuille" />
      </div>
    </div>

    <div class="container-articles">
      {#each articlesList as item}
        <div class="article">
          <a href="article/{item.id}" class="article-box">
            <div>
              <img
                src="/Images/articles/{item.family}.png"
                class="article-box--image"
                alt={item.family} />
            </div>
            <h4 class="article-title">{item.denomination}</h4>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
