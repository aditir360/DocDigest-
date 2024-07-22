var myGame = new WizardOrpheus('', `You're an expert in the field  text analysis. You're job is to summarize text from documents and then summarize it. Before summarizing (if the user gives you something to summarize), ask user if they want the text summarization to be translated into another language. If yes, ask user for the language. If no, skip this step. Remove any \n that you might say.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

// Using the button and text box to get user input
document.getElementById('submit-button').addEventListener('click', function() {
  let userInput = document.getElementById('user-input').value;
  myGame.message(userInput);

  const conversationLog = document.getElementById('conversation');
  const userMessage = document.createElement('li');
  userMessage.classList.add('user-message');
  userMessage.textContent = userInput;
  conversationLog.appendChild(userMessage);

  document.getElementById('user-input').value = '';
});

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  const conversationLog = document.getElementById('conversation');
  const botMessage = document.createElement('li');
  botMessage.classList.add('bot-message');
  const botAvatar = document.createElement('span');
  botAvatar.classList.add('bot-avatar');
  botMessage.appendChild(botAvatar);
  const botBubble = document.createElement('div');
  botBubble.classList.add('bot-bubble');
  botBubble.textContent = data.message;
  botMessage.appendChild(botBubble);
  conversationLog.appendChild(botMessage);

  document.getElementById('score').innerHTML = data.currentVariables.score.value;
})
