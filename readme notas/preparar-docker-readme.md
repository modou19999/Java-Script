# paso 1 desde vs code instalar estos pluing

- PostgresSQL
- SQLTools

## paso 2 instalaciones D

- DOCKER
- WLS
- pgAdmin

### paso 3 Usar PowerShell o CMD (recomendado en Windows)

Presiona Win + X → selecciona Windows PowerShell o Símbolo del sistema.
Escribe:

- docker --version
  Si devuelve la versión de Docker, entonces ya puedes usarlo.
  Luego, ejecuta tu comando de PostgreSQL:
- docker run --name postgres-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=mi_db -p 5432:5432 -d postgres

#### paso 4

Verifica que corra:

- docker ps



docker run --name postgres-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=mi_db -p 5432:5432 -d postgres