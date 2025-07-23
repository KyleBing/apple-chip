/**
 * Request Utility
 * Provides a centralized way to make HTTP requests with authentication and error handling
 */

// Mock authorization function - replace with your actual implementation
function getAuthorization() {
    // Get user data from localStorage using the correct key
    const userData = localStorage.getItem('Authorization');
    if (userData) {
        try {
            const parsedData = JSON.parse(userData);
            return {
                token: parsedData.token || '',
                uid: parsedData.uid || '',
                username: parsedData.nickname || parsedData.email || '',
                email: parsedData.email || ''
            };
        } catch (error) {
            console.error('Error parsing Authorization data:', error);
            return {
                token: '',
                uid: '',
                username: '',
                email: ''
            };
        }
    }
    
    // Return empty data if no Authorization found
    return {
        token: '',
        uid: '',
        username: '',
        email: ''
    };
}

// Response Entity class for consistent response handling
class ResponseEntity {
    constructor(success = false, data = null, message = '', code = 0) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.code = code;
    }

    static fromAxiosResponse(response) {
        return new ResponseEntity(
            response.data?.success || false,
            response.data?.data || response.data || null,
            response.data?.message || '',
            response.data?.code || response.status
        );
    }

    static fromError(error) {
        return new ResponseEntity(
            false,
            null,
            error.message || 'Request failed',
            error.response?.status || 0
        );
    }
}

/**
 * Centralized request function
 * @param {string} method - HTTP method ('post'|'get'|'patch'|'put'|'delete')
 * @param {Object|null} params - URL parameters
 * @param {Object|null} requestData - Request body data
 * @param {string} url - API endpoint URL
 * @param {number} timeout - Request timeout in milliseconds (default: 30000)
 * @returns {Promise<ResponseEntity>} Promise that resolves to ResponseEntity
 */
function request(method, params = null, requestData = null, url, timeout = 30000) {
    // Determine base URL based on environment
    const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://kylebing.cn/portal/' 
        : 'http://kylebing.cn/portal/';

    let headers = {
        'Content-Type': 'application/json'
    };

    // Add authorization headers for non-auth endpoints
    if (url !== 'user/login' && url !== 'user/register') {
        const auth = getAuthorization();
        if (auth.token) {
            Object.assign(headers, {
                'Diary-Token': auth.token,
                'Diary-Uid': auth.uid
            });
        }
    }

    return new Promise((resolve, reject) => {
        axios({
            url: BASE_URL + url,
            method,
            params,
            data: requestData,
            headers,
            timeout,
            withCredentials: true
        })
        .then(res => {
            if (res.status === 200) {
                if (res.data.success) {
                    resolve(ResponseEntity.fromAxiosResponse(res));
                } else {
                    console.log('Request error: ', res.data);
                    reject(ResponseEntity.fromAxiosResponse(res));
                }
            } else {
                const errorResponse = ResponseEntity.fromError({ 
                    message: res.data.message || 'Request failed',
                    response: { status: res.status }
                });
                reject(errorResponse);
                console.log('Request error: ', res.data.message);
            }
        })
        .catch(err => {
            const errorResponse = ResponseEntity.fromError(err);
            
            if (err.response) {
                console.log('Response error: ', err.response);
            } else if (err.request) {
                console.log('Request error: ', err.request);
            } else if (err.message) {
                console.log('Error message: ', err.message);
            }
            
            reject(errorResponse);
        });
    });
}

/**
 * Convenience methods for different HTTP methods
 */
const requestUtils = {
    get: (url, params = null, timeout = 30000) => request('get', params, null, url, timeout),
    post: (url, data = null, timeout = 30000) => request('post', null, data, url, timeout),
    put: (url, data = null, timeout = 30000) => request('put', null, data, url, timeout),
    patch: (url, data = null, timeout = 30000) => request('patch', null, data, url, timeout),
    delete: (url, params = null, timeout = 30000) => request('delete', params, null, url, timeout)
};

/**
 * Authentication helper functions
 */
const authUtils = {
    /**
     * Set authentication data
     * @param {Object} authData - Authentication data
     */
    setAuth: (authData) => {
        // Store the complete user data in the Authorization key
        localStorage.setItem('Authorization', JSON.stringify(authData));
    },

    /**
     * Clear authentication data
     */
    clearAuth: () => {
        localStorage.removeItem('Authorization');
    },

    /**
     * Check if user is authenticated
     * @returns {boolean}
     */
    isAuthenticated: () => {
        return !!getAuthorization().token;
    },

    /**
     * Get current user info
     * @returns {Object}
     */
    getCurrentUser: () => {
        const userData = localStorage.getItem('Authorization');
        if (userData) {
            try {
                return JSON.parse(userData);
            } catch (error) {
                console.error('Error parsing Authorization data:', error);
                return null;
            }
        }
        return null;
    }
};

/**
 * Example usage functions for the Apple Chip project
 */
const chipApi = {
    /**
     * Get chip data from server
     * @param {string} series - Chip series ('A', 'S', 'M')
     * @returns {Promise<ResponseEntity>}
     */
    getChipData: (series) => {
        const keyword = `apple-chip-${series.toLowerCase()}`;
        return requestUtils.get('diary/get-latest-public-diary-with-keyword', { keyword });
    },

    /**
     * Save chip data to server
     * @param {string} series - Chip series ('A', 'S', 'M')
     * @param {Array} chipData - Chip data array
     * @returns {Promise<ResponseEntity>}
     */
    saveChipData: (series, chipData) => {
        const keyword = `apple-chip-${series.toLowerCase()}`;
        return requestUtils.post('diary/save', { 
            keyword: keyword,
            content: JSON.stringify(chipData, null, 2),
            title: `Apple ${series} Series Chips Data`
        });
    },

    /**
     * Update a specific chip
     * @param {string} series - Chip series ('A', 'S', 'M')
     * @param {string} chipName - Name of the chip
     * @param {Object} chipData - Updated chip data
     * @returns {Promise<ResponseEntity>}
     */
    updateChip: (series, chipName, chipData) => {
        const keyword = `apple-chip-${series.toLowerCase()}`;
        return requestUtils.put('diary/update', { 
            keyword: keyword,
            chipName: chipName,
            chipData: chipData
        });
    },

    /**
     * Delete a chip
     * @param {string} series - Chip series ('A', 'S', 'M')
     * @param {string} chipName - Name of the chip
     * @returns {Promise<ResponseEntity>}
     */
    deleteChip: (series, chipName) => {
        const keyword = `apple-chip-${series.toLowerCase()}`;
        return requestUtils.delete('diary/delete-chip', { 
            keyword: keyword,
            chipName: chipName
        });
    },

    /**
     * User login
     * @param {string} username - Username
     * @param {string} password - Password
     * @returns {Promise<ResponseEntity>}
     */
    login: (username, password) => {
        return requestUtils.post('user/login', { username, password });
    },

    /**
     * User logout
     * @returns {Promise<ResponseEntity>}
     */
    logout: () => {
        return requestUtils.post('user/logout');
    },

    /**
     * Get latest diary with keyword
     * @param {string} keyword - Search keyword
     * @returns {Promise<ResponseEntity>}
     */
    getLatestDiary: (keyword) => {
        return requestUtils.get('diary/get-latest-public-diary-with-keyword', { keyword });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        request,
        requestUtils,
        authUtils,
        chipApi,
        ResponseEntity
    };
} else {
    // Browser environment
    window.request = request;
    window.requestUtils = requestUtils;
    window.authUtils = authUtils;
    window.chipApi = chipApi;
    window.ResponseEntity = ResponseEntity;
} 