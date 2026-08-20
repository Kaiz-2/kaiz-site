# Web personal de Kaiz

Página web personal estática: informática, ciberseguridad, habilidades y proyectos.
Publicada en **Cloudflare Pages** en **https://kaiz.pages.dev** (URL oficial).

## Estructura

```
public/
├── index.html      Página principal (todo el contenido está aquí)
├── css/style.css   Estilos (tema oscuro editorial, CSS puro sin frameworks)
├── js/main.js      Efectos: menú móvil, animaciones al hacer scroll, botón volver arriba
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
- [ ] Google Search Console verificado

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