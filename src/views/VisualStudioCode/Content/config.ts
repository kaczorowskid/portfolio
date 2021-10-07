import portfolio from '../../../assets/img/portfolio.jpg'
import gigachad from '../../../assets/img/gigachad.jpg';

export const skills = {
    frontend: [
        'Javascript', 
        'Typescript', 
        'React', 
        'Redux',
        'HTML', 
        'CSS', 
        'material-ui', 
        'styled-components'
    ],
    backend: [
        'node.js', 
        'express.js', 
        'REST', 
        'ORM (Sequelize)', 
        'NoSQL (Mongo)', 
        'Bash scripts'
    ],
    other: [
        'Windows', 
        'Graphic design tools (Figma, Illustrator)', 
        'GIT', 
        'JetBrains IDE', 
        'Visual Studio Code IDE'
    ]
}

export const contact = {
    github: 'https://github.com/sijab',
    linkedin: 'https://linkedin.com/sijab',
    email: 'https://gmail.com/sijab'
}

export const projects = {
    Portfolio: {
        image: portfolio,
        description: 'My personal portfolio',
        githubLink: 'https://github.com/sijab/portfolio',
        liveLink: 'https://google.com'
    },
    TestProject: {
        image: gigachad,
        description: 'Test project',
        githubLink: 'https://github.com/sijab',
        liveLink: 'https://google.com'
    }
}