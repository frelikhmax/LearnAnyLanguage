export enum Language {
    english = "English",
    russian = "Russian",
    spanish = "Spanish",
}

export type LanguageMap = {
    [K in Language]?: string;
};

export interface Word extends LanguageMap {
    baseLanguage: Language;
}
export const testWords: Word[] = [
    {
        [Language.english]: "Nothing",
        [Language.spanish]: "Nada",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Goodbye",
        [Language.spanish]: "Adiós",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "At the airport",
        [Language.spanish]: "Al aeropuerto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Tomorrow",
        [Language.spanish]: "Mañana",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Perfect",
        [Language.spanish]: "Perfecto/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Great",
        [Language.spanish]: "Genial",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thanks",
        [Language.spanish]: "Gracias",
        baseLanguage: Language.spanish,
    },
];

export const initialWords: Word[] = [
    {
        [Language.english]: "Nothing",
        [Language.spanish]: "Nada",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Yes",
        [Language.spanish]: "Sí",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I",
        [Language.spanish]: "Yo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Goodbye",
        [Language.spanish]: "Adiós",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Hello",
        [Language.spanish]: "Hola",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "At the airport",
        [Language.spanish]: "Al aeropuerto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "And",
        [Language.spanish]: "Y",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Tomorrow",
        [Language.spanish]: "Mañana",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Very, too",
        [Language.spanish]: "Muy",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Perfect",
        [Language.spanish]: "Perfecto/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Great",
        [Language.spanish]: "Genial",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thanks",
        [Language.spanish]: "Gracias",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "My",
        [Language.spanish]: "Mi(s)",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Nice to meet you",
        [Language.spanish]: "Mucho gusto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What?",
        [Language.spanish]: "¿Qué?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thanks so much",
        [Language.spanish]: "Muchas gracias",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "You are welcome",
        [Language.spanish]: "De nada",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To need",
        [Language.spanish]: "Necesitar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How?",
        [Language.spanish]: "¿Cómo?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I like it",
        [Language.spanish]: "Me gusta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I don't like it",
        [Language.spanish]: "No me gusta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I'm free",
        [Language.spanish]: "Estoy libre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Please",
        [Language.spanish]: "Por favor",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What time is it?",
        [Language.spanish]: "¿Qué hora es?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Sorry",
        [Language.spanish]: "Perdón, lo siento",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Good morning",
        [Language.spanish]: "Buenos días",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Brother/Sister",
        [Language.spanish]: "Hermano/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Here",
        [Language.spanish]: "Aquí",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Excuse me",
        [Language.spanish]: "Disculpe, Perdón",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Of course",
        [Language.spanish]: "Por supuesto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Money",
        [Language.spanish]: "Dinero",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Very well, thanks! And you?",
        [Language.spanish]: "¡Muy bien (=Va), gracias!¿Y tú?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How are you?",
        [Language.spanish]: "¿Cómo estás? ¿Qué tal?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Help!",
        [Language.spanish]: "¡Ayuda!",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Happy",
        [Language.spanish]: "Feliz",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Today",
        [Language.spanish]: "Hoy",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Where are you from?",
        [Language.spanish]: "¿De dónde eres?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How old are you?",
        [Language.spanish]: "¿Cuántos años tienes?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "New",
        [Language.spanish]: "Nuevo/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I need a doctor",
        [Language.spanish]: "Necesito un doctor",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The way",
        [Language.spanish]: "El camino",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Let's go",
        [Language.spanish]: "Vamos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Night",
        [Language.spanish]: "Noche",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Room (in hotel)",
        [Language.spanish]: "Habitación",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thanks for you help",
        [Language.spanish]: "Gracias por su ayuda",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How much money do you have?",
        [Language.spanish]: "¿Cuánto dinero tienes?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How much does a room cost per night?",
        [Language.spanish]: "¿Cuánto cuesta una habitación por noche?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "We are here",
        [Language.spanish]: "Estamos aquí",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Pen",
        [Language.spanish]: "Bolígrafo, pluma",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Geography",
        [Language.spanish]: "Geografía",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Good afternoon",
        [Language.spanish]: "Buenas tardes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Good night",
        [Language.spanish]: "Buenas noches",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "See you later",
        [Language.spanish]: "Hasta luego",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "See you tomorrow",
        [Language.spanish]: "Hasta mañana",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What is your name?",
        [Language.spanish]: "¿Cómo te llamas?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "My name is Max",
        [Language.spanish]: "Me llamo Max",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Do you speak Spanish?",
        [Language.spanish]: "¿Hablas español?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I speak Spanish",
        [Language.spanish]: "Yo hablo español",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I don't speak Spanish",
        [Language.spanish]: "No hablo español",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "So so",
        [Language.spanish]: "Así así, Más o menos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To be (1)",
        [Language.spanish]: "Ser",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Tall",
        [Language.spanish]: "Alto/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Short",
        [Language.spanish]: "Bajo/a, Chaparro/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Brunette",
        [Language.spanish]: "Moreno/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Blonde",
        [Language.spanish]: "Rubio/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Redhead",
        [Language.spanish]: "Pelirrojo/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Pretty",
        [Language.spanish]: "Bonito/a, Lindo/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Skinny",
        [Language.spanish]: "Flaco/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fat",
        [Language.spanish]: "Gordo/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Funny",
        [Language.spanish]: "Divertido/a, cómico/a, gracioso/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Serious",
        [Language.spanish]: "Serio/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Shy",
        [Language.spanish]: "Tímido/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Sincere",
        [Language.spanish]: "Sincero/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Honest",
        [Language.spanish]: "Honesto/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Generous",
        [Language.spanish]: "Generoso/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To be (2)",
        [Language.spanish]: "Estar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To speak",
        [Language.spanish]: "Hablar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "English",
        [Language.spanish]: "Inglés",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "French",
        [Language.spanish]: "Francés",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "German",
        [Language.spanish]: "Alemán",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To listen",
        [Language.spanish]: "Escuchar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To study",
        [Language.spanish]: "Estudiar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To work",
        [Language.spanish]: "Trabajar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Where",
        [Language.spanish]: "Dónde",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Where do you work?",
        [Language.spanish]: "¿Dónde trabajas?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To buy",
        [Language.spanish]: "Comprar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To pay",
        [Language.spanish]: "Pagar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Cash register",
        [Language.spanish]: "La caja",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The book",
        [Language.spanish]: "El libro",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The table",
        [Language.spanish]: "La mesa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The flag",
        [Language.spanish]: "La bandera",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The floor",
        [Language.spanish]: "El piso",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The hand",
        [Language.spanish]: "La mano",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The books",
        [Language.spanish]: "Los libros",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The tables",
        [Language.spanish]: "Las mesas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The computer",
        [Language.spanish]: "La computadora",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The wall",
        [Language.spanish]: "La pared",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The walls",
        [Language.spanish]: "Las paredes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A book",
        [Language.spanish]: "Un libro",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A table",
        [Language.spanish]: "Una mesa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Some books",
        [Language.spanish]: "Unos libros",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Some tables",
        [Language.spanish]: "Unas mesas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A wall",
        [Language.spanish]: "Una pared",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Some walls",
        [Language.spanish]: "Unas paredes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To go",
        [Language.spanish]: "Ir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Meat store",
        [Language.spanish]: "Carnicería",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Meat",
        [Language.spanish]: "La carne",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Pharmacy",
        [Language.spanish]: "Farmacia",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Bakery",
        [Language.spanish]: "Panadería",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Book store",
        [Language.spanish]: "Librería",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Library",
        [Language.spanish]: "Biblioteca",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Post office",
        [Language.spanish]: "Correo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Gallery, mall",
        [Language.spanish]: "Galería",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Museum",
        [Language.spanish]: "Museo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Restaurant",
        [Language.spanish]: "Restaurante",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Cafe, coffee",
        [Language.spanish]: "Café",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Cinema",
        [Language.spanish]: "Cine",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I'm going to the post office",
        [Language.spanish]: "Yo voy al correo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "She's going to the book store",
        [Language.spanish]: "Ella va a la librería",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I'm going to pay",
        [Language.spanish]: "Yo voy a pagar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To eat",
        [Language.spanish]: "Comer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To read",
        [Language.spanish]: "Leer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To think, to believe",
        [Language.spanish]: "Creer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To run",
        [Language.spanish]: "Correr",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To learn",
        [Language.spanish]: "Aprender",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "She's learning German",
        [Language.spanish]: "Ella aprende alemán",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To live",
        [Language.spanish]: "Vivir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I live in Atlanta",
        [Language.spanish]: "Yo vivo en Atlanta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To write",
        [Language.spanish]: "Escribir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To open",
        [Language.spanish]: "Abrir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To receive",
        [Language.spanish]: "Recibir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To attend, to assist",
        [Language.spanish]: "Asistir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I write a letter",
        [Language.spanish]: "Yo escribo una carta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "She opens the door",
        [Language.spanish]: "Ella abre la puerta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "White",
        [Language.spanish]: "Blanco",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Black",
        [Language.spanish]: "Negro",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Gray",
        [Language.spanish]: "Gris",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Blue",
        [Language.spanish]: "Azul",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Yellow",
        [Language.spanish]: "Amarillo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Orange (adj)",
        [Language.spanish]: "Anaranjado",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Red",
        [Language.spanish]: "Rojo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Pink",
        [Language.spanish]: "Rosa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Green",
        [Language.spanish]: "Verde",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Brown",
        [Language.spanish]: "Café",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Purple",
        [Language.spanish]: "Violeta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What color is your shirt?",
        [Language.spanish]: "¿De qué color es tu camisa?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "My shirt is gray",
        [Language.spanish]: "Mi camisa es gris",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What color are your shoes?",
        [Language.spanish]: "¿De qué color son tus zapatos?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "My shoes are black",
        [Language.spanish]: "Mis zapatos son negros",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Your shirt is green",
        [Language.spanish]: "Tu camisa es verde",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To see",
        [Language.spanish]: "Ver",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To give",
        [Language.spanish]: "Dar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To make, To do",
        [Language.spanish]: "Hacer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To leave, to go out",
        [Language.spanish]: "Salir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To put",
        [Language.spanish]: "Poner",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To play",
        [Language.spanish]: "Jugar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To begin",
        [Language.spanish]: "Empezar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To say, to tell",
        [Language.spanish]: "Decir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To be able to",
        [Language.spanish]: "Poder",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To want",
        [Language.spanish]: "Querer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To prefer",
        [Language.spanish]: "Preferir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Clothes",
        [Language.spanish]: "La ropa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The pants",
        [Language.spanish]: "El pantalón",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The shirt",
        [Language.spanish]: "La camisa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The neck tie",
        [Language.spanish]: "La corbata",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The bow tie",
        [Language.russian]: "Галстук-бабочка",
        [Language.spanish]: "El lazo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The t-shirt",
        [Language.spanish]: "La camiseta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The skirt",
        [Language.spanish]: "La falda",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The blouse",
        [Language.spanish]: "La blusa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The jacket",
        [Language.spanish]: "La chaqueta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The coat",
        [Language.spanish]: "El abrigo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The suit",
        [Language.spanish]: "El traje",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The cap",
        [Language.spanish]: "La gorra",
        baseLanguage: Language.spanish,
    },

    {
        [Language.english]: "The socks",
        [Language.spanish]: "Los calcetines",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The shoes",
        [Language.spanish]: "Los zapatos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The tennis shoes",
        [Language.spanish]: "Los tenis",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A pair of tennis shoes",
        [Language.spanish]: "Un par de tenis",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A pair",
        [Language.spanish]: "Un par",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The belt",
        [Language.spanish]: "El cinturón",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To wear",
        [Language.spanish]: "Usar, llevar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I wear a green shirt",
        [Language.spanish]: "Yo uso una camisa verde",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I'm wearing black shoes",
        [Language.spanish]: "Yo llevo zapatos negros",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Who?",
        [Language.spanish]: "¿Quién?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "No more and no less",
        [Language.spanish]: "Ni más ni menos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The razor",
        [Language.spanish]: "La navaja",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Shaving cream",
        [Language.spanish]: "La crema de afeitar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The brush",
        [Language.spanish]: "El cepillo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The comb",
        [Language.russian]: "Расчёска",
        [Language.spanish]: "El peine",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The toothbrush",
        [Language.spanish]: "El cepillo de dientes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The mirror",
        [Language.spanish]: "El espejo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The makeup",
        [Language.spanish]: "El maquillaje",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A bar of soap",
        [Language.spanish]: "Una barra de jabón",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A tube of toothpaste",
        [Language.spanish]: "Un tubo de pasta de dientes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Shampoo",
        [Language.spanish]: "El champú",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "All, everything, everybody",
        [Language.spanish]: "Todo/a(-s)",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Last",
        [Language.spanish]: "Último/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "An hour",
        [Language.spanish]: "Una hora",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Or",
        [Language.spanish]: "O",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The window",
        [Language.spanish]: "La ventana",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The chair",
        [Language.spanish]: "La silla",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The couch",
        [Language.spanish]: "El sofá",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The stairs",
        [Language.spanish]: "Las escaleras",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The house",
        [Language.spanish]: "La casa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Name",
        [Language.spanish]: "Nombre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Mother",
        [Language.spanish]: "La madre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Boy/girl",
        [Language.spanish]: "Niño/a, chico/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Juice",
        [Language.spanish]: "Jugo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To shave",
        [Language.spanish]: "Afeitar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To call",
        [Language.spanish]: "Llamar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To use, to wear",
        [Language.spanish]: "Usar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To carry, to bring",
        [Language.spanish]: "Llevar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The kitchen",
        [Language.spanish]: "La cocina",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I'm OK",
        [Language.spanish]: "Estoy bien",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fire",
        [Language.spanish]: "Fuego",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fireman",
        [Language.spanish]: "Bombero",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Now",
        [Language.spanish]: "Ahora",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Mountain",
        [Language.spanish]: "Montaña",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Port, harbor",
        [Language.spanish]: "Puerto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Coast, shore",
        [Language.spanish]: "Costa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Rich",
        [Language.spanish]: "Rico/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Zero",
        [Language.spanish]: "Cero",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "One",
        [Language.spanish]: "Uno",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Two",
        [Language.spanish]: "Dos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Three",
        [Language.spanish]: "Tres",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Four",
        [Language.spanish]: "Cuatro",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Five",
        [Language.spanish]: "Cinco",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Six",
        [Language.spanish]: "Seis",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Seven",
        [Language.spanish]: "Siete",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Eight",
        [Language.spanish]: "Ocho",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Nine",
        [Language.spanish]: "Nueve",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Ten",
        [Language.spanish]: "Diez",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Eleven",
        [Language.spanish]: "Once",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Twelve",
        [Language.spanish]: "Doce",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thirteen",
        [Language.spanish]: "Trece",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fourteen",
        [Language.spanish]: "Catorce",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fifteen",
        [Language.spanish]: "Quince",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Sixteen",
        [Language.spanish]: "Dieciséis",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Seventeen",
        [Language.spanish]: "Diecisiete",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Eighteen",
        [Language.spanish]: "Dieciocho",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Nineteen",
        [Language.spanish]: "Diecinueve",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Twenty",
        [Language.spanish]: "Veinte",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Twenty one",
        [Language.spanish]: "Veintiuno",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Twenty two",
        [Language.spanish]: "Veintidós",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Twenty seven",
        [Language.spanish]: "Veintisiete",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thirty",
        [Language.spanish]: "Treinta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Forty",
        [Language.spanish]: "Cuarenta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fifty",
        [Language.spanish]: "Cincuenta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Sixty",
        [Language.spanish]: "Sesenta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Seventy",
        [Language.spanish]: "Setenta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Eighty",
        [Language.spanish]: "Ochenta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Ninety",
        [Language.spanish]: "Noventa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A hundred",
        [Language.spanish]: "Cien",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "One hundred and twenty",
        [Language.spanish]: "Ciento veinte",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Two hundred",
        [Language.spanish]: "Doscientos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Five hundred",
        [Language.spanish]: "Quinientos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Seven hundred",
        [Language.spanish]: "Setecientos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Nine hundred",
        [Language.spanish]: "Novecientos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A thousand",
        [Language.spanish]: "Mil",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Twelve thousand",
        [Language.spanish]: "Doce mil",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A million",
        [Language.spanish]: "Millón",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Two million",
        [Language.spanish]: "Dos millones",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's two-ten",
        [Language.spanish]: "Son las dos y diez",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's half past five",
        [Language.spanish]: "Son las cinco y media",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Average",
        [Language.spanish]: "Media",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Turtle",
        [Language.spanish]: "Tortuga",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's eight-fifty",
        [Language.spanish]: "Son las nueve menos diez",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's  a quarter to one",
        [Language.spanish]: "Es la una menos cuarto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Food",
        [Language.spanish]: "La comida",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Breakfast",
        [Language.spanish]: "El desayuno",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Lunch",
        [Language.spanish]: "El almuerzo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Dinner",
        [Language.spanish]: "La cena",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Steak",
        [Language.spanish]: "El bistec",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fish",
        [Language.spanish]: "El pescado",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Chicken",
        [Language.spanish]: "El pollo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Vegetables",
        [Language.spanish]: "Los vegetales",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Potatoes",
        [Language.spanish]: "Las papas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Carrots",
        [Language.spanish]: "Las zanahorias",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Fruits",
        [Language.spanish]: "Las frutas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Oranges",
        [Language.spanish]: "Las naranjas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Apples",
        [Language.spanish]: "Las manzanas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Tomatoes",
        [Language.spanish]: "Los tomates",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Rice",
        [Language.spanish]: "El arroz",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Egg",
        [Language.spanish]: "El huevo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Roasted",
        [Language.spanish]: "Asado",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To please",
        [Language.spanish]: "Gustar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "We like apples",
        [Language.spanish]: "Nos gustan las manzanas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "She likes meat",
        [Language.spanish]: "Le gusta la carne",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Afternoon nap",
        [Language.spanish]: "Siesta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Little pig",
        [Language.spanish]: "Cerdito/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The bed",
        [Language.spanish]: "La cama",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To die",
        [Language.spanish]: "Morir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To feel, to sense",
        [Language.spanish]: "Sentir",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To worry",
        [Language.spanish]: "Preocupar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To watch, to look at",
        [Language.spanish]: "Mirar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Why?",
        [Language.spanish]: "¿Por qué?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The airplane",
        [Language.spanish]: "El avión",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The family",
        [Language.spanish]: "La familia",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Relatives",
        [Language.spanish]: "Los parientes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Father",
        [Language.spanish]: "El padre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Parents",
        [Language.spanish]: "Los padres",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Husband",
        [Language.spanish]: "El esposo, el marido",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Wife",
        [Language.spanish]: "La esposa, la mujer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Son",
        [Language.spanish]: "El hijo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Daughter",
        [Language.spanish]: "La hija",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Grandfather",
        [Language.spanish]: "El abuelo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Grandmother",
        [Language.spanish]: "La abuela",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Uncle",
        [Language.spanish]: "El tío",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Aunt",
        [Language.spanish]: "La tía",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Grandson",
        [Language.spanish]: "El nieto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Granddaughter",
        [Language.spanish]: "La nieta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Boy cousin",
        [Language.spanish]: "El primo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Girl cousin",
        [Language.spanish]: "La prima",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Nephew",
        [Language.spanish]: "El sobrino",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Niece",
        [Language.spanish]: "La sobrina",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Cat",
        [Language.spanish]: "El gato",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Dog",
        [Language.spanish]: "El perro",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Old",
        [Language.spanish]: "Viejo/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Young",
        [Language.spanish]: "Joven",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To have",
        [Language.spanish]: "Tener",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I have two brothers",
        [Language.spanish]: "Tengo dos hermanos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How many sisters does he have?",
        [Language.spanish]: "¿Cuántas hermanas tiene?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I don't have",
        [Language.spanish]: "No tengo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Years",
        [Language.spanish]: "Años",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "His name is Jack",
        [Language.spanish]: "Su nombre es Jack",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "He is forty three years old",
        [Language.spanish]: "Él tiene cuarenta y tres años",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Her sister",
        [Language.spanish]: "Su hermana",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Her sisters",
        [Language.spanish]: "Sus hermanas",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Their (girls') names are Amber and Jennifer",
        [Language.spanish]: "Sus nombres son Amber y Jennifer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "They (girls) are forty and thirty years old",
        [Language.spanish]: "Ellas tienen cuarenta y treinta años",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What's the weather like today?",
        [Language.spanish]: "¿Qué tiempo hace hoy?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's cloudy",
        [Language.spanish]: "Está nublado",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Cloud",
        [Language.spanish]: "Nube",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's sunny",
        [Language.spanish]: "Hace sol",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's hot",
        [Language.spanish]: "Hace calor",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's cold",
        [Language.spanish]: "Hace frío",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's good weather",
        [Language.spanish]: "Hace buen tiempo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Bad, unwell",
        [Language.spanish]: "Mal",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's bad weather",
        [Language.spanish]: "Hace mal tiempo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The sun shines",
        [Language.spanish]: "El sol brilla",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To rain",
        [Language.spanish]: "Llover",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It's raining",
        [Language.spanish]: "Llueve",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Monday",
        [Language.spanish]: "Lunes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Tuesday",
        [Language.spanish]: "Martes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Wednesday",
        [Language.spanish]: "Miércoles",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Thursday",
        [Language.spanish]: "Jueves",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Friday",
        [Language.spanish]: "Viernes",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Saturday",
        [Language.spanish]: "Sábado",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Sunday",
        [Language.spanish]: "Domingo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "January",
        [Language.spanish]: "Enero",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "February",
        [Language.spanish]: "Febrero",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "March",
        [Language.spanish]: "Marzo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "April",
        [Language.spanish]: "Abril",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "May",
        [Language.spanish]: "Mayo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "June",
        [Language.spanish]: "Junio",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "July",
        [Language.spanish]: "Julio",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "August",
        [Language.spanish]: "Agosto",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "September",
        [Language.spanish]: "Septiembre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "October",
        [Language.spanish]: "Octubre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "November",
        [Language.spanish]: "Noviembre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "December",
        [Language.spanish]: "Diciembre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Today is Wednesday",
        [Language.spanish]: "Hoy es miércoles",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What day is today?",
        [Language.spanish]: "¿Qué día es hoy?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "What is the date?",
        [Language.spanish]: "¿Cuál es la fecha?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Which",
        [Language.spanish]: "Cuál",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The date",
        [Language.spanish]: "La fecha",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Today is the third of March",
        [Language.spanish]: "Hoy es el tres de marzo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Of",
        [Language.spanish]: "De",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Today is the tenth of June",
        [Language.spanish]: "Hoy es el diez de junio",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "When is your birthday?",
        [Language.spanish]: "¿Cuándo es tu cumpleaños?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "My birthday is the twenty-third of October",
        [Language.spanish]: "Mi cumpleaños es el veintitrés de octubre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Winter",
        [Language.spanish]: "El invierno",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Spring",
        [Language.spanish]: "La primavera",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Summer",
        [Language.spanish]: "El verano",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Autumn",
        [Language.spanish]: "El otoño",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "In Bolivia in summer it's cold",
        [Language.spanish]: "En Bolivia, en el verano hace frío",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "When?",
        [Language.spanish]: "¿Cuándo?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "In Bolivia in December it's too hot",
        [Language.spanish]: "En Bolivia, en diciembre hace mucho calor",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To get oneself up",
        [Language.spanish]: "Levantarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To wash oneself",
        [Language.spanish]: "Lavarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To bathe oneself",
        [Language.spanish]: "Bañarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Bathroom",
        [Language.spanish]: "Baño",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Where is the restroom?",
        [Language.spanish]: "¿Dónde está el baño?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To shave oneself",
        [Language.spanish]: "Afeitarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To get oneself dressed",
        [Language.spanish]: "Ponerse la ropa",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To look at oneself",
        [Language.spanish]: "Mirarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To put on makeup to oneself",
        [Language.spanish]: "Maquillarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To brush oneself",
        [Language.spanish]: "Cepillarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To comb oneself",
        [Language.spanish]: "Peinarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To have breakfast oneself",
        [Language.spanish]: "Desayunarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To call oneself",
        [Language.spanish]: "Llamarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I bathe",
        [Language.spanish]: "Me baño",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To wake oneself up",
        [Language.spanish]: "Despertarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To sit oneself down",
        [Language.spanish]: "Sentarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To put oneself to bed",
        [Language.spanish]: "Acostarse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To fall asleep",
        [Language.spanish]: "Dormirse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To enjoy oneself",
        [Language.spanish]: "Divertirse",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "He goes to bed",
        [Language.spanish]: "Se acuesta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A man",
        [Language.spanish]: "Un hombre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A woman",
        [Language.spanish]: "Una mujer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A lot of",
        [Language.spanish]: "Mucho",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "It(-s)",
        [Language.spanish]: "Lo, la, los, las",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The same",
        [Language.spanish]: "Mismo/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "By no means",
        [Language.spanish]: "De ninguna manera",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Around",
        [Language.spanish]: "Alrededor de",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Also, too",
        [Language.spanish]: "También",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Before",
        [Language.spanish]: "Antes de",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "After",
        [Language.spanish]: "Después de",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To walk",
        [Language.spanish]: "Caminar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Before walking",
        [Language.spanish]: "Antes de caminar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "After eating",
        [Language.spanish]: "Después de comer",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Together",
        [Language.spanish]: "Juntos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Immediately, right away",
        [Language.spanish]: "Enseguida",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Near something",
        [Language.spanish]: "Cerca de",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Far from",
        [Language.spanish]: "Lejos de",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "We live near the museum",
        [Language.spanish]: "Nosotros vivimos cerca del museo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Sometimes",
        [Language.spanish]: "A veces, de vez en cuando",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "We speak Spanish sometimes",
        [Language.spanish]: "Hablamos español a veces",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A marker",
        [Language.spanish]: "Un marcador",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A folder",
        [Language.spanish]: "Una carpeta",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Where is my folder?",
        [Language.spanish]: "¿Dónde está mi carpeta?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "I have it (feminine)",
        [Language.spanish]: "La tengo",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "He has them (feminine)",
        [Language.spanish]: "Él las tiene",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Who has my pens?",
        [Language.spanish]: "¿Quién tiene mis plumas?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "We have them (feminine)",
        [Language.spanish]: "Nosotros las tenemos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Lawyer",
        [Language.spanish]: "Abogado",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Laundry",
        [Language.spanish]: "Lavandería",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "USA",
        [Language.spanish]: "Estados unidos",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Border",
        [Language.spanish]: "Frontera",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Big",
        [Language.spanish]: "Grande",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Why not?",
        [Language.spanish]: "¿Por qué no?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A school",
        [Language.spanish]: "Una escuela",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To shine",
        [Language.spanish]: "Brillar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To cost",
        [Language.spanish]: "Costar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The blood",
        [Language.spanish]: "La sangre",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "A song",
        [Language.spanish]: "Una canción",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Still, yet",
        [Language.spanish]: "Todavía",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To enter",
        [Language.spanish]: "Entrar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To ask",
        [Language.spanish]: "Preguntar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "To understand",
        [Language.spanish]: "Entender",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Tired",
        [Language.spanish]: "Cansado/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Busy",
        [Language.spanish]: "Ocupado/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "But",
        [Language.spanish]: "Pero",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Boring",
        [Language.spanish]: "Aburrido/a",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "The cheese",
        [Language.spanish]: "El queso",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "With",
        [Language.spanish]: "Con",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Without",
        [Language.spanish]: "Sin",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Arrive, reach, come",
        [Language.spanish]: "Llegar",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "For",
        [Language.spanish]: "Para",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "This",
        [Language.spanish]: "Este/a/o",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "These",
        [Language.spanish]: "Estos/as",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "That",
        [Language.spanish]: "Ese/a/o",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "Those",
        [Language.spanish]: "Esos/as",
        baseLanguage: Language.spanish,
    },
];
