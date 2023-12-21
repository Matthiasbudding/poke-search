import {cleanup, fireEvent, render} from '@testing-library/react';
import FindPokemon from `../components/FindPokemon`;

afterEach(cleanup);

xdescribe('FindPokemon', () => {
    it('renders the correct content', () => {
        const {getByText} = render(<FindPokemon />);
        expect(getByText('Find Your Pokemon')).toBeInTheDocument();
    });
    });
