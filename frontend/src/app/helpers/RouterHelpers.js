
export function getCurrentUrl(location) {
    return location.pathname.split(/[?#]/)[0];
}

export function checkIsActive(location, url) {
    const current = getCurrentUrl(location);
    return current && url && current === url && current.indexOf(url) > -1;
}
