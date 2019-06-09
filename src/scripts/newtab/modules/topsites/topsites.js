var TopSites = function() {

    var scope = this;

    var topSiteList = document.getElementById('top-site-list');
    var topSitesEnabledCheckbox = document.querySelector('.sidebar-table-item__input.sidebar-table-item__input--checkbox[data-storage-key="nt_top_sites_enabled"]');
    var topSiteItems = [];

    var sizes = ["sm", "md", "lg"];
    var highlights = ["light", "dark"];
    var shapes = ["square", "circle"];

    var allStyleClasses = [].concat.apply([], [sizes, highlights, shapes]);

    topSitesEnabledCheckbox.addEventListener("change", function() {
        if (!this.checked) return false;

        createTopWithDefaults();
    });

    function createTopWithDefaults() {
        createTop(
            newTab.userDefaults[NT_TOP_SITES_ENABLED],
            newTab.userDefaults[NT_TOP_SITES_LIMIT],
            newTab.userDefaults[NT_TOP_SITES_SIZE],
            newTab.userDefaults[NT_TOP_SITES_SHAPE]
        );
    };

    function createTop(enabled, limit, size, shape) {
        if (!size) size = newTab.userDefaults[NT_TOP_SITES_SIZE];
        if (!shape) shape = newTab.userDefaults[NT_TOP_SITES_SHAPE];
        if (limit === undefined) limit = newTab.userDefaults[NT_TOP_SITES_LIMIT];

        if (!enabled) {
            return false;
        }
        reset();
        topSites = newTab.userDefaults[NT_DISSENTER_PINS]['page1'];
        
        var max = Math.min(topSites.length, limit);

        for (var i = 0; i < max; i++) {
            var site = topSites[i];

            var topSiteItem = getTopSiteItem(site);
            if (!topSiteItem) continue;
            topSiteItems.push(topSiteItem);
            topSiteList.appendChild(topSiteItem);
        }
    };

    function reset() {
        topSiteItems = [];

        while (topSiteList.firstChild) {
            topSiteList.removeChild(topSiteList.firstChild);
        };
    };

    function getTopSiteItem(site, size, shape, highlight) {
        if (!isObject(site)) return false;

        if (!size) size = newTab.userDefaults[NT_TOP_SITES_SIZE];
        if (!shape) shape = newTab.userDefaults[NT_TOP_SITES_SHAPE];
        if (!highlight) highlight = newTab.userDefaults[NT_TOP_SITES_HIGHLIGHT];

        var hostname;
        try {
            hostname = (new URL(site.url)).hostname;
        } catch (e) { 
            scope.removePinnedSite(site.url);
            return false;
        }
        var titleText = site.title;

        var button = document.createElement('a');
        button.className = 'top-site-item';
        button.href = site.url;
        button.classList.add(size);
        button.classList.add(shape);
        button.classList.add(highlight);

        var title = document.createElement('span');
        title.className = 'top-site-item__title';
        title.textContent = titleText;

        var image = document.createElement('img')
        image.className = 'top-site-item__img';;
        image.title = site.title;
        image.src = 'https://logo.clearbit.com/' + hostname;

        button.appendChild(image);
        button.appendChild(title);

        var wrapper = document.createElement('div');
        wrapper.className = 'top-site-wrapper';
        var closer = document.createElement('a');
        closer.className = 'top-site-remove';
        closer.textContent = 'X';
        closer.addEventListener("click", function(event) {
            scope.removePinnedSite(site.url);
        });
        wrapper.appendChild(button);
        wrapper.appendChild(closer);

        return wrapper;
    };

    scope.removePinnedSite = function(url) {
        if (!url) return;
        var pins = newTab.userDefaults[NT_DISSENTER_PINS]['page1'];
        pins.splice(pins.findIndex(function(i) {
            return i.url === url;
        }), 1);
        var event2 = new CustomEvent("WELM_update_settings_item", {
            detail: {
                key: NT_DISSENTER_PINS,
                value: {"page1":pins},
                updateInRuntime: true,
                updateInput: false
            }
        });
        window.dispatchEvent(event2);
        createTopWithDefaults();
    }

    scope.addPinnedSite = function(url, title) {
        if (!url || !title) return;
        var newSite = {url:url, title:title};
        var pins = newTab.userDefaults[NT_DISSENTER_PINS]['page1'];
        pins.push(newSite);
        var event2 = new CustomEvent("WELM_update_settings_item", {
            detail: {
                key: NT_DISSENTER_PINS,
                value: {"page1":pins},
                updateInRuntime: true,
                updateInput: false
            }
        });
        window.dispatchEvent(event2);
        createTopWithDefaults();
    }

    //

    scope.setTopSitesEnabled = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        topSiteList.classList.toggle("hidden", !enabled);

        if (!enabled) return false;

        createTopWithDefaults();
    };

    scope.updateTopSites = function(event) {
        if (!isObject(event)) return false;

        createTopWithDefaults();
    };

    scope.updateTopSiteStyle = function(event) {
        if (!isObject(event)) return false;

        for (var i = 0; i < topSiteItems.length; i++) {
            var item = topSiteItems[i];

            removeManyClasses(item, allStyleClasses);

            var size = newTab.userDefaults[NT_TOP_SITES_SIZE];
            var shape = newTab.userDefaults[NT_TOP_SITES_SHAPE];
            var highlight = newTab.userDefaults[NT_TOP_SITES_HIGHLIGHT];

            item.classList.add(size);
            item.classList.add(shape);
            item.classList.add(highlight);
        };
    };

    scope.setTopSitesTitlesEnabled = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        topSiteList.classList.toggle("show-titles", enabled);
    };

    //
    var pinnedEntryDiv = document.getElementById("pinned-site-entry");
    var pinnedAddButton = document.getElementById("top-site-add-button");
    pinnedAddButton.addEventListener('click', function() {
        pinnedEntryDiv.classList.remove('hidden');
        pinnedAddButton.classList.add('hidden');
    });

    var pinnedCancelButton = document.getElementById("pinned-cancel");
    pinnedCancelButton.addEventListener('click', function() {
        pinnedEntryDiv.classList.add('hidden');
        pinnedAddButton.classList.remove('hidden');
    });

    var pinned_url = document.getElementById("pinned_url");
    var pinned_title = document.getElementById("pinned_title");
    var pinned_submit = document.getElementById("pinned-submit");
    pinned_submit.addEventListener('click', function() {
        if (!pinned_url.value || !pinned_title.value) {
            return alert('Must enter both fields.');
        }
        try {
            var url = new URL(pinned_url.value);
        } catch (e) {
            return alert('Invalid URL.  Should be a valid url like: https://www.dissenter.com/');
        }
        scope.addPinnedSite(pinned_url.value, pinned_title.value);
        pinnedEntryDiv.classList.add('hidden');
        pinnedAddButton.classList.remove('hidden');
        pinned_url.value = '';
        pinned_title.value = '';
    })


    window.addEventListener("WELM_nt_top_sites_enabled", scope.setTopSitesEnabled, false);
    window.addEventListener("WELM_nt_top_sites_limit", scope.updateTopSites, false);
    window.addEventListener("WELM_nt_top_sites_size", scope.updateTopSiteStyle, false);
    window.addEventListener("WELM_nt_top_sites_shape", scope.updateTopSiteStyle, false);
    window.addEventListener("WELM_nt_top_sites_highlight", scope.updateTopSiteStyle, false);
    window.addEventListener("WELM_nt_top_sites_show_title", scope.setTopSitesTitlesEnabled, false);
};
