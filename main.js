const morning = [
    "Wake up early and enjoy a hearty breakfast.",
    "Hit the snooze button a few times before rolling out of bed.",
    "Start the day with a quick workout to get energized."
]

const afternoon = [
    "Head to work or school and tackle your daily tasks.",
    "Take a leisurely walk in the park to enjoy some fresh air.",
    "Meet up with a friend for lunch at your favorite cafe."
]

const evening = [
    "Cook a delicious dinner and relax with a good book.",
    "Attend a yoga class to unwind and de-stress.",
    "Watch a new episode of your favorite TV show."
]


const randomStoryGenerator = () => {
    const morningPart = morning[Math.floor(Math.random() * 3)];
    const afternoonPart = afternoon[Math.floor(Math.random() * 3)];
    const eveningPart = evening[Math.floor(Math.random() * 3)];

    console.log('Here is what your day will look like:');
    console.log(morningPart);
    console.log(afternoonPart);
    console.log(eveningPart);
}

randomStoryGenerator();