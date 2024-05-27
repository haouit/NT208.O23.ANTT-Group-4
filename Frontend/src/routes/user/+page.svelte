<script>
    import { URL_API, cookie } from '../checkToken';
    import { onMount } from 'svelte';

    let user = { username: '', _id: '', level: '', coin: '' };

    onMount(async () => {
        const id = localStorage.getItem('id');
        const response = await fetch(`${URL_API}/api/users/id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
				'Authorization': `Bearer ${cookie()}`
            }
        });
        if (response.ok) {
            user = await response.json();
        } else {
            console.error('Failed to fetch user data');
        }
        console.log(user.username);
    });
</script>

<div style="display: flex; justify-content: center; align-items: center;">
    <div id="user">
        <h1 style="font-size: 180%;">User Information</h1>
      
        <div>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" alt="Avatar" style="width:20%">
            <table>
                <tr>
                    <td>Userame:</td>
                    <td>{user.username}</td>
                    
                 </tr>
                <tr>
                    <td>ID:</td>
                    <td>{user._id}</td>
                <tr>
                    <td>Level:</td>
                    <td>{user.level}</td>
                </tr>
                <tr>
                    <td>Coin:</td>
                    <td>{user.coin}</td>
                </tr>
            </table>
        </div>
    </div>  
</div>


<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

    * {
      box-sizing: border-box;
    }

    #user {
      padding: 1em;
      margin: 1em;
      width: 50%;
      border-radius: 1em;
      border-style: solid;
      text-align: center;
      background: #FDE3C8;
      color: rgba(0, 0, 0, 0.75);
    }

    h1 {
        color: orangered;
        font-weight: bold;
        font-size: 300px;
    }

    td > a {
    display: block;
    width: 100%;
    text-decoration: none;

    text-align: center;
    padding: 0.5ex;
    border: 2px solid #ECF0F1;
    transition: border ease 500ms;
    border-radius: 1ex;
    font-family: "Open Sans";
    background: #ECF0F1;
    color: #181818;


    &:focus {
        outline: none;
        border: 2px solid tomato;
        color: tomato;
    }

    }
    
    table {
      display: grid; 
      justify-content: center;
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      text-align: left;
      color: #181818;
    }
    tr > td {
      padding: 10px;
    }
  </style>
