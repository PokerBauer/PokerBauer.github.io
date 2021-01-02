=====================================WEBSHOP=====================================

1. Ordnerstrucktur<br>
    1.1 Webshop //enthält alle Datein die für den Webshop nötig sind (html, css, png)<br>
        1.1.1 Images //hier landen alle Bilder und werden mit rellativen Pfaden aufgerufen<br>
        1.1.2 Produkte //hier landen alle Produkt htmls<br>

2. Dateistrucktur<br>
    2.1 HTML<br>
    ```html
        <html>
            <head>
                //hier stehen alle Metadaten und die Verlinkung zum Stylesheet (design.css)
            </head>

            <div class= "head">
                //Der obere Teil der Seite mit Logo und Navbar
                <div class= "logo">
                    //Choclatland unser Logo
                </div>
                <div class= "nav">
                    //Navigation für Startseite, Produktkatalog
                </div>
            </div>

            <body>
                //die eigentliche Seite
                <div class= "wrapper">
                    //Beinhaltet die Seite und verpackt alles
                    <div class= "body">
                        //Der mittlere Teil der Seite, welcher alle Informationen besitzt
                        //und in dem das meiste geschrieben wird
                    </div>
                    
                </div>
            </body>
            
            <div class= "footer">
                //Der untere Teil der Seite, welcher das Impressum und andere
                //Informationen über das Unternehmen enthält
            </div>
        </html>
    ```
    2.2 CSS<br>
        //Nico du musst dir da deine eigene Struktur aufbauen, kannst dich ja vl an Der von der HTML orientiren damit man da leichter einen Überblick hat. Auch kannst du<br>
          hier hinschreiben zb. welche Überschriftform für welchen Schrift verwendet werden soll, zB. <br>
            H1 für .head .logo Choclatland<br>
            H2 für .head .nav <br>
            etc.
            
        
