<script>
  import { getContext } from 'svelte';
  import Popup from './Popup.svelte';

  
  export let message;
  export let msgB;
  export let validated;

  const { open } = getContext('simple-modal');
  
  const showPopup = () => {
    if (validated) {
    open(Popup, { message });
    redi();
    }
  };

  const redi = () => {
      setTimeout(() => {window.location.href='/#produits'}, 2000);
      
  };

</script> 
<style>
    .button-send {
    border: 1px solid #5C9599;
    background-color: #5C9599;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px 25px;
    text-align: center;
    transition: 0.1s;
    width: fit-content;
  }

  .button-send:hover {
    background-color: rgba(0,0,0, .2);
  }

  .button-send:focus {
    outline: none;
  }

</style>

<button type="submit" on:click={showPopup} class="button-send">{msgB}</button>