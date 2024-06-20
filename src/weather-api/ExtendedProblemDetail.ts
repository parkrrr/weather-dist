import { ProblemDetail } from "./weather-gov-api";

export type ExtendedProblemDetail = ProblemDetail & { parameterErrors?: { message: string; parameter: string; }[]; };