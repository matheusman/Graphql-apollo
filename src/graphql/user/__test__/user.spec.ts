import request from 'supertest'
import { userInterface } from '../interface/user.interface';
import { server } from '../../..';

describe('should render user in the window', () => {

  it('should to be in the document', async () => {
    let testServer = server
		let users = await testServer.executeOperation({
			query: `
      query getUsers {
        users {
          id
        }
      }
      `,
    });
    expect(users).toBeDefined();
    expect(users.data).toBeDefined()
    expect(users.data?.users).toBeDefined()
    expect(users.data?.users[0]).toHaveProperty('id')
  });

  it('should call user', async () => {
		let testServer = server;
		let user = await testServer.executeOperation({
			query: `
      query getUser {
        user(id: "602") {
          id
        }
      }
      `,
		});
    expect(user.data?.user).toBeDefined()
    expect(user.data?.user).toHaveProperty('id');
	});
});
