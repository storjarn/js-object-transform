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
                transform.transforms.default(src, dest, config[key], key);
                break;
        }
    });

    return dest;
}

transform.transforms = {
    default: function(src, dest, srcKey, destKey) {
        dest[destKey] = getNamespacedProperty(src, srcKey);
    }
};

function getLastElement(arr) {
    if (!arr.length) return null;
    return arr[arr.length - 1];
}

function getNamespacedProperty(obj, path) {
    var retVal = obj;
    var paths = path.split('.');
    for (var i = 0; i < paths.length; ++i) {
        if (retVal && paths[i] in retVal) {
            retVal = retVal[paths[i]];
        } else {
            retVal = null;
            break;
        }
    }
    return retVal;
}

module.exports = transform;
