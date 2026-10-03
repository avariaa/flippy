import { useState } from 'react'
import {
  Button, Card, CardContent, Container, Typography,
} from '@mui/material'
import { Link, useParams } from 'react-router'
import { getMaterial } from '../data/mockData'

export default function StudyPage() {
  const { id } = useParams()
  const material = getMaterial(id)
  const [cardIndex, setCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const card = material.cards[cardIndex]

  function nextCard() {
    setCardIndex(cardIndex + 1)
    setShowAnswer(false)
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 4 }}>
      <Button
        component={Link}
        to={`/documents/${material.id}`}
        sx={{ px: 0 }}
      >
        ← Назад
      </Button>

      <Typography variant="h4" sx={{ my: 3 }}>
        {material.title}
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Карточка {cardIndex + 1} из {material.cards.length}
      </Typography>

      <Card
        sx={{
          height: 280,
          mb: 2,
          display: 'grid',
          placeItems: 'center',
          transition: 'transform 0.5s',
          transform: showAnswer ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <CardContent
          sx={{
            transform: showAnswer ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <Typography variant="h5" align="center">
            {showAnswer ? card.answer : card.question}
          </Typography>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        onClick={() => setShowAnswer(!showAnswer)}
        sx={{ mr: 2 }}
      >
        Перевернуть
      </Button>

      <Button
        variant="outlined"
        onClick={nextCard}
        disabled={cardIndex === material.cards.length - 1}
      >
        Следующая
      </Button>
    </Container>
  )
}