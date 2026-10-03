export type Flashcard = {
  id: number
  question: string
  answer: string
}

export type StudyMaterial = {
  id: string
  title: string
  subtitle: string
  color: string
  cards: Flashcard[]
}

export const materials: StudyMaterial[] = [
  {
    id: 'biology',
    title: 'Биология',
    subtitle: 'Клетка и органоиды',
    color: '#B9F67A',
    cards: [
      {
        id: 1,
        question: 'Что такое митохондрия?',
        answer: 'Органоид, который производит энергию для клетки.',
      },
      {
        id: 2,
        question: 'Какую функцию выполняет ядро клетки?',
        answer: 'Хранит наследственную информацию и управляет клеткой.',
      },
      {
        id: 3,
        question: 'Что такое фотосинтез?',
        answer: 'Процесс преобразования световой энергии в химическую.',
      },
    ],
  },
  {
    id: 'informatics',
    title: 'Информатика',
    subtitle: 'Алгоритмы',
    color: '#82C7FF',
    cards: [
      {
        id: 1,
        question: 'Что такое алгоритм?',
        answer: 'Последовательность действий для решения задачи.',
      },
      {
        id: 2,
        question: 'Что такое переменная?',
        answer: 'Именованная область памяти для хранения значения.',
      },
    ],
  },
  {
    id: 'english',
    title: 'Английский язык',
    subtitle: 'Vocabulary',
    color: '#FF91C8',
    cards: [
      {
        id: 1,
        question: 'Как переводится knowledge?',
        answer: 'Знание.',
      },
      {
        id: 2,
        question: 'Как переводится learning?',
        answer: 'Обучение.',
      },
    ],
  },
]

export function getMaterial(id: string | undefined) {
  return materials.find((material) => material.id === id) ?? materials[0]
}