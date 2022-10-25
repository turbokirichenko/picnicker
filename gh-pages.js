publish(
'dist', // path to public directory
{
    branch: 'gh-pages',
    repo: 'https://github.com/hcard-club/hcard-club.github.io', // Update to point to your repository
    user: {
    name: 'hcard-club', // update to use your name
    email: 'hcard.club@outlook.com' // Update to use your email
    },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);