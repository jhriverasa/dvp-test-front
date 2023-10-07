Se impementa el Front haciendo uso del Framework NextJS

Se usan las siguientes características:
- Typescript
- ESLint
- Tailwind CSS
- APP Router


## Paso a paso
Para iniciar el servidor sencillamente debes instalar las dependencias antes, puedes usar cualquier package manager, si usas npm el comando podría lucir así:

```bash
npm install
npm run dev
```

### Dependencias (Más importantes)

- Axios (https://www.npmjs.com/package/axios)
- react-hook-form (https://www.react-hook-form.com/)
- Material UI (https://mui.com)
- Font Awesome (https://fontawesome.com/docs/web/use-with/react/)
- React Toastify (https://www.npmjs.com/package/react-toastify)
- Material Ui x-Charts (https://mui.com/x/react-charts/)

## Features

- Crear una aplicación que incluya un campo de entrada texto y un botón, para que se pueda capturar el usuario y recuperar la información utilizando el API anteriormente indicado. ✓

- Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario ('user.login') y el id ('user.id') de cada registro. ✓

- Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad 'user.login' como parámetro. ✓

- Crear un componente independiente en el que se lea el parámetro de la URL, y a continuación, obtenga los datos de dicho usuario mediante la siguiente API: https://api.github.com/users/YOUR_NAME ✓

- Incluir la imagen del usuario ('avatar_url') y alguna otra información (de su elección) en el componente. ✓

- Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la palabra “doublevpartners”. ✓

- Integrar cualquier librería de gráficos que pueda encontrar y crear un gráfico de barras simple para mostrar el número de seguidores de los 10 primeros usuarios. ✘ 

PostData: El feature no queda completo por que para realizar una petición optimizada se requiere usar el GraphQL API de Github, que es perfecto para consultas anidadas, ya que el endpoint de search/users no tiene un Schema de retorno que contenga el número de followers, luego si se quisiese hacer con el REST API propuesto se requeririan de varias peticiones subsequentes (una para cada usuario para buscar su numero de seguidores), lo cual por supuesto va en contra del rendimiento de la aplicación. A pesar de lo mencionado va incluido la libreria MUI-Charts y un styled Component Barchart, para la implementación. 

- Incluir un componente para mostrar mensajes de error en toda la aplicación. ✓

- CSS: Utilizar algún framework (a elección) para escribir los archivos CSS, tomando en cuenta la compatibilidad con distintos navegadores. ✓

- Iconos: Utilizar una librería para el manejo de iconos donde lo considere necesario (se recomienda el uso de Font Awesome o Glyphicons.) ✓
