
# Eindopdracht Front-End Frameworks
 **Door Jochum Beerepoot (18 juni 2025)**

## Het proces

De afgelopen maanden heb ik aan dit project gewerkt, eerst via de feedbackopdrachten uit eerdere hoofdstukken en de afgelopen dagen ten behoeve van de eindopdracht. Door de feedbackopdrachten te maken had ik het grootste deel van de code al klaar. Gedurende het maken van deze opdrachten heb ik waardevolle tips gekregen, zo heb ik onder andere van tevoren nog mijn JSON structuur voor de inspecties kunnen aanpassen. De afgelopen dagen heb ik heb onder andere nog gewerkt aan het toevoegen van extra pagina's en het toevoegen van de store (of eigenlijk 2 stores voor instellingen van de gebruiker & inspecties). Daardoor worden nu netjes gegevens opgehaald via de service, deze gaan naar de store en deze geeft de gegevens door aan de componenten.

## Aanvullende opmerkingen en verantwoording
Bij het maken van deze opdracht ben ik alert geweest op het volgen van de eerder geleerde best practises. Ik heb geprobeerd om code te schrijven die voor anderen eenvoudig te begrijpen is. Ook heb ik opmerkingen in de code geplaatst, voornamelijk in de JavaScript, zodat ook het doel van de code duidelijk is. Ik zal nu hieronder verantwoorden hoe ik mij op **toegankelijkheid**, **gebruiksvriendelijkheid** en **veiligheid** heb gericht.

### Toegankelijkheid
De applicatie is geschikt voor alle schermformaten, van mobiel tot desktop, zodat iedereen hem makkelijk kan gebruiken. Er is gekozen voor een component library die goed werkt met touchscreens, zodat je de app ook onderweg kunt gebruiken.

De app voldoet aan de WCAG 2.1 richtlijnen, niveau A. Je kunt ermee navigeren met het toetsenbord, afbeeldingen hebben alternatieve tekst, formulieren zijn duidelijk gelabeld en de HTML is semantisch opgebouwd. Dit maakt het eenvoudig te gebruiken met screenreaders en andere hulpmiddelen. Ook is er voldoende contrast tussen tekst en achtergrond, zodat mensen met een visuele beperking geen problemen hebben met de kleuren (deze voldoet zelfs aan de strengere WCAG AAA-contrasttest).

![enter image description here](https://img001.prntscr.com/file/img001/IaW1kyVtQsazK-PJBjwHog.png)

### Gebruiksvriendelijkheid
Met mijn achtergrond als UX-designer heb ik ervoor gezorgd dat de app gebruiksvriendelijk werkt. Ik heb rekening gehouden dat mensen de app ook op hun telefoon gebruiken. Daarom staat er op elke pagina een terugknop, zodat je makkelijk kunt teruggaan naar de vorige schermen. Ook heb ik gebruik gemaakt van herkenbare knoppen, logische informatie-indeling en duidelijke icoontjes, zodat de applicatie logisch en makkelijk te begrijpen is.

### Veiligheid
In mijn code heb ik gelet op basisveiligheid. Ik maak gebruik van design-patterns om de code overzichtelijk en veilig te houden. Ik probeer code zo te schrijven dat gegevens maar op één plek in de codebase voorkomen en werk met stores zodat er één waarheid is waaruit de componenten gegevens kunnen aflezen (of naartoe kunnen schrijven). Natuurlijk blijft er wel ruimte voor verbetering, iets waar ik nog weinig kennis over heb is hoe er in applicaties met gebruikersgegevens omgegaan wordt. De variabelen hiervoor staan, inclusief de wachtwoorden, nu nog tijdelijk in de code. Ongetwijfeld als er een back-end op de applicatie aangesloten zou zijn dat dit anders zou gaan.