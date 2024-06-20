import { ExtendedProblemDetail } from "./ExtendedProblemDetail";

/**
 * Throws an error or continues based on the response status.
 * If the response status is between 400 and 599 (inclusive), an error is thrown.
 * Otherwise, the function continues without throwing an error.
 * @param response - The response object.
 * @throws {Error} - If the response status is an error status code.
 */
export const throwErrorOrContinue = async (response: Response) => {
    if (response.status >= 400 && response.status < 600) {
        const error = await response.json() as ExtendedProblemDetail;
        if (error.parameterErrors) {
            const parameterErrorString = error.parameterErrors.map(pd => pd.message).join(', ');
            throw Error(parameterErrorString);
        }

        throw Error(error.detail);
    }
};