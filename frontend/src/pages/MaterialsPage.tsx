import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material'
import { Link } from 'react-router'
import { materials } from '../data/mockData'

export default function MaterialsPage() {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 5 }}>
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          color: 'white',
          borderRadius: 5,
          p: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          Превращай конспекты в карточки
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Загрузи PDF, чтобы создать вопросы и ответы для обучения.
        </Typography>

        <Button
          variant="contained"
          component="label"
          startIcon={<UploadFileRoundedIcon />}
        >
          Загрузить PDF
          <input hidden type="file" accept=".pdf" />
        </Button>
      </Box>

      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Мои материалы
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {materials.map((material) => (
          <Card
            key={material.id}
            sx={{ backgroundColor: material.color }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {material.title}
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 3 }}>
                {material.subtitle}
              </Typography>

              <Typography sx={{ mb: 2 }}>
                {material.cards.length} карточек
              </Typography>

              <Button
                component={Link}
                to={`/documents/${material.id}`}
                variant="contained"
              >
                Открыть
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
}