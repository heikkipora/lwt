load("steal/rhino/rhino.js");
var cachebuster = Date.now()
steal('steal/build').then('steal/build/scripts', 'steal/build/styles', 'steal/build/resources', function () {
    commonSubstitutions = [
        {regexp: /\.\.\/steal\/steal\.js\?lwt/mgi, replaceWith: 'steal-' + cachebuster + '/steal.production.js?' + cachebuster + '/lwt'},
        {regexp: /<!--placeholder_for_production\.css-->/mgi, replaceWith: '<link rel="stylesheet" href="lwt/production.css?' + cachebuster + '">'}
    ]
    steal.build('lwt/build.html', {
        to: 'out/lwt',
        resources: [
            {file: 'lwt/index.html', to: '../index.html', replace: commonSubstitutions},
            {file: 'out/lwt/production.js', to: 'production.js', replace: [
                {regexp: /images\//mgi, replaceWith: 'lwt/images/'},
                {regexp: /out\/lwt\/production\.css/mgi, replaceWith: './production.css?' + cachebuster},
                {regexp: /\.jpg/g, replaceWith: '.jpg?' + cachebuster},
                {regexp: /\.png/g, replaceWith: '.png?' + cachebuster},
                {regexp: /\.gif/g, replaceWith: '.gif?' + cachebuster},
            ]},
            {file: 'out/lwt/production.css', to: 'production.css', replace: [
                {regexp: /url\([^\)]*\/images\//g, replaceWith: 'url(images/'},
                {regexp: /\.jpg/g, replaceWith: '.jpg?' + cachebuster},
                {regexp: /\.png/g, replaceWith: '.png?' + cachebuster},
                {regexp: /\.gif/g, replaceWith: '.gif?' + cachebuster},
            ]},
            {file: 'steal/steal.production.js', to: '../steal/steal.production.js'},
            {file: 'lwt/images', to: 'images/'},
            {file: 'lwt/LWT-kartta.pdf', to: '../LWT-kartta.pdf'},
            {file: 'lwt/LWT-messulehti.pdf', to: '../LWT-messulehti.pdf'},
            {file: 'lwt/LWT-messulehti-edellinen.pdf', to: '../LWT-messulehti-edellinen.pdf'},
            {file: 'lwt/RuusujenHurmaa-kartta.pdf', to: '../RuusujenHurmaa-kartta.pdf'},
            {file: '.htaccess', to: '../.htaccess'}
        ]
    });
});
