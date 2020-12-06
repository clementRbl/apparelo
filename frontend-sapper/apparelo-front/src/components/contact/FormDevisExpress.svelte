<script>
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

<style>
  .bloc-titre {
    text-align: center;
    font-family: "Alata", sans-serif;
    margin-bottom: 80px;
  }

  .title {
    position: relative;
    margin: 0;
    font-size: 34px;
  }

  .feuille {
    position: relative;
    max-width: 4%;

    top: -23px;
    left: 360px;
    z-index: -34;
  }

  .form-container {
    margin-top: 70px;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-devis {
    width: 80%;
  }
  .form-control {
    display: flex;
    flex-direction: column;
  }

  .label-form {
    font-family: "Ubuntu", sans-serif;
    margin-bottom: 10px;
  }

  input {
  }

  .input-form {
    width: 100%;
    height: 60px;
    border: 2px solid #5c9599;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: "Ubuntu", sans-serif;
    margin-bottom: 20px;
    padding-left: 10px;
    box-shadow: none;
  }

  .input-form:focus {
    outline-style: none;
  }

  .input-orga {
    width: 350px;
  }

  .input-message {
    width: 100%;
    height: 200px;
    resize: none;
    border: 2px solid #5c9599;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 25px;
    font-family: "Ubuntu", sans-serif;
    padding: 10px;
  }

  .input-message:focus {
    outline-style: none;
  }

  textarea {
    box-shadow: none;
  }

  @media screen and (max-width: 850px) {
    .bloc-titre {
      margin-bottom: 20px;
    }
    .title {
      font-size: 24px;
      width: 80%;
      text-align: center;
      margin: auto;
    }

    .feuille {
      display: none;
    }

    .form-container {
      width: 90%;
    }
    .input-form {
      height: 40px;
    }
    .input-orga {
      width: 100%;
    }
    .form-devis {
      width: 100%;
    }
    .form-button {
      text-align: center;
    }
  }
</style>

<div class="bloc-titre">
  <h2 class="title">Questions, commentaires ? un devis express ?</h2>
  <img src="/Images/Feuille.png" alt="icone de feuille" class="feuille" />
</div>

<div class="form-container">
  <form on:submit|preventDefault={sendForm} class="form-devis">
    <div class="form-control">
      <label for="lastName" class="label-form">Nom :</label>
      <input
        type="text"
        id="lastName"
        bind:value={dataform.lastName}
        placeholder="Nom"
        class="input-form"
        required
        minlength="2"
        maxlength="320" />
    </div>

    <div class="form-control">
      <label for="firstName" class="label-form">Prénom :</label>
      <input
        type="text"
        id="firstName"
        bind:value={dataform.firstName}
        placeholder="Prénom"
        class="input-form"
        required
        minlength="2"
        maxlength="320" />
    </div>

    <div class="form-control">
      <label for="email" class="label-form">Email :</label>
      <input
        type="email"
        id="email"
        bind:value={dataform.email}
        placeholder="Email"
        class="input-form"
        required
        minlength="5"
        maxlength="320" />
    </div>

    <div class="form-control">
      <label for="tel" class="label-form">Téléphone :</label>
      <input
        type="tel"
        id="tel"
        bind:value={dataform.tel}
        placeholder="Téléphone"
        class="input-form"
        required
        maxlength="320" />
    </div>

    <div class="form-control">
      <label for="organisationName" class="label-form">Organisme :</label>
      <input
        type="text"
        id="organisationName"
        bind:value={dataform.organisationName}
        placeholder="Organisme"
        class="input-form"
        required
        maxlength="255" />
    </div>

    <div class="form-control">
      <label for="organisationType" class="label-form">Type d'organisme :</label>
      <select
        name="organisationType"
        id="organisationType"
        class="input-form input-orga"
        bind:value={dataform.organisationType}
        required
        maxlength="60">
        <option>Entreprise/Startup</option>
        <option>Associatif</option>
        <option>Profession libérale</option>
        <option>Particulier</option>
        <option>Association étudiante</option>
      </select>
    </div>

    <div class="form-control">
      <label for="message" class="label-form">Message :</label>
      <textarea
        name="message"
        id="message"
        class="input-message"
        bind:value={dataform.message}
        placeholder="Message"
        required
        minlength="10"
        maxlength="1000" />
    </div>
    {#if dataform.lastName && dataform.firstName && dataform.email && dataform.tel && dataform.message.length > 10}
      <div class="form-button">
        <Modal>
          <Content
            message="Votre message a bien été envoyé"
            msgB="Envoyer"
            validated="true" />
        </Modal>
      </div>
    {/if}
  </form>
</div>
