import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL() // get playground test
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Natal',
      slug: 'natal',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Mossoró',
      slug: 'mossoro',
      location: {
        latitude: 2,
        longitude: 1
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getAllByTitle(/natal/i)).toBeInTheDocument()
    expect(screen.getAllByTitle(/mossoro/i)).toBeInTheDocument()
  })
})
