# Anime-tracker
Anime Tracker on React Native -pohjainen mobiilisovellus, jonka avulla käyttäjä voi seurata katsomiaan animeja ja hallita omaa anime-seurantalistaansa.

Sovelluksen käyttäjä voi hakea animeja Jikan API:n avulla, tarkastella niiden tietoja, lisätä niitä henkilökohtaiseen seurantalistaan, seurata katsottuja jaksoja, antaa omia arvioita ja tarkastella katselutilastoja. 

Käyttäjän oma seurantalista ja katselutiedot tallennetaan laitteen paikalliseen tallennustilaan.

## Ominaisuudet 
Anime Trackerissa sitä käytetään esimerkiksi:

- Animejen hakeminen Jikan API.
- Animejen tietojen tarkastelu.
- Animejen lisääminen henkilökohtaiseen seurantalistaan.
- Katsottujen jaksojen määrän seuranta.
- Omien arvioiden antaminen animeille.
- Seurantalistan ja katselutietojen tallentaminen  paikallisesti.
- Katselutilastojen tarkastelu.

## Tilastot
Sovellus tarjoaa käyttäjälle henkilökohtaisia katselutilastoja, kuten:

- Katsottujen animejen lukumäärä.
- Katsottujen jaksojen kokonaismäärä.
- Katselumäärät eri kuukausina.
- Animejen jakautuminen eri genreihin.

https://jikan.moe
Jikan API: käyttörajoituksia ja turhat api kutsut -> toteuta pieni viive käyttäjän kirjoittaessa (debounce)
components	Uudelleenkäytettävät käyttöliittymäkomponentit
services	API-kutsut ja anime-tietojen hakeminen
storage	AsyncStorage-toiminnot
types	TypeScript-tyypit ja rajapinnat
constants	Sovelluksen vakiot ja asetukset