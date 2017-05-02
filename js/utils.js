class H5_LS {
    isSupport() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            console.log('Your device is not supports lacalStorage.')
            return false;
        }
    }
    isExist(key) {
        if (this.isSupport()) {
            for (var i = 0; i < window.localStorage.length; i++)
                if (key === window.localStorage.key(i)) return true;
        }
        return false;
    }
    setLocalStorage(key, value) {
        if(!this.isSupport()) {
            return false;
        }
        else {
            try {
                window.localStorage.setItem(key, value);
            } 
            catch (e) {
                console.log("window.localStorage if full......");
                window.localStorage.clear();
                window.localStorage.setItem(key, value);
            }
            finally {
                return true;
            }
        }
    }
    getLocalStorage(key) {
        if(this.isExist(key)) {
            return JSON.stringify(window.localStorage.getItem(key));
        } 
        else {
            return null;
        }
    }
    removeLocalStorage(key) {
        if(this.isExist()) {
            window.localStorage.removeItem(key);
            return true;
        }
        else {
            return false;
        }
    }
}

// export { H5_LS }

// ES5 写法
/* 
var H5_LS = {
    isSupport: function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            console.log('Your device is not supports lacalStorage.')
            return false;
        }
    },
    isExist: function(key) {
        if (this.isSupport()) {
            for (var i = 0; i < window.localStorage.length; i++)
                if (key === window.localStorage.key(i)) return true;
        }
        return false;
    },
    setLocalStorage: function(key, value) {
        if(!this.isSupport()) {
            return false;
        }
        else {
            try {
                window.localStorage.setItem(key, value);
            } catch (e) {
                console.log("window.localStorage if full......");
                window.localStorage.clear();
                window.localStorage.setItem(key, value);
            }
        }
    },
    getLocalStorage: function(key) {
        if(this.isExist(key)) {
            return JSON.stringify(window.localStorage.getItem(key));
        } 
        else {
            return null;
        }
    },
    removeLocalStorage: function(key) {
        if(this.isExist()) {
            window.localStorage.removeItem(key);
            return true;
        }
        else {
            return false;
        }
    }
}
*/