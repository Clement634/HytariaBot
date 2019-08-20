module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "!help --> Affiche l'aide !"
        }
    });
};
