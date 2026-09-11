fx_version 'cerulean'

games { 'gta5', 'rdr3' }

lua54 'yes'

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

author 'Vesko-xdev'
description 'Persistent gameplay time rewards with daily reset'
version '1.1.1'

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua'
}

client_scripts {
    'client.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/app.js',
    'html/images/**'
}

escrow_ignore {
    'config.lua',
    'config/**',
    'locales/**',
    'html/**',
    'README.md',
    'playtime_rewards.sql',
    '*.sql',
    'install/**'
}

dependencies {
    'ox_lib',
    'oxmysql'
}

dependency '/assetpacks'
dependency '/assetpacks-redm'