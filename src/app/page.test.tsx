import {render, screen, fireEvent, within, getByRole} from '@testing-library/react'
import Home from './page'

describe('The functionality of home-page',() => {
     test('Render header with correct pageTitle',()=> {
        render(<Home/>)
        const heading = screen.getByRole('heading', {
            level: 1,
            name: /casio/i
        })
        expect(heading).toBeInTheDocument()
     })
})

     test('Display screen show default input and result 0', ()=> {
        render(<Home/>)
        const displayScreen = screen.queryByTestId('displayscreen')
        expect (displayScreen).toBeInTheDocument();
        expect(within(displayScreen!).queryByRole('heading', {
            level: 2
            
        })).not.toHaveTextContent(/Error|[0-9]/);
        
     })


     // Integration Test 

  test('updates input when digit and operator buttons are clicked', () => {
    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    expect(screen.getByText('3+2')).toBeInTheDocument();
  });

  test('evaluates expression and updates result', () => {
    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '*' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    const result = screen.getByRole('heading', {
        level: 2,
    });
    expect(result).toHaveTextContent('20');
  });

  test('clears input and result when clear is clicked', () => {
    render(<Home />);
    const button7 = screen.getByRole('button', {name: '7'})
    expect(button7).toBeInTheDocument()
    fireEvent.click(button7)
    
     const displayScreen = screen.getByTestId('displayscreen')
       const result = within(displayScreen).getByRole('heading', {
        level: 3

     })
        expect(result).toBeInTheDocument()

      const buttonClear = screen.getByRole('button', {name: 'clear'}) 
      expect(buttonClear).toBeInTheDocument() 
    
       fireEvent.click(buttonClear)

       const displayScreenr = screen.getByTestId('displayscreen')
       expect(displayScreenr).toBeInTheDocument()
       const resultb = screen.getByRole('heading',{
        level: 3
       })
       expect (resultb).toBeInTheDocument()
       expect(resultb.textContent).toBe('0')

  });

  test('removes last character when BackSpace is clicked', () => {
    render(<Home />);
    const button9 = screen.getByRole('button', { name: '9' }); 
    const button8 = screen.getByRole('button', { name: '8' }); 
    const button7 = screen.getByRole('button', { name: '7' }); 
    const buttonBackSpace = screen.getByRole('button', {
        name: /BackSpace/i
      })

     expect(button9).toBeInTheDocument();
     expect(button8).toBeInTheDocument();
     expect(button7).toBeInTheDocument();
     expect(buttonBackSpace).toBeInTheDocument();

     fireEvent.click(button9)
     fireEvent.click(button8)
     fireEvent.click(button7)
     fireEvent.click(buttonBackSpace)
    //  
    

     const displayScreen = screen.getByTestId('displayscreen')
     expect (displayScreen).toBeInTheDocument()

     const result = within(displayScreen).getByRole('heading', {
        level: 3

     })
        expect(result).toBeInTheDocument()
        expect(result.textContent).toBe('98')

   });

  