import { render } from '@testing-library/react-native'
import Splash from '../src/screens/splash/index'

describe("<Splash />", () => {
    it('has 1 child', () => {
        const { getAllByText, getByTestId } = render(<Splash />);
        expect(getAllByText('Teste com jest usando o github Actions').length).toBe(1)
        expect(getByTestId('title').children[0]).toBe('Teste com jest usando o github Actions')
    });
});