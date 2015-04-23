function init_glendon_app() {
    //Hide both language buttons
    $('.btn_fr').hide();
    $('.btn_en').hide();

    if ($.cookie('lang')) {
        var lang = $.cookie('lang');
    } else {
        var lang = 'fr';
        $.cookie('lang', 'fr');

    }
    //Show appropriate language button
    if (lang == 'fr') {
        $('.btn_en').show();
    } else {
        $('.btn_fr').show();
    }
    lang_toggle(lang);

    $('.btn_en').click(function () {
//        $('#lang').val('en');
        $.cookie('lang', 'en');
        lang_toggle('en');
        $('.btn_en').hide();
        $('.btn_fr').show();
    });
    $('.btn_fr').click(function () {
//        $('#lang').val('fr');
        $.cookie('lang', 'fr');
        lang_toggle('fr');
        $('.btn_fr').hide();
        $('.btn_en').show();
    });

//    inAppBrowserToggles
    $('#eclassurl').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://eclass.glendon.yorku.ca/?lang=fr_ca', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://eclass.glendon.yorku.ca/?lang=en', '_blank', 'location=yes');
        }
    });

    $('#eventsurl').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/alumni/fr/evenements/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/alumni/events/', '_blank', 'location=yes');
        }

    });

    $('#findapersonurl').click(function () {
        var ref = window.open('http://mocha.yorku.ca/atlas/servlet/atlas', '_blank', 'location=yes');

    });

    $('#libraryurl').click(function () {
        var ref = window.open('https://www.library.yorku.ca/find/MyResearch/CheckedOut', '_blank', 'location=yes');

    });

    $('#studentservicesurl').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/current-students/fr/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/current-students/', '_blank', 'location=yes');
        }

    });

    $('#yucardurl').click(function () {
        var ref = window.open('https://yorku-sp.blackboard.com/eAccounts/AccountSummary.aspx?menu=0', '_blank', 'location=yes');

    });

    $('#newsurl').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/fr/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/', '_blank', 'location=yes');
        }

    });

    $('#athleticsurl').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/gac/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/gac/', '_blank', 'location=yes');
        }

    });

    $('#futurestudents').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/futurestudents/fr/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/futurestudents/', '_blank', 'location=yes');
        }

    });

    $('#currentstudents').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/current-students/fr/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/current-students/', '_blank', 'location=yes');
        }

    });

    $('#alumnivisitors').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('http://www.glendon.yorku.ca/alumni/fr/', '_blank', 'location=yes');
        } else {
            var ref = window.open('http://www.glendon.yorku.ca/alumni/', '_blank', 'location=yes');
        }

    });
    $('#transit').click(function () {
        var lang = $.cookie('lang');
        if (lang == 'fr') {
            var ref = window.open('https://mobile.ttc.ca/', '_blank', 'location=yes');
        } else {
            var ref = window.open('https://mobile.ttc.ca/', '_blank', 'location=yes');
        }

    });

//    Taken from Glendon WP theme
    $('#btn_quicklinks').click(function (e) {

        if ($('#quicklinks').is(":visible")) {
            $('#quicklinks').hide('puff');
            $('#quicklinks_caret').removeClass('fa-sort-desc');
            $('#quicklinks_caret').addClass('fa-sort-asc');

        } else {
            $('#quicklinks').show('puff');
            $('#quicklinks_caret').removeClass('fa-sort-asc');
            $('#quicklinks_caret').addClass('fa-sort-desc');
        }

        e.stopPropagation();
    });


    $(document).click(function () {
        if ($('#quicklinks').is(":visible")) {
            $('#quicklinks').hide('puff');
            $('#quicklinks_caret').removeClass('fa-sort-desc');
            $('#quicklinks_caret').addClass('fa-sort-asc');
        }
    });

    $("#quicklinks").click(function (e) {
        e.stopPropagation(); // This is the preferred method.
        return true;        // This should not be used unless you do not want
        // any click events registering inside the div
    });

}

/**
 * Toogle between languages
 * @param string language
 * @returns {undefined}
 */
function lang_toggle(language) {
    $.ajax({
        url: 'lang/translations.xml',
        success: function (xml) {
            $(xml).find('translation').each(function () {
                var id = $(this).attr('id');
                var text = $(this).find(language).text();
                $("." + id).html(text);
            });
        }
    });
}