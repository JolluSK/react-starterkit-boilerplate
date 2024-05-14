interface AppConfig {
    apiUrl: string;
    featureFlag: boolean;
    storagePrefix: string;
}

const config: AppConfig = {
    apiUrl: process.env.REACT_APP_API_URL as string,
    featureFlag: process.env.REACT_APP_FEATURE_FLAG === 'true',
    storagePrefix: process.env.STORAGE_PREFIX as string,
};

export default config;
