<script>
    import dog_food from "$lib/shop/dog_food.jpg"
    import cat_food from "$lib/shop/cat_food.jpg"
    import chin_food from "$lib/shop/chin_food.jpg"
    import milk from "$lib/shop/milk.jpg"
    import { onMount } from 'svelte'
    import { getUser } from "$lib/stores/user"
    import { buyItem } from "$lib/stores/shop"
        
    let userCoin = 0;
    onMount(async () => {
        const userData = await getUser();
        userCoin = userData.coin;
    });

    async function Buy_items(type = -1) {
        if ([0, 1, 2, 3].includes(type)) {
            const id = ['663e0d50adbede46c0bd88bb', '663e0d8fadbede46c0bd88bc', '663e0da1adbede46c0bd88bd', '663e0db0adbede46c0bd88bf'];
            const cost = await buyItem(id[type], 1);
            if (typeof cost === 'number') {
                userCoin -= cost;
            } else {
                alert("You don't have enough money");
            }
        }
        else {
            alert("Invalid type");
        }
    }
    
 </script>
<main>
<div class="web">
    
    <header class="header"> 
        
        <div style="display: flex; justify-content: right; margin: 10px; ">
            <button type="button" class="custom-button" style="font-size: 1.5rem; padding: 1px; " >🛒</button>
            <li class="wallet" style="padding-left: 20px;"> {userCoin} 🪙</li>
        </div>
            
    </header>

    <div class="web_container">
        <div class="grid">
            <div class="grid__row">
                <div class="grid__column">
                    <!--Product item-->
                    <div class="pet-product-item">
                        <div class="pet-product-item__img" style="background-image: url({dog_food})"></div>
                        <h4 class="pet-product-item__name">Dog Food</h4>
                        <h5 class="pet-product-item__price">10 🪙</h5>
                        <div style="display: flex; justify-content: center; margin: -13px; padding-bottom: 5px;">
                            <button type="button" class="custom-button" on:click={() => {Buy_items(0)} }>Buy</button>
                        </div>
                    </div>
                </div>
                <div class="grid__column">
                    <!--Product item-->
                    <div class="pet-product-item">
                        <div class="pet-product-item__img" style="background-image: url({cat_food})"></div>
                        <h4 class="pet-product-item__name">Cat Food</h4>
                        <h5 class="pet-product-item__price">10 🪙</h5>
                        <div style="display: flex; justify-content: center; margin: -13px; padding-bottom: 5px;">
                            <button type="button" class="custom-button" on:click={() => {Buy_items(1)} }>Buy</button>
                        </div>
                    </div>
                </div>
                <div class="grid__column">
                    <!--Product item-->
                    <div class="pet-product-item">
                        <div class="pet-product-item__img" style="background-image: url({chin_food})"></div>
                        <h4 class="pet-product-item__name">Chinchilla Food</h4>
                        <h5 class="pet-product-item__price">10 🪙</h5>
                        <div style="display: flex; justify-content: center; margin: -13px; padding-bottom: 5px;">
                            <button type="button" class="custom-button" on:click={() => {Buy_items(2)} }>Buy</button>
                        </div>
                    </div>
                </div>
                <div class="grid__column">
                    <!--Product item-->
                    <div class="pet-product-item">
                        <div class="pet-product-item__img" style="background-image: url({milk})"></div>
                        <h4 class="pet-product-item__name">Milk</h4>
                        <h5 class="pet-product-item__price">8 🪙</h5>
                        <div style="display: flex; justify-content: center; margin: -13px; padding-bottom: 5px;">
                            <button type="button" class="custom-button"on:click={() => {Buy_items(3)} }>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>     
</div>
</main>
<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);
    .header  {
        padding-top: 35px;
        height: 80px;
        background-color:#f29f6e;
    }
    
    .wallet{
        font-size: 1.5rem;
    }
    

    .grid{
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
    }
    
    .grid__row{
        display: flex;
        flex-wrap: wrap;
        margin-left: -5px;
        margin-right: -5px;
        margin-bottom: 20px;
    }
    
    .grid__column{
        padding-left: 5px;
        padding-right: 5px;
        width: 23%;
    }
    
    .web {
        margin: 30px;
    }
    .web_container{
        background-color: #f5dea8;
        overflow: auto;
    }
    
    .pet-product-item{
        background-color: rgb(238, 194, 141);
        margin-top: 10px;
    }
    
    .pet-product-item__img{
        padding-top: 100%;
        margin: 5px;
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .pet-product-item__name{
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center ;
    }
    
    .pet-product-item__price{
        font-size: 1.3rem;
        font-weight: 400;
        text-align: center;
    }
    
    .custom-button {
        background-color: #f5dea8;
        color: brown;
        padding: 6px;
        border: 2px solid brown;
        border-radius: 10px;
    }
    
    .custom-button:hover {
        background-color: #e49b1c;
    }
    
    </style>  
