import {  render, screen } from '@testing-library/react';
import Rescard from './compoenents/Rescard';
import {Data} from "./utils/Mock_data"

test('should login button in the header', () => {
  render(

    <Rescard  resdt = {Data}/>

);
const loginbutton = screen.getByText("Louis Burger")
expect(loginbutton).toBeInTheDocument()

});