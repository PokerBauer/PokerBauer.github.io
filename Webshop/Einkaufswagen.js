let items = document.querySelectorAll(".Kaufen");

var products = [
    {
        name: "Tafeln-Vollmilch",
        tag: "Tafel-VM",
        price: 1,
        inCart: 0
    },
    {
        name: "Tafeln-Zartbitter",
        tag: "Tafel-ZB",
        price: 2,
        inCart: 0
    },
    {
        name: "Tafeln-Weiß",
        tag: "Tafel-W",
        price: 3,
        inCart: 0
    },
    {
        name: "Pralinen-Vollmilch",
        tag: "Pral-VM",
        price: 4,
        inCart: 0
    },
    {
        name: "Pralinen-Zartbitter",
        tag: "Pral-ZB",
        price: 5,
        inCart: 0
    },
    {
        name: "Pralinen-Weiß",
        tag: "Pral-W",
        price: 6,
        inCart: 0
    },
    {
        name: "Geschenke-Vollmilch",
        tag: "Gesch-VM",
        price: 7,
        inCart: 0
    },
    {
        name: "Geschenke-Zartbitter",
        tag: "Gesch-ZB",
        price: 8,
        inCart: 0
    },
    {
        name: "Geschenke-Weiß",
        tag: "Gesch-W",
        price: 9,
        inCart: 0
    } //Produkte unter diesem Muster hinzufügen
]//tag soll der Bildname sein -> zum nuten in AusgabeEinkaufswagen()

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click",() => {
        AnzahlItems(products[i]);
        GesamtPreis(products[i]);
    })
}





function ladenAnzahlItems() {
let productNumbers = localStorage.getItem("AnzahlItemsWarenkorb");

if ( productNumbers) {
    document.querySelectorAll(".cart span").text.content = productNumbers; // falls zuj
}
}

function AnzahlItems(product) { //testen um .js zu verstehen lmao
    var productNumbers = localStorage.getItem("AnzahlItemsWarenkorb");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("AnzahlItemsWarenkorb", productNumbers+1);
        } else {
        localStorage.setItem("AnzahlItemsWarenkorb", 1);
    }

    setItems(product);
}


function setItems(product) {
    var ItemsWK = localStorage.getItem("ProdukteImWK");
    ItemsWK = JSON.parse(ItemsWK);
    if(ItemsWK != null) {
        if(ItemsWK[product.tag] == undefined) {
            ItemsWK = {
                ...ItemsWK, 
                [product.tag] : product
            }
        }
        ItemsWK[product.tag].inCart = ItemsWK[product.tag].inCart + 1;
    } else {
        product.inCart = 1; 
        var ItemsWK = {
            [product.tag] : product
        }
    }
    localStorage.setItem("ProdukteImWK", JSON.stringify(ItemsWK))
}

function GesamtPreis(product) {
    let TeilPreis = localStorage.getItem("GesamtPreis");

    if(TeilPreis != null) {
        TeilPreis = parseInt(TeilPreis);
        localStorage.setItem("GesamtPreis", TeilPreis+product.price);
    } else {
        localStorage.setItem("GesamtPreis", product.price); 
    }
}

function AusgabeEinkaufswagen(){
    let ItemsWK = localStorage.getItem("ProdukteImWK")
    ItemsWK = JSON.parse(ItemsWK);
    let InhaltWarenkorb = document.querySelector(".InhaltWarenkorb");

    console.log(ItemsWK);
    if(ItemsWK && InhaltWarenkorb)  { //notfalls div.class anpassen
        InhaltWarenkorb.innerHTML = "";
        Object.values(ItemsWK).map(Item => {
            InhaltWarenkorb.innerHTML += `
            <div class="PrdukteWK"> 
            <button type="Test"> Test </button>> 
            <img src ="/images/${ItemsWK.tag}.jpg>
            <span>${ItemsWK.name}</span>
            </img>
            </div>
            `
        })
    }
}

AusgabeEinkaufswagen();