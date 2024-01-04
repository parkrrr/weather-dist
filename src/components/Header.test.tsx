import { h } from 'preact';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import {describe, expect, test} from '@jest/globals';
import { PressureModel } from '../model/Model';
import { Header } from './Header';

describe('Counter', () => {
  test('should display initial count', () => {
    const now = new Date("2023-12-09T00:55:00+00:00");
    const observation = new PressureModel("2023-12-09T00:54:00+00:00", 101120);

    const { container } = render(<Header latestObservation={observation} now={now} />);
    expect(container.textContent).toMatch('5 minutes ago');
  });
});