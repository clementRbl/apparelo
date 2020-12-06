<script>
  import Menu from "../components/Menuburger/Menu.svelte";
  // import Searchbar from './Searchbar.svelte';
  import { articles } from "../store/store.js";

  let searchInput = false;

  function showInput() {
    if (searchInput === false) {
      searchInput = true;
    } else if (searchInput === true) {
      searchInput = false;
    }
  }
</script>

<style>
  #menuBurger {
    display: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 80px;
    width: 100%;
    font-family: "Ubuntu", sans-serif;
    font-size: 14px;
    position: fixed;
    z-index: 9999;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
    margin-left: 16px;
    padding-left: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #5c9599;
  }

  /*.loupe {
    cursor: pointer;
    font-size: 20px;
  }

  .ico-loupe {
    padding-top: 10px;
    margin-left: 10px;
  } */

  .logo {
    padding-top: 3px;
  }

  .button-devis {
    width: fit-content;
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 14px;

    background-color: #5c9599;
    padding: 10px 25px;
    border: 1px solid #5c9599;

    border-radius: 10px;
    margin-left: 10px;
  }

  .button-devisencours {
    width: fit-content;
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 14px;
    background-color: red;
    padding: 10px 25px;
    border: 1px solid black;

    border-radius: 10px;
    margin-left: 10px;
  }

  .button-devisencours:focus {
    outline: none;
  }

  .button-devisencours:hover {
    cursor: pointer;
  }

  .button-devis:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .button-devis:focus {
    outline: none;
  }

  .header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .container-left {
    padding-left: 25px;
    display: flex;
  }

  .container-right {
    padding-right: 25px;
  }

  @media screen and (max-width: 850px) {
    #desktop {
      display: none;
    }
    #menuBurger {
      display: block;
    }
  }
</style>

<header id="desktop">
  <div class="container-left">
    <div class="logo">
      <a href="."><img
          class="img"
          src="Images/LogoApparelo.png"
          alt="Logo Apparelo" /></a>
    </div>
    <nav>
      <ul class="menu">
        <li><a href="article/textile">TEXTILES</a></li>
        <li><a href="article/objet">OBJETS</a></li>
        <li><a href="article/pack">IDÉE PACKS</a></li>
        <li><a href="apropos">À PROPOS</a></li>
        <li><a href="contact">CONTACT</a></li>
      </ul>
    </nav>
  </div>
  <div class="container-right">
    <div class="header-right">
      <!-- {#if searchInput} -->

      <!-- <Searchbar />  -->
      <!-- {/if} -->

      <!--<div class="loupe"><img class="ico-loupe" src="Images/Loupe.png" on:click="{showInput}" alt="recherche"> 
      </div> -->
      {#if $articles.length >= 1}
        <a href="devis"><button class="button-devisencours">VOIR MON DEVIS</button></a>
      {:else}
        <a href="contact"><button class="button-devis">DEVIS EXPRESS</button></a>
      {/if}
    </div>
  </div>
</header>

<div id="menuBurger">
  <Menu />
</div>
