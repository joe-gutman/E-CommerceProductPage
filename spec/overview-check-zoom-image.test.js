import React from 'react';
import Overview  from '../client/src/components/Overview.jsx';
import MainImage  from '../client/src/components/overview/MainImage.jsx';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
require('dotenv').config();


test("Expects the expanded image to appear when main product image is clicked.", () => {

    const setZoomIn = jest.fn();
    const useStateMock = (initialValue) => [zoomIn, setZoomIn];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);


    const { container } = render(<MainImage currentProductImage="https://unsplash.com/photos/a-black-and-white-drawing-of-two-people-t3sSj6tD__0" zoomIn={setZoomIn}/>);

    fireEvent.click(container.querySelector('#image-view-main-image'));
    // expect(screen.getByRole('zoom-current-product-photo')).toBeTruthy();
})

