import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'node_modules'] },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
    },
);
