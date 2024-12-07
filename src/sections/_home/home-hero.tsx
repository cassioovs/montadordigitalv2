import { useRef } from 'react';

// IMPORTAÇÕES DO MUI

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// IMPORTAÇÕES DE ROTAS

import { paths } from 'src/routes/paths';

// JIVO CHAT


// IMPORTAÇÕES DEMAIS ITENS

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

import { bgGradient } from 'src/theme/css';
import { HEADER } from 'src/layouts/config-layout';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// FUNÇÃO HOME PAGE

export default function HomeHero() {
  const theme = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  const mdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid xs={12} md={5}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
                Contrate <br /> o serviço de um
                <Box component="span" sx={{ color: 'primary.main', textAlign: 'left' }}>
                  {` Montador Digital`}
                </Box>
              </Typography>

              <Typography  variant='body1' sx={{ color: 'text.secondary' }}>
                Transforme seu espaço com serviços rápidos, seguros e com garantia 🤩
              </Typography>

              <Button
                color="success"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:calendar-heat-map" />}
                target="_blank"
                rel="noopener"
               href={paths.whatsApp}
              >
                Horários
              </Button>

              <Stack spacing={3}>
              <Typography variant="subtitle2" sx={{ color: 'info.main', fontWeight: 'bold'}}>
    DISPONIBILIDADE
  </Typography>
  <Typography variant="overline" sx={{color: 'warning.main', fontWeight: 'bold' }}>
    PRESENCIAL
  </Typography>

  <Typography  variant='body1' sx={{ color: 'text.secondary' }}>
                Campinas, Valinhos e região, Vinhedo, Indaiatuba, Paulínia, Sumaré, Jaguariúna
</Typography>
<Typography variant="overline" sx={{ color: 'warning.main', fontWeight: 'bold'}}>
    REMOTO
  </Typography>
  <Typography  variant='body1' sx={{ color: 'text.secondary' }}>
  Indicamos um montador em sua região, atendimento remoto para todo o Brasil
</Typography>

                <Stack direction="row" spacing={2.5}>
                  {['js', 'ts', 'figma', 'nextjs', 'vite'].map((icon) => (
                    <Box
                      key={icon}
                      component="img"
                      alt={icon}
                      src={`/assets/icons/platforms/ic_${icon}.svg`}
                      sx={{ width: 24, height: 24 }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {mdUp && (
        <Box
          sx={{
            maxWidth: 1280,
            position: 'absolute',
            bottom: { md: '20%', lg: 40 },
            right: { md: -110, xl: 0 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="home hero"
            src="/assets/images/home/home_hero.png"
          />
        </Box>
      )}
    </Box>
  );
}
