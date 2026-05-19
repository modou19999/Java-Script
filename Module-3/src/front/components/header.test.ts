import { describe, it, expect, beforeEach, vi } from 'vitest';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createHeader } from './header';

// Mock de base.js: simula render insertando el HTML y devolviendo el primer hijo
vi.mock('./base.js', () => ({
    render: (selector: string, position: InsertPosition, template: string) => {
        const container = document.querySelector(selector);
        container?.insertAdjacentHTML(position, template);
        return container?.firstElementChild ?? null;
    },
}));

describe('Header component', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        createHeader();
    });

    // ───────────────────────────────────────────────
    // Renderizado básico
    // ───────────────────────────────────────────────
    describe('Renderizado', () => {
        it('debería renderizar el logo con su alt text', () => {
            const logo = screen.getByAltText('Logo de la empresa');
            expect(logo).toBeInTheDocument();
        });

        it('debería renderizar el título "Productos"', () => {
            const title = screen.getByRole('heading', { name: /productos/i });
            expect(title).toBeInTheDocument();
        });

        it('debería renderizar el botón "Add"', () => {
            const button = screen.getByRole('button', { name: /add/i });
            expect(button).toBeInTheDocument();
        });
    });

    // ───────────────────────────────────────────────
    // Atributos del botón
    // ───────────────────────────────────────────────
    describe('Atributos del botón Add', () => {
        it('el botón debería tener aria-expanded="false"', () => {
            const button = screen.getByRole('button', { name: /add/i });
            expect(button).toHaveAttribute('aria-expanded', 'false');
        });

        it('el botón debería tener aria-controls="add"', () => {
            const button = screen.getByRole('button', { name: /add/i });
            expect(button).toHaveAttribute('aria-controls', 'add');
        });
    });

    // ───────────────────────────────────────────────
    // Elemento details / summary
    // ───────────────────────────────────────────────
    describe('Details / Summary', () => {
        it('debería existir el summary con texto "Add"', () => {
            const summary = screen.getByText('Add', { selector: 'summary' });
            expect(summary).toBeInTheDocument();
        });
    });
});
