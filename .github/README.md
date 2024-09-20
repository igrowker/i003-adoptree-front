[![Deploy to Vercel](https://github.com/igrowker/i003-adoptree-front/actions/workflows/deploy.yml/badge.svg)](https://github.com/igrowker/i003-adoptree-front/actions/workflows/deploy.yml)
[![Build](https://github.com/igrowker/i003-adoptree-front/actions/workflows/buildonpush.yml/badge.svg)](https://github.com/igrowker/i003-adoptree-front/actions/workflows/buildonpush.yml)
[![Lint](https://github.com/igrowker/i003-adoptree-front/actions/workflows/lint.yml/badge.svg)](https://github.com/igrowker/i003-adoptree-front/actions/workflows/lint.yml)
[![Build and Deploy to Dev](https://github.com/igrowker/i003-adoptree-front/actions/workflows/build-deploy-dev.yml/badge.svg)](https://github.com/igrowker/i003-adoptree-front/actions/workflows/build-deploy-dev.yml)

# Pipeline de CI para Build y Lint

## Descripción

Esta pipeline de integración continua (CI) está diseñada para verificar el estado de compilación y aplicar reglas de linting al código del repositorio. El objetivo es garantizar que el código esté en buen estado antes de ser fusionado o desplegado en otros entornos.

## Ejecución

La ejecución de la pipeline de `Build` de CI se realiza automáticamente cada vez que se realiza un `Push` en el repositorio. Si se detecta un error en la compilación o en la verificación de la sintaxis, se creará un issue en el repositorio para que se puedan revisar y solucionar los problemas.

La ejecución de la pipeline de `Lint` de CI se realiza automáticamente cada vez que se realiza un `Push` en el repositorio. Si se detecta un error en la verificación de la sintaxis, se creará un issue en el repositorio para que se puedan revisar y solucionar los problemas.

# Pipeline de CI/CD para Deploy de desarrollo

## Descripción

Esta pipeline de integración continua (CI) está diseñada para desplegar el código del repositorio en un entorno de producción y en un entorno de desarrollo. El objetivo es poder ver el resultado de los cambios antes de que se fusionen en el repositorio principal y su publicación en el entorno de producción.

## Ejecución

La ejecución de la pipeline de `Build and Deploy to Dev` de CI/CD se realiza automáticamente cada vez que se realiza una `Pull Request` en las ramas `main` o `develop`. Si se detecta un error en la despliegue, se creará un issue y un comentario en el repositorio para que se puedan revisar y solucionar los problemas. Además, si todo sale bien, se creará un comentario en el Pull Request para informar la `Url` del entorno de desarrollo.

La ejecución de la pipeline de `Deploy to Dev` de CI/CD se realiza automáticamente cada vez que se realiza una `Merge` en las ramas `develop`. Si se detecta un error en la despliegue, se creará un issue para que se puedan revisar y solucionar los problemas.

# Pipeline de CI para Deploy del Production

## Descripción

Esta pipeline `Deploy to Vercel` es la encargada de desplegar el código del repositorio en el entorno de producción en Vercel.

## Ejecución

La ejecución de la pipeline de `Deploy to Vercel` de CI se realiza automáticamente cada vez que se realiza una `Push` o `Merge` a la rama `main`. Si se detecta un error en la despliegue, se creará un issue para que se puedan revisar y solucionar los problemas.
