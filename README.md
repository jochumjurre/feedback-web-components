
# Eindopdracht Front-End Frameworks
 **Door Jochum Beerepoot (19 juni 2025)**

## 1. Het proces

De afgelopen maanden heb ik aan dit project gewerkt, eerst via de feedbackopdrachten uit eerdere hoofdstukken en de laatste dagen voor de eindopdracht. Door de feedbackopdrachten was een groot deel van de code al klaar. Ik heb de applicatie ontwikkeld in Visual Studio Code. Mijn keuze viel op het Vue-framework in combinatie met de Vuetify component library; een verdere uitleg hierover staat in de debriefing. Tijdens het maken van de opdrachten kreeg ik handige tips, waardoor ik mijn JSON-structuur van tevoren kon aanpassen. Het JSON-bestand bevat nu 5 inspecties, en elke inspectie heeft 4 hoofdonderdelen/bevindingen. Ook laat ik de service nu Inspection-objecten teruggeven. De afgelopen dagen heb ik extra pagina’s toegevoegd en gewerkt aan de store (pf eigenlijk twee stores: één voor gebruikersinstellingen en één voor inspecties). Hierdoor worden gegevens netjes via de service opgehaald, in de store opgeslagen en aan de componenten doorgegeven. Door stores te gebruiken voldoet de applicatie aan een single source of truth.

## 2. Aanvullingde uitleg betreffende de applicatie
Je kunt inloggen op de loginpagina met een willekeurige gebruikersnaam en wachtwoord. Op de volgende pagina wordt een 2FA-authenticatie nagebootst. Omdat dit een prototype is, gebruikt de app voor uitgevoerde en toegewezen (openstaande) inspecties dezelfde JSON-lijst. Je kunt toegewezen inspecties uitvoeren, door het formulier digitaal in te vullen (zie toegewezen inspecties -> klik op een inspectie -> start inspectie) en versturen om zo inspecties aan de lijst toe te voegen. Ook deze verschijnen dan zowel tussen de uitgevoerde als de afgeronde inspecties. In een definitieve versie zouden dit uiteraard aparte lijsten zijn.

## 3. Verantwoording
Bij het maken van deze opdracht ben ik alert geweest op het volgen van de eerder geleerde best practises. Ik heb geprobeerd om code te schrijven die voor anderen eenvoudig te begrijpen is en door middel van componenten geen code te herhalen (DRY: Don't Repeat Yourself). Ook heb ik opmerkingen in de code geplaatst, voornamelijk in de JavaScript, zodat ook het doel van de code duidelijk is. Ik zal nu hieronder verantwoorden hoe ik rekening heb gehouden met **toegankelijkheid**, **gebruiksvriendelijkheid** en **veiligheid**.

### 3.1 Toegankelijkheid
De applicatie is ontworpen voor alle schermformaten, van mobiel tot desktop, zodat iedereen er gemakkelijk mee kan werken. Er is gekozen voor een component library die goed geschikt is voor touchscreens, waardoor de app ook onderweg prettig te gebruiken is.

De app voldoet aan de WCAG 2.1-richtlijnen op niveau A. Je kunt er volledig doorheen navigeren met het toetsenbord, foutmeldingen zijn duidelijk geformuleerd, afbeeldingen bevatten alternatieve teksten en formulieren zijn goed gelabeld. De HTML-structuur is semantisch opgebouwd, wat zorgt voor goede ondersteuning door screenreaders en andere hulpmiddelen. Daarnaast is er voldoende contrast tussen tekst en achtergrond — zelfs op AAA-niveau — zonder dat dit ten koste gaat van de huisstijl.

<img src="https://img001.prntscr.com/file/img001/IaW1kyVtQsazK-PJBjwHog.png" alt="enter image description here" width="480" />

### 3.2 Gebruiksvriendelijkheid
Met mijn achtergrond als UX-designer heb ik ervoor gezorgd dat de applicatie gebruiksvriendelijk werkt. Ik heb rekening gehouden met mobiel gebruik: op elke pagina is een terugknop aanwezig, zodat gebruikers eenvoudig via routing terug kunnen navigeren. Daarnaast heb ik gekozen voor herkenbare knoppen, een logische indeling van informatie en duidelijke icoontjes. Zo voelt de applicatie vertrouwd aan en is deze intuïtief in gebruik. Omdat dit een prototype is, heb ik ervoor gekozen om bij het formulier voor het invullen van een toegewezen inspectie nog geen geavanceerde validatie toe te passen. Op dit moment controleer ik alleen of er minstens één bevinding is voordat het formulier kan worden opgeslagen. In een definitieve versie zou ik deze validatie verder uitbreiden, zodat gebruikers alleen juiste en volledige gegevens invoeren.

### 3.3 Veiligheid
Ik maak gebruik van design-patterns om de code overzichtelijk en veilig te houden. Gegevens probeer ik maar op één plek in de codebase op te slaan en ik werk met stores, zodat componenten altijd toegang hebben tot één centrale bron van waarheid. Ook volg ik de VueJS Style Guide en zorg ik dat de code voldoet aan alle richtlijnen binnen de categorieën: A - Essential, B - Strongly Recommended en C - Recommended. Daarnaast let ik op veiligheid aan de front-endzijde door zoveel mogelijk de OSAWP-richtlijnen toe te passen. Zo voorkom ik bijvoorbeeld XSS (Cross-Site Scripting) door gebruik te maken van Vue’s veilige databindings ({{ }}) en vermijd ik het gebruik van v-html.