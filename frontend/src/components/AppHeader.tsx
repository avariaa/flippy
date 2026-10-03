import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import { Avatar, Box, Container, Typography } from '@mui/material'

export default function AppHeader() {
  return (
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'rgba(17, 19, 24, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: { xs: 72, md: 84 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '14px',
                backgroundColor: '#FFD84D',
                transform: 'rotate(-6deg)',
              }}
            >
              <AutoAwesomeRoundedIcon
                sx={{ color: 'text.primary', fontSize: 24 }}
              />
            </Box>

            <Typography
              component="span"
              variant="h5"
              sx={{ fontWeight: 900, letterSpacing: '-0.04em' }}
            >
              Flippy
            </Typography>
          </Box>

          <Avatar
            sx={{
              width: 40,
              height: 40,
              backgroundColor: 'secondary.main',
              fontWeight: 800,
            }}
          >
            В
          </Avatar>
        </Box>
      </Container>
    </Box>
  )
}