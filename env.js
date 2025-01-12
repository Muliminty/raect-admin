/**
 * @typedef {Object} EnvironmentConfig
 * @property {string} VITE_API_BASE_URL - API 基础 URL
 * @property {number} VITE_PORT - 应用端口
 * @property {string} OTHER_VARIABLE - 其他变量
 * @property {string} VITE_NAME - 环境名称
 * @property {string} VITE_APP_ENV - 应用环境标识
 * @property {Object} proxy - 代理配置
 */

/**
 * 应用环境配置
 * @type {{development: EnvironmentConfig, staging: EnvironmentConfig, production: EnvironmentConfig}}
 */

const env = {
    development: {
        VITE_API_BASE_URL: 'https://dev.api.yourservice.com',
        VITE_PORT: 4000,
        OTHER_VARIABLE: 'value_for_dev',
        VITE_NAME: 'dev环境',
        VITE_APP_ENV: 'dev',
        proxy: {
            '/api': {
                target: 'https://dev.api.yourservice.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
    staging: {
        VITE_API_BASE_URL: 'https://staging.api.yourservice.com',
        VITE_PORT: 3001,
        OTHER_VARIABLE: 'value_for_staging',
        VITE_NAME: 'staging环境',
        VITE_APP_ENV: 'staging',
        proxy: {
            '/api': {
                target: 'https://staging.api.yourservice.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
    production: {
        VITE_API_BASE_URL: 'https://api.yourservice.com',
        VITE_PORT: 3002,
        OTHER_VARIABLE: 'value_for_production',
        VITE_NAME: 'prod环境',
        VITE_APP_ENV: 'prod',
        proxy: {
            '/api': {
                target: 'https://api.yourservice.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },

    // Add more environments as needed
};

export default env;