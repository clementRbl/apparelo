<script>
  import { articles } from "../../store/store";
  import Content from "../popup/Content.svelte";
  import Modal from "svelte-simple-modal";

  let dataform = {
    lastName: "",
    firstName: "",
    email: "",
    tel: "",
    organisationName: "",
    organisationType: "Entreprise/Startup",
    message: "",
    articles: $articles,
    logo: "",
  };

  async function sendForm() {
   
    const res = await fetch(
      "http://ec2-15-236-181-77.eu-west-3.compute.amazonaws.com:3000/devis/",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(dataform),
      }
    )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
</script>

<style type="text/scss">
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

  /** Formulaire **/

  .container {
    width: 80%;
    margin: auto;
    font-family: "Ubuntu", sans-serif;
    font-style: 20px;
    font-weight: bold;

    &-form {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
    }

    &-form--bloc {
      display: flex;
      flex-direction: column;
      width: 40%;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .boxselect {
    width: 30%;
    height: 40px;
    border: 2px solid #5c9599;
    border-radius: 5px;
  }

  .boxselect:focus {
    outline: none;
  }

  .input {
    border: 2px solid #5c9599;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: none;

    &-message {
      height: 200px;
    }

    &-box {
      height: 40px;
    }

    &-logo {
      font-family: "Ubuntu", sans-serif;
      padding-left: 10px;
      margin-top: 10px;
    }
  }

  input:focus {
    outline-style: none;
  }

  .btn {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    font-family: "Ubuntu", sans-serif;
    padding-left: 10px;
  }

  textarea {
    font-family: "Ubuntu", sans-serif;
    padding: 10px;
  }

  textarea:focus {
    outline-style: none;
  }

  input:focus {
    outline-style: none;
  }

  .logo {
    border: 1px solid #5c9599;
    background-color: #5c9599;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px 25px;
    text-align: center;
    transition: 0.1s;
    width: 20%;
  }
</style>

<div class="description">
  <div class="border" />
  <h1 class="title-description">Mes informations :</h1>
</div>

<div class="container">
  <form on:submit|preventDefault={sendForm}>
    <!-- organisation -->

    <div class="container-form">
      <label for="organisationType" class="label-form">Type d'organisme :</label>
      <select
        name="organisationType"
        id="organisationType"
        class="boxselect"
        required
        maxlength="60"
        bind:value={dataform.organisationType}>
        <option>Entreprise/Startup</option>
        <option>Associatif</option>
        <option>Profession libérale</option>
        <option>Particulier</option>
        <option>Association étudiante</option>
      </select>
    </div>

    <!-- message -->

    <div class="container-form">
      <label for="message" class="label-form">Message :</label>
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        class="input input-message"
        bind:value={dataform.message}
        minlength="10"
        maxlength="1000" />
    </div>

    <!-- Prenom Nom Orga Tél -->

    <div class="wrap">
      <div class="container-form--bloc">
        <label for="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          placeholder="Nom"
          bind:value={dataform.lastName}
          class="input input-box"
          required
          minlength="2"
          maxlength="320" />
      </div>

      <div class="container-form--bloc">
        <label for="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          placeholder="Prénom"
          bind:value={dataform.firstName}
          class="input input-box"
          required
          minlength="2"
          maxlength="320" />
      </div>

      <div class="container-form--bloc">
        <label for="organisationName">Organisme / Entreprise :</label>
        <input
          type="text"
          id="organisationName"
          placeholder="Organisme"
          bind:value={dataform.organisationName}
          class="input input-box"
          required
          maxlength="255" />
      </div>

      <div class="container-form--bloc">
        <label for="tel">Téléphone :</label>
        <input
          type="tel"
          id="tel"
          bind:value={dataform.tel}
          placeholder="Téléphone"
          class="input input-box"
          required
          maxlength="320" />
      </div>
    </div>

    <!-- Fin Prenom Nom Orga Tél -->

    <!-- Email -->

    <div class="container-form">
      <label for="email" class="label-form">Email :</label>
      <input
        type="email"
        id="email"
        bind:value={dataform.email}
        placeholder="Email"
        class="input input-box"
        required
        minlength="5"
        maxlength="320" />
    </div>

    <!-- logo -->

    <div class="container-form logo">
      <label for="logo" class="logo-file">Logo :</label>
      <button><input
          style="none"
          type="file"
          id="logo"
          bind:value={dataform.logo}
          class="input-logo"
          minlength="5"
          maxlength="320" /></button>
    </div>

    <!-- button -->
    {#if dataform.lastName && dataform.firstName && dataform.email && dataform.tel}
      <div class="container-form btn">
        <Modal>
          <Content
            message="Votre devis a bien été envoyé"
            msgB="Envoyer le devis"
            validated="true" />
        </Modal>
      </div>
    {/if}
  </form>
</div>
