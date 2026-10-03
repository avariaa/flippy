import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import { Link, useParams } from 'react-router'
import { getMaterial } from '../data/mockData'

export default function DocumentPage() {
  const { id } = useParams()
  const material = getMaterial(id)

  return (
    <Container component="main" maxWidth="md" sx={{ py: 4 }}>
      <Button component={Link} to="/" sx={{ mb: 3 }}>
        ← Все материалы
      </Button>

      <Card sx={{ backgroundColor: material.color, mb: 4 }}>
        <CardContent>
          <Typography variant="h3" component="h1">
            {material.title}
          </Typography>

          <Typography sx={{ mb: 3 }}>
            {material.subtitle} · {material.cards.length} карточек
          </Typography>

          <Button
            component={Link}
            to={`/documents/${material.id}/study`}
            variant="contained"
          >
            Начать обучение
          </Button>
        </CardContent>
      </Card>

      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Карточки
      </Typography>

      <Stack spacing={2}>
        {material.cards.map((card) => (
          <Card key={card.id}>
            <CardContent>
              <Typography sx = {{ fontWeight: 700}}>Вопрос</Typography>
              <Typography sx={{ mb: 2 }}>
                {card.question}
              </Typography>

              <Typography sx = {{ fontWeight: 700}}>Ответ</Typography>
              <Typography color="text.secondary">
                {card.answer}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  )
}