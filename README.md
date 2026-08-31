# Web personal de Kaiz

Página web personal estática: informática, ciberseguridad, habilidades y proyectos.
Publicada en **Cloudflare Pages** en **https://kaiz.pages.dev** (URL oficial).

## Estructura

```
public/
├── index.html      Página principal (todo el contenido está aquí)
├── css/style.css   Estilos (tema claro/oscuro por tokens, CSS puro sin frameworks)
├── js/main.js      Idiomas, temas, paleta de comandos, reproductor y efectos de scroll
├── favicon.svg     Icono de la web
├── robots.txt      Permite indexar todo y apunta al sitemap
├── sitemap.xml     Mapa del sitio para Google
└── _headers        Cabeceras de seguridad (Cloudflare Pages)
```

## Estado

- [x] Repositorio: `Kaiz-2/kaiz-site`
- [x] Publicado en Cloudflare Pages: https://kaiz.pages.dev
- [x] PR de is-a.dev cerrado (se mantiene la URL de Cloudflare como oficial)
- [x] Conmutador de idioma EN/ES en la cabecera (se guarda la elección)
- [x] Tema claro y oscuro coherentes (todos los colores salen de tokens CSS)
- [x] Paleta de comandos con `Ctrl/⌘ + K` (o `/`)
- [ ] Google Search Console verificado

## Atajos de teclado

| Atajo | Acción |
| --- | --- |
| `Ctrl + K` / `⌘ + K` | Abrir o cerrar la paleta de comandos |
| `/` | Abrir la paleta |
| `↑` `↓` | Moverse por los resultados |
| `↵` | Ejecutar el comando seleccionado |
| `Esc` | Cerrar la paleta |

La paleta permite navegar entre secciones, cambiar tema e idioma, copiar el email,
controlar la música y abrir los enlaces externos. Está traducida y la búsqueda
ignora acentos (`musica` encuentra «música»).

## Temas

Los colores viven en `:root` y se redefinen en `[data-theme="light"]`. Cualquier
color nuevo debe salir de un token — en especial `--accent-rgb`, del que derivan
todos los brillos con `rgba(var(--accent-rgb), …)` — para que ambos temas sigan
cuadrando.

## Editar contenido

Todo el texto se edita en `public/index.html`. La URL oficial `https://kaiz.pages.dev`
aparece en: `index.html` (canonical, og:url, JSON-LD, footer), `sitemap.xml` y `robots.txt`.

Después de cada cambio: `git add . && git commit -m "..." && git push`
(Cloudflare Pages se actualiza solo).

## Proyectos

Las dos plantillas enlazan a repositorios públicos:
- https://github.com/Kaiz-2/discord-music-template
- https://github.com/Kaiz-2/discord-security-template

Si tu usuario de GitHub no es `kaiz`, actualiza esas URLs en `public/index.html`.

## Despliegue

Cloudflare Pages conectado al repositorio con:
- Build command: (vacío)
- Output directory: `public`

## Indexación

- Google Search Console: añade `https://kaiz.pages.dev/`, verifica con HTML tag y
  envía el sitemap `https://kaiz.pages.dev/sitemap.xml`.
- Bing Webmaster Tools (opcional): mismo procedimiento.