(function() {
    pc.Asset.prototype.getFileUrl = function () {
        const file = this.file;

        if (!file || !file.url)
            return null;

        let url = file.url;

        if (this.registry && this.registry.prefix && !pc.ABSOLUTE_URL.test(url))
            url = this.registry.prefix + url;

        // add file hash to avoid hard-caching problems
        if (file.hash) {
            const separator = url.indexOf('?') !== -1 ? '&' : '?';
            url += separator + 't=' + file.hash;
        }

        return url;
    };

    // Fix for zero size canvas caused by how Discord settings hides the game via `display: none`
    pc.ScreenComponent.prototype._updateScale = function() {
	    const scale = this._calcScale(this._resolution, this.referenceResolution);

        // BAD THINGS happen if this is ever 0 - just ignore and hope we get resized to something cromulent
        if(scale > 0) {
            this.scale = scale;
        }
    };
})();