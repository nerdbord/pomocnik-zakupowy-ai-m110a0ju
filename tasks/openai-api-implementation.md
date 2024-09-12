# 🤖 Zaimplementujcie OpenAI API

Zaimplementuj API GPT, które będzie analizować potrzeby użytkownika na podstawie wywiadu i rekomendować produkty.

```javascript
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getRecommendations(userInput) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: userInput,
    max_tokens: 100,
  });
  return response.data.choices[0].text;
}

module.exports = { getRecommendations };
```