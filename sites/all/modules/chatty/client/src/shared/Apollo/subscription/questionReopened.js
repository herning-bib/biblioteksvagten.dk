import gql from 'graphql-tag';

const QUESTION_REOPENED_SUBSCRIPTION = gql`
  subscription QuestionReopenedSubscription($questionId: ID) {
    questionReopened(questionId: $questionId) {
      id
      status
      consultant
      subject
      authorName
      createdAt
    }
  }
`;

export default QUESTION_REOPENED_SUBSCRIPTION;
