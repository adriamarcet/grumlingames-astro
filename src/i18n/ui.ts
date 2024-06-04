export const languages = {
    ca: 'Català',
    es: 'Castellano',
    en: 'English'
};

export function returnLanguageLabel(language: string) {
    return languages[language as keyof typeof languages];
}

export const defaultLang = 'ca';

export const strings = {
    ca: {
        'common.games': 'Jocs',
        'common.languages': 'Idiomes',
        'common.open': 'Obrir',
        'nav.home': 'Inici',
        'navbarmenu.close': 'Tanqueu el menú principal de navegació',
        'navbarmenu.open': 'Obriu el menú principal de navegació',
        'navbarmenu.altlogo': 'Logotip de Grumlin Games',
        'head.home_page': "Pàgina d'inici",
        'footer.all_rights_reserved': 'Tots els drets reservats',
        'page.home.h1': "Jocs grans en caixes petites",
        'page.home.intro': "Benvingut a Grumlin Games. A Grumlin Games, creem emocionants i memorables jocs de taula per a totes les edats. El nostre primer llançament, 'Misty Valley', és només el principi.",
        'games.section_title': "Mira les nostres propostes"
    },
    es: {
        'common.games': 'Juegos',
        'common.languages': 'Idiomas',
        'common.open': 'Abrir',
        'nav.home': 'Inicio',
        'navbarmenu.close': 'Cerrar el menú principal de navegación',
        'navbarmenu.open': 'Abrir el menú principal de navegación',
        'navbarmenu.altlogo': 'Logotipo de Grumlin Games',
        'head.home_page': "Página de inicio",
        'footer.all_rights_reserved': 'Todos los derechos reservados',
        'page.home.h1': "Pequeños juegos en grandes cajas",
        'page.home.intro': "Bienvenido a Grumlin Games. En Grumlin Games, creamos emocionantes y memorables juegos de mesa para todas las edades. Nuestro primer lanzamiento, 'Misty Valley', es solo el principio.",
        'games.section_title': "Mira nuestras propuestas"
    },
    en: {
        'common.games': 'Games',
        'common.languages': 'Languages',
        'common.open': 'Open',
        'nav.home': 'Home',
        'navbarmenu.close': 'Close main navigation menu',
        'navbarmenu.open':  'Open main navigation menu',
        'navbarmenu.altlogo': 'Grumlin Games logo',
        'head.home_page': "Home page",
        'footer.all_rights_reserved': 'All rights reserved',
        'page.home.h1': "Big games on small boxes",
        'page.home.intro': "Welcome to Grumlin Games. At Grumlin Games, we create exciting and memorable board games for all ages. Our first release, 'Misty Valley', is just the beginning.",
        'games.section_title': "Check out our proposals"
    },
} as const;