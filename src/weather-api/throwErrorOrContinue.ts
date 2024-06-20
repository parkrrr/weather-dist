import { ExtendedProblemDetail } from "./ExtendedProblemDetail";

export const throwErrorOrContinue = async (resp: Response) => {
    if (resp.status >= 400 && resp.status < 600) {
        const error = await resp.json() as ExtendedProblemDetail;
        if (error.parameterErrors) {
            const parameterErrorString = error.parameterErrors.map(pd => pd.message).join(', ');
            throw Error(parameterErrorString);
        }

        throw Error(error.detail);
    }
};