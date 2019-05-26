module.exports = manifest = {
    "manifest_version": 2,
    "name": "Dissenter Extension",
    "short_name": "Dissenter",
    "description": "Dissenter is the comment section of the Internet.",
    "homepage_url": "https://dissenter.com",
    "icons": {
        "16": "assets/images/logo/icon-16.png",
        "48": "assets/images/logo/icon-48.png",
        "128": "assets/images/logo/icon-128.png"
    },
    "permissions": [
        "activeTab",
        "topSites",
        "tabs",
        "https://*.dissenter.com/*"
    ],
    "browser_action": {
        "default_icon": "assets/images/logo/icon-128.png",
        "default_popup": "popup/popup.html"
    },
    "commands": {
        "_execute_browser_action": {
            "suggested_key": {
                "default": "Alt+Shift+D",
                "mac": "Alt+Shift+D"
            }
        }
    },
    "background": {
        "scripts": [
            "background/background.js"
        ]
    },
    "content_scripts": [
        {
            "matches": ["https://*.twitter.com/*"],
            "js": ["content/twitter/script/script.js"],
            "run_at": "document_end",
        },
        {
            "matches": ["https://*.youtube.com/*"],
            "js": ["content/youtube/script/script.js"]
        },
        {
            "matches": ["https://*.reddit.com/*"],
            "js": ["content/reddit/script/script.js"]
        },
        {
            "matches": ["https://*.wikipedia.org/*"],
            "js": ["content/wikipedia/script/script.js"]
        },
        {
            "matches": [
                "http://*/*",
                "https://*/*"
            ],
            "js": ["content/all/script/script.js"]
        }
    ],
    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self' https://*.dissenter.com/*",
    "incognito": "spanning",
    "optional_permissions": [
        "topSites"
    ]
};
