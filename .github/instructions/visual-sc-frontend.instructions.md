---
description: "Usar cuando se implemente, refactorice o revise el frontend de Visual SC (kiosco de pedidos con React + TypeScript + TailwindCSS). Define reglas obligatorias de dominio, UX, accesibilidad y estructura."
name: "Reglas Frontend Visual SC"
applyTo: "src/**/*.{ts,tsx,css}"
---

# Reglas Frontend Visual SC

## Contexto Del Producto

- Esta app es un flujo de pedidos en kiosco de autoservicio para Rodson Coffee.
- Se prioriza rapidez, claridad y baja friccion para usuarios en local.
- Los textos, labels y mensajes visibles para cliente deben estar en espanol, salvo que la tarea pida otro idioma.

## Arquitectura Y Organizacion De Archivos

- Usar organizacion por features dentro de `src/` (components, hooks, services, stores, pages, layouts).
- Mantener componentes presentacionales enfocados en render. Mover logica de negocio y side effects a hooks, stores o services.
- Definir tipos/interfaces explicitos de TypeScript para props y modelos de dominio.
- Preferir archivos colocalizados por feature cuando mejore mantenibilidad (por ejemplo, `types.ts`, `data.ts`, `hooks.ts`).

## Reglas De TypeScript Y Estado

- Mantener compatibilidad con TypeScript estricto; evitar `any` salvo frontera justificada y documentada.
- Modelar precios y totales de forma deterministica; evitar coerciones implicitas.
- En operaciones de carrito/orden, usar actualizaciones puras y no mutar estado previo.
- Proteger acceso indexado potencialmente `undefined` antes de leer o usar spread.

## Reglas De Dominio (Pedidos En Kiosco)

- Preservar logica de precios de personalizaciones como reglas explicitas en codigo.
- Mantener calculos monetarios consistentes en COP y mostrar valores con formato claro.
- Al agregar personalizaciones de producto, incluir siempre:
  1. Logica de impacto en precio.
  2. Feedback visual que haga evidente opcion seleccionada y recargo.
- La confirmacion de orden debe mostrar claramente numero de orden y siguiente paso del cliente.

## UX Y Accesibilidad

- Disenar para uso touch-first: controles faciles de tocar y visualmente obvios.
- Usar HTML semantico y atributos ARIA cuando aplique.
- Garantizar navegacion por teclado y estados de foco visibles.
- Mantener contraste suficiente y no depender solo del color para comunicar estado.

## Reglas De Estilos

- Preferir utilidades de Tailwind y tokens compartidos sobre CSS ad-hoc.
- Remover o reemplazar estilos de arranque de Vite que choquen con el lenguaje visual del kiosco.
- Evitar estilos globales que afecten pantallas no relacionadas.

## Integracion De API Y Datos

- Centralizar llamadas API en modulos de servicios; no acoplar detalles de transporte en componentes.
- Validar y normalizar payloads del backend antes de renderizar.
- Manejar de forma explicita estados de loading, vacio y error en flujos de UI.

## Checklist Obligatorio De Terminado

- El comportamiento de la feature cumple el flujo de kiosco definido en `plan.md`.
- Precios y totales son correctos tras agregar/editar/eliminar items.
- Se cubren basicos de accesibilidad (labels, foco, teclado, contraste).
- El codigo pasa lint/build y respeta convenciones de estructura del proyecto.

## Nivel De Regla

- Estas reglas son obligatorias para el frontend de este repositorio.
- Solo se permite desviacion cuando el usuario lo solicite explicitamente en la tarea.