<script>
    
</script>

<div style="display: flex; justify-content: center; align-items: center;">
    <div id="Info">
        <h1 style="font-size: 180%;">Change Information</h1>
      
        <div>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" alt="Avatar" style="width:20%">
            <table>
                <tr>
                    <td>Name:</td>
                    <td><input></td>
                 </tr>
                 <tr>   
                    <td>Email:</td>
                    <td><input></td>
                </tr>
                <tr>
                    <td id="Save" colspan="2"><a href="/user">Save</a></td>
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

    #Info {
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
    width: 100%;
    text-decoration: none;
    display: grid; 
    justify-content: center;
    text-align: center;
    padding: 0.5ex;
    padding-left: 1ex;
    padding-right: 1ex;
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

    #Save {
        display: grid; 
        justify-content: center; 
    }
  </style>
