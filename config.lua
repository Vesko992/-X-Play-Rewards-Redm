-- Author: Vesko-xdev
Config = {}

Config.Framework = 'auto' -- 'auto', 'rsg' or 'vorp'
Config.Locale = 'en' -- 'sr' or 'en'
Config.VorpPremiumCurrency = { type = 'item', name = 'coin_dustland' }
Config.Translations = {
    sr = {
        nextReward = 'SLEDECA NAGRADA', available = 'SPREMNO', locked = 'ZAKLJUCANO', claimed = 'PREUZETO',
        dailyReward = 'DNEVNA NAGRADA', premiumReward = 'PREMIUM NAGRADA', active = 'AKTIVNO',
        premiumLocked = 'ZAKLJUCANO', premiumNote = 'Kupi Premium za %s Dustland Coins da otkljucas nagrade do svog obicnog nivoa.',
        premiumActiveNote = 'Premium nivo %s prati obican nivo. Vazi jos %s dana.',
        dayProgress = 'NAPREDAK DANA', playtime = 'VREME IGRE', nextIn = 'SLEDECA NAGRADA ZA', claimedToday = 'PREUZETO DANAS',
        dailyReset = 'DNEVNI RESET: PONOC', claim = 'PREUZMI NAGRADU', claimPremium = 'PREUZMI PREMIUM NAGRADU', buyPremium = 'KUPI PREMIUM',
        rewardReceived = 'Primili ste %s.', readyOne = 'Nagrada je spremna za preuzimanje.', readyMany = 'Imate %s nagrada spremnih za preuzimanje.',
        notEnoughCoins = 'Nemate dovoljno Dustland Coins.', premiumActivated = 'Premium nagrade su otkljucane na %s dana.', frameworkUnavailable = 'Framework ili inventory nije pronadjen.',
    },
    en = {
        nextReward = 'NEXT REWARD', available = 'READY', locked = 'LOCKED', claimed = 'CLAIMED',
        dailyReward = 'DAILY REWARD', premiumReward = 'PREMIUM REWARD', active = 'ACTIVE',
        premiumLocked = 'LOCKED', premiumNote = 'Buy Premium for %s Dustland Coins to unlock rewards up to your regular level.',
        premiumActiveNote = 'Premium level %s follows your regular level. %s days remaining.',
        dayProgress = 'DAILY PROGRESS', playtime = 'PLAY TIME', nextIn = 'NEXT REWARD IN', claimedToday = 'CLAIMED TODAY',
        dailyReset = 'DAILY RESET: MIDNIGHT', claim = 'CLAIM REWARD', claimPremium = 'CLAIM PREMIUM REWARD', buyPremium = 'BUY PREMIUM',
        rewardReceived = 'You received %s.', readyOne = 'A reward is ready to claim.', readyMany = 'You have %s rewards ready to claim.',
        notEnoughCoins = 'You do not have enough Dustland Coins.', premiumActivated = 'Premium rewards are unlocked for %s days.', frameworkUnavailable = 'No supported framework or inventory was found.',
    },
}

Config.Command = 'gameplay'
Config.FirstRewardSeconds = 3 * 60 * 60
Config.RequiredSeconds = 3 * 60 * 60
Config.TrackingIntervalSeconds = 60
Config.SaveIntervalSeconds = 60
Config.PremiumDays = 30
Config.PremiumCost = 30

Config.Rewards = {
    { type = 'money', account = 'cash', amount = 350, label = 'DOLLARS x350', image = 'dollar.png' },
    { type = 'money', account = 'coin_dustland', amount = 2, label = 'DUSTLAND COINS x2', image = 'coin_dustland.png' },
    { type = 'money', account = 'cash', amount = 500, label = 'DOLLARS x500', image = 'dollar.png' },
}

Config.PremiumRewards = {
    { type = 'money', account = 'cash', amount = 1000, label = 'PREMIUM DOLLARS x1000', image = 'dollar.png' },
    { type = 'money', account = 'coin_dustland', amount = 5, label = 'PREMIUM COINS x5', image = 'coin_dustland.png' },
    { type = 'money', account = 'cash', amount = 1500, label = 'PREMIUM DOLLARS x1500', image = 'dollar.png' },
}
