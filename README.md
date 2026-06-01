# paumarmi — Portfolio Web

## Archivos del proyecto

```
paumarmi-web/
├── index.html       → página principal
├── style.css        → estilos (tema claro/oscuro)
├── main.js          → interactividad (tema, nav, animaciones)
├── cv_paumarmi.pdf  → tu CV (añádelo tú)
└── imágenes         → ver lista abajo
```

## Imágenes que tienes que añadir

Pon estos archivos en la misma carpeta que `index.html`:

| Archivo                         | Qué es                              |
|---------------------------------|--------------------------------------|
| `imagen_perfil.jpg`             | Tu foto de perfil (sección "Sobre mí") |
| `imagen_proyecto_robust_crm.png`   | Screenshot del CRM de Robust Data   |
| `imagen_proyecto_facturacion.png`  | Screenshot del sistema de facturación |
| `imagen_proyecto_ia_facturas.png`  | Screenshot de ia-facturas           |
| `imagen_proyecto_zrun.png`         | Screenshot / GIF del juego ZRun     |
| `imagen_proyecto_sintesi_smx.png`  | Screenshot del proyecto de SMX      |
| `cv_paumarmi.pdf`               | Tu CV en PDF para descarga           |

Si no tienes una imagen, no pasa nada — la web la oculta automáticamente.

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub llamado `paumarmi.github.io`
   (o el que prefieras, por ejemplo `portfolio`)

2. Sube todos los archivos:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git remote add origin https://github.com/PMarmi/paumarmi.github.io.git
   git push -u origin main
   ```

3. Ve a Settings → Pages → Source: `main` branch → Save

4. En unos minutos estará en `https://pmarmi.github.io/paumarmi.github.io/`
   (o en `https://pmarmi.github.io` si el repo se llama `pmarmi.github.io`)

## Personalizar

- **Email de contacto**: busca `pau@paumarmi.dev` en `index.html` y cámbialo por el tuyo
- **Año del footer**: busca `2025` en `index.html`
- **Añadir más proyectos**: copia un bloque `<article class="project-card">` en la sección proyectos
- **Colores**: edita las variables `--accent` en `style.css` (líneas 13-14 en dark, 30-31 en light)
