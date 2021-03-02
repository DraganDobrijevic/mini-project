# Planet Soft Project

Napraviti mini projekat koji se sastoji iz tri dela.

- localhost:3000/zadatak1
- localhost:3000/zadatak2
- localhost:3000/zadatak3

Dozvoljeno je korišćenje isključivo npm paketa navedenih u packet.json

Prvi zadatak (React):
Potrebno je napraviti mini blog gde će biti omogućeno izlistavanje (kreiranih postova), kreiranje, editovanje i brisanje posta.
Prilikom kreiranja forme posta potrebno je zadržati sledeću strukturu (po potrebi je moguće dodavanje dodatnih props-a):

    	<FormInput  type="text" name="author" required />
    	<FormInput  type="text" name="title" required />
    	<FormInput  type="text" name="blog_post" required />
    	<FormInput  type="email" name="cotact_email" placeholder="Enter your email.." />

Drugi zadatak (React):
Potrebno je napraviti react custom hook za sortiranje i pretraživanje podataka iz data.json fajla.
Hook treba da ima sledeću strukturu

    	const {
    		sortBy,
    		search
    	} = useCustomHook(data);

    	useEffect(() => {
    		search('Ambur');
    		sortBy('first_name');
    	}, []);

Treći zadatak (React/Openlayer):
Potrebno je inicijalizovati osnovnu mapu te omogućiti crtanje tri elementa (tačka, linija, poligon).
Prilikom crtanja jednog elementa (po izboru) potrebno je po završetku crtanja prikazati modal sa jednostavnom formom.
Korisni linkovi:
https://openlayers.org/en/latest/examples/
https://react-bootstrap.github.io/
https://reactjs.org/docs/getting-started.html
