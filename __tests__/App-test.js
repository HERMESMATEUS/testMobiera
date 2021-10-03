import 'react-native';
import React from 'react';
import mockCamera from '../__mocks__/Camera';
import SecondaryButton from '../src/components/secondaryButton'
import MainButton from '../src/components/mainButton'
import InputComponent from '../src/components/inputComponent'
import ProfileImageComponent from '../src/components/profileImageComponent'
import LogoComponent from '../src/components/logoComponent'
import BaseComponent from '../src/components/baseComponent'
import renderer from 'react-test-renderer';

jest.mock('react-native-camera', () => mockCamera);

it('renders correctly MainButton', () => {
    renderer.create(<MainButton />);
});

it('renders correctly SecondaryButton', () => {
    renderer.create(<SecondaryButton />);
});

it('renders correctly InputComponent', () => {
    renderer.create(<InputComponent />);
});

it('renders correctly ProfileImageComponent', () => {
    renderer.create(<ProfileImageComponent />);
});

it('renders correctly LogoComponent', () => {
    renderer.create(<LogoComponent />);
});

it('renders correctly BaseComponent', () => {
    renderer.create(<BaseComponent />);
});