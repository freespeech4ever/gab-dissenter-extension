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
    ],
    "key": "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDRh9Z++rqBkdNHQb8i1+Cfqao2E9Sq4TJv6/hmEpxARYz6qBNVpgByc5DFfZPKyreGWhu/eyNaD8vgA1I6zmGUMCqEvOvF+UxGmi6/e7eSjBIEpqfr2kY2x1/CCuMjxVqI5ZE1N4pJgKwMS2mgpslFXga/zWqWpQIh/zAsisNBfsD8gZkvGQuVnPLsB8BNl8gI+/1CV96Yf26VKCisQrX+rBgM7TVwce+GxVl6941iGttSAzaQoVEhjII7j+qoM8jZVIUNh22qTV9URkNRFT1pEnrpUM2No2v8kKxecUMXZko0otHxJh6Be4CiK4OlReOAg1hHdN8H3S7cuPveh3YrAgMBAAECggEAHnJBndPrE/bPn5QTJQn/btPlktQQ2/+7J34/av2bTM+Oa8HOhWyIthjK2ZekyRvpzRD85TcMbQLMmjGBWmAw16qkEwOssujFx6CR2GsuwpGt8JUS43elKkKQTI7ucH016ZyKHBSE+KdE2MiAgcKajoTaMDa2HUu+4pfFNUO4maSBLtmhEnZsOBZE/TL2OqxZfDG9NU5FBIbTjYiLK9GOCtL3Y4JZv0bH5gGSpx1lyFdArhCI6QZxNs07SYrc1IFjmrxKmBzZfAHiieJDDxe09DodFsG9Y8Rz516hq3WLmRlnAD7U0RIPIFbicI00f5/27kMRPyFd5nkDhJoSNAtlKQKBgQDrveyYPLYKwof2buDtuaD6vx/u2MZq86gexwdK0ZdN33NTci9jWUaHXsIo5ntSL4r/on7O13gXs2qd0fMUXqnStb1OxVX6m9w6fIW7ih/6xh4mFpj7Ihx29s8HqFEXQEECtnFOEgkf+GZ0lKpB97ZsEfCxabUAaC+/RatXtrwORQKBgQDjiUr/tTB5G+t6XbNg5xGLp3wMgKWvdmSFscq3gqMvOpZycH1Su3W7TxYthhoWNup6TzgWSCNwLtAIhYMubKQrM4jf+qA3HN4p7gQWTCqDSkt5p8PH13a6o5Fjfhjidhm+e8BrcCxkfUDzqKbxtS66qI7ZBfLrExXfsxNfVWyxrwKBgAMnlnvvDAyWz9T3ZOEpg8L3Pcknc3hI7G4FAc75gQnUvKlYNNQihLQZC4Yal3nhEv4awZGpBn1itEGKZrNWFPWx4uej8mOZJFhQBEYfMhBcCFlAIinyKelZoimbEgK6pGQR5vBBg4e+/jf/KUwasYE+uDbXkEmCG2l22DUjR971AoGAB77pvbC2WLkZmA3OiHL1RvLJp0dN3J5EJ8T4qKyaz4XID1dC/OkCxgCYOa6B/tWZv9Yoi6GjCzOcw12ALLloEUxs0WsfvyCNc5H1s6ieHeAOl7KdWJU+JnZhAakOQc9RawmdcEreSAF3j5PjMwE++P259ytbrKL2sKnQ9ALdc2MCgYANq8+riOQVYqkWEH8PjWf1jiO2Hpp5cgATlnI4YyUxfkUVdxKWa9U5jILru9Ocm7Yykrz30FijyNN+r5GJnK41qdrRewgZAeiVrnBwOTtnh1FEXfQrq2LHhy3RizdIdrLPgJRiP3BL4M8Rq9kvdGHc9upyYUWYI+0o3nbiTNahRA=="
};
