var questions = {
    0: {
        title: 'Welcome to usinvestorsnotallowed! Thank you for being here and supporting us to help democratize fund management! 🙏 \n' +
        'First, let us ask you a couple of questions to verify that you aren’t a bot.\n' +
        'What’s the name of our company? 🤔',
        buttons: [
            [{text: 'Usinvestorsnotallowed', callback_data: '0_1'}],
            [{text: 'Bitcoin', callback_data: '0_2'}],
            [{text: 'Ethereum', callback_data: '0_3'}],
        ],
        right_answer: 1
    },
    1: {
        title: 'Nice job!🔥 Let’s start with an easy one. Join our telegram chat group!',
        buttons: [
            [{text: 'Joining the Chat Group', url: "https://t.me/joinchat/E3QlBQ83p2rMCu3qxQEwzw"}],
            [{text: 'Tap here after joining us!', callback_data: '1_2'}],
        ],
        right_answer: 2
    },
    3: {
        title: 'Now, please follow us on Twitter.',
        buttons: [
            [{text: 'Follow us on Twitter', url: "https://twitter.com/tokenttt"}],
            [{text: 'Tap here after following us!', callback_data: '3_2'}],
        ],
        right_answer: 2
    }
};

module.exports.questions = questions;