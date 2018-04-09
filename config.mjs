import config from './config.global.mjs';

/**
 * CONFIGURATION
 */
config.exportPath = 'export/data/';
config.ignoreFolders = ['img'];
config.port = 8000;
config.getIPFS = 'http://39010.s.time4vps.cloud/api/v0/';
config.getIPFSFolder = config.getIPFS + 'ls?headers=false&resolve-type=true&arg=';
config.getIPFSFile = config.getIPFS + 'cat?arg=';

export default config;
