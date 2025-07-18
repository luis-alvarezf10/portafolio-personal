import { Box, Card, Typography, Grid, useTheme } from '@mui/material';
import { FaStar, FaRegStar } from 'react-icons/fa';

function SkillStars({ skills }) {
  const theme = useTheme();

  return (
    <Grid container spacing={2} justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
          className="skill-card"
          sx={{
            bgcolor: '#1e1e1e',
            padding: 2,
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100px',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <span className="skill-icon">{skill.icon}</span>
              <Typography variant="h6" color="white">
                {skill.name}
              </Typography>
            </Box>
            <Box display="flex">
              {Array.from({ length: 5 }, (_, i) =>
                i < skill.level ? (
                  <FaStar key={i} color="#FFD700" />
                ) : (
                  <FaRegStar key={i} color="#555" />
                )
              )}
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SkillStars;
