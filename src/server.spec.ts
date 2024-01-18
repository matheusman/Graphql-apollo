import { gql } from 'apollo-server';
import { server } from '../src';

describe('should server its be defined', () => {
	it('should execute query is empty', async () => {
		const testing = await server.executeOperation({
			query: `query isEmpty {
        _isEmpty
      }`,
		});
    expect(testing).toBeDefined()
    expect(testing.data?._isEmpty).toBeTruthy()
  });

  it('shoud server mutation is empty and defined', async () => {
    const testing = await server.executeOperation({
			query: `mutation isEmpty {
        _isEmpty
      }`,
		});
		expect(testing).toBeDefined();
		expect(testing.data?._isEmpty).toBeTruthy();
  })

  it('match snapshot', async () => {
    const query = await server.executeOperation({
			query: `query isEmpty {
        _isEmpty
      }`,
		});
    const mutation = await server.executeOperation({
			query: `mutation isEmpty {
        _isEmpty
      }`,
		});
    expect({ query: query, mutation: mutation}).toMatchSnapshot()
  })
});
