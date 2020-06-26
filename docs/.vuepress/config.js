module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Help Me POC ✊🏼✊🏽✊🏾✊🏿',
            description: 'Resources for people of color in Montreal',
        },
        '/fr/': {
            lang: 'fr-CA',
            title: 'Aidez-Moi POC ✊🏼✊🏽✊🏾✊🏿',
            description: 'Ressources pour les peuples de couleur à Montréal'
        },
        '/es/': {
            lang: 'es',
            title: 'Ayudame POC ✊🏼✊🏽✊🏾✊🏿',
            description: 'Una lista agregada de recursos para comunidades de color en Montreal'
        }
    },
    head: [
        ["script", { type:"text/javascript", src:"https://makerbadge.s3.amazonaws.com/blmbadge.js" }],
        ["script", {}, `BLMBadge.init({
      layout:1, 
      theme:'dark', 
      promoText : 'Send a donation '+String.fromCodePoint(0x2192),
      promoLink : 'https://secure.actblue.com/donate/bailfunds?refcode=twitter/',
      message : 'To be silent is to be complicit. Black lives matter.',
      title : '#BlackLivesMatter'
    })`],
    ["script", { type:"text/javascript", src:"https://identity.netlify.com/v1/netlify-identity-widget.js"}]
],
    themeConfig: { 
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages', 
    nav: [
        {text: 'Home', link: '/'},
        {text: 'Resources', link: '/resources/'},
        {text: 'Contribute', link: '/contribute/'}
    ],
        sidebar: 'auto'
    },
    '/fr/': {
        selectText: 'Langues',
        label: 'francais',
        ariaLabel: 'Langues',
        nav: [
            {text: 'Accueil', link: '/fr/'},
            {text: 'Ressources', link: '/fr/ressources/'},
            {text: 'Contribuer', link: '/fr/contribuer/'}
        ],
        sidebar: 'auto'
    },
    '/es/': {
        selectText: 'Idiomas',
        label: 'español',
        ariaLabel: 'Idiomas',
        nav: [
            {text: 'Inicio', link: '/es/'},
            {text: 'Recursos', link: '/es/recursos/'},
            {text: 'Contribuir', link: '/es/contribuir/'}
        ],
        sidebar: 'auto'
    },
},
}
}