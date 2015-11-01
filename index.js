function transform(src, dest, config) {
    switch (arguments.length) {
        case 1:
            return {};
        case 2:
            config = dest;
            dest = {};
            break;
        default:
            break;
    }

    dest = dest || {};
    config = config || {};

    if (typeof src === 'string') {
        try {
            src = JSON.parse(src);
        } catch (ex) {
            return null;
        }
    }

    Object.keys(config).forEach(function(key) {
        switch (typeof config[key]) {
            case 'function':
                dest[key] = config[key](src, dest, key);
                break;
            case 'string':
                transform.transforms.default(src, dest, key, config[key]);
                break;
        }
    });

    return dest;
}

transform.transforms = {
    default: function(src, dest, srcKey, destKey) {
        if (srcKey in src) {
            dest[destKey] = src[srcKey];
        }
    }
};

module.exports = transform;
