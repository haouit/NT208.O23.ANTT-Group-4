<script>

</script>

<div style="display: flex; justify-content: center; align-items: center;">
    <div id="mission">
    <h1 >Mission</h1>

        <div class="mission-table">
            <table>
                <tr>
                    <th>NO.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Go</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>First Meet</td>
                    <td>Get your first pet</td>
                    <td><a href="/pickup">Take Mission</a></td>   
                </tr>
                <tr>
                    <td>2</td>
                    <td>Feed me</td>
                    <td>Feed your pet 10 times</td>
                    <td><a href="/petcare">Take Mission</a></td>
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

    #mission {
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
        font-size: 60px;
        color: orangered;
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
        border: 2px solid orangered;
        color: orangered;
    }

    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;
      color: #181818;
    }
  </style>
