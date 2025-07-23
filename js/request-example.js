/**
 * Request Utility Usage Examples
 * Demonstrates how to use the request utility in the Apple Chip project
 */

// Example 1: Basic GET request
async function getChipDataExample() {
    try {
        const response = await requestUtils.get('chips/a');
        if (response.success) {
            console.log('A-series chips:', response.data);
        } else {
            console.error('Failed to get chip data:', response.message);
        }
    } catch (error) {
        console.error('Request failed:', error.message);
    }
}

// Example 2: POST request with data
async function saveChipDataExample() {
    const chipData = [
        {
            name: 'A18 Pro',
            model: 'APL1V07',
            tech: '3',
            release: '2024.09'
        }
    ];

    try {
        const response = await requestUtils.post('chips/a', { chips: chipData });
        if (response.success) {
            console.log('Chip data saved successfully');
        } else {
            console.error('Failed to save chip data:', response.message);
        }
    } catch (error) {
        console.error('Request failed:', error.message);
    }
}

// Example 3: Using the chipApi convenience methods
async function chipApiExample() {
    try {
        // Get A-series chips
        const aChips = await chipApi.getChipData('A');
        console.log('A-series chips:', aChips.data);

        // Update a specific chip
        const updatedChip = {
            name: 'A18 Pro',
            model: 'APL1V07',
            tech: '3',
            release: '2024.09',
            devices: ['iPhone 16 Pro', 'iPhone 16 Pro Max']
        };
        
        const updateResponse = await chipApi.updateChip('A', 'A18 Pro', updatedChip);
        if (updateResponse.success) {
            console.log('Chip updated successfully');
        }

        // Delete a chip
        const deleteResponse = await chipApi.deleteChip('A', 'A18 Pro (Copy)');
        if (deleteResponse.success) {
            console.log('Chip deleted successfully');
        }

    } catch (error) {
        console.error('API request failed:', error.message);
    }
}

// Example 4: Authentication flow
async function authenticationExample() {
    try {
        // Login
        const loginResponse = await chipApi.login('admin', 'password');
        if (loginResponse.success) {
            // Store authentication data
            authUtils.setAuth(loginResponse.data);
            console.log('Login successful');
            
            // Now you can make authenticated requests
            const chipData = await chipApi.getChipData('A');
            console.log('Authenticated request successful:', chipData.data);
            
            // Logout
            const logoutResponse = await chipApi.logout();
            if (logoutResponse.success) {
                authUtils.clearAuth();
                console.log('Logout successful');
            }
        } else {
            console.error('Login failed:', loginResponse.message);
        }
    } catch (error) {
        console.error('Authentication failed:', error.message);
    }
}

// Example 5: Error handling with ResponseEntity
async function errorHandlingExample() {
    try {
        const response = await requestUtils.get('nonexistent/endpoint');
        // This will be caught by the catch block
    } catch (error) {
        if (error instanceof ResponseEntity) {
            console.log('Response error:', {
                success: error.success,
                message: error.message,
                code: error.code,
                data: error.data
            });
        } else {
            console.log('Network error:', error.message);
        }
    }
}

// Example 6: Custom timeout
async function timeoutExample() {
    try {
        // Request with 5 second timeout
        const response = await requestUtils.get('chips/a', null, 5000);
        console.log('Request completed within timeout');
    } catch (error) {
        if (error.message.includes('timeout')) {
            console.log('Request timed out');
        } else {
            console.log('Other error:', error.message);
        }
    }
}

// Example 7: Using the main request function directly
async function directRequestExample() {
    try {
        const response = await request(
            'post',
            { page: 1, limit: 10 },
            { chips: [] },
            'chips/batch',
            15000
        );
        
        if (response.success) {
            console.log('Batch operation successful:', response.data);
        }
    } catch (error) {
        console.error('Batch operation failed:', error.message);
    }
}

// Export examples for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getChipDataExample,
        saveChipDataExample,
        chipApiExample,
        authenticationExample,
        errorHandlingExample,
        timeoutExample,
        directRequestExample
    };
} else {
    // Browser environment - make examples available globally
    window.requestExamples = {
        getChipDataExample,
        saveChipDataExample,
        chipApiExample,
        authenticationExample,
        errorHandlingExample,
        timeoutExample,
        directRequestExample
    };
} 