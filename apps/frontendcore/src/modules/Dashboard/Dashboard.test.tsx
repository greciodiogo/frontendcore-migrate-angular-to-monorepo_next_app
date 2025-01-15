import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils-test';

import { Dashboard } from '.';

describe('apps', () => {
  describe('frontendcore', () => {
    describe('Dashboard', () => {
      it('should render home page when no props are present', () => {
        renderWithTheme(<Dashboard />);

        expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
      });
    });
  });
});
