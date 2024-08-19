// ==UserScript==
// @name         tw-elements docs hack
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  tw-elements docs hack. Tắt popup "Access restricted" hiện lên khi xem code mẫu hoặc tài liệu API của những component bị khóa (component trả phí).
// @author       Hieu iceTea
// @match        https://tw-elements.com/docs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tw-elements.com
// @updateURL    https://github.com/Hieu-iceTea/script_js_public/raw/main/tampermonkey/tw_elements_docs_hack/tw_elements_docs_hack.user.js
// @downloadURL  https://github.com/Hieu-iceTea/script_js_public/raw/main/tampermonkey/tw_elements_docs_hack/tw_elements_docs_hack.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Bản quyền thuộc về tác giả Hiếu iceTea (https://fb.com/Hieu.iceTea).

    function activeDocsTabApiBtn() {
        const docsTabApiBtn = document.getElementById('docs-tab-api')
        docsTabApiBtn.parentElement.innerHTML = '<a id="docs-tab-api" class="my-2 me-2 block min-w-[120px] rounded bg-zinc-100 px-6 pb-3.5 pt-4 text-center text-xs font-medium uppercase leading-tight text-neutral-500 data-[twe-nav-active]:!bg-primary-100 data-[twe-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white/50 dark:data-[twe-nav-active]:!bg-slate-900 dark:data-[twe-nav-active]:text-primary-500 md:me-4" href="#docsTabsAPI" data-twe-toggle="pill" data-twe-target="#docsTabsAPI" aria-selected="false" aria-controls="docsTabsAPI" role="tab">API</a>'
    }

    function activeButtonShowCode() {
        document.querySelectorAll('button[aria-controls^="example"][data-twe-target="#apiRestrictedModal"][aria-expanded="false"]').forEach((el) => {
            el.setAttribute('data-twe-target', '#' + el.getAttribute('aria-controls'))
            el.setAttribute('data-twe-collapse-init', '')
            el.removeAttribute('data-twe-toggle') // data-twe-toggle="modal"
        })
    }

    function showLogInfoCompete() {
        console.log(
            'RUN OK | from: tw_elements_docs_hack.user.js | by: Hiếu iceTea. (https://fb.com/Hieu.iceTea)' +
            '\n' +
            '\nNếu không hoạt động, có thể thử tải lại trang (ấn F5).' +
            '\n' +
            '\nUPDATE:' +
            '\n• develop branch: https://github.com/Hieu-iceTea/script_js_public/raw/develop/tampermonkey/tw_elements_docs_hack/tw_elements_docs_hack.user.js' +
            '\n• main branch: https://github.com/Hieu-iceTea/script_js_public/raw/main/tampermonkey/tw_elements_docs_hack/tw_elements_docs_hack.user.js'
        )
        console.log('Bản quyền thuộc về tác giả Hiếu iceTea (https://fb.com/Hieu.iceTea).')
    }

    setTimeout(() => {
        activeDocsTabApiBtn()
        activeButtonShowCode()
        showLogInfoCompete()
    }, 1000)
})();
