/**
 * Chip Data Loader
 * Loads chip data from server API for better organization and real-time updates
 */

class ChipDataLoader {
    constructor() {
        this.chipsData = {
            A: [],
            S: [],
            M: []
        };
        this.serverResponses = {
            A: null,
            S: null,
            M: null
        };
        this.latestOS = '最新';
        this.dateLastEdit = '2024.11.09';
        this.serverUrl = 'http://kylebing.cn/portal/diary/get-latest-public-diary-with-keyword';
    }

    /**
     * Load all chip data from server API
     * @returns {Promise<Object>} Promise that resolves to the loaded chip data
     */
    async loadAllChipData() {
        try {
            console.log('🔄 Loading chip data from server...');
            
            const [chipsA, chipsS, chipsM] = await Promise.all([
                this.loadChipDataFromServer('apple-chip-a'),
                this.loadChipDataFromServer('apple-chip-s'),
                this.loadChipDataFromServer('apple-chip-m')
            ]);

            this.chipsData = {
                A: chipsA,
                S: chipsS,
                M: chipsM
            };

            console.log('✅ Chip data loaded from server:', {
                A: chipsA.length,
                S: chipsS.length,
                M: chipsM.length,
                total: chipsA.length + chipsS.length + chipsM.length
            });

            return this.chipsData;
        } catch (error) {
            console.error('❌ Error loading chip data from server:', error);
            console.log('🔄 Falling back to local JSON files...');
            // Fallback to local JSON files if server fails
            return this.loadFromLocalFiles();
        }
    }

    /**
     * Load chip data from server API
     * @param {string} keyword - The keyword to search for (apple-chip-a, apple-chip-s, apple-chip-m)
     * @returns {Promise<Array>} Promise that resolves to the chip data array
     */
    async loadChipDataFromServer(keyword) {
        try {
            const response = await axios.get(this.serverUrl, {
                params: { keyword: keyword },
                timeout: 10000
            });

            if (response.status === 200 && response.data && response.data.success) {
                // Store the complete server response data
                const series = keyword.replace('apple-chip-', '').toUpperCase();
                this.serverResponses[series] = response.data.data;
                
                // The chip data is in response.data.data.content as a JSON string
                const diaryData = response.data.data;
                const contentString = diaryData.content;
                let chipData = [];
                
                try {
                    // Parse the content string as JSON
                    if (typeof contentString === 'string') {
                        chipData = JSON.parse(contentString);
                    } else if (Array.isArray(contentString)) {
                        chipData = contentString;
                    } else {
                        console.warn(`Invalid content format for ${keyword}:`, contentString);
                        chipData = [];
                    }
                } catch (parseError) {
                    console.warn(`Failed to parse ${keyword} content as JSON:`, parseError);
                    console.warn('Raw content:', contentString);
                    chipData = [];
                }

                // Process the data to add any missing fields or transformations
                const processedData = this.processChipData(chipData, series);
                
                console.log(`✅ Loaded ${processedData.length} chips for ${keyword} from server`);
                return processedData;
            } else {
                throw new Error(`Server returned unsuccessful response: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error loading ${keyword} from server:`, error);
            return [];
        }
    }

    /**
     * Fallback method to load from local JSON files
     * @returns {Promise<Object>} Promise that resolves to the loaded chip data
     */
    async loadFromLocalFiles() {
        console.log('🔄 Falling back to local JSON files...');
        try {
            const [chipsA, chipsS, chipsM] = await Promise.all([
                this.loadChipData('A'),
                this.loadChipData('S'),
                this.loadChipData('M')
            ]);

            this.chipsData = {
                A: chipsA,
                S: chipsS,
                M: chipsM
            };

            return this.chipsData;
        } catch (error) {
            console.error('Error loading from local files:', error);
            throw error;
        }
    }

    /**
     * Load chip data for a specific series from local JSON file (fallback)
     * @param {string} series - The chip series ('A', 'S', or 'M')
     * @returns {Promise<Array>} Promise that resolves to the chip data array
     */
    async loadChipData(series) {
        try {
            const response = await fetch(`./data/chips-${series.toLowerCase()}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${series} series data: ${response.status}`);
            }
            const data = await response.json();
            
            // Process the data to add any missing fields or transformations
            return this.processChipData(data, series);
        } catch (error) {
            console.error(`Error loading ${series} series data:`, error);
            return [];
        }
    }

    /**
     * Process and validate chip data
     * @param {Array} data - Raw chip data
     * @param {string} series - Chip series
     * @returns {Array} Processed chip data
     */
    processChipData(data, series) {
        if (!Array.isArray(data)) {
            console.warn(`Invalid data format for ${series} series:`, data);
            return [];
        }

        return data.map(chip => {
            // Ensure all required fields exist
            const processedChip = {
                name: chip.name || '',
                model: chip.model || '',
                tech: chip.tech || '',
                techCompany: chip.techCompany || '',
                dieSize: chip.dieSize || '',
                isa: chip.isa || '',
                cpu: chip.cpu || [],
                gpu: chip.gpu || [],
                ai: chip.ai || { core: '', rate: '' },
                release: chip.release || '',
                devices: chip.devices || [],
                os: chip.os || { init: '', latest: this.latestOS },
                transistorCount: chip.transistorCount || ''
            };

            // Add series-specific processing if needed
            if (series === 'A' && !processedChip.os.latest) {
                processedChip.os.latest = this.latestOS;
            }

            return processedChip;
        });
    }

    /**
     * Get chip data for a specific series
     * @param {string} series - The chip series ('A', 'S', or 'M')
     * @returns {Array} Chip data array
     */
    getChipData(series) {
        return this.chipsData[series] || [];
    }

    /**
     * Get all chip data
     * @returns {Object} All chip data organized by series
     */
    getAllChipData() {
        return this.chipsData;
    }

    /**
     * Add a new chip to the data
     * @param {string} series - The chip series ('A', 'S', or 'M')
     * @param {Object} chipData - The new chip data
     */
    addChip(series, chipData) {
        if (!this.chipsData[series]) {
            this.chipsData[series] = [];
        }
        this.chipsData[series].push(chipData);
    }

    /**
     * Update an existing chip
     * @param {string} series - The chip series ('A', 'S', or 'M')
     * @param {string} chipName - The name of the chip to update
     * @param {Object} updatedData - The updated chip data
     */
    updateChip(series, chipName, updatedData) {
        const chips = this.chipsData[series];
        if (chips) {
            const index = chips.findIndex(chip => chip.name === chipName);
            if (index !== -1) {
                this.chipsData[series][index] = { ...chips[index], ...updatedData };
            }
        }
    }

    /**
     * Remove a chip from the data
     * @param {string} series - The chip series ('A', 'S', or 'M')
     * @param {string} chipName - The name of the chip to remove
     */
    removeChip(series, chipName) {
        const chips = this.chipsData[series];
        if (chips) {
            this.chipsData[series] = chips.filter(chip => chip.name !== chipName);
        }
    }

    /**
     * Export chip data to JSON format
     * @param {string} series - The chip series to export
     * @returns {string} JSON string of the chip data
     */
    exportToJSON(series) {
        return JSON.stringify(this.chipsData[series] || [], null, 2);
    }

    /**
     * Get the latest OS version
     * @returns {string} Latest OS version
     */
    getLatestOS() {
        return this.latestOS;
    }

    /**
     * Get the last edit date
     * @returns {string} Last edit date
     */
    getLastEditDate() {
        return this.dateLastEdit;
    }

    /**
     * Save all chip data back to JSON files
     * This method is used for reordering and other bulk operations
     * @returns {Promise<boolean>} Promise that resolves to true if successful
     */
    async saveAllChipData() {
        try {
            // Create downloadable JSON files for each series
            const promises = ['A', 'S', 'M'].map(series => {
                const data = this.chipsData[series];
                const jsonContent = JSON.stringify(data, null, 2);
                
                // Create a blob and download link
                const blob = new Blob([jsonContent], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                // Create download link
                const a = document.createElement('a');
                a.href = url;
                a.download = `chips-${series.toLowerCase()}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                // Clean up
                URL.revokeObjectURL(url);
                
                return true;
            });
            
            await Promise.all(promises);
            console.log('✅ All chip data saved successfully');
            return true;
        } catch (error) {
            console.error('❌ Error saving chip data:', error);
            return false;
        }
    }

    /**
     * Refresh data from server
     * @returns {Promise<Object>} Promise that resolves to the refreshed chip data
     */
    async refreshFromServer() {
        console.log('🔄 Refreshing chip data from server...');
        return this.loadAllChipData();
    }

    /**
     * Get the stored server response data for a specific series
     * @param {string} series - The chip series ('A', 'S', or 'M')
     * @returns {Object|null} The stored server response data or null if not available
     */
    getServerResponse(series) {
        return this.serverResponses[series] || null;
    }

    /**
     * Get all stored server responses
     * @returns {Object} All stored server responses
     */
    getAllServerResponses() {
        return this.serverResponses;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChipDataLoader;
} else {
    // Browser environment
    window.ChipDataLoader = ChipDataLoader;
} 