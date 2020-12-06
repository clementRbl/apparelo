<script>
  import { onMount } from "svelte";

  let devisList = [];
  onMount(async () => {
    const res = await fetch(
      `http://ec2-15-236-181-77.eu-west-3.compute.amazonaws.com:3000/prospect`
    );
    devisList = await res.json();

    for (let i = 0; i < devisList.length; i++) {
      let date = Date.parse(devisList[i].createdOn);
      let dateFormat = new Date(date).toLocaleString();
      devisList[i].createdOn = dateFormat;
    }

    for (let i = 0; i < devisList.length; i++) {
      let id = devisList[i].id;
      let idFormat = id.substr(1, 15) + " ...";
      devisList[i].id = idFormat;
    }
  });
</script>

<!-- STYLE-->
<style type="text/scss">
  .container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    &-main {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 2rem;
    }
  }

  .main {
    width: 90%;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 2px solid #5c9599;
    border-radius: 10px;
    padding: 2rem 0;

    //font-family: "Ubuntu" sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    &-item {
      width: 20%;
      text-align: center;
      border-right: 2px solid #000;
    }
    &-item:last-child {
      border-right: none;
    }
  }
  .delete {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-button {
      height: 25%;
      background-color: #fff;
      border: 2px solid #5c9599;
      border-radius: 5px;
      font-size: 1rem;
      text-transform: uppercase;

      padding: 0.2rem 0.8rem;
      font-weight: bold;
      text-decoration: none;
    }

    &-button:hover {
      background-color: #5c9599;
      color: #fff;
    }
  }
</style>

<!-- MON CODE-->

<div class="container">
  {#each devisList as item}
    <div class="container-main">
      <a href="admin" class="main">
        <div class="main-item">{item.createdOn}</div>
        <div class="main-item">{item.id}</div>
        <div class="main-item">{item.organisationName}</div>
        <div class="main-item">{item.tel}</div>
        <div class="main-item">{item.email}</div></a>
      <div class="delete"><a class="delete-button" href="apropos">x</a></div>
    </div>
  {/each}
</div>
