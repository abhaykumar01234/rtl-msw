import { rest } from "msw";
import { TestAxiosMock } from "../mocks/TestAxiosMock";

export const TestAxiosHandler = rest.get(
  "https://jsonplaceholder.typicode.com/posts/1",
  (req, res, ctx) => res(ctx.status(200), ctx.json(TestAxiosMock))
);
