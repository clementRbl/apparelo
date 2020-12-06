<script>
  let userForm = {
    username: "",
    password: "",
  };

  async function sendForm() {
    const res = await fetch("http://localhost:3000/auth/signin/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userForm),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  }
</script>

<style>
  .main-body {
    background: url("https://cdn.hipwallpaper.com/i/1/56/FvT5Yp.jpg");
    margin: 0px;
    font-family: "Ubuntu", sans-serif;
    background-size: 100% 100%;
  }
  h1,
  h6 {
    margin: 0;
    padding: 0;
  }
  .login {
    margin: 0 auto;
    padding-top: 30vh;
    max-width: 500px;
    height: 70vh;
  }
  .login-header {
    color: #fff;
    text-align: center;
    font-size: 250%;
  }

  .login-form {
    box-sizing: border-box;
    padding-top: 15px;
    padding-bottom: 10%;
    margin: 5% auto;
    text-align: center;
  }
  .login input[type="text"],
  .login input[type="password"] {
    max-width: 400px;
    width: 80%;
    line-height: 3em;
    font-family: "Ubuntu", sans-serif;
    margin: 1em 2em;
    border-radius: 5px;
    border: 2px solid #f2f2f2;
    outline: none;
    padding-left: 10px;
  }

  .no-access {
    color: #e86850;
    margin: -15px 0px 10px -60%;
    text-decoration: underline;
    cursor: pointer;
  }

  .login-button {
    width: fit-content;
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 14px;
    background-color: #5c9599;
    padding: 10px 25px;
    border: 1px solid #5c9599;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
  }

  .login-button:hover {
    width: fit-content;
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 14px;
    background-color: #2f4344;
    padding: 10px 25px;
    border: 1px solid #5c9599;
    border-radius: 10px;
    margin-left: 10px;
    cursor: pointer;
  }

  .login-button:focus {
    outline: none;
  }

  @media only screen and (min-width: 150px) and (max-width: 530px) {
  }
</style>

<div class="main-body">
  <link
    href="https://fonts.googleapis.com/css?family=Ubuntu:500"
    rel="stylesheet"
    type="text/css" />
  <form on:submit|preventDefault={sendForm}>
    <div class="login">
      <div class="login-header">
        <h1>Connexion</h1>
      </div>
      <div class="login-form">
        <input
          type="text"
          name="username"
          id="username"
          bind:value={userForm.username}
          placeholder="Nom d'utilisateur" /><br />
        <input
          type="password"
          name="password"
          id="password"
          bind:value={userForm.password}
          placeholder="Mot de passe" />
        <br />
        <button
          on:click={sendForm}
          type="submit"
          name="login-button"
          class="login-button">Se connecter</button>
        <br />
        <h6 class="no-access">Mot de passe oublié ?</h6>
      </div>
    </div>
  </form>
</div>
