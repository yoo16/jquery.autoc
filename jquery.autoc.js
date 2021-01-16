/**
 * @file This is jQuery auto toc script.
 * @copyright Yohei Yoshikawa 2021
 */
const mokuji = (params) => {
    if (!params) params = {};
    var targetId = '#mokuji';
    var start = 2;
    var end = 3;
    var level = {
        1: { css: { paddingLeft: '00px' }, },
        2: { css: { paddingLeft: '20px' }, },
        3: { css: { paddingLeft: '40px' }, },
        4: { css: { paddingLeft: '60px' }, },
        5: { css: { paddingLeft: '80px' }, },
    };
    var base = {
        class: ['mx-auto'],
        tag: 'div',
    };
    var title = {
        label: 'Index',
        tag: 'h2',
        class: ['h2']
    };
    var ul = { class: ['list-group'] };
    var li = { class: ['list-group-item'] };

    var htmlTag = (name) => {
        return '<' + name + '>';
    };

    var loadParams = (params) => {
        if (params.start) start = params.start;
        if (params.end) end = params.end;

        if (params.base) {
            if (params.base.class) base.class = params.base.class;
        }
        if (params.ul) {
            if (params.ul.class) ul.class = params.ul.class;
        }
    }

    var renderTitleTag = (params) => {
        if (params.title) {
            if (params.title.label) title.label = params.title.label;
            if (params.title.tag) title.tag = tag.element(params.title.tag);
            if (params.title.class) title.class = params.title.class;
        }

        if (title.tag) title.tag = title.tag;
        var titleTag = htmlTag(title.tag);
        var titleElement = $(titleTag).addClass(title.class).text(title.label);
        $(baseElement).prepend(titleElement);
    }

    var renderToc = () => {
        var baseElement = $(htmlTag(base.tag));
        var ulElement = $(htmlTag('ul'));
        var i = 0;

        //ul element
        ulElement.addClass(ul.class);

        //base element
        $(baseElement).append(ulElement);
        baseElement.addClass(base.class);

        //target
        if (params.id) targetId = params.id;
        $(targetId).append(baseElement);

        var reg = new RegExp('h([' + start + '-' + end + '])', 'i');
        $('*').each(function () {
            var hMatch = $(this).get(0).tagName.match(reg);
            if (hMatch) {
                var hLevel = 2;
                if (hMatch[1]) hLevel = hMatch[1];
                if ($(this).attr('class').match(reg)) {
                    i++;
                    var idName = 'header_' + i;
                    $(this).prop('id', idName);

                    var aElement = $(htmlTag('a')).attr('href', '#' + idName).html($(this).html());
                    var liElement = $(htmlTag('li')).addClass(li.class);
                    if (params.li) {
                        liElement.removeClass();
                        if (params.li.class) liElement.addClass(params.li.class);
                    }
                    if (params.level) {
                        if (params.level[hLevel]) liElement.addClass(params.level[hLevel]);
                    }
                    liElement.css(level[hLevel].css).append(aElement);
                    $(ulElement).append(liElement);
                }
            }
        });
    }

    loadParams(params);
    renderToc(params);
    renderTitleTag(params);
}