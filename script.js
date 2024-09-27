// Placeholder for frontend logic
const app = {
    init: function() {
        this.chatContainer = document.getElementById('messages');
        this.userInput = document.getElementById('user-response');
        this.submitBtn = document.getElementById('submit-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.finishBtn = document.getElementById('finish-btn');

        this.submitBtn.addEventListener('click', this.handleSubmit.bind(this));
        this.prevBtn.addEventListener('click', this.handlePrev.bind(this));
        this.nextBtn.addEventListener('click', this.handleNext.bind(this));
        this.finishBtn.addEventListener('click', this.handleFinish.bind(this));

        this.currentQuestion = 0;
        this.questions = []; // This will be populated by the backend
        this.answers = [];

        this.fetchQuestion();
    },

    fetchQuestion: function() {
        // TODO: Implement API call to fetch question
        // For now, we'll use a placeholder question
        this.displayMessage("What is your age?", 'bot');
    },

    displayMessage: function(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add(sender);
        this.chatContainer.appendChild(messageElement);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    },

    handleSubmit: function() {
        const userResponse = this.userInput.value.trim();
        if (userResponse) {
            this.displayMessage(userResponse, 'user');
            this.answers.push(userResponse);
            this.userInput.value = '';
            this.nextBtn.disabled = false;
            // TODO: Send answer to backend
            // TODO: Fetch next question
        }
    },

    handlePrev: function() {
        // TODO: Implement previous question logic
    },

    handleNext: function() {
        // TODO: Implement next question logic
        this.fetchQuestion();
    },

    handleFinish: function() {
        // TODO: Implement finish questionnaire logic
        console.log("Questionnaire finished");
        // TODO: Generate and download PDF
    }
};

document.addEventListener('DOMContentLoaded', function() {
    app.init();
});