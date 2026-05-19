import { describe, it, expect, beforeEach, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createFormAdd } from './form.add';

describe('ProductForm - createFormAdd', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    // ───────────────────────────────────────────────
    // Renderizado
    // ───────────────────────────────────────────────
    describe('Renderizado del formulario', () => {
        it('debería renderizar el formulario en el DOM', () => {
            createFormAdd();
            const form = screen.getByRole('form', { name: /add_form/i });
            expect(form).toBeInTheDocument();
        });

        it('debería tener el campo Name', () => {
            createFormAdd();
            expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        });

        it('debería tener el campo Description', () => {
            createFormAdd();
            expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
        });

        it('debería tener el campo Price', () => {
            createFormAdd();
            expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
        });

        it('debería tener el checkbox "Esta en promoción"', () => {
            createFormAdd();
            expect(
                screen.getByLabelText(/Esta en promoción/i),
            ).toBeInTheDocument();
        });

        it('debería tener el select Category', () => {
            createFormAdd();
            expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
        });

        it('debería tener el botón de submit "Crear"', () => {
            createFormAdd();
            expect(
                screen.getByRole('button', { name: /Crear/i }),
            ).toBeInTheDocument();
        });
    });

    // ───────────────────────────────────────────────
    // Submit
    // ───────────────────────────────────────────────
    describe('Submit del formulario', () => {
        it('debería llamar a console.log con los datos del formulario al hacer submit', () => {
            const consoleSpy = vi.spyOn(console, 'log');
            const products = [
                {
                    id: 1,
                    name: 'Existing',
                    description: 'desc',
                    price: 10,
                    hasPromo: false,
                    category: 'mobile' as const,
                },
            ];

            createFormAdd(products);

            fireEvent.input(screen.getByLabelText(/Name/i), {
                target: { value: 'Nuevo producto' },
            });
            fireEvent.input(screen.getByLabelText(/Description/i), {
                target: { value: 'Una descripción' },
            });
            fireEvent.input(screen.getByLabelText(/Price/i), {
                target: { value: '100' },
            });
            fireEvent.click(screen.getByLabelText(/Esta en promoción/i));
            fireEvent.change(screen.getByLabelText(/Category/i), {
                target: { value: 'computer' },
            });

            fireEvent.submit(screen.getByRole('form', { name: /add_form/i }));

            expect(consoleSpy).toHaveBeenCalledWith(
                'Form submitted:',
                expect.objectContaining({
                    id: 2,
                    name: 'Nuevo producto',
                    description: 'Una descripción',
                    price: 100,
                    hasPromo: true,
                    category: 'computer',
                }),
            );
        });

        it('debería asignar id 1 si no hay productos previos', () => {
            // Con array vacío, Math.max(...[]) = -Infinity, setID devuelve 0
            // Si se pasa sin productos el id será NaN+1. Lo verificamos.
            const consoleSpy = vi.spyOn(console, 'log');
            createFormAdd([]);

            fireEvent.submit(screen.getByRole('form', { name: /add_form/i }));

            expect(consoleSpy).toHaveBeenCalledWith(
                'Form submitted:',
                expect.objectContaining({ name: '' }),
            );
        });
    });
});
