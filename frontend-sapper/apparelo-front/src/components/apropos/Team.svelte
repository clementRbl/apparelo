<!-- script -->
<script>
</script>

<!-- Style -->
<style type="text/scss">
  .container {
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
  }

  .container-title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .title {
    width: fit-content;
    font-family: "Alata", sans-serif;
    font-size: 34px;
    position: relative;
  }

  .feuille {
    position: absolute;
    top: 20px;
    right: -35px;
    z-index: -1;
  }

  .bloc-workers {
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .worker {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  .worker-picture {
    width: 30%;
  }

  .worker-designation {
    text-align: center;
  }

  .worker-linkedin {
    width: 24px;
    height: 24px;
    background-image: url("/Images/linkedin.png");
    background-repeat: no-repeat;
  }

  .worker-linkedin:hover {
    background-image: url("/Images/linkedinHover.png");
    background-repeat: no-repeat;
  }

  .nameMember {
    margin: 10px 0;
    font-size: 24px;
    font-weight: bold;
    font-family: "ubuntu" sans-serif;
  }

  @media screen and (max-width: 850px) {
    .title {
      font-size: 26px;
    }
    .feuille {
      display: none;
    }
    .worker {
      width: 100%;
      margin-bottom: 40px;
      &-picture {
        width: 50%;
      }
    }
  }
</style>

<!-- Mon code -->

<section class="container">
  <div class="container-title">
    <div class="title">
      <div class="blocL-apparelo--title">Notre équipe</div>
      <div class="blocL-apparelo--title">
        <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
      </div>
    </div>
  </div>
  <div class="bloc-workers">
    <div class="worker">
      <img
        src="/Images/icoAbde.png"
        alt="Abdenour Bensounan"
        class="worker-picture" />
      <h4 class="nameMember">Abdenour</h4>
      <p class="worker-designation">Product Owner<br />Lead Dev Back</p>
      <a
        href="https://www.linkedin.com/in/abdenour-bensouna/"
        target="_blank"
        class="worker-linkedin" />
    </div>

    <div class="worker">
      <img
        src="/Images/icoClem.png"
        alt="Clément Reboul"
        class="worker-picture" />
      <h4 class="nameMember">Clément</h4>
      <p class="worker-designation">Lead Dev Front<br />Scrum master</p>
      <a
        href="https://www.linkedin.com/in/clement-reboul/"
        target="_blank"
        class="worker-linkedin" />
    </div>

    <div class="worker">
      <img
        src="/Images/icoBenoit.png"
        alt="Benoit Robin"
        class="worker-picture" />
      <h4 class="nameMember">Benoit</h4>
      <p class="worker-designation">Dev Front<br />Référent technique</p>
      <a
        href="https://www.linkedin.com/in/benoit-robin/"
        target="_blank"
        class="worker-linkedin" />
    </div>
  </div>
</section>
