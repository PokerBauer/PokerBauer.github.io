let items = document.querySelectorAll(".Kaufen");

var Produkte = [
    {
        name: "Tafel-Vollmilch",
        bild: "TafelVM",
        preis: 1,
        imWarenkorb: 0
    },
    {
        name: "Tafel-Zartbitter",
        bild: "Tafel-ZB",
        preis: 2,
        imWarenkorb: 0
    },
    {
        name: "Tafel-Weiß", //ß wird nicht richtig ausgegeben??
        bild: "Tafel-W",
        preis: 3,
        imWarenkorb: 0
    },
    {
        name: "Pralinen-Vollmilch",
        bild: "Pral-VM",
        preis: 4,
        imWarenkorb: 0
    },
    {
        name: "Pralinen-Zartbitter",
        bild: "Pral-ZB",
        preis: 5,
        imWarenkorb: 0
    },
    {
        name: "Pralinen-Weiß",
        bild: "Pral-W",
        preis: 6,
        imWarenkorb: 0
    },
    {
        name: "Geschenke-Vollmilch",
        bild: "Gesch-VM",
        preis: 7,
        imWarenkorb: 0
    },
    {
        name: "Geschenke-Zartbitter",
        bild: "Gesch-ZB",
        preis: 8,
        imWarenkorb: 0
    },
    {
        name: "Geschenke-Weiß",
        bild: "Gesch-W",
        preis: 9,
        imWarenkorb: 0
    } //Produkte unter diesem Muster hinzufügen
]//bild soll der Bildname sein -> zum nuten in AusgabeEinkaufswagen(),   TODO: anpassen an richtige Preise + richtige Bildnamen und ß schreibbar machen

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click",() => {
        AnzahlItems(Produkte[i]);
        GesamtPreis(Produkte[i]);
        AusgabeEinkaufswagen();
    })
}

function AnzahlItems(Produkte) {
    var anzahlProdukte = localStorage.getItem("AnzahlItemsWarenkorb");
    anzahlProdukte = parseInt(anzahlProdukte);
    if (anzahlProdukte) {
        localStorage.setItem("AnzahlItemsWarenkorb", anzahlProdukte+1);
        } else {
        localStorage.setItem("AnzahlItemsWarenkorb", 1);
    }

    setItems(Produkte);
} //zähler für die anzahl der Prdoukte im WK im LocalStorage


function setItems(Produkte) {
    var ItemsWK = localStorage.getItem("ProdukteImWK");
    ItemsWK = JSON.parse(ItemsWK);
    if(ItemsWK != null) { //wenn bereits vorhanden ist
        if(ItemsWK[Produkte.bild] == undefined) {
            ItemsWK = {
                ItemsWK,
                [Produkte.bild] : Produkte
            }
        }
        ItemsWK[Produkte.bild].imWarenkorb = ItemsWK[Produkte.bild].imWarenkorb + 1;
    } else {
        Produkte.imWarenkorb = 1; 
        var ItemsWK = {
            [Produkte.bild] : Produkte
        } //erstellen der LS variable und setzung des attributes (?) .imWarenkorb auf 1
    }
    localStorage.setItem("ProdukteImWK", JSON.stringify(ItemsWK))
}//erstellt variable im LocalStorage und erhöht diese um 1 falls diese bereits vorhanden ist

function GesamtPreis(Produkt) {
    let TeilPreis = localStorage.getItem("GesamtPreis"); 

    if(TeilPreis != null) {
        TeilPreis = parseInt(TeilPreis);
        localStorage.setItem("GesamtPreis", TeilPreis+Produkt.preis); //erhöht den Preis um den neuen Produkt preis
    } else {
        localStorage.setItem("GesamtPreis", Produkt.preis); //setzt beim erst durchlauf den preis
    }
} //berechnet den Gesamtpreis des Einkaufes

function AusgabeEinkaufswagen(){
    let ItemsWK = localStorage.getItem("ProdukteImWK");
    ItemsWK = JSON.parse(ItemsWK); //erstellt nutzbare variable mit den aktuellen Warenkorb inhalt

    let InhaltWarenkorb = document.querySelector(".InhaltWarenkorb");
    if(ItemsWK && InhaltWarenkorb)  { //checkt ob es die Warenkorb seite ist
        InhaltWarenkorb.innerHTML = "";
        Object.values(ItemsWK).map(Item => {
            InhaltWarenkorb.innerHTML += `
            <div class="PrdukteWK"> 
            <button type="Entfernen"> Entfernen </button>
                <img src ="Images/${Item.bild}.jpg"></img>
                <span>${Item.name}</span>
            </div>
            <div class="Preis">${Item.preis},00 Euro</div>
            <div class="Anzahl">
            <button type="einsWeniger"> -1 </button>
            ${Item.imWarenkorb}
            <button type="einsMehr"> +1 </button>
            </div>

            <div class="Preise"> Teilpreis:${Item.imWarenkorb*Item.preis},00 Euro</div>
            `

            //span als extra div ?
            //erstellt html-code der den Warenkorb darstellt
        });
        let TeilPreis = localStorage.getItem("GesamtPreis");
        InhaltWarenkorb.innerHTML += `
        <div class="Gesamtpreis">
        <h4 class="GesamtpreisTitel"> Gesamtpreis:${TeilPreis},00 Euro € </h4>
        </div>
        `
        //erstellt html-code der den Gesamtpreis darstellt
        //TODO: €, ß in html ordentlich anzeigen lassen
    }
}

var TestObWarenkorb = document.querySelector(".InhaltWarenkorb");
if(TestObWarenkorb) { //checkt ob es die Warenkorb seite ist
    AusgabeEinkaufswagen(); 
} //ausgabe des warnkorbs beim laden der Warenkorbseite

/*
TODO:
58: anpassen an richtige Preise + richtige Bildnamen und ß schreibbar machen
145: €, ß in html ordentlich anzeigen lassen
160+: Die Buttons zum entfernen, +1 und -1 müssen noch entwickelt werden
-> Funktion in Funktion? //rausfinden wie zugriff auf Button innerhalb einer Textausgabe funktionier -> notfalls umschreiben!
*/
//Experimente für die Buttons:

function KomplettEntfernen(Produkt) {
    console.log("in KomplettEntfernen")
    var ItemsWK = localStorage.getItem("ProdukteImWK");
    ItemsWK = JSON.parse(ItemsWK);
    ItemsWK[Produkt].imWarenkorb = 0;
} 

let btnMehr = document.querySelector(".einsMehr");
console.log(btnMehr); 