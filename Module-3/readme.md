# 1. Eliminar la carpeta .git del repo clonado
rm -rf .git

# 2. Inicializar nuevo repo
git init
git add .editorconfig .gitignore package.json package-lock.json tsconfig.json vitest.config.ts eslint.config.ts readme.md
git commit -m "chore: configuración inicial del proyecto"

# 3. Conectar con GitHub y proteger master
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin master
# → En GitHub: Settings > Branches > Add rule > master > require PR + require status checks

# 4. Crear rama de trabajo
git checkout -b feature/examen
git add src/
git commit -m "feat: añadir back, front y tests"
git push origin feature/examen

# 5. Crear la Pull Request en GitHub (no mergear aún)