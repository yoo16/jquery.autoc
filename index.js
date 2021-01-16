/**
 * @title jquery.autoc.js
 * @file This is auto toc jQeury script.
 * @version 0.0.1
 * @copyright Yohei Yoshikawa 2021
 * @GitHub https://github.com/yoo16/jquery.autoc
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.fn.aoutoc = (params) => {
        if (!params) params = {};
        var targetId = '#mokuji';
        var start = 2;
        var end = 3;
        var level = {
            1: { css: { paddingLeft: '0px' }, },
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
        var a = {
            class: {},
            css: {},
        }
        var ul = { class: ['list-group'] };
        var li = { class: ['list-group-item'] };
        var methods = {
            init: function (params) {
                if (params.id) targetId = methods.idSelector(params.id);
                if (params.start) start = params.start;
                if (params.end) end = params.end;

                if (params.a) {
                    if (params.a.class) a.class = params.a.class;
                    if (params.a.css) a.css = params.a.css;
                }
                if (params.base) {
                    if (params.base.class) base.class = params.base.class;
                }
                if (params.ul) {
                    if (params.ul.class) ul.class = params.ul.class;
                }
                if (params.li) {
                    if (params.li.class) li.class = params.li.class;
                }
                if (params.level) {
                    for (i = 1; i <= 5; i++) {
                        if (params.level[i]) {
                            level[i] = params.level[i];
                        }
                    }
                }
                console.log(level);
                if (params.title) {
                    if (params.title.label) title.label = params.title.label;
                    if (params.title.tag) title.tag = tag.element(params.title.tag);
                    if (params.title.class) title.class = params.title.class;
                }
            },
            renderToc: function () {
                var ulElement = $(methods.htmlTag('ul'));
                var i = 0;

                //ul element
                ulElement.addClass(ul.class);

                //base element
                $(baseElement).append(ulElement);
                baseElement.addClass(base.class);

                //target
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

                            var aElement = $(methods.htmlTag('a')).attr('href', '#' + idName).html($(this).html());
                            aElement.addClass(a.class).css(a.css);
                            var liElement = $(methods.htmlTag('li')).addClass(li.class);
                            liElement.addClass(li.class);

                            console.log(hLevel);
                            console.log(level[hLevel]);
                            if (liLevel = level[hLevel]) {
                                if (liLevel.class) liElement.addClass(liLevel.class);
                                if (liLevel.css) liElement.css(liLevel.css)
                            }
                            liElement.append(aElement);
                            $(ulElement).append(liElement);
                        }
                    }
                });
            },
            renderTitle: function () {
                if (title.tag) title.tag = title.tag;
                var titleTag = methods.htmlTag(title.tag);
                var titleElement = $(titleTag).addClass(title.class).text(title.label);
                $(baseElement).prepend(titleElement);
            },
            render: function () {
                this.renderToc();
                this.renderTitle();
            },
            htmlTag: function (name) {
                return '<' + name + '>';
            },
            idSelector: function (name) {
                return '#' + name;
            },
        }
        var baseElement = $(methods.htmlTag(base.tag));

        methods.init(params);
        methods.render();
    }
}));