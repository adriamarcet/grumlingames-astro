export const languages = {
    ca: 'Català',
    es: 'Castellano',
    en: 'English'
};

export function returnLanguageLabel(language: string) {
    return languages[language as keyof typeof languages];
}

export const defaultLang = 'ca';

export const ui = {
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
    },
} as const;