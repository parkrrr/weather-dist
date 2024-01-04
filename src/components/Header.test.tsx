import { h } from 'preact';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import { describe, expect, test } from '@jest/globals';
import { PressureModel } from '../model/Model';
import { Header } from './Header';

describe('Relative time string', () => {
  test('1 minute difference shows 1 minute', () => {
    const now = new Date("2023-12-09T00:55:00+00:00");
    const observation = new PressureModel("2023-12-09T00:54:00+00:00", 101120);

    const { container } = render(<Header latestObservation={observation} now={now} />);
    expect(container.textContent).toMatch("29.86 inHg as of 1 minute ago");
  });

  test('1 hour difference shows 1 hour', () => {
    const now = new Date("2023-12-09T01:55:00+00:00");
    const observation = new PressureModel("2023-12-09T00:55:00+00:00", 101120);

    const { container } = render(<Header latestObservation={observation} now={now} />);
    expect(container.textContent).toMatch("29.86 inHg as of 1 hour ago");
  });

  test('1 day difference shows yesterday', () => {
    const now = new Date("2023-12-09T00:55:00+00:00");
    const observation = new PressureModel("2023-12-08T00:55:00+00:00", 101120);

    const { container } = render(<Header latestObservation={observation} now={now} />);
    expect(container.textContent).toMatch("29.86 inHg as of yesterday");
  });
});