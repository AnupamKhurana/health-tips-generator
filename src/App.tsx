import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, TextField, Select, MenuItem, FormControl, InputLabel, Alert, List, ListItem, ListItemText } from '@mui/material';
import ViewTips from './ViewTips';

function App() {
  const [userName, setUserName] = useState<string>('');
  const [age, setAge] = useState<number | '' >('');
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState<number | '' >('');
  const [weight, setWeight] = useState<number | '' >('');
  const [activityLevel, setActivityLevel] = useState('Sedentary');
  const [healthGoals, setHealthGoals] = useState('');
  const [tips, setTips] = useState<{ diet: string[]; exercise: string[]; wellness: string[] } | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateTips = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistral-nemo',
          prompt: `Based on the following user data, generate personalized health tips for diet, exercise, and general wellness:

Name: ${userName}
Age: ${age}
Gender: ${gender}
Height: ${height} cm
Weight: ${weight} kg
Activity Level: ${activityLevel}
Health Goals: ${healthGoals}

Please provide the tips in a structured JSON format with keys "diet", "exercise", and "wellness", each containing an array of strings. For example:
{
  "diet": ["Tip 1", "Tip 2"],
  "exercise": ["Tip A", "Tip B"],
  "wellness": ["Tip X", "Tip Y"]
}`,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tips from the model.');
      }

      const data = await response.json();
      
      console.log("Raw Ollama Response:", data.response); // Log raw response to console
      const jsonString = data.response.match(/```json\n([\s\S]*?)\n```/)?.[1];
      if (!jsonString) {
        throw new Error("Could not extract JSON from Ollama response.");
      }
      const parsedTips = JSON.parse(jsonString);
      setTips(parsedTips);
    } catch (err) {
      setError('Error generating tips. Please ensure Ollama is running and the model is available. Also, check the console for more details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    setUserName('');
    setAge('');
    setGender('Male');
    setHeight('');
    setWeight('');
    setActivityLevel('Sedentary');
    setHealthGoals('');
    setTips(null);
  };

  const handleSaveTips = () => {
    if (tips) {
      const data = {
        userName,
        age,
        gender,
        height,
        weight,
        activityLevel,
        healthGoals,
        ...tips,
      };

      fetch(`http://localhost:8000/api/tips`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Tips saved successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error saving tips.');
        });
    }
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Health Tips Generator</Link>
          </Typography>
          <Button color="inherit" component={Link} to="/view">
            View Saved Tips
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={(
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} component="div">
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>Your Stats</Typography>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Your Name"
                      id="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Age"
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value) || '')}
                    />
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select
                        labelId="gender-label"
                        id="gender"
                        value={gender}
                        label="Gender"
                        onChange={(e) => setGender(e.target.value as string)}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Height (cm)"
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value) || '')}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Weight (kg)"
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(parseInt(e.target.value) || '')}
                    />
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="activityLevel-label">Activity Level</InputLabel>
                      <Select
                        labelId="activityLevel-label"
                        id="activityLevel"
                        value={activityLevel}
                        label="Activity Level"
                        onChange={(e) => setActivityLevel(e.target.value as string)}
                      >
                        <MenuItem value="Sedentary">Sedentary</MenuItem>
                        <MenuItem value="Lightly Active">Lightly Active</MenuItem>
                        <MenuItem value="Moderately Active">Moderately Active</MenuItem>
                        <MenuItem value="Very Active">Very Active</MenuItem>
                        <MenuItem value="Extra Active">Extra Active</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Health Goals"
                      id="healthGoals"
                      multiline
                      rows={3}
                      value={healthGoals}
                      onChange={(e) => setHealthGoals(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={generateTips} sx={{ mt: 2 }}>
                      Generate Tips
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} component="div">
                {loading && <Alert severity="info" sx={{ mt: 3 }}>Generating tips...</Alert>}
                {error && <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>}
                {tips && (
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom>Your Personalized Tips</Typography>
                      <Typography variant="h6" component="h3" sx={{ mt: 2 }}>Diet</Typography>
                      <List>
                        {tips.diet.map((tip, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={tip} />
                          </ListItem>
                        ))}
                      </List>
                      <Typography variant="h6" component="h3" sx={{ mt: 2 }}>Exercise</Typography>
                      <List>
                        {tips.exercise.map((tip, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={tip} />
                          </ListItem>
                        ))}
                      </List>
                      <Typography variant="h6" component="h3" sx={{ mt: 2 }}>General Wellness</Typography>
                      <List>
                        {tips.wellness.map((tip, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={tip} />
                          </ListItem>
                        ))}
                      </List>
                      <Button variant="outlined" color="secondary" onClick={handleStartOver} sx={{ mt: 3 }}>
                        Start Over
                      </Button>
                      <Button variant="contained" color="success" onClick={handleSaveTips} sx={{ mt: 3, ml: 2 }}>
                        Save Tips
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            </Grid>
          )} />
          <Route path="/view" element={<ViewTips />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;