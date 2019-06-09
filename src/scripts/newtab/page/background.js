var Background = function() {

    var scope = this;

    //

    var content = document.getElementById("content");
    var mainImage = document.getElementById("main__image");
    var clearUploadedBackgroundBtn = document.getElementById("sidebar-settings-meta-clear-background-image-btn");
    var metaBackgroundImageBox = document.getElementById("sidebar-settings-meta-background-image");
    var solidColorOption = document.getElementById("si_nt_background_solid_color");
    var randomGradientOption = document.getElementById("si_nt_background_random_gradient");
    var hideTipsOption = document.getElementById("si_nt_dissenter_hide_tips");

    var colorSchemes = ["cs--black", "cs--white", "cs--light-grey", "cs--dark-grey"];

    var HEX_VALUES = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];


    //

    clearUploadedBackgroundBtn.addEventListener("click", function() {
        newTab.settings.updateSettingsItem(NT_BACKGROUND_IMAGE, null, true);
        resetBackgroundImage();
    });

    var tipsCloser = document.getElementById("dissenter-tab-foot-closer");
    tipsCloser.addEventListener('click', function() {
        newTab.settings.updateSettingsItem(NT_DISSENTER_HIDE_TIPS, true, true, true);
        scope.setHideTips();
    });

    function resetBackgroundImage() {
        metaBackgroundImageBox.src = newTab.userDefaults[NT_BACKGROUND_IMAGE_URL];

        if (!solidColorOption.value && !randomGradientOption.enabled) {
            mainImage.classList.remove("hidden");
        } else {
            mainImage.style.removeProperty("background-image");
            mainImage.classList.add("hidden");
        }
    };

    function getRandomHex() {
        var h = "#";
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = HEX_VALUES[x];
            h += y;
        };
        return h;
    };

    function getRandomLinearGradient() {
        var colorStart = getRandomHex();
        var colorEnd = getRandomHex();
        var angle = Math.round(Math.random() * 360);

        var gradient = "linear-gradient(" + angle + "deg, " + colorStart + ", " + colorEnd + ")";

        return gradient;
    };

    //

    scope.setBackgroundSolidColor = function(event) {
        if (!isObject(event)) return false;

        var color = event.detail;

        if (!color) {
            resetBackgroundImage();
        }
        else {
            mainImage.classList.add("hidden");
            content.style.removeProperty("background");
            content.style.setProperty("background-color", color, "important");
        }
    };

    scope.setBackgroundRandomGradient = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        if (enabled) {
            var gradient = getRandomLinearGradient();
            mainImage.classList.add("hidden");
            content.style.setProperty("background", gradient, "important");
        }
        else {
            resetBackgroundImage();
        }
    };

    scope.setBackgroundImage = function(event) {
        if (!isObject(event)) return false;

        var imageData = event.detail;

        if (!imageData && !newTab.userDefaults[NT_BACKGROUND_IMAGE_URL]) {
            resetBackgroundImage();
        }
        else {
            var bgImg = '';
            if (imageData) {
                bgImg = "url(" + imageData + ")";
                mainImage.style.setProperty("background-image", bgImg, "important");
                metaBackgroundImageBox.src = imageData;
            } else {
                bgImg = "url(" + newTab.userDefaults[NT_BACKGROUND_IMAGE_URL] + ")";
                mainImage.style.setProperty("background-image", bgImg, "important");
                metaBackgroundImageBox.src = newTab.userDefaults[NT_BACKGROUND_IMAGE_URL];
            }

            //Reset background solid color
            var event2 = new CustomEvent("WELM_update_settings_item", {
                detail: {
                    key: NT_BACKGROUND_SOLID_COLOR,
                    value: null,
                    updateInRuntime: true,
                    updateInput: true
                }
            });
            window.dispatchEvent(event2);
        }

        //Show
        mainImage.classList.remove("hidden");
    };

    scope.setPageColorScheme = function(event) {
        if (!isObject(event)) return false;

        removeManyClasses(content, colorSchemes);

        var color = event.detail;
        var newClass = "cs--" + color;
        content.classList.add(newClass);
    };

    scope.setHideTips = function() {
        var enabled = hideTipsOption.checked;

        if (!enabled) {
            var e = document.getElementById("dissenter-tab-foot");
            e.classList.remove('hidden');
        } else {
            var e = document.getElementById("dissenter-tab-foot");
            e.classList.add('hidden');
        }
    }
    //

    window.addEventListener("WELM_nt_background_solid_color", scope.setBackgroundSolidColor, false);
    window.addEventListener("WELM_nt_background_image", scope.setBackgroundImage, false);
    window.addEventListener("WELM_nt_colors_text", scope.setPageColorScheme, false);
    window.addEventListener("WELM_nt_background_random_gradient", scope.setBackgroundRandomGradient, false);
    window.addEventListener("WELM_nt_dissenter_hide_tips", scope.setHideTips, false);
};
