const path = require('path');
function publicRoute(source) {
  const normalized = source.replace(/\\/g, '/').replace(/\.md$/, '');
  if (normalized.startsWith('pages/')) return '/pages/' + path.posix.basename(normalized);
  return '/' + normalized.replace(/(^|\/)index$/, '').replace(/\/$/, '');
}
const topics = ['Software', 'Guides', 'Commands', 'Spells', 'Skills', 'Equipment', 'Mobiles', 'Locations', 'Races', 'Classes', 'Lore', 'Reference'];
function topicFor(tags) {
  const matches = [
    t => ['Software', 'Clients'].includes(t),
    t => ['Guides', 'Newbie Help', 'Cheat Sheet', 'FAQS'].includes(t),
    t => t === 'Commands', t => /(^| )spells$/i.test(t), t => /(^| )skills$/i.test(t),
    t => /equipment|weapons|items/i.test(t) || ['Belts', 'Boats', 'Cloaks', 'Consumables', 'Containers', 'Keys', 'Rings', 'Shields'].includes(t),
    t => /Mobiles|Guildmasters|Shopkeepers|Ents/.test(t),
    t => ['Locations', 'Places', 'Cities', 'Shops', 'Inns', 'Legend homes', 'Legend_homes', 'Plants'].includes(t),
    t => ['Playable races', 'Races'].includes(t), t => t === 'Classes', t => ['Lore', 'History'].includes(t)
  ];
  const index = matches.findIndex(match => tags.some(match));
  return topics[index < 0 ? 11 : index];
}
function topicRoute(topic) {
  return ['Guides', 'Equipment', 'Races', 'Classes', 'Lore'].includes(topic) ? '/' + topic.toLowerCase() : '/topics/' + topic.toLowerCase();
}
module.exports = { publicRoute, topicFor, topicRoute, topics };
