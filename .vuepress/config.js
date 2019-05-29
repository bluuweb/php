module.exports = {
  title: 'PHP 7',
  description: 'Aprende PHP 7 con POO y MVC',
  base: '/php',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:{
      '/':[
        '',
        'vuex',
        '/tareas/'
      ]
    }
  }
 
}