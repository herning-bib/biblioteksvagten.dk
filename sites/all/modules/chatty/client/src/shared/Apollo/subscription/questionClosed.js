import gql from 'graphql-tag';

const QUESTION_CLOSED_SUBSCRIPTION = gql`
  subscription QuestionClosedSubscription($questionId: ID!) {
    questionClosed(questionId: $questionId) {
      id
      subject
      authorName
      consultant
      createdAt
      lastHeartbeatAt
      messages {
        id
        text
        sentFrom
        createdAt
      }
    }
  }
`;

export default QUESTION_CLOSED_SUBSCRIPTION;
