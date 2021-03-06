var a = $(document);
a.ready(function () {
    var b = $('body'),
        d = 'sideToolbar',
        e = 'sideCatalog',
        f = 'sideCatalog-catalog',
        g = 'sideCatalogBtn',
        i = '<div id="sideToolbar" style="display:none;">\<div class="sideCatalogBg" id="sideCatalog" style="visibility: visible;">\<div id="sideCatalog-catalog">\<ul class="nav" style="width:225px;zoom:1">\</ul>\</div>\</div>\<a href="javascript:void(0);" id="sideCatalogBtn" class="sideCatalogBtnDisable"></a>\</div>',
        j = '<li style="background-color: #f5f5f5;"><b><span class=twarp></span>文章目录</b></li>',
        k = 200,
        l = 0,
        m = 0,
        n = 0,
        q = true,
        r = true,
        s = b;
    if (s.length === 0) {
        return
    };
    b.append(i);
    o = $('.post-content').find('h1,h2,h3');
    o.each(function (t) {
        var u = $(this),
            v = u[0];
        var title = u.text();
        var text = u.text();
        u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
        if (v.localName === 'h1') {
            l++;
            m = 0;
            if (text.length > 14) text = text.substr(0, 16) + "...";
            // j += '<li><span>' + l + '&nbsp&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
            j += '<li><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
        } else if (v.localName === 'h2') {
            m++;
            n = 0;
            if (q) {
                if (text.length > 10) text = text.substr(0, 12) + "...";
                // j += '<li class="h2Offset"><span>' + l + '.' + m + '&nbsp&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
                j += '<li class="h2Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
            }
        } else if (v.localName === 'h3') {
            n++;
            if (r) {
                if (text.length > 10) text = text.substr(0, 12) + "...";
                //j += '<li class="h3Offset"><span>' + l + '.' + m + '.' + n + '&nbsp&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + u.text() + '</a></li>';
                j += '<li class="h3Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
            }
        }
    });
    $('#' + f + '>ul').html(j);
    b.data('spy', 'scroll');
    b.data('target', '.sideCatalogBg');
    $('body').scrollspy({
        target: '.sideCatalogBg'
    });
    $sideCatelog = $('#' + e);
    $('#' + g).on('click',
        function () {
            if ($(this).hasClass('sideCatalogBtnDisable')) {
                $sideCatelog.css('visibility', 'hidden')
            } else {
                $sideCatelog.css('visibility', 'visible')
            };
            $(this).toggleClass('sideCatalogBtnDisable')
        });
    $sideToolbar = $('#' + d);
    a.on('scroll',
        function () {
            var t = a.scrollTop();
            if (t > k) {
                $sideToolbar.css('display', 'block');
            } else {
                $sideToolbar.css('display', 'none');
            }
        })
});