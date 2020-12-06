<script>
  import { articles } from "../../store/store.js";
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  /* MENU Style */
  #menuToggle {
    display: block;
    position: fixed;
    top: 50px;
    left: 50px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: rgb(255, 255, 255);
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /*
 * Just a quick hamburger
 */
  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  /*
 * But let's hide the middle one.
 */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  #menu {
    position: absolute;
    width: 150px;
    height: 100vh;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #5c9599;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    font-size: 18px;
  }

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }

  /* MENU bouton */

  .header-right {
    position: fixed;
    padding-top: 41px;
    padding-right: 20px;
    z-index: 9999;
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
</style>

<div class="container">
  <nav role="navigation">
    <div id="menuToggle">
      <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      -->
      <input type="checkbox" />

      <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      -->
      <span />
      <span />
      <span />

      <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
    -->
      <ul id="menu">
        <a href="."><li><img src="./images/LogoApparelo.png" alt="" /></li></a>
        <a href="article/textile"><li>Textile</li></a>
        <a href="article/objet"><li>Objet</li></a>
        <a href="article/pack"><li>Idée pack</li></a>
        <a href="apropos"><li>À propos</li></a>
        <a href="contact"><li>Contact</li></a>
      </ul>
    </div>
  </nav>
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
