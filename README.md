=====================================WEBSHOP=====================================

1. Ordnerstrucktur
    1.1 Webshop //enthält alle Datein die für den Webshop nötig sind (html, css, png)
        1.1.1 Images //hier landen alle Bilder und werden mit rellativen Pfaden aufgerufen
        1.1.2 Produkte //hier landen alle Produkt htmls

2. Dateistrucktur
    2.1 HTML
    ```html
        <html>
            <head>
            //hier stehen alle Metadaten und die Verlinkung zum Stylesheet (design.css)
            </head>
            <body>
            //Die nachfolgenen Unterteilungen sind alles Div Klassen
                <wrapper>
                //Beinhaltet die Seite und verpackt alles
                    <head>
                    //Der obere Teil der Seite mit Logo und Navbar
                        <logo>
                        //Choclatland unser Logo
                        </logo>
                        <nav>
                        //Navigation für Startseite, Produktkatalog
                        </nav>
                    </head>
                    <body>
                    //Der mittlere Teil der Seite, welcher alle Informationen besitzt und in dem das meiste geschrieben wird
                    </body>
                    <footer>
                    //Der untere Teil der Seite, welcher das Impressum und andere Informationen über das Unternehmen enthält
                    </footer>
                </wrapper>
            </body>
        </html>
    ```
    2.2 CSS
        //Nico du musst dir da deine eigene Strucktur aufbauen, kannst dich ja vl an Der von der HTML orientiren damit man da leichter einen Überblick hat. Auch kannst du hier hinschreiben zb. welche Überschriftform für welchen Schrift verwendet werden soll, zB. H1 für .head .logo Choclatland
            H2 für .head .nav 
            etc.
            
        