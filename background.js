// Config
let options = {
    redirectAssets: true
}

function setDefaults() {
    chrome.storage.sync.set({
        options: {
            redirectAssets: true
        }
    }, syncSettings);
}

chrome.runtime.onInstalled.addListener(() => {
    setDefaults();
    clearRedirectRules();
    setRedirectRules();
});

function syncSettings() {
    chrome.storage.sync.get({
        options: {
            redirectAssets: true
        }
    }, (obj) => {
        Object.assign(options, obj.options);

        let color = options.redirectAssets ? "#00a04a" : "#bb0000";
        let text = options.redirectAssets ? "ON" : "OFF";

        chrome.action.setBadgeBackgroundColor({ color });
        chrome.action.setBadgeText({ text });
    });

    console.log("Settings have been synced.");
}

syncSettings();

// Action

function toggleRedirect() {
    options.redirectAssets = !options.redirectAssets;

    chrome.storage.sync.set({ options }, syncSettings);

    if (options.redirectAssets) {
        setRedirectRules();
    } else clearRedirectRules();
}

chrome.action.onClicked.addListener(toggleRedirect);

// Redirects

const ANIMATION_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/default/animations/";
const ANIMATION_SCHEME = "^https://.*deeeep.io/assets/animations/";
const ANIMATION_RULE_ID = 1;
const ANIMATION_RULE_PRIORITY = 1;

const CHAR_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/characters/";
const CHAR_SCHEME = "^https://.*deeeep.io/assets/characters/";
const CHAR_RULE_ID = 2;
const CHAR_RULE_PRIORITY = 1;

const SPRITESHEET_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/default/spritesheets/";
const SPRITESHEET_SCHEME = "^https://.*deeeep.io/assets/spritesheets/";
const SPRITESHEET_RULE_ID = 3;
const SPRITESHEET_RULE_PRIORITY = 1;

const MAP_SPRITESHEET_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/default/mapmaker-asset-packs/";
const MAP_SPRITESHEET_SCHEME = "^https://.*deeeep.io/assets/packs/";
const MAP_SPRITESHEET_RULE_ID = 4;
const MAP_SPRITESHEET_RULE_PRIORITY = 1;

const IMG_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/img/";
const IMG_SCHEME = "^https://.*deeeep.io/img/";
const IMG_RULE_ID = 5;
const IMG_RULE_PRIORITY = 1;

const PET_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/custom/pets/";
const PET_SCHEME = "^https://.*deeeep.io/custom/pets/"
const PET_RULE_ID = 6;
const PET_RULE_PRIORITY = 1;

const SKIN_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/skans/";
const SKIN_SCHEME = "^https://.*deeeep.io/assets/skins/";
const SKIN_RULE_ID = 7;
const SKIN_RULE_PRIORITY = 1;

const CDN_SKIN_REDIRECT_TEMPLATE = "https://the-doctorpus.github.io/doc-assets/images/skans/custom/";
const CDN_SKIN_SCHEME = "^https://cdn.deeeep.io/custom/skins/";
const CDN_SKIN_RULE_ID = 8;
const CDN_SKIN_RULE_PRIORITY = 1;


function setRedirectRules() {
    // Animations
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                id: ANIMATION_RULE_ID,
                priority: ANIMATION_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: ANIMATION_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: ANIMATION_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: CHAR_RULE_ID,
                priority: CHAR_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: CHAR_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: CHAR_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: SPRITESHEET_RULE_ID,
                priority: SPRITESHEET_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: SPRITESHEET_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: SPRITESHEET_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: MAP_SPRITESHEET_RULE_ID,
                priority: MAP_SPRITESHEET_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: MAP_SPRITESHEET_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: MAP_SPRITESHEET_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: IMG_RULE_ID,
                priority: IMG_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: IMG_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: IMG_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: PET_RULE_ID,
                priority: PET_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: PET_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: PET_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: SKIN_RULE_ID,
                priority: SKIN_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: SKIN_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: SKIN_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            },
            {
                id: CDN_SKIN_RULE_ID,
                priority: CDN_SKIN_RULE_PRIORITY,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: CDN_SKIN_REDIRECT_TEMPLATE
                    }
                },
                condition: {
                    regexFilter: CDN_SKIN_SCHEME,
                    resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
                }
            }
        ]
    });

    console.log("Redirect rules have been set.");
}

function clearRedirectRules() {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [
            ANIMATION_RULE_ID,
            CHAR_RULE_ID,
            SPRITESHEET_RULE_ID,
            MAP_SPRITESHEET_RULE_ID,
            IMG_RULE_ID,
            PET_RULE_ID,
            SKIN_RULE_ID,
            CDN_SKIN_RULE_ID
        ]
    });

    console.log("Redirect rules have been cleared.");
}