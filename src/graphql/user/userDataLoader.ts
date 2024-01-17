import DataLoader from 'dataloader';
import { userInterface } from './interface/user.interface';

export const makeUserDataLouder = (
	getUser: (id: string ) => Promise<userInterface[] | userInterface>
) => {
  return new DataLoader(async ids => {
    const urlQuery = ids.join('&id=')
    const users = await getUser("/?id=" + urlQuery)
    if (Array.isArray(users)) {
      return users.filter(user => {
        return ids.find( id => user.id === id)
      })
    }
    return [users]
  })
};
