import SearchContainer from './SearchContainer';
import { MemoryRouter } from 'react-router';
import Router from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useLocation: jest.fn(),
}));

describe('Search testing', () => {
  jest.spyOn(Router, 'useLocation').mockReturnValue({ search: '' });
  test('renders Search component', () => {
    const TEST_VALUE = 'test';
    jest.spyOn(Router, 'useParams').mockReturnValue({ searchValue: TEST_VALUE });
    render(<SearchContainer />);
    // screen.debug();

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('type to search...')).toBeInTheDocument();
    expect(screen.getByDisplayValue(TEST_VALUE)).toBeInTheDocument();
  });

  test('test user types text and submits', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ searchValue: '' });
    render(
      <MemoryRouter>
        <SearchContainer />
      </MemoryRouter>
    );
    await userEvent.type(screen.getByRole('textbox'), 'XXX');
    await userEvent.click(screen.getByRole('button'));

    // screen.debug();
    expect(screen.getByDisplayValue('XXX')).toBeInTheDocument();
  });
});
