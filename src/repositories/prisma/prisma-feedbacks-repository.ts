import { FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  create: (data: FeedbackCreateData) => void;
}