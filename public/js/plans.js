window.Seed = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }

    const exercises = [
        {
            id: 1,
            geraetenummer: '8',
            titel: 'Schulterziehen',
            hersteller: 'Panatto',
            saetze: '1+3',
            gewicht: '15',
            muskelgruppe: 'Schulter',
            image: 'images/avatars/daniel.jpg',
        },
    ];

    return {exercises: exercises};
}());
