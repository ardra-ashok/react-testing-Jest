import { render, screen, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserList from './userList'

function renderComponent() {
 const users = [
   { name: 'jane', email: 'jane@test.com' },
   { name: 'test', email: 'test@test.com' },
 ]

 render(<UserList users={users} />)

 return { users };
}
test('render one row per user', () => {
  
 renderComponent();

 const rows = within(screen.getByTestId('users')).getAllByRole('row')

  expect(rows).toHaveLength(2)
})

test('render the email and name of each user', () => {

 const { users } = renderComponent();
 
 // screen.logTestingPlaygroundURL();

 for (let user of users) {
   const name = screen.getByText(user.name)
   const email = screen.getByText(user.email)
  // const name = screen.getAllByRole('cell', { name: user.name });
  // const email = screen.getAllByRole('cell', { email: user.email });
  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
 }
})
