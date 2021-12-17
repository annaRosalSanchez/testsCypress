export const doRequest = (
    path,
    method,
    failStatusAllowed,
    headers = {},
    input = {}
) => {
    return cy.request({
        url: `https://jsonplaceholder.typicode.com/${path}`,
        method: method,
        failOnStatusCode: failStatusAllowed,
        headers: headers,
        body: input,
    });
};
