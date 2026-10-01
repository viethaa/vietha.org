export type ProjectStatus = 'in-progress' | 'finished' | 'archived'

export interface Project {
  name: string
  description: string
  url: string
  year: string
  status: ProjectStatus
}

export const projects: Project[] = [
  {
    name: 'vietha.org',
    description: "The entire life's work of Viet (Bob) Ha — this website.",
    url: 'https://github.com/viethaa/vietha.org',
    year: '2026',
    status: 'in-progress',
  },
  {
    name: 'ar-school-tour',
    description: 'An augmented reality tour of the Concordia Hanoi campus, built for the Meta Quest 3.',
    url: 'https://github.com/viethaa/ar-school-tour',
    year: '2026',
    status: 'in-progress',
  },
  {
    name: 'co27-countdown',
    description: "A countdown for Concordia Hanoi's class of 2027 to graduation day. One photo per school day.",
    url: 'https://github.com/viethaa/co27-countdown',
    year: '2026',
    status: 'finished',
  },
  {
    name: 'hearts2hands',
    description: 'Heart2Hands is a student-led organization for youth equality in Vietnam, aiming to empower young children.',
    url: 'https://github.com/viethaa/hearts2hands',
    year: '2024',
    status: 'finished',
  },
  {
    name: 'pages-of-possibility',
    description: 'Pages of Possibility is a student-led service project dedicated to providing books, and hosting writing competitions for children.',
    url: 'https://github.com/viethaa/pages-of-possibility',
    year: '2026',
    status: 'finished',
  },
  {
    name: 'hanoi-air-guardian',
    description: 'Real-time Hanoi air quality tracker covering 12 districts, with PM2.5 data, forecasts, trends, and personalized exposure risks.',
    url: 'https://github.com/viethaa/hanoi-air-guardian',
    year: '2026',
    status: 'finished',
  },
  {
    name: 'AttriMIL',
    description: 'AttriMIL baseline implementation evaluated on MVP-CRC dataset.',
    url: 'https://github.com/viethaa/AttriMIL',
    year: '2026',
    status: 'finished',
  },
  {
    name: 'intro-to-python',
    description: 'A beginner-friendly repository to learn the fundamentals of Python. Self-written. Open source.',
    url: 'https://github.com/viethaa/intro-to-python',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'terminal-wordle',
    description: 'A Wordle clone game built with Python, fully runnable in your terminal.',
    url: 'https://github.com/viethaa/terminal-wordle',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'skills-assesment-radar',
    description: 'A skill assessment radar chart to show proficiency in different skill areas.',
    url: 'https://github.com/viethaa/skills-assesment-radar',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'pokemon-periodic-table',
    description: 'A custom periodic table that maps each chemical element to a thematically matched Pokémon.',
    url: 'https://github.com/viethaa/pokemon-periodic-table',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'typing-speed-test',
    description: 'Typing speed test measuring WPM and accuracy with feedback.',
    url: 'https://github.com/viethaa/typing-speed-test',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'html-tetris',
    description: 'A modern HTML5 Canvas implementation of the classic Tetris game.',
    url: 'https://github.com/viethaa/html-tetris',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'ip-logger',
    description: "Simple IP logger that captures a user's IP address and sends it to a specified Discord webhook.",
    url: 'https://github.com/viethaa/ip-logger',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'weather-forecast-app',
    description: 'A weather forecast app that lets you search for cities worldwide to check real-time weather conditions.',
    url: 'https://github.com/viethaa/weather-forecast-app',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'bmi-calculator',
    description: 'A simple BMI calculator to check your weight category instantly.',
    url: 'https://github.com/viethaa/bmi-calculator',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'valentines',
    description: 'A cute website to ask out your loved ones! Made during Valentines 2025.',
    url: 'https://github.com/viethaa/valentines',
    year: '2025',
    status: 'finished',
  },
  {
    name: 'joma-order-chatbot',
    description: 'AI order assistant for Joma CIS Cafe. Automatically places your pickup order on the live iPos system. [Discontinued]',
    url: 'https://github.com/viethaa/joma-order-chatbot',
    year: '2026',
    status: 'archived',
  },
]
