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
        [Language.english]: "Too",
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
        [Language.spanish]: "Perdón",
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
        [Language.spanish]: "¡Muy bien (=Va)!¿Y tú?",
        baseLanguage: Language.spanish,
    },
    {
        [Language.english]: "How are you?",
        [Language.spanish]: "¿Cómo estás?",
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
        [Language.spanish]: "Bolígrafo",
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
        [Language.spanish]: "Cómico/a, gracioso/a",
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
];
//¿¡óáíé