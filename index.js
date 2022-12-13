const client = require('discord-rich-presence')('1052000878577594480');
const si = require('systeminformation');
const nou = require("node-os-utils")
const noucpu = nou.cpu
let returnedCpu = {}
let returnedTemps = {}
let cpuPercent;
const LOW = 30
const HIGH = 66
const SLOW = 20
const FAST = 70

async function retrieveCpuInfo() {
    processor = await si.cpu()
    usage = await noucpu.usage()

    if (processor.manufacturer.startsWith("AMD")) {
        cpuBrandName = "AMD"
    } else if (processor.manufacturer.startsWith("Intel")) {
        cpuBrandName = "Intel"
    } else {
        cpuBrandName = "unknown"
    }
    cpuKeyName = cpuBrandName.toLowerCase()
    
    if (usage > FAST) {
        speedKeyName = "fast"              
    } else if (usage < SLOW) {
        speedKeyName = "slow"
    } else {
        speedKeyName = "medium"
    }

    return {
        "brand": cpuBrandName,
        "brandKey": cpuKeyName,
        "type": processor.brand,
        "speedKey": speedKeyName,
        "usage": usage,
        "cores": processor.physicalCores * processor.processors
    }
}

function doUpdate() {
    retrieveCpuInfo().then(info => {
        client.updatePresence({
            state: `${info.brand} ${info.type}`,
            details: `${info.usage.toFixed(2)}% usage`,
            largeImageKey: info.brandKey,
            smallImageKey: info.speedKey,
            largeImageText: `${info.cores} cores`
        })
    })
}

doUpdate()

setInterval(doUpdate, 15000)