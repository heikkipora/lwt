steal('steal/less',
    'lwt/features/header',
    'lwt/features/logo',
    'lwt/features/navigation')
    .then('lwt/lwt.less')
    .then('lwt/lib/nivo-slider.css')
    .then('lwt/lib/jquery.lightbox-0.5.css')
    .then(function ($) {
        $("#header").lwt_header();
        $("#logo").lwt_logo();
        $("#navigation").lwt_navigation();
    });
