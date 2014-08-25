steal('steal/less',
    'jquery/view/transparency',
    'lwt/features/header',
    'lwt/features/logo',
    'lwt/features/navigation')
    .then('lwt/lwt.less')
    .then(function ($) {
        $("#header").lwt_header();
        $("#logo").lwt_logo();
        $("#navigation").lwt_navigation();
    });
