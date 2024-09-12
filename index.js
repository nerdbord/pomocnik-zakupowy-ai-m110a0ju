const express = require('express');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/recommend', async (req, res) => {
  const { userInput } = req.body;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: userInput,
      max_tokens: 150,
    });
    res.json({ recommendation: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});