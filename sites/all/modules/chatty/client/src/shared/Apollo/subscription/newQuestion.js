import gql from 'graphql-tag';

const NEW_QUESTION = gql`
  subscription NewQuestionSubscription($statusType: String!) {
    newQuestion(statusType: $statusType) {
      id
      subject
      authorName
      createdAt
    }
  }
`;

export default NEW_QUESTION;