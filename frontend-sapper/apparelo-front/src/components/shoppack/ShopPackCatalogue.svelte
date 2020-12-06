<!-- script -->
<script>
  import { onMount } from "svelte";
  let packs = [];

  onMount(async () => {
    const res = await fetch(
      `http://ec2-15-236-181-77.eu-west-3.compute.amazonaws.com:3000/article/by-type/Pack`
    );
    packs = await res.json();
    // console.log(articles);
  });
</script>

<!-- Style -->
<style>
  /* --- Products --- */

  .container-product {
    width: 80%;
    margin: auto;
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .img {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .img-article {
    width: fit-content;
    border: 5px solid #5c9599;
    border-radius: 20px;
  }

  .img-article:hover {
    background-color: #5c9599;
    border: 5px solid #000;
  }

  .article-title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 850px) {
    .container-product {
      width: 95%;
      padding-top: 10px;
    }

    .article {
      width: 45%;
    }

    .baseImg {
      width: 100%;
    }
  }
</style>

<!-- Mon code -->

<section class="container-product">
  {#each packs as item}
    <div class="article">
      <a href="article/{item.id}" class="img">
        <div class="img-article">
          <img
            class="baseImg"
            src="/Images/articles/{item.family}.png"
            alt={item.family} />
        </div>
        <h4 class="article-title">{item.denomination}</h4>
      </a>
    </div>
  {/each}
</section>
