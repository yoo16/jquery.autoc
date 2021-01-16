/**
 * @title jquery.autoc.js
 * @file This is auto toc jQeury script.
 * @version 0.0.1
 * @copyright Yohei Yoshikawa 2021
 * @GitHub https://github.com/yoo16/jquery.autoc
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(require('jquery'), window, document);
    } else {
        factory(jQuery, window, document);
    }
}(function ($, window, document, undefined) {
    $.fn.autoc = function (options) {
        var params = $.extend({
            targetId: '#toc',
            start: 2,
            end: 3,
            level: {
                1: { css: { paddingLeft: '0px' }, },
                2: { css: { paddingLeft: '20px' }, },
                3: { css: { paddingLeft: '40px' }, },
                4: { css: { paddingLeft: '60px' }, },
                5: { css: { paddingLeft: '80px' }, },
            },
            base: {
                class: ['mx-auto'],
                tag: 'div',
            },
            title: {
                label: 'Index',
                tag: 'h2',
                class: ['h2']
            },
            a: {
                class: [],
                css: {},
            },
            ul: { class: ['list-group'] },
            li: { class: ['list-group-item'] },
        }, options);
        console.log(params);
        var methods = {
            init: function (params) {
            },
            renderToc: function () {
                var ulElement = $(methods.htmlTag('ul'));
                var i = 0;

                //ul element
                ulElement.addClass(params.ul.class);

                //base element
                $(baseElement).append(ulElement);
                baseElement.addClass(params.base.class);

                //target
                $(params.targetId).append(baseElement);

                var reg = new RegExp('h([' + params.start + '-' + params.end + '])', 'i');
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
                            if (params.a.class) aElement.addClass(params.a.class)
                            if (params.a.css) aElement.css(params.a.css);
                            var liElement = $(methods.htmlTag('li')).addClass(params.li.class);
                            liElement.addClass(params.li.class);

                            if (liLevel = params.level[hLevel]) {
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
                if (!params.title.tag) params.title.tag = 'h2';
                if (!params.title.class) params.title.class = params.title.tag;
                var titleTag = methods.htmlTag(params.title.tag);
                var titleElement = $(titleTag).html(params.title.label);
                if (params.title.class) titleElement.addClass(params.title.class);
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
        var baseElement = $(methods.htmlTag(params.base.tag));

        methods.init(params);
        methods.render();
    }
}));