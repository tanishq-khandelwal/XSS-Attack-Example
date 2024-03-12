const userMessages = [];
const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

function renderMessages() {
  let messageItems = '';
  for (const message of userMessages) {
    messageItems += `
      <li class="message-item">
        <div class="message-image">
          <img src="${message.image}" alt="${message.text}">
        </div>
        <p>${message.text}</p>
      </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = document.getElementById('blog-comment');
  const userMessage = userMessageInput.value;

  if (!userMessage || userMessage.trim().length === 0) {
    alert('Please insert a valid message.');
    return;
  }

  userMessages.push({
    text: userMessage,
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });

  userMessageInput.value = '';

  renderMessages();
}

userMessageForm.addEventListener('submit', formSubmitHandler);
