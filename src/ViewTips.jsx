import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Card, CardContent, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ViewTips() {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/tips')
            .then(response => response.json())
            .then(data => setTips(data.data))
            .catch(error => console.error('Error fetching tips:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/api/tips/${id}`, { method: 'DELETE' })
            .then(() => setTips(tips.filter(tip => tip.id !== id)))
            .catch(error => console.error('Error deleting tip:', error));
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Stored Health Tips
            </Typography>
            <List>
                {tips.map(tip => (
                    <Card key={tip.id} sx={{ mb: 2 }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={10}>
                                    <Typography variant="body1"><strong>Name:</strong> {tip.userName}</Typography>
                                    <Typography variant="body1"><strong>Age:</strong> {tip.age}</Typography>
                                    <Typography variant="body1"><strong>Gender:</strong> {tip.gender}</Typography>
                                    <Typography variant="body1"><strong>Height:</strong> {tip.height}</Typography>
                                    <Typography variant="body1"><strong>Weight:</strong> {tip.weight}</Typography>
                                    <Typography variant="body1"><strong>Activity Level:</strong> {tip.activityLevel}</Typography>
                                    <Typography variant="body1"><strong>Health Goals:</strong> {tip.healthGoals}</Typography>
                                    {tip.diet && typeof tip.diet === 'string' && (() => {
                                        try {
                                            const parsedDiet = JSON.parse(tip.diet);
                                            return (
                                                <div>
                                                    <Typography variant="h6" sx={{ mt: 2 }}>Diet:</Typography>
                                                    <List dense>
                                                        {parsedDiet.map((item, i) => (
                                                            <ListItem key={i}>
                                                                <ListItemText primary={item} />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </div>
                                            );
                                        } catch (e) {
                                            console.error("Error parsing diet JSON:", e);
                                            return null;
                                        }
                                    })()}
                                    {tip.exercise && typeof tip.exercise === 'string' && (() => {
                                        try {
                                            const parsedExercise = JSON.parse(tip.exercise);
                                            return (
                                                <div>
                                                    <Typography variant="h6" sx={{ mt: 2 }}>Exercise:</Typography>
                                                    <List dense>
                                                        {parsedExercise.map((item, i) => (
                                                            <ListItem key={i}>
                                                                <ListItemText primary={item} />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </div>
                                            );
                                        } catch (e) {
                                            console.error("Error parsing exercise JSON:", e);
                                            return null;
                                        }
                                    })()}
                                    {tip.wellness && typeof tip.wellness === 'string' && (() => {
                                        try {
                                            const parsedWellness = JSON.parse(tip.wellness);
                                            return (
                                                <div>
                                                    <Typography variant="h6" sx={{ mt: 2 }}>Wellness:</Typography>
                                                    <List dense>
                                                        {parsedWellness.map((item, i) => (
                                                            <ListItem key={i}>
                                                                <ListItemText primary={item} />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </div>
                                            );
                                        } catch (e) {
                                            console.error("Error parsing wellness JSON:", e);
                                            return null;
                                        }
                                    })()}
                                </Grid>
                                <Grid item xs={2} sx={{ textAlign: 'right' }}>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleDelete(tip.id)}
                                    >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </List>
        </Container>
    );
}

export default ViewTips;