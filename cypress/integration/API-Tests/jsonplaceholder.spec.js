import {doRequest} from "./comon/request";

describe('Testing functional api jsonplaceholder', () => {

    context('GET method endpoints', () => {
        const method = 'GET';
        it('Getting a resource that exists returns resource data', () => {
            const path ='posts/1';
            doRequest(path,method,false)
                .then((response) => {
                    expect(response).property('status').to.eq(200);
                    expect(response.body.id).to.eq(1);
                });
        });
        it('Listing all resources returns an array of 100 elements', () => {
            const path ='posts';
            doRequest(path,method,false)
                .then((response) => {
                    expect(response).property('status').to.eq(200);
                    expect(response.body).to.have.length(100);
                });
        });
    });
    context('POST method endpoints', () => {
        const method = 'POST';
        it('Creating a resource happy path', () => {
            const path = 'posts'
            const input = {
                "title": "foo",
                "body": "bar",
                "userId": 1
            };
            const headers = {
                'Content-type': 'application/json; charset=UTF-8',
            };

            doRequest(path, method,false, headers, input)
                .then((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body.id).to.eq(101);
                });
        });
    });
    context('PATCH method endpoints', () => {
        const method = 'PATCH';
        const path = 'posts/1';
        it('Patching an existing field returns the response updated', () => {
            const input = {
                "title": "My new title"
            };
            const headers = {
                'Content-type': 'application/json; charset=UTF-8',
            };

            doRequest(path, method, false, headers, input)
                .then((response) => {
                    expect(response).property('status').to.eq(200);
                    expect(response.body.title).to.eq("My new title");
                });
        });
        it('Patching a new field returns the response updated', () => {
            const input = {
                "newDataField": "My new data field"
            };
            const headers = {
                'Content-type': 'application/json; charset=UTF-8',
            };

            doRequest(path, method, false, headers, input)
                .then((response) => {
                    expect(response).property('status').to.eq(200);
                    expect(response.body.newDataField).to.eq("My new data field");
                });
        });
    });
});
