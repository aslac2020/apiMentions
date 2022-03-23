const mongoose = require('mongoose')
const Mentions = mongoose.model('Mentions')

exports.listMentions = async () => {
    const res = await Mentions.find({}, 'friend mention ');// buscamos aqui os campos que queremos, tiramos um campo com -
    return res;
};

exports.createMention = async data => {
    const mention = new Mentions(data);
    await mention.save();
}

exports.updateMention = async (id, data) => {
    await Mentions.findByIdAndUpdate(id, {
        $set: data //diz ao banco o que deve ser atualizado
    });
}

exports.deleteMention = async id => {
    await Mentions.findByIdAndDelete(id);
}