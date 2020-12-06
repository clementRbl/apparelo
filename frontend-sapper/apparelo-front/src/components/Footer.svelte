<!-- script -->
<script>
</script>

<!-- Style -->
<style>
  .container-footer {
    background-color: #dfdad7;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px;
    font-family: "Ubuntu"- sans-serif;
  }

  .footer-bloc1,
  .footer-bloc2,
  .footer-bloc3 {
    width: 25%;
  }
  .footer-bloc1 {
    text-align: center;
  }
  address {
    margin-bottom: 25px;
  }

  .footer-bloc1--socialNetwork {
    width: 35%;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
  }

  .footer-list {
    text-align: left;
    padding-left: 0;
  }

  .footer-itemList {
    margin-bottom: 25px;
    color: #000;
  }

  .footer-copyright {
    background-color: #dfdad7;
    text-align: center;
    margin: 0;
    padding-bottom: 20px;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  h3 {
    font-weight: bold;
  }
  @media screen and (max-width: 850px) {
    .container-footer {
      flex-direction: column-reverse;
      text-align: center;
    }
    .footer-bloc1,
    .footer-bloc2,
    .footer-bloc3 {
      width: 80%;
      text-align: center;
      margin: auto;
    }
    .footer-list {
      text-align: center;
    }
    .footer-itemList {
      margin-bottom: 5px;
    }
    .icon-social {
      margin-right: 10px;
    }
    .icon-social:last-child {
      margin-right: 0;
    }
  }
</style>

<!-- Mon code -->

<footer>
  <div class="container-footer">
    <div class="footer-bloc1">
      <a href="."><img
          class="footer-bloc1--logo"
          src="Images/logoA.png"
          alt="Logo Apparelo" /></a>
      <address>42 rue Cadet<br /> 75009 Paris</address>
      <div class="footer-bloc1--socialNetwork">
        <a href="." class="icon-social"><img
            src="Images/linkedin.png"
            alt="Linkedin" /></a>
        <a href="." class="icon-social"><img
            src="Images/facebook.png"
            alt="facebook" /></a>
        <a href="." class="icon-social"><img
            src="Images/instagram.png"
            alt="instagram" /></a>
        <a href="." class="icon-social"><img
            src="Images/twitter.png"
            alt="twitter" /></a>
      </div>
    </div>
    <div class="footer-bloc2">
      <h3>Apparelo</h3>
      <ul class="footer-list">
        <a href="/article/textile"><li class="footer-itemList">Textiles</li></a>
        <a href="/article/objet"><li class="footer-itemList">Objets</li></a>
        <a href="/article/pack"><li class="footer-itemList">Idée packs</li></a>
        <a href="contact"><li class="footer-itemList">Devis express</li></a>
      </ul>
    </div>
    <div class="footer-bloc3">
      <h3>Liens utiles</h3>
      <ul class="footer-list">
        <a href="apropos"><li class="footer-itemList">A propos</li></a>
        <a href="contact"><li class="footer-itemList">Contact</li></a>
        <a href="mentions"><li class="footer-itemList">Mentions légales</li></a>
        <a href="login"><li class="footer-itemList">Service Commercial</li></a>
      </ul>
    </div>
  </div>
  <p class="footer-copyright">
    Copyright © 2020 Apparelo. Tous droits réservés
  </p>
</footer>
