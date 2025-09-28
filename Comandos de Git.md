🚀 Flujo básico con Git (dev → main) \# 1. Clonar repositorio git clone
URL_DEL_REPO cd NOMBRE_DEL_REPO

# 2. Crear/entrar en rama dev

git checkout -b dev \# (si no existe) git checkout dev \# (si ya existe)

# 3. Hacer cambios, agregar y commitear

git add . git commit -m "mensaje en dev"

# 4. Subir cambios a dev

git push origin dev

# 5. Pasar cambios a main

git checkout main

# Traer actualizaciones antes de fusionar

git pull origin main

# Fusionar dev en main

git merge dev

# Subir cambios a main

git push origin main

Primero asegúrate de traer todas las ramas: git fetch origin

Ver todas tus ramas disponibles git branch -a
