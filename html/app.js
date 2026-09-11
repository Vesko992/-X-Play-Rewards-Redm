/* Author: Vesko-xdev */
const panel = document.getElementById('panel');
const claimButton = document.getElementById('claim');
const premiumSection = document.getElementById('premium-section');
const premiumButton = document.getElementById('claim-premium');
const buyPremiumButton = document.getElementById('buy-premium');
const availability = document.getElementById('availability');
const resource = typeof GetParentResourceName === 'function' ? GetParentResourceName() : 'playtime-rewards';
let translations = {};

function t(key, fallback) {
	return translations[key] || fallback || key;
}

function applyTranslations() {
	const labels = document.querySelectorAll('[data-translation]');
	labels.forEach(element => {
		const key = element.dataset.translation;
		if (translations[key]) element.textContent = translations[key];
	});
	claimButton.innerHTML = `${t('claim', 'CLAIM REWARD')} <span>◆</span>`;
	premiumButton.innerHTML = `${t('claimPremium', 'CLAIM PREMIUM REWARD')} <span>◆</span>`;
}

const post = name => fetch(`https://${resource}/${name}`, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: '{}',
});

function timeText(seconds) {
	seconds = Math.max(0, Math.floor(seconds || 0));
	return `${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor(seconds / 60) % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function renderMarkers(data) {
	const markers = document.getElementById('markers');
	markers.replaceChildren();
	const total = Math.max(data.completed + 1, data.claimed + 1, 1);

	for (let index = 1; index <= total; index += 1) {
		const marker = document.createElement('div');
		marker.className = `marker ${index <= data.completed ? 'reached' : ''} ${index <= data.claimed ? 'claimed' : ''}`;
		marker.innerHTML = `<div class="marker-dot">${index <= data.claimed ? '✓' : index}</div><span>${t('dailyReward', 'DAILY REWARD')} ${index}</span>`;
		markers.appendChild(marker);
	}
}

function renderRewards(data) {
	const rewards = document.getElementById('rewards');
	rewards.replaceChildren();
	(data.rewards || []).forEach((reward, index) => {
		const card = document.createElement('article');
		const status = reward.claimed ? t('claimed', 'CLAIMED') : reward.available ? t('available', 'READY') : t('locked', 'LOCKED');
		card.className = `reward-tile ${reward.claimed ? 'claimed' : ''} ${reward.available ? 'ready' : ''}`;
		card.innerHTML = `<div class="tile-top"><span>${reward.hours}H</span><b>${status}</b></div><div class="tile-image"><img src="https://cfx-nui-rsg-inventory/html/images/${reward.image}" alt=""></div><strong>${reward.label}</strong><small>${index + 1}. DNEVNA NAGRADA</small>`;
		rewards.appendChild(card);
	});
}

function update(data) {
	translations = data.translations || {};
	applyTranslations();
	const available = data.available > 0;
	document.getElementById('reward').textContent = data.rewardLabel;
	document.getElementById('playtime').textContent = timeText(data.seconds);
	document.getElementById('remaining').textContent = timeText(data.nextRewardIn);
	document.getElementById('percent').textContent = `${data.progress}%`;
	document.getElementById('claimed').textContent = data.claimed;
	document.getElementById('progress').style.width = `${data.progress}%`;
	document.getElementById('reward-image').src = `https://cfx-nui-rsg-inventory/html/images/${data.rewardImage}`;
	availability.textContent = available ? t('available', 'READY') : t('locked', 'LOCKED');
	availability.classList.toggle('ready', available);
	claimButton.classList.toggle('hidden', !available);
	renderRewards(data);
	const premiumActive = data.premiumActive === true;
	premiumSection.classList.toggle('locked', !premiumActive);
	document.getElementById('premium-status').textContent = premiumActive ? `${t('active', 'ACTIVE')} · ${data.premiumDaysLeft} DAYS` : t('premiumLocked', 'LOCKED');
	document.getElementById('premium-note').textContent = premiumActive ? t('premiumActiveNote', 'Premium level %s follows your regular level. %s days remaining.').replace('%s', data.premiumLevel).replace('%s', data.premiumDaysLeft) : t('premiumNote', 'Buy Premium for %s Dustland Coins to unlock rewards up to your regular level.').replace('%s', data.premiumCost);
	premiumButton.classList.toggle('hidden', !premiumActive || data.premiumAvailable < 1);
	buyPremiumButton.classList.toggle('hidden', premiumActive || data.premiumCanBuy === false);
	renderPremiumRewards(data);
	renderMarkers(data);
}

function renderPremiumRewards(data) {
	const rewards = document.getElementById('premium-rewards');
	rewards.replaceChildren();
	(data.premiumRewards || []).forEach((reward, index) => {
		const card = document.createElement('article');
		const status = reward.claimed ? t('claimed', 'CLAIMED') : reward.available ? t('available', 'READY') : t('locked', 'LOCKED');
		card.className = `reward-tile ${reward.claimed ? 'claimed' : ''} ${reward.available ? 'ready' : ''}`;
		card.innerHTML = `<div class="tile-top"><span>${reward.hours}H</span><b>${status}</b></div><div class="tile-image"><img src="https://cfx-nui-rsg-inventory/html/images/${reward.image}" alt=""></div><strong>${reward.label}</strong><small>${index + 1}. ${t('premiumReward', 'PREMIUM REWARD')}</small>`;
		rewards.appendChild(card);
	});
}

window.addEventListener('message', ({ data }) => {
	if (data.action === 'open') {
		panel.classList.remove('hidden');
		update(data.data);
	}
	if (data.action === 'update') update(data.data);
	if (data.action === 'close') panel.classList.add('hidden');
});

document.getElementById('close').onclick = () => post('close');
claimButton.onclick = () => post('claim');
premiumButton.onclick = () => post('claimPremium');
buyPremiumButton.onclick = () => post('buyPremium');
document.addEventListener('keydown', event => {
	if (event.key === 'Escape') post('close');
});
